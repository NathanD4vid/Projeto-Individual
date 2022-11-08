create database if not exists overwatch;
use overwatch;

create table usuario (
id int primary key auto_increment,
email varchar(60),
username varchar(45),
senha varchar(45)
);

select * from usuario;