<h1 align="center"> Agência e+plus </h1>

<h4 align="center"> Consumindo api para listar produtos no carrinho de compras </h4>

---

<h3>Pagína principal</h3>
<div align="center">
    <img src="https://github.com/N0N4T0/challenge-front/blob/master/agencia-e-plus/public/images/home.jpg" > 
</div>


## Sobre
<p align="justify">Projeto que permite listar no carrinho de compras produtos específicos consumidos pela api. Desta forma exibirá informações como preço, imagem, descrição e quantidade.</p>

## Como iniciar

Depois de realizar o download do projeto, na pasta específica, executar no cmd ou pelo próprio visual studio code:

### `yarn` 
para realizar o donwload de todas as dependências

### `yarn start`

Roda o aplicativo em modo de desenvolvimento.\
Open [http://localhost:3000](http://localhost:3000) para ver no browser.

## Technologies
- **HTML**
- **CSS**
- **GIT**
- **GITHUB**
- **JAVASCRIPT**
- **REACTJS**
- **TYPESCRIPT**
- **YARN**

## Concepts
- **axios**
- **context**
- **miragejs**
- **react**
- **react-dom**
- **react-router-dom**
- **react-scripts**
- **styled-components**
- **typescript**
- **useEffect**
- **useState**
- **web-vitals**
- **@types**

## Explicações 
1) MIRAGEJS
- O mirage.js tem um banco de dados interno, então se por um acaso eu necessita-se de um pre carregamento ja estaria salvo um valor específico a ser carregado no carrinho.
- O mirage.js também facilita uma melhor integração com um back-end mesmo que ela ainda não exista já pode-se prever a estrutura que o front-end precisa e já deixar pre configurado para quando back-end estiver pronto.

2) Formação do preço
- Considerei melhor criar uma formatação para o preço afim de poder realizar a soma de modo otimizado

3) Contexto
- De modo a pensar que o projeto pode crescer e necessitar de funções e chamadas em outros componentes filhos, criei um context para resolver essa situação.

4) Método substring()
- Na carrinho será exvido da posição da 0 a 35 da cadeia de strings, depois disso será adcionado os ...

Obs.:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
