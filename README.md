## Block Chain Vote Webservice

### 1. Introdução

Esse webservice servirá de apoio para as aplicações e soluções utilizadas no sistema de voto eletrônico em blockchain (como a aplicação front end em Angular e a compilação / deploy do contrato).

Essa página terá o intuito de documentar os parâmetros e endpoints do webservice e seu funcionamento.

### 2. Instalação

O webservice utiliza Node.JS, para realizar a instalação, depois do GIT e NPM estarem devidamente instalados nessa máquina:

git clone https://github.com/arthurklugneto/VotoEletronicoWebservice.git
cd [pasta criada]
npm intall

### 3. Configurar o Webservice

A configuração do banco de dados pode ser feito pelo arquivo **db.js** onde será necessário informar um caminho para um banco do MongoDB válido.

A configuração dos parâmetros de token a serem utilizados podem ser feitas no arquivo **jwt-options**. Adicionalmente as chaves de criptografia podem ser alteradas com os arquivos da pasta **/secret**.

A porta onde o WS será executado pode ser alterado no arquivo **server.js**.

### 4. Estrutura

O WS utiliza, entre várias outras, as seguintes tecnologias:

* Node.JS - Motor JS;
* MongoDB - Banco de Dados;
* Express - Framework para rotas, controllers, etc.
* Morgan  - Para depuração
* Mongoose- Gerenciamento de models, schemas, etc.
* Passport & JWT - para autenticação e geração de tokens. O WS não é baseado em Session e sim o conceito de Web Token.
* Bodyparser.

##### api/auth
Rules para autenticação e geração dos tokens.
##### api/controller
Controllers para definir o comportamento dos endpoints.
##### api/enums
Enumeradores.
##### api/error
Erros HTTP pra retorno nos controllers.
##### api/handler
Handler para a validação de dados.
##### api/manager
Alguns gerenciadores internos.
##### api/model
Entidades / Objetos utilizados pelo WS.
##### api/route
Definição das rotas e endpoints.

### 5. Endpoints

Aqui estão as definições dos endpoints que serão utilizados pelo mundo externo.

**Todos os Endpoints são precedidos de /v1/**

##### /
**GET**
Retorna o status / nome do webservice caso o mesmo esteja em execução

##### /admin (Admin Only)
**GET**
Cria usuário admin no banco de dados com e-mail admin@admin.com e senha admin123.

##### /adminRemove (Admin Only)
**GET**
Remove o usuário admin do banco de dados.

##### /auth/
**POST**
Gera novo token.
**DELETE** 
Parametros : *:token*
Remove o token :token.

##### /users/
**POST**
Cria novo usuário
**GET** 
Parametros : *:id*
Retorna dados do usuário :id.


EM DEFINIÇÃO AINDA.



