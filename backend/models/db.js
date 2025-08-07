// Importa o módulo Pool do pacote 'pg' para conectar ao PostgreSQL
const { Pool } = require('pg');

// Cria uma nova instância de Pool usando variáveis de ambiente para configuração
const pool = new Pool({
    host: process.env.DB_HOST,     // Endereço do host do banco de dados
    user: process.env.DB_USER,     // Usuário do banco de dados
    password: process.env.DB_PASS, // Senha do banco de dados
    database: process.env.DB_NAME, // Nome do banco de dados
    port: process.env.DB_PORT,     // Porta do banco de dados
});

// Exporta o pool para ser utilizado em outros arquivos
module.exports = pool;