### Instalando o projeto no seu PC

Instale o projeto em seu ambiente de desenvolvimento seguindo as etapas a seguir.

> NOTA: caso o seu PC esteja com Windows, recomendo trabalhar com um WSL Ubuntu. Acesse o link https://www.aluiziodeveloper.com.br/ambiente-de-desenvolvimento-no-windows-10-11-com-wsl/ para mais informações.

1. No Shell, clonar o repositório do projeto em seu PC.

```shell
git clone https://github.com/conexnetworks/apivendas2024-course-start-code.git api-vendas-2024
```

2. No Shell, acessar a pasta do projeto e instalar as dependências com o `Npm`.

```shell
cd api-vendas-2024

npm ci
```

3. No Shell, executar o comando `code .` para abrir o Visual Studio Code com o projeto carregado.

4. Criar o arquivo de variaveis de ambiente `.env` na pasta raiz do projeto, incluindo o conteúdo a seguir:

```shell
PORT=3333
NODE_ENV=development
API_URL=http://localhost:3333

# Database
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432 # 5433 para testes de integração
DB_SCHEMA=public
DB_NAME=postgres
DB_USER=postgres
DB_PASS=postgres
JWT_SECRET=my_secret
JWT_EXPIRES_IN=86400

# Upload com Cloudflare/Amazon S3
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_R2_URL=
AWS_BUCKET_NAME=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

### Executando o projeto em seu PC

O projeto inicial contém apenas o arquivo `server.ts` com o um `console.log`. Executar o servidor e observar a mensagem `Olá Dev!` na console do shell:

```shell
npm run dev
```

### Executando migrações
```shell
typeorm -- -d ./src/common/infrastructure/typeorm/index.ts migration:run
```

### Executando testes unitários
```shell
npm run test -- in-memory.repository
```

### Executando testes de integração
```shell
npm run test:int -- products-typeorm.repository
```


[Servidor no Discord](https://discord.gg/3J87BMz5fD)

[LinkedIn](https://www.linkedin.com/in/jorgealuizio/)
