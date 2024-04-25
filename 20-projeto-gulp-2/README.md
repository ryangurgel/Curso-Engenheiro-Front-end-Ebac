
# Projeto Módulo 20 - Tarefa EBAC (Curso de Frontend)

  

Este projeto consiste em um conjunto de tarefas automatizadas com Gulp para otimização de arquivos CSS, JS e imagens para um site de comércio eletrônico, desenvolvido como parte do Módulo 20 da tarefa da EBAC no curso de Frontend.

  

## Funcionalidades

  

-  **Concatenação** de arquivos JS e CSS.

-  **Minificação** de arquivos JS e CSS.

-  **Renomeação** de arquivos JS e CSS com sufixo `.min`.

-  **Otimização** de imagens.

-  **Remoção** de comentários de CSS e JS.

-  **Servidor local** para desenvolvimento com **BrowserSync**.

  

## Tecnologias Utilizadas

  

- Node.js

- Gulp e plugins: `gulp-concat`, `gulp-cssmin`, `gulp-uglify`, `gulp-imagemin`

- NPM

- Bootstrap

- FontAwesome

- Owl Carousel

- jQuery

- BrowserSync

  

## Estrutura de Arquivos

  

A estrutura de arquivos do projeto está organizada da seguinte maneira:

  

```plaintext

tarefagulp/
│
├── dist/            # Contém os arquivos otimizados para produção.
│   ├── css/         # CSS compilado e minificado.
│   ├── js/          # JavaScript concatenado e minificado.
│   └── images/      # Imagens otimizadas para redução de tamanho.
│
├── src/             # Arquivos fonte utilizados no desenvolvimento.
│   ├── css/         # Arquivos CSS originais.
│   ├── js/          # Scripts JavaScript originais.
│   └── images/      # Imagens originais antes da otimização.
│
├── node_modules/    # Módulos Node.js instalados como dependências.
│                     # Este diretório é criado pelo npm e não é versionado.
│
├── gulpfile.js      # Script contendo tarefas automatizadas com Gulp.
│                     # Define tarefas como minificação, concatenação, etc.
│
└── package.json     # Arquivo de configuração do projeto com metadados.
                      # Lista as dependências e define scripts úteis.

```
  
  


# Instalação

Para utilizar este projeto, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://seu-repositorio/tarefagulp.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd tarefagulp
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

# Uso

Para executar as tarefas do Gulp, use os seguintes comandos:

- **Desenvolvimento**: Este comando executa um servidor local e inicia o monitoramento de todos os arquivos do projeto para recarregar o navegador automaticamente a cada mudança.
    ```bash
    gulp server
    ```

- **Build**: Gera a versão de produção do projeto com arquivos otimizados.
    ```bash
    gulp
    ```

- **Imagens**: Otimiza todas as imagens e as salva no diretório de distribuição.
    ```bash
    gulp images
    ```


# Autor

Ryan Gurgel - Trabalho Inicial - [RyanGurgel](https://github.com/ryangurgel)

