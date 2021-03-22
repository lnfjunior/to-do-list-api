# to-do-list-api
Projeto feito em node onde temos a comunicacao com o banco de dados mysql
## Script de criacao da tabela
CREATE TABLE `tarefas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_usuario` VARCHAR(100) NOT NULL,
  `email_usuario` VARCHAR(100) NOT NULL,
  `descricao` TEXT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `qtd_pendente` INT NULL DEFAULT 0,
  PRIMARY KEY (`id`));

Devemos fazer a copia do arquivo .env.example para .env e colocar as variaveis de ambiente de acordo com o servidor

Executar o `npm install` dentro da pasta to-do-list-api

Executar o `npm run start` dentro da pasta to-do-list-api

O projeto vai rodar em `http://localhost:3000`

## versoes usadas
Node: 12.18.0


