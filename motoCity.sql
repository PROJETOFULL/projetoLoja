/*Criando o banco*/
create database motocity;

/*Usando o banco*/
use motoCity;

/* Criando as tabelas do banco*/
create table cliente
(
	codigo int primary key auto_increment,
	nome varchar(50),
	cpf varchar (15),
    senha varchar(20)
);


create table produto
(
	codigo_prod int primary key auto_increment,
    produto varchar(50),
    marca varchar(20),
    origem varchar (30)
    
);

create table contato
(
	codigo_cont int primary key auto_increment,
	telefone varchar(13),
    email varchar(50),
    telefone_celu varchar(30)
);


create table venda
(
	codigo_vend int primary key auto_increment,
    valor_vend varchar(20),
    funcionario varchar(30),
    produto_vend varchar(30)
);

create table pagamento
(
	codigo_paga int primary key auto_increment,
    valor_pagamento varchar(20),
    cliente varchar(20),
    data_paga date

);

create table estoque
(
    codigo_esto int primary key auto_increment,
    produto varchar(20),
    quantidade int,
    local_esto varchar(30)
);

/*Realizando os inserts*/
insert into cliente(nome,cpf,senha) values('ricardo','476.292.978.66',741345547);
insert into cliente(nome,cpf,senha) values('Doglas','576.792.973.67',741754647);
insert into cliente(nome,cpf,senha) values('vinicius','486.672.348.68',1435547);
insert into cliente(nome,cpf,senha) values('Maria','146.672.946.99',7417945737);

insert into produto(produto,marca,origem) values('Voltz EVS','Voltz','Africana');
insert into produto(produto,marca,origem) values('Super Soco TC Max ','Tc MAX','Italiana');
insert into produto(produto,marca,origem) values('GWS K14RS','GWS','Francesa');
insert into produto(produto,marca,origem) values('GWS K8000R','GWS','Francesa');

insert into contato(telefone,email,telefone_celu) values('(11)3467-4563','contato1@gmail.com','(11)98675-3451');
insert into contato(telefone,email,telefone_celu) values('(11)8953-8345','contato2@hotmail.com','(11)99005-5555');
insert into contato(telefone,email,telefone_celu) values('(11)3674-5643','contato3@yahoo.com','(11)92147-9087');
insert into contato(telefone,email,telefone_celu) values('(11)6367-4433','contato4@outlook.com','(11)91247-8987');

insert into venda(valor_vend,funcionario,produto_vend) values('$3600,00','Cleber','Voltz EVS');
insert into venda(valor_vend,funcionario,produto_vend) values('$1780,00','Jonatam','Super Soco TC Max');
insert into venda(valor_vend,funcionario,produto_vend) values('$7500,00','Rafaela','GWS K14RS');
insert into venda(valor_vend,funcionario,produto_vend)values('$1200,00','Lucio','GWS K8000R');

insert into pagamento(valor_pagamento,cliente,data_paga) values('$3600,00','Ricardo','2023-11-12');
insert into pagamento(valor_pagamento,cliente,data_paga) values('$1780,00','douglas','2002-08-23');
insert into pagamento(valor_pagamento,cliente,data_paga) values('$7500,00','vinicius','2020-12-10');
insert into pagamento(valor_pagamento,cliente,data_paga)values('$1200,00','Maria','2010-04-30');

insert into estoque(produto,quantidade,local_esto) values('Voltz EVS','5','Vila Dos Remedios 172');
insert into estoque(produto,quantidade,local_esto) values('Super Soco TC Max','2','Rua Santa Edwiges 321');
insert into estoque(produto,quantidade,local_esto)values('GWS K14RS','9','Vila Santana 456');
insert into estoque(produto,quantidade,local_esto) values('GWS K8000R','6','Rua Otacilio 241');

/*Selecionando as tabelas do banco*/
select * from cliente;
select * from produto; 
select * from contato; 
select * from venda; 
select * from pagamento; 
select * from estoque; 

/*Fazendo os inner join*/
select nome,produto,valor_vend,funcionario
from cliente
inner join produto, venda;

select nome,cpf,email
from cliente
inner join contato;

select * from produto
inner join estoque;

select * from venda
inner join pagamento;

select * from pagamento
inner join produto;

select codigo, cliente, valor_vend,produto_vend
from cliente
inner join venda,pagamento;

select funcionario,valor_vend,data_paga
from venda
inner join pagamento;



