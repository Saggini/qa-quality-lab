// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importa o aplicativo Express definido em './app'
const app = require('./app');

// Define a porta a partir da variável de ambiente ou usa 3000 como padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor e exibe uma mensagem no console quando estiver rodando
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});