# gerenciador-de-treinos-front-end-avancado

Este projeto, intitulado gerenciador de treinos, compõe o MVP desenvolvido para a sprint de **Desenvolvimento Front-End Avançado** do curso de pós-graduação em Desenvolvimento Full Stack. O gerenciador de treinos é uma aplicação web responsável por cadastrar esportistas e registrar treinos vinculados a cada esportista. O presente documento ressalta aspectos do desenvolvimento voltados ao front-end.

A aplicação consiste em uma _Single Page Aplication_ (SPA) composta por 3 entidades:
1. Home: registro e visualização dos esportistas cadastrados;
2. Esportista: registro e visualização de dados de um esportista, além do registro e visualização de treinos cadastrados;
3. Treino: registro e visualização de dados de um treino.

O projeto Figma para melhor visualização da aplicação se encontra disponível na seguinte URL:
https://www.figma.com/design/S7DmWNqJHiSf24Jdp2Oktk/MVP-Desenvolvimento-Front-End-Avan%C3%A7ado?node-id=0-1&t=aNG2UGs6Bbh68KSO-1

O link direto para o protótipo em Figma se encontra na seguinte URL:
https://www.figma.com/proto/S7DmWNqJHiSf24Jdp2Oktk/MVP-Desenvolvimento-Front-End-Avan%C3%A7ado?node-id=19-3&t=jnF6bmwBtxoUgtQZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A3

A aplicação foi desenvolvida utilizando a bilbioteca `React`, sendo o build feito através do `create-react-app`.

___
## Visualização da aplicação

Para visualizar a aplicação em um navegador, os seguintes passos devem ser contemplados em sequência:

1. Instalação de um ambiente de execução de JavaScript, como o `Node.js`: https://nodejs.org/pt/download/package-manager;
2. Executar o seguinte comando na raiz do projeto para a instalação das dependências necessárias da aplicação:
  ```
  npm install
  ```
3. Executar o seguinte comando para inicializar em modo de desenvolvedor a aplicação:
  ```
  npm start
  ```

Com isso, uma aba no navegador padrão será aberta renderizando a entidade Home, que está associada a rota inicial.
>[!NOTE]
> A porta _default_ utilizada é a 3000.

___
## Principais dependências adicionais utilizadas
Além das próprias dependências disponibilizadas no build, a aplicação constantemente recorre a:
react-router-dom



   
