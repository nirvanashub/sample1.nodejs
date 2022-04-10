create database test2;

create table customers(cust_id int primary key, cust_name varchar(30));

insert into customers(cust_id, cust_name)
values (1, 'ram');
insert into customers(cust_id, cust_name)
values (2, 'ravi');
insert into customers(cust_id, cust_name)
values (3, 'piyush');
insert into customers(cust_id, cust_name)
values (4, 'ansh')

create table orders(ord_id int identity(1,1), cust_id int not null default 1, item varchar(20)
foreign key(cust_id) references customers(cust_id) on delete set default);

insert into orders(cust_id, item)
values(1, 'pen');
insert into orders(cust_id, item)
values(2, 'rubber');
insert into orders(cust_id, item)
values(3, 'scale');
insert into orders(cust_id, item)
values(4, 'pencil');

select * from customers;
select * from orders;

delete from customers where cust_id=2; /* on delete default value*/
