const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;


const loginRoute = require('./routes/loginRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar o arquivo da tela de login
app.use(express.static(path.join(__dirname, '../FrontEnd')));
// Servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd', 'index.html'));
});

//ROTAS DO SISTEMA//
app.use('/api', loginRoute); // rota: /api/login


//EXIBIR EXECUÇÃO NO CONSOLE.LOG//
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
