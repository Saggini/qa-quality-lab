# Imagem base
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "server.js"]