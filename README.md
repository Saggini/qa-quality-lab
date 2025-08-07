# QA QualityLab

Projeto para testes e rastreamento de bugs com foco em automação, qualidade e integração contínua.

## 🛠 Stack
- Node.js + Express
- PostgreSQL
- Docker + Docker Compose
- Cypress (E2E)
- Postman (API)
- Git (Bitbucket)

## 🚀 Rodando o projeto

```bash
docker-compose up --build

## 🧪 Testes de API (Postman)

A coleção de testes está localizada em:

`tests/postman/QAQualityLab.postman_collection.json`

Inclui testes de:
- Listagem de bugs (GET)
- Criação de bug (POST)
- Atualização (PUT)
- Exclusão (DELETE)

Execute via Postman ou Newman.

## 🌐 Ambiente Postman

O arquivo de ambiente pode ser importado para facilitar testes locais:

`tests/postman/QAQualityLab.postman_environment.json`

Contém:
- Variável `base_url = http://localhost:3000`