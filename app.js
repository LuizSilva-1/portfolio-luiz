const express = require('express');
const app = express();
const port = 3000;

// Configurações
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rotas para as páginas principais
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

// Rota para o artigo específico "Dominando o Git"
app.get('/dominando-git', (req, res) => {
    res.render('dominando-git');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
