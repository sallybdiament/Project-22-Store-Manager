# Store Manager - Back-End Project

Projeto de uma API RESTful utilizando a arquitetura *Model-Service-Controller*.

Aplicação em Node.js de um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Banco de dados MySQL foi utilizado para a gestão de dados.

Projeto 23 da [Trybe](https://wwww.betrybe.com), módulo de Back-End.

## O Projeto

#### 1. Criação de Rotas de Produtos:
   - Listar produtos: endpoints GET `/products` e `/products/:id`.
   - Cadastrar produtos: endpoint POST `/products`, com validações.
   - Atualizar/update de produto: endpoint PUT `/products/:id`, verificando se o id do produto é encontrado.
   - Deletar um produto: endpoint DELETE `/products/:id`, verificando se o id do produto é encontrado.

**2. Criação de Rotas de Vendas:**
   - Cadastrar nas tabelas `sales` e `sales_product`, através do endpoint POST `/sales`, com validações.
   - Listar vendas: endpoints GET `/sales` e `/sales/:id`.

**3. Testes unitários:**
   - Cobertura de testes com Mocha, Chai e Sinon.


## Instalação 

#### 1- Clonar o repositório

```git clone git@github.com:sallybdiament/Project-22-Store-Manager.git```

#### 2 - Subir os containers `blogs_api` e `blogs_api_db` utilizando o docker-compose

Na raíz do projeto: ```docker-compose up -d```

#### 3 - Abrir o terminal do container `blogs_api`

```docker exec -it store_manager bash```

#### 4 - Instalar as dependências

No terminal do container: ```npm install```

#### 5 - Criar e popular o banco de dados:

Criando as tabelas: ```npm run migration```

Populando o banco com dados: ```npm run seed```

#### 6 - Executare a aplicação:

```npm run dev```

#### \*Foi utilizado o Thunder Client como cliente de requisições HTTP\*

## Tecnologias
- Node.js
- JavaScript
- Express.js
- Sequelize.js
- DotEnv
- Docker
- MySQL
- Mocha.js
- Chai.js
- Sinon.js
