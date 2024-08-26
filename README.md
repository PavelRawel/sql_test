Результат SQL запросов можно по смотреть в [дашборде](https://lookerstudio.google.com/reporting/c32e6516-75cd-4557-9c49-d0f0ea5b66e5/page/B6o9D/edit) 
## Задача 1
Решить эту задачу можно как минимум 2 инструментами. При помощи формул  и при помощи app scripts. Я выбрал **app scripts** как более оптимальный вариант. Я записал [скринкаст](https://drive.google.com/file/d/11wwc7UXBrXXB6ZEAIQ37-gTJWRAuV4iG/view?usp=sharing) для понимания как работает скрипт. 

Google sheets можно посмотреть по [ссылке](https://docs.google.com/spreadsheets/d/1_J28CQ7BcvEbQI9lM0HxrmDsTNBDWIoyNil3ueKOYEE/edit?gid=636872463#gid=636872463).
Ссылка на скрипт [тут](https://github.com/PavelRawel/sql_test/blob/main/gsheat_app_script_update_date%D1%8E.js)

## Задача 2  - [ссылка на SQL](https://github.com/PavelRawel/sql_test/blob/main/sql/task_2)
В этой задаче нет ID водителей. Возможно, водитель ушел в 2016 (сделал перерыва) и вернулся в 2017. Это тоже нужно учитывать.
Также хорошо бы подсчитать **Сustomer Retention Rate и Churn Rate**. Но по условию, нам нужно только кол-во ушедших.

Результат можно посмотреть в [дашборде](https://lookerstudio.google.com/reporting/c32e6516-75cd-4557-9c49-d0f0ea5b66e5/page/B6o9D/edit)

## Задача 3 - [ссылка на SQL](https://github.com/PavelRawel/sql_test/blob/main/sql/task_3)

В этой задаче могу быть дубли в 2 таблицах. Нужно это учитывать. Но в нашем примере - без дублей.

Результат можно посмотреть в [дашборде](https://lookerstudio.google.com/reporting/c32e6516-75cd-4557-9c49-d0f0ea5b66e5/page/B6o9D/edit)


## Задача 4 - [ссылка на SQL](https://github.com/PavelRawel/sql_test/blob/main/sql/task_4)
В этой задаче есть сложный момент. В начале задачи я хотел сложить активных юзеров за этот месяц + активных юзеров за предыдущий. Но это НЕ правильно. Юзер может попасть в активные юзеры в текущий месяц, но в следуюший не попасть (если он удалиться в этот месяц).


Результат можно посмотреть в [дашборде](https://lookerstudio.google.com/reporting/c32e6516-75cd-4557-9c49-d0f0ea5b66e5/page/B6o9D/edit)


![I did it]([[https://picsum.photos/800/600](https://github.com/PavelRawel/sql_test/blob/main/1.jpg)])









