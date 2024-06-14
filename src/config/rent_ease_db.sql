-- MySQL Workbench Synchronization
-- Generated: 2024-06-14 10:29
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: TDSSV23

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `rent_ease_database` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `rent_ease_database`.`cliente` (
  `cnh` CHAR(9) NOT NULL,
  `nome` VARCHAR(5) NULL DEFAULT NULL,
  `rg` VARCHAR(11) NULL DEFAULT NULL,
  `idade` INT(11) NULL DEFAULT NULL,
  `end_logradouro` VARCHAR(50) NULL DEFAULT NULL,
  `end_numero` INT(11) NULL DEFAULT NULL,
  `end_bairro` VARCHAR(50) NULL DEFAULT NULL,
  `end_cidade` VARCHAR(50) NULL DEFAULT NULL,
  `end_uf` CHAR(2) NULL DEFAULT NULL,
  PRIMARY KEY (`cnh`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `rent_ease_database`.`carro` (
  `chassi` VARCHAR(17) NOT NULL,
  `cor` VARCHAR(15) NULL DEFAULT NULL,
  `modelo` VARCHAR(50) NULL DEFAULT NULL,
  `marca` VARCHAR(20) NULL DEFAULT NULL,
  `placa` CHAR(7) NULL DEFAULT NULL,
  `ano` INT(11) NULL DEFAULT NULL,
  `categoria_id_categoria` INT(11) NOT NULL,
  PRIMARY KEY (`chassi`),
  INDEX `fk_carro_categoria1_idx` (`categoria_id_categoria` ASC) VISIBLE,
  CONSTRAINT `fk_carro_categoria1`
    FOREIGN KEY (`categoria_id_categoria`)
    REFERENCES `rent_ease_database`.`categoria` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `rent_ease_database`.`categoria` (
  `id_categoria` INT(11) NOT NULL AUTO_INCREMENT,
  `preco_diaria` DECIMAL(6,2) NULL DEFAULT NULL,
  `nome` VARCHAR(50) NULL DEFAULT NULL,
  `descricao` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `rent_ease_database`.`servico` (
  `id_servico` INT(11) NOT NULL AUTO_INCREMENT,
  `valor` DECIMAL(7,2) NULL DEFAULT NULL,
  `oficina` VARCHAR(50) NULL DEFAULT NULL,
  `descricao` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id_servico`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `rent_ease_database`.`carro_cliente` (
  `carro_chassi` VARCHAR(17) NOT NULL,
  `cliente_cnh` CHAR(9) NOT NULL,
  `data_hora` DATETIME NOT NULL,
  PRIMARY KEY (`carro_chassi`, `cliente_cnh`, `data_hora`),
  INDEX `fk_carro_has_cliente_cliente1_idx` (`cliente_cnh` ASC) VISIBLE,
  INDEX `fk_carro_has_cliente_carro_idx` (`carro_chassi` ASC) VISIBLE,
  CONSTRAINT `fk_carro_has_cliente_carro`
    FOREIGN KEY (`carro_chassi`)
    REFERENCES `rent_ease_database`.`carro` (`chassi`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carro_has_cliente_cliente1`
    FOREIGN KEY (`cliente_cnh`)
    REFERENCES `rent_ease_database`.`cliente` (`cnh`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `rent_ease_database`.`carro_servico` (
  `carro_chassi` VARCHAR(17) NOT NULL,
  `servico_id_servico` INT(11) NOT NULL,
  `data_hora` DATETIME NOT NULL,
  PRIMARY KEY (`carro_chassi`, `servico_id_servico`, `data_hora`),
  INDEX `fk_carro_has_servico_servico1_idx` (`servico_id_servico` ASC) VISIBLE,
  INDEX `fk_carro_has_servico_carro1_idx` (`carro_chassi` ASC) VISIBLE,
  CONSTRAINT `fk_carro_has_servico_carro1`
    FOREIGN KEY (`carro_chassi`)
    REFERENCES `rent_ease_database`.`carro` (`chassi`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carro_has_servico_servico1`
    FOREIGN KEY (`servico_id_servico`)
    REFERENCES `rent_ease_database`.`servico` (`id_servico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE SCHEMA IF NOT EXISTS `rent_ease` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- Inserts
insert into cliente values ('123456789', 'Arthur Brito', '2354323422', 17, 'Rua Eduardo Joaquim Neves', 353, 'Jardim Res. Noroeste', 'Votuporanga', 'SP');

insert into categoria (preco_diaria, nome, descricao) values ( 1000.10, "Carros de luxo", "Carros onde você pode andar por ai ostentando seu dinehiro com muito luxo e gostosas no capô");


-- Updates
update cliente set Nome = "Arroz da Silva" where CNH = "123456789";
