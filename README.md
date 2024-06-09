# Desafio Centec

Projeto para programa de estagio, utilizando framework Angular e Bootstrap, objetivo é apresentar um gerencimento de alunos, com funcionalidades de adicionar, editar e excluir. O usuario ainda poderá filtrar e ordenar de forma crescente e descrente os alunos, por meio do seu nome.

## Recebendo o projeto

- Crie uma nova pasta e abra o git, posteriormente utilize `git remote add {NomedoRepositório} https://github.com/CaioSchmidt10/Desafio-Centec.git` para adicionar o repositório remoto a sua maquina.
- Utilize `git pull origin master` para receber o projeto.

## Atulizando

- Com o projeto em mãos, abra no VS code e em seguida abra o terminal, utilize `npm install` ou `npm update` para o repositório local receber todas as dependências do projeto.

## Iniciando dados mockados

- Utilizando do json server, podemos utilizar os dados apresentados ao usuário, utilize `npx json-server db.json` para iniciar o servidor json.
- Ele irá gerar um link localhost ( http://localhost:3000/alunos ), onde irá mostrar todos os dados dos alunos e onde eles são depositados, clique no link para ser redirecionado no seu browser.

## Iniciando o projeto

- Com todas as dependências baixadas e o servidor json incializado, utilize `ng serve` para iniciar o projeto, ele irá gerar um link localhost ( http://localhost:4200 ), clique-o para ser redirecionado ao seu browser com o site funcionando perfeitamente.

**PROJETO INICIALIZADO!**

## Errata

- As funcionalidades de adicionar e editar um aluno não aparecem automaticamente, é preciso reiniciar a pagina para assim o aluno adicionado ou editado apareça corretamente!
- O botão de adicionar, depois do usuário editar ou tentar editar algum aluno, não se torna funcional, pois continua como a função de editar.

## Framework e serviços utilizados

- **Framework Angular** : para criação de componentes e organização do projeto.
- **Bootstrap** : para estilização de formularios e botões e responsividade das telas.
- **Angular Material**: para funcionalidade dos formulários.
- **Json Server** : para os dados serem mockados e utilizados.


