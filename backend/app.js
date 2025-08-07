const express = require('express'); // Importa o framework Express
const cors = require('cors'); // Importa o middleware CORS
const app = express(); // Cria uma instância do aplicativo Express

app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json()); // Permite que o app aceite JSON no corpo das requisições

const bugsRoutes = require('./routes/bugs'); // Importa as rotas relacionadas a "bugs"
app.use('/api/bugs', bugsRoutes); // Usa as rotas de "bugs" no caminho /api/bugs

module.exports = app; // Exporta o app para ser usado em outros arquivos