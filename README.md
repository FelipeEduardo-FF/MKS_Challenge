# Projeto de Desafio - Loja de Produtos com Carrinho

## Descrição
Este projeto é uma aplicação web simples que consome uma API REST de produtos para exibir uma lista de produtos de uma loja. A aplicação possui apenas uma página/rota e um carrinho de compras. A lista de produtos é buscada da API e, enquanto os dados estão carregando, um skeleton é exibido. O carrinho permite aos usuários ver os produtos selecionados e ajustar a quantidade de cada item.

## Funcionalidades

### Loja:
- Exibir lista de produtos buscada da API REST.
- Exibir um skeleton enquanto os produtos estão sendo carregados.

### Carrinho:
- Exibir todos os produtos selecionados.
- Permitir aumentar ou diminuir a quantidade de cada produto no carrinho.

## Tecnologias Utilizadas
- **Frontend**: React.js 
- **Estilização**: Tailwind e shadcn
- **Gerenciamento de Estado**: Context API,React Query
- **HTTP Client**: Axios
