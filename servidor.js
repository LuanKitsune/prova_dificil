document.addEventListener("DOMContentLoaded", function () {
    });
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456789',
  database: 'usuarios',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.use(bodyParser.json());

app.post('/cadastrar-professor', (req, res) => {
  const { professorName, professorId, cpf, senha } = req.body;

  const sql = 'INSERT INTO professores (nome, id, cpf, senha) VALUES (?, ?, ?, ?)';
  db.query(sql, [professorName, professorId, cpf, senha], (err, result) => {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err);
      res.status(500).json({ error: 'Erro ao cadastrar professor' });
      return;
    }
    console.log('Professor cadastrado com sucesso!');
    res.json({ message: 'Professor cadastrado com sucesso!' });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
