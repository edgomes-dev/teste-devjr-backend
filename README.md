# Teste backend jr

* Essa é uma aplicação desenvolvida em Nest com Typeorm para um teste técnico.

## Teste o app

### requisitos

- Node instalado na máquina
- Insomnia ou Postman para testar os endpoint

#### instale o projeto na sua máquina

* Vá até a pasta que você quer instalar e no terminal insira esse comando.

```bash
 git clone https://github.com/edgomes-dev/teste-devjr-backend.git
```

#### Entre na pasta do projeto e instale as dependências

```bash
 cd teste-devjr-backend

# instalando as depências necessárias
 npm i
```

#### Agora inicie a aplicação

```bash
 npm run start:dev
```

#### Testando os nossos endpoint

* Com nossa aplicação instalada vamos testar nossas requisições.
* Abra o postman ou insomnia
* Crie duas pastar, uma product e outra category.

## Category

#### Create - POST

- Criando uma categoria

- url da requisição
```
 http://localhost:8080/api/v1/category
```

- Esse é o corpo da nossa requisição

```
{
    "name": "eletrônicos"
}
```

#### FindAll - GET

* Iremos retornar todas as nossas categorias

```
 http://localhost:8080/api/v1/category
```

#### FindById - GET

* Iremos retornar uma categoria pelo seu id

```
 http://localhost:8080/api/v1/category/1
```

#### Update - Put

- Atualizando uam categoria

- url da requisição
```
 http://localhost:8080/api/v1/product
```

- Esse é o corpo da nossa requisição

```
{
    "id": 1,
    "name": "eletrônicos novo"
}
```

#### Delete - DELETE

* Iremos excluir uma categoria pelo seu id

```
 http://localhost:8080/api/v1/category/1
```


## Product

#### Create - POST

- Criando um produto

- url da requisição
```
 http://localhost:8080/api/v1/product
```

- Esse é o corpo da nossa requisição

```
{
    "name": "woody",
    "status": true,
    "quantity": 10,
    "category": 2
}
```

#### FindAll - GET

* Iremos retornar todas os nossos produtos

```
 http://localhost:8080/api/v1/product
```

#### FindById - GET

* Iremos retornar um produto pelo seu id

```
 http://localhost:8080/api/v1/product/1
```

#### Update - Put

- Atualizando um produto

- url da requisição
```
 http://localhost:8080/api/v1/product
```

- Esse é o corpo da nossa requisição

```
{
    "id": 1,
    "name": "notebook novo",
    "status": true,
    "quantity": 10,
    "deleted_at": null
}
```

#### Delete - DELETE

* Iremos excluir um produto pelo seu id

```
 http://localhost:8080/api/v1/product/1
```
