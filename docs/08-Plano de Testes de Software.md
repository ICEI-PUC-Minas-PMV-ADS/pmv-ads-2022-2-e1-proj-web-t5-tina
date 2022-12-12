# Plano de Testes de Software

A seguir são descritos os testes funcionais a serem executados:

| Caso de Teste | CT-01 - Criação de Atividade |
|---------------|--------------------------|
| Requisitos Associados | RF-01 - O site deve permitir que o usuário crie atividades, associe os cadastros a unidades de tempo no calendário e os classifique quanto ao âmbito e nível de prioridade. |
| Objetivo do Teste | Verificar se a criação de atividade é realizada da maneira correta, com as validações e armazenamento no LocalStorage |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial selecionar o ícone de criar atividade 4) No modal de criação de atividade, inserir nos campos do formulário as informações para a criação da atividade 5) Selecionar o botão "Criar" |
| Critérios de Êxito | - O modal de criação de atividade deve abrir corretamente - Ao inserir as informações do formulário, deve ser informado se todos os campos foram preenchidos, caso contrário, os campos ficarão com as bordas em vermelho e a atividade não será criada. - Caso o título informado já tenha sido associado a uma atividade já criada, um alerta será exibido pelo browser. - Ao clicar no ícone para fechar o modal, o mesmo deve ser recolhido. - Ao abrir novamente o modal, os campos deverão estar vazios. - Ao finalizar a criação da atividade, um novo modal que eventualmente for aberto, também deverá possuir seus campos vazios. - Os "inputs" para data inicial e data final não deverão aceitar datas anteriores à data atual. - Após concluir a criação, um elemento, com o título da atividade, deve estar presente no calendário e associado corretamente ao dia inicial definido pelo usuário.

| Caso de Teste | CT-02 - Editar e Excluir Atividade |
|---------------|--------------------------|
| Requisitos Associados | RF-04 - O site deve permitir que as atividades sejam editadas, inclusive entre as unidades de tempo no calendário. RF-05 - O site deve permitir que o usuário sinalize uma atividade como finalizada ou cancelada. |
| Objetivo do Teste | Verificar se a edição e exclusão de atividades são realizadas da maneira correta, com as validações e armazenamento ou exclusão no LocalStorage |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial selecionar a atividade que se deseja atualizar ou excluir no calendário 4) No modal de edição de atividade, inserir nos campos do formulário as informações para a atualização da atividade 5) Selecionar o botão "Atualizar" para atualizar a atividade com os novos dados, ou "Excluir" para apagar a atividade. |
| Critérios de Êxito | - O modal de edição de atividade deve abrir corretamente, ao selecionar uma atividade no calendário. - Todos os campos devem estar preenchidos corretamente com os dados da atividade selecionada - Ao inserir as informações do formulário, deve ser informado se todos os campos foram preenchidos, caso contrário, os campos ficarão com as bordas em vermelho e a atividade não será atualizada. - Caso o título informado já tenha sido associado a uma atividade já criada, um alerta será exibido pelo browser, a menos que o título da atividade selecionada não seja alterado, indicando que a atividade já existente é a mesma que se deseja atualizar. - Ao clicar no ícone para fechar o modal, o mesmo deve ser recolhido. - Ao abrir novamente o modal, os campos deverão estar preenchidos de acordo com a atividade selecionada. - Ao finalizar a edição da atividade, um novo modal que eventualmente for aberto, também deverá possuir seus campos correspondentes à atividade selecionada. - Os "inputs" para data inicial e data final não deverão aceitar datas anteriores à data atual. - Após concluir a criação, um elemento, com o título da atividade, deve estar presente no calendário e associado corretamente ao dia inicial definido pelo usuário. - Mudanças de data deverão ser refletidas no calendário, com o elemento da atividade sempre posicionando-se de acordo com a data inicial selecionada pelo usuário. - Alterações no título também deverão ser visíveis no calendário. - Ao excluir uma atividade, uma mensagem de confirmação deve ser emitida pelo browser. - Caso a resposta seja positiva, a atividade não deverá mais aparecer no calendário.

| Caso de Teste | CT-03 - Cadastro no site |
|---------------|--------------------------|
| Requisitos Associados | RF-0 - Funcionalidade sem requisito em específico |
| Objetivo do Teste | Verificar se o cadastro é realizado da maneira correta, com as validações e armazenamento no LocalStorage |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial selecionar "Cadastre-se" 4) Na tela de cadastro, inserir nos campos do formulário as informações para o cadastro 5) Selecionar o botão "Cadastrar" |
| Critérios de Êxito | - A tela de cadastro deve abrir corretamente - Ao inserir as informações do formulário, deve ser informado se os campos foram digitados corretamente, indicado pela cor verde, caso contrário, uma mensagem aparecerá em cada item do formulário em vermelho informando os critérios - Caso o usuário não preencha os campos ou deixe algum em branco, uma mensagem é exibida informando sobre o preenchimento - Caso o e-mail informado já tenha sido cadastrado uma mensagem é exibida sobre o ocorrido - Após todos os campos serem preenchidos corretamente deve abrir a caixa de texto informado que o usuário foi cadastrado

| Caso de Teste | CT-04 - Login|
|---------------|--------------------------|
| Requisitos Associados | RF-0 - Funcionalidade sem requisito em específico |
| Objetivo do Teste | Verificar se o login está ocorrendo corretamente |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial inserir os dados de login 4) Selecionar o botão "entrar" |
| Critérios de Êxito | - A tela de login deve abrir corretamente - O login correto deve encaminhar o usuário para a plataforma do site - Ao digitar as informações erradas o usuário deve ser avisado por uma mensagem que os dados estão incorretos - O icone de visualização da senha deve exibir a senha ao ser selecionado

| Caso de Teste | CT-05 - Perfil|
|---------------|--------------------------|
| Requisitos Associados | RF-0 - Funcionalidade sem requisito em específico |
| Objetivo do Teste | Verificar o funcionamento correto da tela perfil |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Realizar o login 4) Selecionar o botão "entrar" 5) Ser direcionado para o Perfil |
| Critérios de Êxito | - A tela do Perfil deve abrir corretamente exibindo nome e e-mail do usuário que realizou o login - Ao inserir uma foto e clicar em salvar, a imagem selecionada deve ser exibida no campo foto


| Caso de Teste | CT-06 - Temas e estilização do site|
|---------------|--------------------------|
| Requisitos Associados | RF-11 - O site deve possibilitar edições de design como mudanças de cores, plano de fundo e adesivos. |
| Objetivo do Teste | Verificar se a ferramenta de mudança do tema de cores e ícones do site está ocorrendo corretamente |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Acessar a página de estilização no menu ferramentas 4) Clicar no menu drop-down para exibir as opções de estilização 5) Selecionar o tema desejado | 
| Critérios de Êxito | - A tela de estilização deve abrir corretamente - O menu drop-down deve exibir os temas - O tema selecionado deve ser apliacado na página - A mudança de tema deve ocorrer caso seja selecionado outro tema.

| Caso de Teste | CT-07 - Criação, edição e exclusão de Categorias |
|---------------|--------------------------|
| Requisitos Associados | RF-01 - O site deve permitir que o usuário crie atividades, associe os cadastros a unidades de tempo no calendário e os classifique quanto ao âmbito e nível de prioridade. |
| Objetivo do Teste | Verificar se a criação, edição e exclusão de categorias é realizada da maneira correta, com as validações e armazenamento no LocalStorage |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial selecionar o ícone de criar categoria 4) No modal de criação de categoria, inserir nos campos do formulário as informações para a criação da atividade 5) Selecionar o botão "Salvar" |
| Critérios de Êxito | - O modal de criação de categoria deve abrir corretamente - Ao inserir as informações do formulário e selecionar a cor da categoria, deve ser aparecer uma lista suspensa com as opções de cores. Ao excluir uma categoria, uma mensagem de confirmação deve ser emitida pelo browser. - Caso a resposta seja positiva, a categoria não deverá mais aparecer na tabela de edição de categorias.

| Caso de Teste | CT-08 - Parabenização |
|---------------|--------------------------|
| Requisitos Associados | RF-12 -O site parabeniza o usuário quando uma atividade é marcada como concluída antes do prazo. |
| Objetivo do Teste | Verificar se a parabenização por concluir uma atividade antes da data final definida é realizada da maneira correta |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página, no calendário, selecionar a atividade que se deseja concluir 4) No modal de edição de atividade, selecionar o botão "Concluir" |
| Critérios de Êxito | - O modal de edição de atividade deve abrir corretamente - Ao selecionar acionar o botão "Concluir", um áudio deverá ser reproduzido pelo browser e a atividade devera desaparecer do calendário e ser excluída do Local Storage.

| Caso de Teste | CT-09 - Criando, editando e excluindo Categorias |
|---------------|--------------------------|
| Requisitos Associados | RF-01 - O site deve permitir que o usuário crie atividades, associe os cadastros a unidades de tempo no calendário e os classifique quanto ao âmbito e nível de prioridade. |
| Objetivo do Teste | Verificar se a criação, edição e exclusão de categorias é realizada da maneira correta, com as validações e armazenamento no LocalStorage |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial selecionar o ícone de criar categoria 4) No modal de criação de categoria, inserir nos campos do formulário as informações para a criação da atividade 5) Selecionar o botão "Salvar" |
| Critérios de Êxito | - O modal de criação de categoria deve abrir corretamente - Ao inserir as informações do formulário e selecionar a cor da categoria, deve ser aparecer uma lista suspensa com as opções de cores. Ao excluir uma categoria, uma mensagem de confirmação deve ser emitida pelo browser. - Caso a resposta seja positiva, a categoria não deverá mais aparecer na tabela de edição de categorias.

| Caso de Teste | CT-10 - Criando um Item e Hábito|
|---------------|--------------------------|
| Requisitos Associados | RF-03 - O site deve permitir que o usuário crie itens em uma lista não associada a unidades de tempo no calendário RF-08 - O site deve permitir que o usuário crie e associe anotações de hábitos ao calendário |
| Objetivo do Teste | Verificar se as criações de itens ou hábitos são realizadas da maneira correta, com as validações e armazenamento no LocalStorage |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial selecionar o ícone de criar Item ou Hábtio 4) No modal de criação que surgirá, preencher os campos obrigatórios do formulário com as informações para a criação 5) Selecionar o botão "Criar" |
| Critérios de Êxito | - O modal de criação de Item ou de Hábito deve abrir corretamente - Ao preencher todos os campos do formulário e clicar em "Criar", o modal deve ser fechado e o novo Item ou Hábito deve aparecer em sua respectiva lista na cor da categoria associada. 

| Caso de Teste | CT-11 - Editando e excluindo Item e Hábito|
|---------------|--------------------------|
| Requisitos Associados | RF-03 - O site deve permitir que o usuário crie itens em uma lista não associada a unidades de tempo no calendário RF-08 - O site deve permitir que o usuário crie e associe anotações de hábitos ao calendário |
| Objetivo do Teste | Verificar se a edição e exclusão de itens e hábitos são realizadas da maneira correta, com as validações e armazenamento no LocalStorage |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial há a lista de Itens ou a de Hábitos onde é possível ver os já criados 4) Selecionar o item ou hábito a ser editado ou excluído clicando nele 5) Escolher a opção "Atualizar" ou "Remover" |
| Critérios de Êxito | - O modal de criação de Item deve abrir corretamente - Ao alterar um dos campos e clicar em "Atualizar" e abrir novamente o mesmo elemento, o campo alterado deve estar atualizado. - Caso o campo alterado seja nome ou cor, devem mudar na visualização da lista também. - Caso escolha a opção "Remover", então uma mensagem de confirmação deve ser emitida pelo browser. - Caso a resposta seja positiva, o elemento não deverá mais aparecer na sua respectiva lista.

| Caso de Teste | CT-12 - Filtrar por prioridades ou categorias |
|---------------|--------------------------|
| Requisitos Associados | RF-07 - O site deve permitir que o usuário filtre as atividades por título, categoria ou prioridade |
| Objetivo do Teste | Verificar se os filtros de prioridade ou categorias se aplicam corretamente sob os itens, hábitos e atividades |
| Passos | 1) Abrir o navegador 2) Acessar o site 3) Na página inicial no canto superior esquerdo deve clicar no botão "Filtrar" 4) Selecionar o tipo de Filtro escolhido |
| Critérios de Êxito | - A caixa seletora dos filtros deve aparecer ao clicar no botão "Filtrar" nas telas de visualização mensal ou diária. - Ao escolher um filtro, apenas elementos com aquela informação associada devem aparecer - Ao escolher a opção "Todos", todos os elementos devem aparecer.
