# API para cadastrar clientes com endereços.

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![Versao](https://img.shields.io/badge/version-1.0-orange.svg)]()
### Instalação

Clone este repositório e instale as dependencias. Utilize o genrenciador de sua preferência.

```sh
$ cd teste-thread-backend
$ yarn install 
```

Para banco de dados utilize postgres, e altere o arquivo [database.js](https://github.com/igorraphael/teste-thread-backend/blob/master/src/config/database.js), conforme suas credenciais do banco de dados. Logo em seguida acesse seu banco e crie o database teste-thread. 
```js
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'teste-thread',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
```
### Tabelas do banco
Certifique-se de que as dev dependências foram instaladas corretamente. Logo em seguida rode as migrations, utilizando o sequelize-cli.
```sh
$ yarn sequelize db:migrate
Sequelize CLI [Node: 12.16.1, CLI: 5.5.1, ORM: 5.21.5]
Loaded configuration file "src/config/database.js".
== 20200319011903-create-clients: migrating =======
== 20200319011903-create-clients: migrated (0.036s)
== 20200320032845-create-address: migrating =======
== 20200320032845-create-address: migrated (0.021s)
```

### Data demo
Para iniciar com dados fictícios, rode as seeds.
```sh
$ yarn sequelize db:seed:all
Sequelize CLI [Node: 12.16.1, CLI: 5.5.1, ORM: 5.21.5]
Loaded configuration file "src/config/database.js".
== 20200320124419-clients: migrating =======
== 20200320124419-clients: migrated (0.019s)
```

#### Quase lá...
Agora basta rodar o script dev, instalar um REST Client como [Insomnia](https://insomnia.rest/) para enviar as requisições ou [clonar o front-end](https://github.com/igorraphael/teste-thread-frontend) desta aplicação feita com [ReactJS](https://reactjs.org/).
```sh
$ yarn dev
yarn run v1.22.4
$ nodemon src/server.js
[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `sucrase-node src/server.js`
```


#### Endpoints
Está aplicação possui apenas 2 endpoint.
 - POST   /clients
 - GET    /address 
##### PARAMETROS
- GET espera um query param com nome "tipo" e o valor aceito é um string 'residencial' ou 'comercial'.
- POST espera body JSON contendo : rz_social, fantasia, email, telefone, logradouro, complemento, cep, referencia e tipo. Todos string, sendo obrigatório apenas rz_social, email, telefone, logradouro, complemento, cep e tipo.  

