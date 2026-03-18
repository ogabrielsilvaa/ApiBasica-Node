# ⚙️ API REST - Node.js CRUD

Uma API RESTful robusta desenvolvida em Node.js para gerenciamento de entidades relacionais (Usuários, Contatos e Endereços). O projeto foi desenhado com foco em segurança, escalabilidade e boas práticas de arquitetura.

A aplicação conta com um sistema completo de autenticação via tokens JWT, criptografia de senhas, controle de acesso baseado em papéis (Role-Based Access Control - RBAC) e documentação interativa.

## ✨ Principais Funcionalidades

- **Autenticação e Segurança:** Login seguro com geração de tokens JWT e senhas criptografadas (Bcrypt).
- **Controle de Acesso (RBAC):** Middlewares de autorização que distinguem permissões entre usuários comuns (`user`) e administradores (`admin`).
- **Gestão de Entidades:** Operações completas de CRUD (Create, Read, Update, Delete) para Usuários, Contatos e Endereços.
- **Relacionamentos:** Consultas otimizadas trazendo dados associados (ex: buscar um usuário e retornar automaticamente seus contatos e endereços).
- **Documentação Viva:** Interface gráfica e interativa para testes de rotas via Swagger UI.

## 🛠️ Tecnologias Utilizadas

- **Node.js** com **Express.js** (Roteamento e Servidor)
- **Sequelize ORM** (Modelagem e consultas ao banco de dados)
- **MySQL** (Banco de Dados Relacional)
- **JSON Web Token (JWT)** (Autenticação)
- **Bcrypt.js** (Hashing de senhas)
- **Swagger / OpenAPI 2.0** (Documentação da API)

## 🏗️ Estrutura de Pastas e Arquitetura

O projeto segue uma arquitetura em camadas para separar responsabilidades, facilitar a manutenção e o reaproveitamento de código:

- **`controller/`**: Intercepta as requisições HTTP, extrai os dados (`req.body`, `req.params`) e os repassa para a camada de serviço.
- - **`database/`**: Responsável pelo gerenciamento do banco de dados. Subdividida em:
  - **`config/`**: Arquivos de configuração e credenciais de conexão com o banco.
  - **`migrations/`**: Scripts de versionamento do banco, garantindo a criação e alteração das tabelas de forma estruturada.
  - **`models/`**: Definição da estrutura das tabelas e seus relacionamentos utilizando o Sequelize.
- **`docs/`**: Contém as configurações e os arquivos gerados (como o JSON estruturado) para a documentação do Swagger.
- **`middlewares/`**: Interceptadores de requisições, responsáveis pela segurança da API (validação de tokens JWT e autorização de níveis de acesso).
- **`repository/`**: Camada exclusiva para comunicação com o banco de dados, isolando as consultas e lógicas do Sequelize do resto da aplicação.
- **`routes/`**: Define os endpoints da API e aplica os middlewares de autenticação e autorização adequados.
- **`service/`**: Concentra todas as regras de negócio da aplicação (ex: validações, hashing de senhas antes de salvar).

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- MySQL instalado e rodando na sua máquina

### Passo a Passo

**1. Clone o repositório:**
```bash
git clone https://github.com/ogabrielsilvaa/CrudApi_using_Node.git
cd CrudApi_using_Node
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configuração de Variáveis de Ambiente:**
Crie um arquivo `.env` na raiz do projeto e preencha com as suas credenciais:
```env
# Configurações do Banco de Dados
DB_USERNAME=root
DB_PASSWORD=sua_senha_aqui
DB_DATABASE=database_development
DB_HOST=127.0.0.1

# Configurações de Autenticação
JWT_SECRET=chave_secreta
JWT_EXPIRES_IN=1d
```

**4. Criação do Banco e Migrations:**
Execute os comandos do Sequelize CLI para criar o banco de dados e sincronizar a estrutura das tabelas:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

**5. Inicie o servidor:**
```bash
npm start
# ou 'npm run dev' caso utilize nodemon
```

## 📚 Documentação da API (Swagger)

A API possui uma documentação interativa onde é possível visualizar, entender os esquemas de dados e testar todos os endpoints disponíveis. 

Com o servidor rodando, acesse no seu navegador:
👉 **`http://localhost:3000/api-docs`** *Dica: Para testar rotas protegidas, faça o login na rota `POST /auth/login`, copie o `accessToken` gerado e insira no botão "Authorize" no topo da documentação.*
