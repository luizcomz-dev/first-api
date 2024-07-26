# Documentação da API

## Visão Geral

Esta API foi projetada para gerenciar usuários e projetos, fornecendo funcionalidades de autenticação via OAuth2 e controle de acesso aos dados. A API segue a arquitetura RESTful e está implementada com foco em segurança, escalabilidade e facilidade de manutenção, utilizando princípios de Domain-Driven Design (DDD).

## Endpoints

### Users

| Método | Endpoint       | Descrição                        |
|--------|----------------|----------------------------------|
| GET    | /users         | Retorna a lista de usuários      |
| POST   | /users         | Cria um novo usuário             |
| GET    | /users/{id}    | Retorna detalhes de um usuário   |
| PUT    | /users/{id}    | Atualiza um usuário              |
| DELETE | /users/{id}    | Deleta um usuário                |

### Projects

| Método | Endpoint       | Descrição                        |
|--------|----------------|----------------------------------|
| GET    | /projects      | Retorna a lista de projetos      |
| POST   | /projects      | Cria um novo projeto             |
| GET    | /projects/{id} | Retorna detalhes de um projeto   |
| PUT    | /projects/{id} | Atualiza um projeto              |
| DELETE | /projects/{id} | Deleta um projeto                |

## Autenticação

A API utiliza OAuth 2.0 para autenticação. Os usuários devem obter um token de acesso para realizar requisições autenticadas.

### Fluxo de Autenticação

1. O cliente envia uma requisição de login com credenciais para o endpoint `/oauth/token`.
2. O servidor retorna um token JWT.
3. O cliente inclui o token JWT no cabeçalho `Authorization` para requisições subsequentes.

### Exemplo de Requisição de Autenticação

```http
POST /oauth/token HTTP/1.1
Host: api.exemplo.com
Content-Type: application/x-www-form-urlencoded

grant_type=password&username=usuario&password=senha
```

### Exemplo de Resposta de Autenticação
```json 
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Exemplo de Requisição Autenticada

```http
GET /users/1 HTTP/1.1
Host: api.exemplo.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Segurança
* HTTPS: Todas as comunicações são criptografadas.
* Rate Limiting: Limite de 100 requisições por minuto por IP.
* CORS: Apenas domínios específicos podem acessar a API.

## Estrutura do Projeto
A estrutura do projeto segue os princípios do DDD, separando claramente as camadas de aplicação, domínio e infraestrutura.

```
/ src
  - application
      controllers
          userController.js
          projectController.js
      dto
          userDTO.js
          projectDTO.js
      services
          userService.js
          projectService.js
  - domain
      entities
          user.js
          project.js
      repositories
          userRepository.js
          projectRepository.js
      valueObjects
          email.js
          projectStatus.js
      events
          userCreatedEvent.js
          projectCreatedEvent.js
  - infrastructure
      persistence
          userModel.js
          projectModel.js
      middlewares
          authMiddleware.js
      config
          database.js
          server.js
```

### Camada de Aplicação

* Controllers: Gerenciam as requisições HTTP e chamam os serviços apropriados.
* DTOs (Data Transfer Objects): Definem os dados que serão transferidos entre a camada de aplicação e a camada de domínio.
* Services: Contêm a lógica de aplicação e coordenam as operações entre as entidades de domínio.

### Camada de Domínio

Entities: Representam os objetos de domínio com identidade própria.
Repositories: Definem interfaces para operações de persistência, implementadas na camada de infraestrutura.
Value Objects: Representam objetos de domínio que não possuem identidade própria.
Events: Definem eventos de domínio que podem ser disparados por mudanças no estado das entidades.

### Camada de Infraestrutura

Persistence: Implementações dos repositórios e modelos de dados.
Middlewares: Implementações de middleware, como autenticação e autorização.
Config: Configurações de banco de dados e servidor.

## Testes

Unitários: Testes para funções individuais.
Integração: Testes para interações entre componentes.
End-to-End: Testes para fluxos completos da aplicação.

## Deploy

Ambientes: Desenvolvimento, Staging, Produção.
CI/CD: Pipelines configurados para testes e deploys automáticos.
Monitoramento: Implementado com Prometheus e Grafana.

## Versionamento

A API utiliza versionamento no caminho dos endpoints (e.g., /v1/users). Novas versões serão lançadas conforme necessário, mantendo a compatibilidade com versões anteriores.

| Código | Descrição                        
|--------|----------------------------------
| 200    | OK
| 201    | Created
| 400    | Bad Request
| 401    | Unauthorized
| 403    | Forbidden
| 404    | Not Found
| 500    | Internal Server Error           

## Contato

Para dúvidas ou suporte, entre em contato com [e-mail de suporte].