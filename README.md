# 🐞 QA QualityLab

Projeto para testes e rastreamento de bugs com foco em automação, qualidade de software e integração contínua.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js + Express** — Backend RESTful
- **PostgreSQL** — Banco de dados
- **Docker + Docker Compose** — Containerização
- **Postman** — Testes de API
- **Cypress** — Testes E2E no frontend
- **Git + Bitbucket** — Versionamento e repositório

---

## 📦 Estrutura do Projeto

qa-quality-lab/
├── backend/ # API Express + conexão com banco
├── db/ # Scripts SQL de criação do banco
├── docker/ # (futuro) Kubernetes ou outros configs
├── docs/ # Prints e evidências
├── frontend/ # Interface básica HTML + JS
├── tests/
│ ├── postman/ # Collection e environment
│ └── cypress/ # Testes automatizados E2E
└── docker-compose.yml


---

## 🚀 Como Rodar o Projeto

> Pré-requisitos: Docker + Docker Compose

```bash
docker-compose up --build

Backend: http://localhost:3000/api/bugs

Frontend: http://localhost:3000/frontend/index.html


🧪 Testes de API (Postman)

A coleção está localizada em: 

tests/postman/QAQualityLab.postman_collection.json

Inclui:

✅ Listagem de bugs (GET)

✅ Criação (POST)

✅ Atualização (PUT)

✅ Exclusão (DELETE)

Executável via Postman ou Newman:

newman run tests/postman/QAQualityLab.postman_collection.json


🌐 Ambiente Postman

Arquivo de ambiente para testes locais:

tests/postman/QAQualityLab.postman_environment.json

Contém:

base_url = http://localhost:3000


🧪 Testes de Interface (Cypress)

Teste E2E localizado em:

tests/cypress/e2e/bugs.cy.js

Executa:

Carregamento da lista

Cadastro de novo bug

Validação na interface


Rodar o Cypress:

npx cypress open


👤 Autor

Brian Sagini
[LinkedIn](https://www.linkedin.com/in/briansagini)  
[GitHub](https://github.com/Saggini)

💡 Futuras Melhorias
 Tela de edição de bugs

 Página responsiva

 Dashboard com filtros e gráficos