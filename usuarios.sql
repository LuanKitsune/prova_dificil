CREATE DATABASE IF NOT EXISTS usuarios;

USE usuarios; 

CREATE TABLE IF NOT EXISTS professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(25) NOT NULL,
    professor_id BIGINT NOT NULL,
    cpf BIGINT NOT NULL,
    senha VARCHAR(16) NOT NULL
);



SELECT * FROM professores WHERE professor_id = 123456;

INSERT INTO professores( nome, professor_id, cpf, senha)
VALUES ('Fabrício', 123456, 17189949747, 'bangladesh');


