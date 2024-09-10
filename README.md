# Ponderada-Cypress

Este repositório contém os códigos e exemplos do tutorial **How to Test React using Cypress**. Para realizar os testes, utilizei o site Brazil Journal.

## Índice

- [Ponderada-Cypress](#ponderada-cypress)
  - [Índice](#índice)
  - [Introdução](#introdução)
  - [Configuração do Ambiente](#configuração-do-ambiente)
  - [Execução dos Testes](#execução-dos-testes)
    - [Documentação com Prints](#documentação-com-prints)
  - [Conclusão](#conclusão)

## Introdução

Este projeto utiliza Cypress para testar uma aplicação. Além disso, incluí testes personalizados no site do Brazil Journal.

## Configuração do Ambiente

Para configurar o ambiente de desenvolvimento e executar os testes Cypress, siga os passos abaixo:

1. **Inicialize o projeto Node.js**:
   Execute o comando para criar um arquivo `package.json` básico:
   ```bash
   npm init -y
   ```


2.	**Instale o Cypress**:
Adicione o Cypress como uma dependência de desenvolvimento ao seu projeto:
   ```bash
   npm install cypress --save-dev
   ```

3.	**Abra o Cypress**:
Após a instalação, você pode abrir a interface gráfica do Cypress com o seguinte comando:
```bash
npx cypress open
```


4.	Estrutura de Pastas do Cypress:
Ao abrir o Cypress pela primeira vez, ele criará automaticamente as pastas necessárias no seu projeto, incluindo:
    - cypress/: Contém as pastas e2e, fixtures, support, entre outras.
	- cypress.config.js: Arquivo de configuração.
5.	Criação de Testes:
	- Navegue até a pasta cypress/e2e e crie um arquivo de teste, por exemplo: braziljournal.cy.js.

## Execução dos Testes

- Testando o site do Brazil Journal

No arquivo braziljournal.cy.js, escrevi dois testes: um que verifica se a página principal do Brazil Journal carrega corretamente, e outro que verifica se os títulos das notícias estão visíveis.

### Documentação com Prints

Nesta seção, se encontra prints das execuções dos testes para o site do Brazil Journal. Cada teste documentado é acompanhado de um print que demonstra os resultados e validações feitas durante a execução.

## Conclusão

Este repositório fornece um guia completo de como configurar e executar testes automatizados para uma aplicação web usando Cypress. O Cypress é uma ferramenta poderosa e fácil de configurar, que facilita a automação de testes de interface para aplicações modernas. Com ele, podemos simular interações reais de usuários e garantir que os componentes da aplicação estejam funcionando conforme o esperado. Adaptei as instruções do materia proposta para testar sites reais como o Brazil Journal. Isso mostrou a flexibilidade do Cypress para diferentes tipos de aplicações e páginas, desde páginas dinâmicas com React até sites de conteúdo.