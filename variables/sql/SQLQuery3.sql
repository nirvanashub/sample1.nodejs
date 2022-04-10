
create table regfarm(name varchar(50)primary key, lastname varchar(30), fathername varchar(30), mothername varchar(30),dob int, age int, city varchar(20), pincode int, address varchar(30)); 

select * from regfarm;

insert into regfarm
values('shubham', 'trivedi', 'praveen', 'manisha', 1997, 26,'ujjain', 456006, 'kartik chowk');