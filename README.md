
# Backend - Certificados

Este repositório contém o código-fonte do backend do projeto **Certificados**, que gerencia o armazenamento e recuperação de certificados em formato PDF, além de fornecer APIs para o frontend.

## Funcionalidades

- Criar, ler, atualizar e excluir certificados.
- Gerenciar o upload e armazenamento de arquivos PDF.
- Fornecer uma API RESTful para a comunicação com o frontend.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Express**: Framework minimalista para construção de APIs.
- **Multer**: Middleware para tratamento de upload de arquivos.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados.
- **Mongoose**: ODM (Object Document Mapper) para MongoDB.
- **dotenv**: Auxilia na proteção das variaveis de ambiente. 
- **cors**: Auxilia na proteção de acesso da API e para o projeto funcionar em localHost. 

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/patricklohn/certificados-cursos-backend.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd certificados-backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias (exemplo de conexão com o MongoDB).

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. A API estará disponível em "Exemplo":
   ```bash
   http://localhost:5000
   ```

## Endpoints da API

- **GET** `/api/Memory` - Recupera todos os certificados.
- **POST** `/api/Memory` - Cria um novo certificado (com upload de arquivo).
- **GET** `/api/Memory/:id` - Recupera um certificado específico.
- **PUT** `/api/Memory/:id` - Atualiza um certificado.
- **DELETE** `/api/Memory/:id` - Deleta um certificado.
