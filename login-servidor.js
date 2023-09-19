const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser'); // Certifique-se de que o body-parser está instalado

const app = express();
const port = 4000; // Escolha a porta do seu servidor

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456789',
  database: 'usuarios',
});

// Conecte-se ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Configuração para analisar solicitações JSON
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Consulte o banco de dados para verificar as credenciais
  const sql = 'SELECT * FROM professores WHERE nome = ? AND senha = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.status(500).json({ error: 'Erro ao fazer login' });
      return;
    }

    if (results.length > 0) {
      // Credenciais válidas
      res.json({ message: 'Login realizado com sucesso' });
    } else {
      // Credenciais inválidas
      res.status(401).json({ error: 'Algo não está certo' });
    }
  });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
