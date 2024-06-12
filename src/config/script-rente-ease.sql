use rent_ease_db;
show tables;

-- Tabelas
show columns from carro;
show columns from carro_cliente;
show columns from carro_servico;
show columns from categoria;
show columns from cliente;
show columns from servico;

-- Select's
select * from cliente;

-- Inserts
insert into cliente values ('123456789', 'Arthur Brito', '2354323422', 17, 'Rua Eduardo Joaquim Neves', 353, 'Jardim Res. Noroeste', 'Votuporanga', 'SP');