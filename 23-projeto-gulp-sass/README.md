# Projeto Módulo 23 - Tarefa EBAC (Curso de Frontend)

Este projeto aprimora as funcionalidades do Projeto Módulo 21, substituindo CSS por SCSS e integrando melhores práticas de organização SCSS com a utilização do Gulp. Além de incluir um servidor utilizando `browser-sync`, este projeto continua a oferecer otimização de arquivos SCSS, JS e imagens. Realizado como parte do curso de Frontend da EBAC, este projeto visa aprimorar as habilidades de preprocessamento CSS e automação de tarefas.

## Funcionalidades

- **Compilação** de arquivos SCSS para CSS.
- **Autoprefixação** para garantir a compatibilidade do CSS.
- **Concatenação** de arquivos CSS e JS.
- **Minificação** de arquivos CSS e JS.
- **Renomeação** de arquivos com sufixo `.min`.
- **Otimização** de imagens.
- **Servidor local** para desenvolvimento com **BrowserSync** que sincroniza e recarrega o browser automaticamente.

## Tecnologias Utilizadas

- Node.js
- Gulp e plugins: `gulp-sass`, `gulp-autoprefixer`, `gulp-concat`, `gulp-cssmin`, `gulp-uglify`, `gulp-imagemin`
- NPM
- SCSS
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
│   ├── css/         # CSS compilado, autoprefixado e minificado.
│   ├── js/          # JavaScript concatenado e minificado.
│   └── images/      # Imagens otimizadas para redução de tamanho.
│
├── src/             # Arquivos fonte utilizados no desenvolvimento.
│   ├── css/         # Arquivos SCSS originais.
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
    git clone https://github.com/ryangurgel/Curso-Engenheiro-Front-end-Ebac.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd Curso-Engenheiro-Front-end-Ebac/23-projeto-gulp-sass
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

# Uso

Para executar as tarefas do Gulp, use os seguintes comandos:

- **Build**: Compila, autoprefixa, concatena, minifica, otimiza, executa um servidor local e inicia o monitoramento de todos os arquivos.
    ```bash
    gulp
    ```

# Autor

Ryan Gurgel - Trabalho Inicial - [RyanGurgel](https://github.com/ryangurgel)

