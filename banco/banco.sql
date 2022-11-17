create database if not exists overwatch;
use overwatch;

create table usuario (
id int primary key auto_increment,
email varchar(60),
username varchar(45),
senha varchar(45),
quiz varchar(10)
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
insert into usuario values
	(1, 'Mega', 'Mega', '123', 'false'),
	(2, 'Yan', 'Yan', '123', 'false'),
	(3, 'Minero', 'Mineiro', '123', 'false'),
	(4, 'Loula', 'Loula', '123', 'false'),
	(5, 'Peps', 'Peps', '123', 'false');

select * from quiz;
insert into quiz values 
	(1, 'Tanque', 1),
    (2, 'Tanque', 2),
    (3, 'Tanque', 3),
    (4, 'Tanque', 4),
    (5, 'Tanque', 5);

select * from desafio;
insert into desafio values 
	(1, 10, 1),
	(2, 3, 2),
	(3, 18, 3),
	(4, 13, 4),
	(5, 8, 5);
    
insert into desafio values 
	(6, 15, 3);

select username, acertos from desafio join usuario on id = fkUsuario order by acertos desc limit 5;

select username, max(acertos) from desafio join usuario on id = fkUsuario group by username order by acertos desc limit 5;
  
select * from usuario join megaQuiz on id = fkUsuario;
	