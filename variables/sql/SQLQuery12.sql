select * from person;

create table person(id int, lname varchar(30), email varchar(30));
insert into person values(1, 'trivedi', 'trivedi@gmail.com');
insert into person values(2, 'sahu', 'saurabh@gmail.com');
insert into person values(2, 'sahu', 'sahu@gmail.com');
insert into person values(4, 'pandey', 'pandey@gmail.com');
select * from person;
select * from shubham;

select * from person inner join shubham on person.id = shubham.id;