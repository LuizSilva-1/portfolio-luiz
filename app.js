const express = require('express');
const app = express();
const port = 3000;

// Configurações
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/artigos', (req, res) => {
    res.render('artigos');
});

app.get('/projetos', (req, res) => {
    res.render('projetos');
});

app.get('/certificacoes', (req, res) => {
    res.render('certificacoes');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
