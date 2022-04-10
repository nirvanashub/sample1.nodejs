create database test4;

create table customers(cust_id int primary key, cust_name varchar(30));

insert into customers(cust_id, cust_name)
values (1, 'ram');
insert into customers(cust_id, cust_name)
values (2, 'ravi');
insert into customers(cust_id, cust_name)
values (3, 'piyush');
insert into customers(cust_id, cust_name)
values (4, 'ansh')

create table orders(ord_id int, cust_id int, item varchar(20));

insert into orders(ord_id,cust_id, item)
values(1,5, 'pen');
insert into orders(ord_id,cust_id, item)
values(2,6, 'rubber');
insert into orders(ord_id,cust_id, item)
values(3,7, 'scale');
insert into orders(ord_id,cust_id, item)
values(4,8, 'pencil');

select * from customers;
select * from orders;

select customers.cust_id, orders.cust_id
from customers
inner join orders on customers.cust_id=orders.cust_id;

select *
from customers 
left join orders
on customers.cust_id=orders.cust_id;

select *
from orders
right join customers
on orders.cust_id=customers.cust_id;

select *
from customers
full join orders
on orders.cust_id=customers.cust_id;