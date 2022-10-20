# Arquitetura da Solução

Neste tópico, são mostrados os detalhes técnicos da estruturação do software com seus componentes da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Os componentes e as conexões entre si estão representados na figura a seguir: 

<p align = "center">
  <img src = "img/diagrama_de_componentes.jpg">
</p>

A solução implementada conta com os seguintes módulos:

- <b>Navegador</b>: Interface básica do sistema.
  - <b>Páginas Web</b> - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
  - <b>Armazenamento Local</b> - Armazenamento mantido no Navegador do usuário, onde são armazenados dados baseados em JSON. São eles:
    - <b>Sessão de usuário</b> -  Informações de login do usuário.
    - <b>Atividade</b> - Itens adicionados com informação de data e hora cuja visualização está no calendário. 
    - <b>Lista</b> - Itens adicionados a uma lista de organização sem data definida.
    - <b>Hábito</b> - Itens adicionados para acompanhamento diário da execução.
    - <b>Categorias</b> - Marcadores de organização criados pelo usuário.
- <b>APIs externas</b> - Serviços disponibilizados por outros sistemas, são usados:
  - <b>APIs de Login</b> - Permitem o cadastro e login do usuário por contas pré-existentes em outros sistemas.
  - <b>API de notificação por email</b> - Permite o envio de informações e notificações por email. 
- <b>Hospedagem</b> - Local  na  Internet  onde  as  páginas  são  mantidas  e  acessadas  pelo navegador. 

## Tecnologias Utilizadas

- Linguagens utilizadas para desenvolver o projeto: HTML, CSS, JavaScript.
- IDEs de desenvolvimento: Visual Studio Code.
- Plataforma para hospedagem do site: Heroku.
- Plataforma para repositório dos arquivos: GitHub.
- Ferramenta de versionamento: Git.
- Ferramenta para a criação de logo e imagens: Canva.
- Ferramenta para crição de template: Figma.
- Ferramenta para diagramação dos componentes: Diagrams.net.


## Hospedagem

A plataforma Heroku foi escolhida por prover um ambiente em nuvem para hospedar, manter e disponibilizar o site do projeto, que pode ser acessado através da URL: 
https://projeto-tina.herokuapp.com 
A publicação do site no Heroku se dá através de um vínculo entre a plataforma e o repositório de arquivos, encontrado no link:
https://git.heroku.com/projeto-tina
As atualizações ao sistema são disponibilizadas por submissões do projeto via git a plataforma.
