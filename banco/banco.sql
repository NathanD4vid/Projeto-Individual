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
	(1, 'Mega', 'Mega', '123', 'true', 'img/elos/top500.png'),
	(2, 'Yan', 'Yan', '123', 'true', 'img/elos/grao.png'),
	(3, 'Minero', 'Mineiro', '123', 'true', 'img/elos/master.png'),
	(4, 'Loula', 'Loula', '123', 'true', 'img/elos/diamante.png'),
	(5, 'Peps', 'Peps', '123', 'true', 'img/elos/platinum.png');

insert into quiz values 
	(1, 'Dano', 1),
    (2, 'Tanque', 2),
    (3, 'Tanque', 3),
    (4, 'Tanque', 4),
    (5, 'Suporte', 5);

insert into desafio values 
	(1, 20, 1),
	(2, 18, 2),
	(3, 16, 3),
	(4, 14, 4),
	(5, 12, 5);

select username, max(acertos) from desafio join usuario on id = fkUsuario group by username order by acertos desc limit 5;

select count(distinct fkUsuario) as contar from usuario join desafio on id = fkUsuario;

select round(avg(acertos), 2) as acertos from desafio;

select count(id) as contados from usuario where quiz = 'true';

select classe, count(classe) as quantidade from quiz group by classe order by quantidade desc limit 1;