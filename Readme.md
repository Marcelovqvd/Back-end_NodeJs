 Configurando estrutura
 yarn add express
 yarn add typescript
 yarn tsc --init - cria o tsconfig.json
 yarn add @types/express -D

Para rodar o server:
 Não usar a dist e instalar o ts-node-dev
 yarn add ts-node-dev -D
configurar o scrip dev:server
Agora, para executar o servidor:
yarn dev:server - faz o papel do tsc (q converte o código de Ts para JS) e o papel
do Nodemon (que atualiza o código de forma atuomática)
(Não mais cria a pasta dist)
--transpileOnly p desabilitar a checagem do código (q já é feito pelo VSCode)

editorConfig
yarn add eslint -D
yarn eslint --init
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest

Importando arquivos TS
yarn add -D eslint-import-resolver-typescript - p o código entender as importações ods arquivos typescript;
novas settings em .eslintrc.json

Prettier
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

Debugando NodeJS
flag --inspect em package.json para que o VSCode se conecte ao código em desenvolvimento
