function updateTable() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("data");
  var resultSheet = ss.getSheetByName("result");

  // Очищаем лист 'result'
  resultSheet.clear();

  // Получаем все данные с листа 'data'
  var dataRange = dataSheet.getDataRange();
  var data = dataRange.getValues();

  // Извлекаем данные: первая колонка — это даты
  var dates = data.map(function(row) { return row[0]; }).filter(Boolean);

  // Сортируем даты в обратном порядке (от самой свежей к самой старой)
  dates = Array.from(new Set(dates)).sort(function(a, b) { return new Date(b) - new Date(a); });

  // Оставляем только первые 6 дат (нужно закомитить, если нужны все даты)
  dates = dates.slice(0, 7);

  // Заполняем первую строку листа датами, начиная с A1
  for (var i = 0; i < dates.length; i++) {
    resultSheet.getRange(1, i + 1).setValue(dates[i]);  // Начинаем со столбца B 
  }

  // Записываем метрики в столбец A
  resultSheet.getRange(2, 1).setValue("cust_created_count");
  resultSheet.getRange(3, 1).setValue("upsold_logos");

  // Проходим по всем датам и заполняем значения для каждой метрики
  for (var i = 0; i < dates.length; i++) {
    var date = dates[i];

    // Находим индекс строки с соответствующей датой
    for (var j = 0; j < data.length; j++) {
      if (data[j][0] && new Date(data[j][0]).getTime() === new Date(date).getTime()) {
        // Заполняем данные для cust_created_count и upsold_logos в виде целых чисел
        resultSheet.getRange(2, i + 1).setValue(Math.round(data[j][1])); // cust_created_count
        resultSheet.getRange(3, i + 1).setValue(Math.round(data[j][2])); // upsold_logos
        break;
      }
    }
  }

  // Удаляем содержимое ячейки A1 (если это необходимо)
  resultSheet.getRange("A1").clearContent();
}
