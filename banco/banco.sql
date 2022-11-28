create database if not exists overwatch;
use overwatch;

create table usuario (
id int primary key auto_increment,
email varchar(60),
username varchar(45),
senha varchar(45),
quiz varchar(10),
elo varchar(250)
);

create table quiz (
idClasse int primary key auto_increment,
classe varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario (id)
);

create table desafio (
idDesafio int primary key auto_increment,
acertos int,
fkUsuario int,
foreign key (fkUsuario) references usuario (id)
);

select * from usuario;
select * from quiz;
select * from desafio;

insert into usuario values
	(1, 'Mega', 'Mega', '123', 'false'),
	(2, 'Yan', 'Yan', '123', 'false'),
	(3, 'Minero', 'Mineiro', '123', 'false'),
	(4, 'Loula', 'Loula', '123', 'false'),
	(5, 'Peps', 'Peps', '123', 'false');

insert into quiz values 
	(1, 'Tanque', 1),
    (2, 'Tanque', 2),
    (3, 'Tanque', 3),
    (4, 'Tanque', 4),
    (5, 'Tanque', 5);

insert into desafio values 
	(1, 10, 1),
	(2, 3, 2),
	(3, 13, 3),
	(4, 7, 4),
	(5, 8, 5);

select username, max(acertos) from desafio join usuario on id = fkUsuario group by username order by acertos desc limit 5;

select count(distinct fkUsuario) as contar from usuario join desafio on id = fkUsuario;

select round(avg(acertos), 2) as acertos from desafio;

select count(id) as contados from usuario where quiz = 'true';

select classe, count(classe) as quantidade from quiz group by classe order by quantidade desc limit 1;