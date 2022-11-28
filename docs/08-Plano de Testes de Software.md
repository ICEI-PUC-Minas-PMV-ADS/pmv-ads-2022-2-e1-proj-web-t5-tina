# Plano de Testes de Software

A seguir são descritos os testes funcionais a serem executados: 

| Caso de Teste | CT-01 - Cadastro no site |
|---------------|--------------------------|
| Requisitos Associados | RF-0 - Funcionalidade sem requisito em específico |
| Objetivo do Teste | Verificar se o cadastro é realizado da maneira correta, com as validações e armazenamento no LocalStorage |
| Passos | 1) Abri o navegador 2) Acessar o site 3) Na página inicial selecionar "Cadastre-se" 4) Na tela de cadastro, inserir nos campos do formulário as informações para o cadastro |
| Critérios de Êxito | - A tela de cadastro deve abrir corretamente - Ao inserir as informações do forumlário, deve ser informado se os campos foram digitados corretamente, indicado pela cor verde, caso contrário uma mensagem aparecerá em cada item do formrlário em vermelho informando os requisitos necessários. - Caso o usuário não preencha os campos ou deixe algum em branco, uma mensagem é exibida informando sobre o preenchimento. - Caso o e-mail já tenha sido cadastrado uma mensagem é exibida sobre o ocorrido. - Campos preenchidos corretamente devem abrir a caixa de texto informado que o usuário foi cadastrado.  

| Caso de Teste | CT-02 -Login|
|---------------|--------------------------|
| Requisitos Associados | RF-0 - Funcionalidade sem requisito em específico |
| Objetivo do Teste | Realizar login |
| Passos | 1) Abri o navegador 2) Acessar o site 3) Na página inicial inserir os dados de login 4) Selecionar o botão "entrar" |
| Critérios de Êxito | - A tela de login deve abrir corretamente - O login correto deve encaminhar para o site - Ao digitar as informações erradas o usuário deve ser avisado por uma mensagem que os dados estão incorretos - O icone de visualização da senha deve exibir a senha ao ser selecionado
