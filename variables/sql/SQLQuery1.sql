create database employee;
create table department(dep_id varchar(5),dep_name varchar(40),dep_location varchar(10),dep_language varchar(15));

select * from department;

insert into department(dep_id,dep_name,dep_location,dep_language)
values ('7', 'ankit', 'mumbai','ruby');

select * from department
where dep_id = '3'


select * from department
where dep_id = '1' or dep_name = 'rahul'; /* and/or*/

select * from department
where not dep_id = '2';

update department
set dep_name = 'rohan'
where dep_id = '4'

update department
set dep_location = 'mumbai'
where dep_id = '1'

delete from department where dep_name = 'rahul'

select distinct dep_location,dep_id from department as d /* aliases as to give a name*/

select * from department where dep_id between 3 and 6

select * from department where dep_id in ('4', '7')

select * from department where dep_language like 'java%' /* %is used to read after java*/

select * from department where dep_language like 'sq_' /* _ is used to define alphabets*/

select * from department 
order by dep_id desc /* no need to type asc here */

select max (dep_id) from department;
select min (dep_id) from department;

select count (dep_name)
from department
where dep_location = 'mumbai' /* there are 2 coloums of mumbai*/

select avg(dep_name)
from department
where dep_language = 'ruby' /* varchar is invalid for avg operator*/


select sum(dep_id)
from department
where dep_language = 'ruby' /* varchar is invalid for sum operator*/


 
