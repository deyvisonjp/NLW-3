## NodeJs - Rocketseat NLW#3

### Comando utilizado para iniciar o projeto   
` yarn init -y `

### Biblitecas utilizadas:
- TypeScript: `yarn add typescript -D`
    - inicializar tsc: `yarn tsc --init`
    - pacote para executar projeto: `yarn add ts-node-dev -D`
    - Configurar scripts

- Express: `yarn add express` ...   
    Como estamos usando TypeScript: `yarn add @types/express -D`

- Banco de dados sqlite com integração node ([typeorm.io](typeorm.io))    
    `yarn add typeorm sqlite3` <br/>
    _Para informações sobre execução do typeorm_ `yarn typeorm` <br/>
    _Configurar Script para typeorm_
    - Após as configurações no arquivo ormconfig, executar no terminal: <br/>
    `yarn typeorm migration:create -n create_orphanages` 
    - Criando a primeira migration: `yarn typeorm migration:run`
    _Para melhor visualização do banco_: Beekeeper Studio

