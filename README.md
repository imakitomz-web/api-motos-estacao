# api-motos-estacao

# API Estação Motos

Produzido pelos alunos: Ana Beatriz Gonçalves dos Santos
                        Gabriel Lasinskais
                        Geovanna Alves Saccoccio
                        Giovanna Samille Gonçalves da Silva                       


API REST desenvolvida em Node.js, Express e MongoDB para gerenciamento de motos da oficina Estação Motos.

## Tecnologias Utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* Dotenv
* Cors

## Funcionalidades

* Cadastrar motos
* Listar todas as motos
* Consultar moto por ID
* Atualizar informações de uma moto
* Excluir motos

## Estrutura do Projeto

```text
api-motos-estacao/
│
├── controllers/
│   └── motoController.js
│
├── models/
│   └── motoModel.js
│
├── routes/
│   └── motoRoutes.js
│
├── .env
├── app.js
├── package.json
└── package-lock.json
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/imakitomz-web/api-motos-estacao.git
```

Acesse a pasta:

```bash
cd api-motos-estacao
```

Instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=sua_string_de_conexao
PORT=3000
```

## Executando o Projeto

Modo padrão:

```bash
npm start
```

Modo desenvolvimento:

```bash
npm run dev
```

## Rotas da API

### Listar todas as motos

```http
GET /api/motos
```

### Buscar moto por ID

```http
GET /api/motos/:id
```

### Cadastrar moto

```http
POST /api/motos
```

Exemplo de JSON:

```json
{
  "proprietario": "Juninho",
  "marca": "Honda",
  "modelo": "CG 160",
  "ano": 2022,
  "placa": "ABC1234",
  "cor": "Preta",
  "foto": "https://exemplo.com/foto.jpg"
}
```

### Atualizar moto

```http
PUT /api/motos/:id
```

### Excluir moto

```http
DELETE /api/motos/:id
```

## Deploy

API publicada no Render.

URL base:

https://api-estacao-motos-1.onrender.com

## Autor

Desenvolvido para o projeto Estação Motos.
