CREATE TABLE IF NOT EXISTS bugs (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  status VARCHAR(20),
  prioridade VARCHAR(20),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserindo dados simulados
INSERT INTO bugs (titulo, descricao, status, prioridade)
VALUES
('Erro no login', 'Usuário não consegue logar com senha correta', 'Aberto', 'Alta'),
('Botão duplicado', 'Dois botões "Salvar" na tela de perfil', 'Em progresso', 'Média'),
('Imagem quebrada', 'Logo da empresa não carrega no Safari', 'Resolvido', 'Baixa');
