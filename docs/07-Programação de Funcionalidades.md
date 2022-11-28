# Programação de Funcionalidades
  As telas desenvolvidas para cada funcionalidade do sistema são exibidas neste tópico. O endereço pode ser acessado no seguitne link: (link)


Nesta seção são apresentadas as funcionalidades do sistema.

## Criação de Atividade (RF-01)
### Desenvolvedor(a): Pedro Mota Cassemiro

O modal de criação de atividade apresenta os campos a serem preenchidos pelo usuário. Os campos são: Título, descrição, data inicial, data final, horário inicial, horário final, categoria, prioridade e periodização. A fim de tornar as atividades únicas, o título deve ser único e atua como um identificador da atividade criada. Ao tentar incluir uma atividade com o mesmo título, um alerta é exibido pelo browser sinalizando que já há atividade registrada no banco com o mesmo título. Todos os campos possuem preenchimento obrigatório, caso algum deles não seja preenchido, seu contorno se torna destacado em vermelho e a atividade não é armazenada no Local Storage. Ao concluir a ação, ou cancelá-la, fechando o modal, todos os campos são reiniciados e preparados para uma nova inserção de dados.

<img src="img/criar-atividade-JSON.PNG" alt="Criar-atividade">

Na imagem é possível observar, em Local Storage, duas atividades já criadas. A segunda, de índice 1, é expandida e apresenta todos os seus campos e valores. Na janela de "Nova Atividade", à esquerda, está um exemplo de atividade com seus campos preenchidos, prestes a ser criada.

### Requisitos atendidos

RF-01 - O site deve permitir que o usuário crie atividades, associe os cadastros a unidades de tempo no calendário e os classifique quanto ao âmbito e nível de prioridade.

### Artefatos da funcionalidade

- tela inicial+criacoes.html
- scripts.js
- tela inicial+criacoes.css
- logo.png
- favicon.ico
- /Images

```js
const titulo = document.getElementById('titulo')
const descricao = document.getElementById('descricao')
const dataInicio = document.getElementById('data-inicio')
const dataFim = document.getElementById('data-fim')
const horarioInicio = document.getElementById('horario-inicio')
const horarioFinal = document.getElementById('horario-final')
const categoria = document.getElementById('categoria')
const prioridade = document.getElementById('prioridade')
const periodizacao = document.getElementById('periodizacao')

const campos = [titulo, descricao, dataInicio, dataFim, horarioInicio, horarioFinal, categoria, prioridade, periodizacao]

const getDados = () => JSON.parse(localStorage.getItem("dbAtividade")) ?? [];
const setDados = (dbAtividade) => localStorage.setItem("dbAtividade", JSON.stringify(dbAtividade));

const criarAtividade = (atividade) => {
    const dbAtividade = getDados();
    dbAtividade.push(atividade);
    setDados(dbAtividade)
}

const limparCampos = () => {
    const inputs = document.querySelectorAll('form input')
    inputs.forEach(input => input.value = '')

    const textareas = document.querySelectorAll('form textarea')
    textareas.forEach(textarea => textarea.value = '')

    const selects = document.querySelectorAll('form select')
    selects.forEach(select => select.value = '')
}

const limparErros = () => {
    titulo.classList.remove('campo-vazio')
    descricao.classList.remove('campo-vazio')
    dataInicio.classList.remove('campo-vazio')
    dataFim.classList.remove('campo-vazio')
    horarioInicio.classList.remove('campo-vazio')
    horarioFinal.classList.remove('campo-vazio')
    categoria.classList.remove('campo-vazio')
    prioridade.classList.remove('campo-vazio')
    periodizacao.classList.remove('campo-vazio')
}

const isDadosValidos = (atividade) => {

    const atividades = getDados()
    var controlador = 0;
    var validade = true
    atividades.forEach(dadoAtividade => {

        if (dadoAtividade.titulo == atividade.titulo) {
            controlador++
        }
    });

    if (controlador != 0) {
        validade = false
        alert('Já existe atividade com o mesmo título registrada.')
    }
    return validade       
}

const salvarAtividade = () => {
    var camposVazios = 0;

    campos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('campo-vazio')
            camposVazios++
        } else {
            campo.classList.remove('campo-vazio')
        }
    });

    if (camposVazios == 0) {
        const atividade = {
            titulo: titulo.value,
            descricao: descricao.value,
            dataInicio: dataInicio.value,
            dataFim: dataFim.value,
            horarioInicio: horarioInicio.value,
            horarioFinal: horarioFinal.value,
            categoria: categoria.value,
            prioridade: prioridade.value,
            periodizacao: periodizacao.value
        }
        if (isDadosValidos(atividade)) {
            criarAtividade(atividade)
        }
        onOff('atividade')
    }
}

document.getElementById('criar-atividade')
    .addEventListener('click', salvarAtividade)
```

### Instruções de acesso

No menu lateral, deve-se clicar no botão de criar atividade, com o ícone de bloco de notas. Uma janela irá aparecer no centro da tela e terá os campos a serem preenchidos pelo usuário para registrar a atividade no Local Storage. Ao terminar de preencher todos os campos, deve-se clicar no botão “Criar”.

## Criação, leitura e exclusão Categorias (RF-01)
Desenvolvedor(a): Diana Santiago Oliveira dos Santos

A criação das categorias permite que os usuários categorizem por âmbito suas atividades, itens e hábitos. 

<p align = "center">
  <img src = "img/nova_categoria.PNG">
</p>

## Artefatos da funcionalidade

- tela inicial+criacoes.html
- scripts.js
- tela inicial+criacoes.css
- nova_categoria.png

#### Estrutura dos dados 

```js
const titulo_categoria =  document.getElementById('titulo')
const cor_categoria =  document.getElementById('cor-categoria')

const getCategoria = () => JSON.parse(localStorage.getItem("dbCategoria")) ?? [];
const setCategoria = (dbCategoria) => localStorage.setItem("dbCategoria", JSON.stringify(dbCategoria));

const criarCategoria = (categoria) => {
    const dbCategoria = getDados();
    dbCategoria.push(categoria);
    setDados(dbCategoria)
}
```


## Visualização Mensal do calendário (RF-02)
### Desenvolvedor(a): Pedro Henrique Diniz Luiz

A Visualização Mensal conta com um botão funcional que exibe o calandário com as atividades do mês criada pelo usuário.  

<img src ="img/calendario-visuMensal2 (1).png">
<img src ="img/calendario-visuMensal2 (2).png">


## Requisitos atendidos

RF-02 - O site deve apresentar, em sua página inicial, um calendário do ano corrente com as atividades criadas e permitir a alteração da visualização do calendário para diferentes períodos de tempo.

### Artefatos da funcionalidade

- visao-mensal.html
- visao-mensal.css
- mensal.js
- perfil-sem-foto-220615.png

### Estrutura dos dados 

``` js
function toggle(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = 'block';
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
}
```


## Tela Criação de itens e hábitos (RF-08, RF-03, RF-09) 
Desenvolvedor(a): Ellen Caroline Trindade Gonçalves Cândido

## Edição e Exclusão de Atividade (RF-04, RF-05)
### Desenvolvedor(a): Pedro Mota Cassemiro

O modal de edição de atividade apresenta os campos preenchidos com os dados da atividade a ser editada. Os campos são: Título, descrição, data inicial, data final, horário inicial, horário final, categoria, prioridade e periodização. O título ainda deve ser único e continua atuando como um identificador da atividade editada. O alerta exibido pelo browser, sinalizando que já há atividade registrada no banco com o mesmo título, ainda é apresentada caso essa regra seja violada no momento de edição. Todos os campos continuam necessitando preenchimento obrigatório, caso algum deles não seja preenchido, seu contorno se torna destacado em vermelho e a atividade não é armazenada no Local Storage. Ao excluir a atividade selecionada, a mesma é apagada do registro no Local Storage. Por se tratar de uma alteração irreversível, uma mensagem de confirmação é apresentada pelo browser ao usuário. Caso a resposta seja afirmativa, a ação é concluída, caso seja negativa, nenhuma alteração é realizada.

<img src="img/editar-excluir-atividade-JSON.PNG" alt="Editar-Excluir-Atividade">

Na imagem é possível observar, em Local Storage, Uma atividade já criada. À esquerda, está o modal de edição, apresentado as alterações feitas, em horário inicial, horário final e periodização. Também é possível observar, além do botão de edição, os botões de exclusão e conclusão.

### Requisitos atendidos

RF-04 - O site deve permitir que as atividades sejam editadas, inclusive entre as unidades de tempo no calendário.<br>
RF-05 - O site deve permitir que o usuário sinalize uma atividade como finalizada ou cancelada.

### Artefatos da funcionalidade

- tela inicial+criacoes.html
- scripts.js
- atualizarAtividade.js
- tela inicial+criacoes.css
- logo.png
- favicon.ico
- /Images

```js
// CRUD - atualizar Atividade

var atividadeASerAtualizada;
var atividadeASerExcluida;
var index = 0

const tituloEditado = document.getElementById('atualizar-titulo')
const descricaoEditado = document.getElementById('atualizar-descricao')
const dataInicioEditado = document.getElementById('atualizar-data-inicio')
const dataFimEditado = document.getElementById('atualizar-data-fim')
const horarioInicioEditado = document.getElementById('atualizar-horario-inicio')
const horarioFinalEditado = document.getElementById('atualizar-horario-final')
const categoriaEditado = document.getElementById('atualizar-categoria')
const prioridadeEditado = document.getElementById('atualizar-prioridade')
const periodizacaoEditado = document.getElementById('atualizar-periodizacao')

const camposEditados = [tituloEditado, descricaoEditado, dataInicioEditado, dataFimEditado, horarioInicioEditado, horarioFinalEditado, categoriaEditado, prioridadeEditado, periodizacaoEditado]

const preencherCamposModal = (atividadeASerAtualizada) => {

    document.querySelector("#atualizar-titulo").value = atividadeASerAtualizada.titulo
    document.querySelector("#atualizar-descricao").value = atividadeASerAtualizada.descricao
    document.querySelector("#atualizar-data-inicio").value = atividadeASerAtualizada.dataInicio
    document.querySelector("#atualizar-data-fim").value = atividadeASerAtualizada.dataFim
    document.querySelector("#atualizar-horario-final").value = atividadeASerAtualizada.horarioFinal
    document.querySelector("#atualizar-horario-inicio").value = atividadeASerAtualizada.horarioInicio
    document.querySelector("#atualizar-categoria").value = atividadeASerAtualizada.categoria
    document.querySelector("#atualizar-prioridade").value = atividadeASerAtualizada.prioridade
    document.querySelector("#atualizar-periodizacao").value = atividadeASerAtualizada.periodizacao

}

const abrirModalUpdateExcluir = (event) => {

    if (event.target.id != "" && event.target.id != "calendar" && event.target.id != "currentDay") {
        onOff('atualizar-atividade')

        getDados().forEach(atividade => {

            if (atividade.titulo == event.target.id) {

                index = getDados().findIndex(atividade => {
                    return atividade.titulo == event.target.id
                })
                atividadeASerAtualizada = getDados()[index]
                preencherCamposModal(atividadeASerAtualizada)
            }
        });
    }
}

const limparErrosEdicao = () => {
    tituloEditado.classList.remove('campo-vazio')
    descricaoEditado.classList.remove('campo-vazio')
    dataInicioEditado.classList.remove('campo-vazio')
    dataFimEditado.classList.remove('campo-vazio')
    horarioInicioEditado.classList.remove('campo-vazio')
    horarioFinalEditado.classList.remove('campo-vazio')
    categoriaEditado.classList.remove('campo-vazio')
    prioridadeEditado.classList.remove('campo-vazio')
    periodizacaoEditado.classList.remove('campo-vazio')
}

function isSameAtividade(atividadeAtualizada) {

    var valido = true
    var indexAtividade = 0
    getDados().forEach(atividade => {
        
       if ((atividade.titulo == atividadeAtualizada.titulo) && (index != indexAtividade)) {
            valido = false
            alert('Já existe atividade cadastrada com o título inserido.')
        }

        indexAtividade++

    });
    return valido
}

const atualizarAtividade = (atividadeAtualizada) => {
    
    const dbAtividade = getDados()
    dbAtividade[index] = atividadeAtualizada
    setDados(dbAtividade)
}

const salvarAtividadeAtualizada = () => {
    var camposVazios = 0;

    camposEditados.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('campo-vazio')
            camposVazios++
        } else {
            campo.classList.remove('campo-vazio')
        }
    });

    if (camposVazios == 0) {
        const atividadeAtualizada = {
            titulo: tituloEditado.value,
            descricao: descricaoEditado.value,
            dataInicio: dataInicioEditado.value,
            dataFim: dataFimEditado.value,
            horarioInicio: horarioInicioEditado.value,
            horarioFinal: horarioFinalEditado.value,
            categoria: categoriaEditado.value,
            prioridade: prioridadeEditado.value,    
            periodizacao: periodizacaoEditado.value
        }   

        if (isSameAtividade(atividadeAtualizada)) {
            atualizarAtividade(atividadeAtualizada)
            load();
            onOff('atualizar-atividade')
        }
    }
}

// Excluir Atividade

const excluirAtividade = () => {

    let confirmacao = confirm('Realmente deseja excluir a atividade selecionada? A ação não pode ser desfeita.')
    if (confirmacao) {
        const dbAtividade = getDados()
        dbAtividade.splice(index, 1)
        setDados(dbAtividade)
        load()
        onOff('atualizar-atividade')
    } else {
        onOff('atualizar-atividade')
    }
}

document.querySelector('#calendar')
    .addEventListener('click', abrirModalUpdateExcluir)

document.querySelector('#atualizar')
    .addEventListener('click', salvarAtividadeAtualizada)

document.querySelector("#excluir")
    .addEventListener('click', excluirAtividade)
```

### Instruções de acesso

No calendário, deve-se clicar na atividade que se deseja editar. Uma janela irá aparecer no centro da tela e terá os campos já preenchidos com os dados da atividade selecionada. Ao terminar de preencher todos os campos, deve-se clicar no botão “Atualizar”. Caso o usuário deseje excluir a atividade, deve-se clicar no botão "Excluir" e confirmar a ação no alerta que aparecerá no browser.

## Parabenização por concluir atividade antes da data final (RF-12)
### Desenvolvedor(a): Pedro Mota Cassemiro

O modal apresentado ao selecionar uma atividade no calendário possui na sua parte inferior o botão "Concluir". O usuário, ao clicar nesse botão, irá ouvir o trecho inicial do refrão da música "The Best" de Tina Turner, com o trecho "You're simply the best". Tal trecho de áudio é uma resposta lúdica para o usuário, que somente será ouvido caso a conclusão da atividade ocorra antes ou no mesmo dia da data final definida na criação da atividade.

<img src="img/editar-excluir-atividade-JSON.PNG" alt="Editar-Excluir-Atividade">

Na imagem é possível observar o botão "Concluir", que pode ser acionado pelo usuário.

### Requisitos atendidos

RF-12 - O site parabeniza o usuário quando uma atividade é marcada como concluída antes do prazo.

### Artefatos da funcionalidade

- tela inicial+criacoes.html
- scripts.js
- atualizarAtividade.js
- tela inicial+criacoes.css
- logo.png
- favicon.ico
- /Images
- parabenizacao.mp3

```js
const concluirAtividade = () => {

    const partesData = dataFimEditado.value.split('-')
    const dataFormatada = new Date(partesData[0], partesData[1] - 1, partesData[2], 0, 0, 0, 0)
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth()
    const diaAtual = dataAtual.getDate()
    const dataAtualString = `${anoAtual}-${mes < 9 ? '0' : '' }${mesAtual + 1}-${diaAtual}`
    const partesDataAtual = dataAtualString.split('-')
    const dataAtualNoTime = new Date(partesDataAtual[0], partesDataAtual[1] - 1, partesDataAtual[2], 0, 0, 0, 0)
    
    if (dataFormatada >= dataAtualNoTime) {
        new Audio('parabenizacao.mp3').play()
        const dbAtividade = getDados()
        dbAtividade.splice(index, 1)
        setDados(dbAtividade)
        load()
        onOff('atualizar-atividade')
    }
}

document.querySelector("#concluir")
    .addEventListener('click', concluirAtividade)
```

### Instruções de acesso

No modal de edição de atividade, deve-se clicar no botão "Concluir". Um áudio será reproduzido pelo browser.

## Notificação e resumos por email (RF-06)
Desenvolvedor(a): Gabriela Vitoria Pereira

## Alteração de design do site (RF-11)
### Desenvolvedor(a): Juliana Dutra Moreira

A tela de temas permite que o usuário escolha um tema de desing específico para aplicar em todo o site durante o uso do sistema, permitindo que este tema se mantenha durante todo o acesso ao site. É possível alterar as cores e os itens do menu lateral.

Opções do menu drop-down que exibe as opções de temas para o usuário.
<img src="img/Func_Tema_1.jpg">

Opção de tema com alteração nos ícones do menu lateral de criação.
<img src="img/Func_Tema_2.jpg">

Exemplo de aplicação de tema:
<img src="img/Func_Tema_3.jpg">

Exemplo de aplicação de tema:
<img src="img/Func_Tema_4.jpg">

### Requisitos atendidos

RF-11 - O site deve possibilitar edições de design como mudanças de cores, plano de fundo e adesivos.

### Artefatos da funcionalidade

- template-cores-tina.html
- template-cores-tina.js
- template-cores-tina.css
- tema-dark.css
- tema-icones-dark.css
- tema-padrao.css
- tema-icones
- tema1.css
- tema1-icones.css
- tema2.css
- tema2-icones.css
- tema3.css
- tema3-icones.css
- logo.png
- favicon.ico

```js
window.onload=function(){

function initThemeSelector() {
    const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetLink");
    const currentTheme = localStorage.getItem("theme") || "tema-padrao";

    function ativarTema(themeName) {
        themeStylesheetLink.setAttribute("href", `temas/${themeName}.css`);
    }
    themeSelect.addEventListener("change", () => {
        ativarTema(themeSelect.value);
        localStorage.setItem("theme", themeSelect.value);
    });

    ativarTema(currentTheme);
    themeSelect.value = currentTheme;

}

initThemeSelector();
}

```

### Instruções de acesso

A Tela perfil é acessada ao usuário selecionar o botão ferramentas no menu lateral.

## Criação de Itens e hábitos (RF-03, RF-08)
### Desenvolvedor(a): Ellen Caroline Trindade Gonçalves Cândido

O modal de criação de itens apresenta os campos a serem preenchidos pelo usuário.  Os campos são: Título, descrição, categoria, prioridade
O modal de criação de hábitos apresenta os campos a serem preenchidos pelo usuário.Os campos são: Título, descrição, data inicial, data final, categoria, prioridade e periodização. Todos os campos possuem preenchimento obrigatório. Ao concluir a ação, ou cancelá-la, fechando o modal, nenhum item ou hábito é criado e o histórico do último é mantido para futura consulta. Ao selecionar "Criar", o item ou hábito é criado e inserido em sua respectiva lista.

<img src="img/Menu-Criar_item.png" alt="Criar-item">
<img src="img/Menu-Criar_hábito.png" alt="Criar-item">

Na imagem é possível observar duas atividades os modais para criação das atividades. Na imagem a seguir, são mostra os itens e hábitos já criados.
<img src="img/item-habitos-criados.png" alt="Itens e hábitos criados">

### Requisitos atendidos

RF-03 - O site deve permitir que o usuário crie itens em uma lista não associada a unidades de tempo no calendário 
RF-08 - O site deve permitir que o usuário crie e associe anotações de hábitos ao calendário


### Artefatos da funcionalidade
 
- tela inicial+criacoes.html
- scripts.js
- tela inicial+criacoes.css
- logo.png
- favicon.ico
- /Images

```js
function onOff(type) {
    if (type == "atividade") {
        document
            .querySelector("#modal-atividade")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-atividade")
            .classList
            .toggle("addScroll")
    }
    else if(type == "item"){
        document
            .querySelector("#modal-item")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-item")
            .classList
            .toggle("addScroll")
        
    }
    else if (type == "habito"){
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("addScroll")
    }
}

var btnCriarItem = document.querySelector("#btn-criar-item");

btnCriarItem.addEventListener("click", function(event){
    event.preventDefault();

    var formItem = document.querySelector("#form-item");
    var item = {
        "nome": formItem.titulo.value,
        "descricao": formItem.descricao.value,
        "categoria": formItem.categoria.value,
        "prioridade": formItem.prioridade.value
    }
    
    var listaItens = document.querySelector(".lista-itens");
    var novoItem = document.createElement("div");
    novoItem.innerHTML = "Nome: " + item.nome + "<br>Descrição: "+ item.descricao + "<br>Categoria: " + item.categoria + "      Prioridade: " + item.prioridade ;


    listaItens.appendChild(novoItem);
    onOff("item");
})

var btnCriarHabito = document.querySelector("#btn-criar-habito");

btnCriarHabito.addEventListener("click", function(event){
    event.preventDefault();
    
    var formHabito = document.querySelector("#form-habito");
    var habito = {
        "nome": formHabito.titulo.value,
        "descricao": formHabito.descricao.value,
        "data_inicio": formHabito['data-inicio'].value,
        "data_fim" : formHabito['data-fim'].value,
        "categoria": formHabito.categoria.value,
        "prioridade": formHabito.prioridade.value,
        "periodizacao": formHabito.periodizacao.value
    }
    
    var listaHabitos = document.querySelector(".lista-habitos");
    var novoHabito = document.createElement("div");
    novoHabito.innerHTML = "Nome: " + habito.nome + "<br>Descrição: "+ habito.descricao + "<br>De: "+ habito.data_inicio + "  até  : "+ habito.data_fim + "<br>Categoria: " + habito.categoria + "      Prioridade: " + habito.prioridade + "<br>Periodização: "+ habito.periodizacao;


    listaHabitos.appendChild(novoHabito);
    onOff("habito");
})
```

### Instruções de acesso

Para criar item, no menu lateral, deve-se clicar no botão de criar item, com o ícone de checkbox. Uma janela irá aparecer no centro da tela e terá os campos a serem preenchidos pelo usuário para registrar o item no Local Storage e aparecer na lista. Ao terminar de preencher todos os campos, deve-se clicar no botão “Criar”.
Já para criar hábito, no menu lateral novamente, deve-se clicar no botão de criar hábito, destacado pelo ícone de estrela. Uma janela irá aparecer no centro da tela e terá os campos a serem preenchidos pelo usuário para registrar o hábito no Local Storage e aparecer na lista. Ao terminar de preencher todos os campos, deve-se clicar no botão “Criar”.

## Cadastro do usuário (RF-)
### Desenvolvedor(a): Juliana Dutra Moreira

O cadastro permite que o usuário crie sua conta para acessar o site. O usuário preenche os campos de Nome, Email, Senha e Confirmação de senha com diversas validações para a criação correta da conta. As validações vão instruindo o usuário colocar nos campos as informações necessárias conforme as regras do cadastro. Após o preenchimento correto o usuário é informado que a conta foi criada e é redirecionado para a tela de login. Caso o e-mail do usuário já tenha sido cadastrado uma mensagem é exibida informando que o e-mail já está cadastrado e se desejar, o usuário deve ir para a página de login ou tentar novamente.

<img src="img/Cadastro.jpg">

### Requisitos atendidos

Funcionalidade sem requisitos específicos

### Artefatos da funcionalidade

- cadastro.html
- cadastro.css
- cadastro.js
- logo2.png
- logo3.png
- tinaavatar.png
- favicon.ico
- /Images

```js
function salvaCadastro (event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados do formulário
    let nome   = document.getElementById('nome').value;
    let validNome = false

    let email  = document.getElementById('email').value;
    let validEmail = false
    var validEmailRepetido = true 

    let senha  = document.getElementById('senha').value;
    let validSenha = false

    let senha2 = document.getElementById('confirmsenha').value;
   
    if (nome.length <= 4) {
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Nome completo: *Insira no minimo 5 caracteres'
        validNome = false
    } else {
        labelnome.setAttribute('style', 'color: green')
        validNome = true
    }

    if (email.indexOf(".com", "@") <= 1) {
        labelemail.setAttribute('style', 'color: red')
        labelemail.innerHTML = 'E-mail: *Insira um e-mail válido'
        validEmail = false
    } else {
        labelemail.setAttribute('style', 'color: green')
        validEmail = true
        
        var usuariosJSON = localStorage.getItem('db_usuarios');
        db_usuarios = JSON.parse(usuariosJSON);    
    
        for(var i = 0; i < db_usuarios.usuarios.length; i++) {
            var usuario = db_usuarios.usuarios[i];
  
        var controlador = 0
    
         if (email == usuario.email) {
            controlador++
        } 
    
        if (controlador != 0) {
            alert ('E-mail já cadastrado. Tente novamente ou prossiga para o login');
            validEmailRepetido = false
        }}
    }

    if (senha != senha2) {
        labelSenha.setAttribute('style', 'color: red')
        labelconfirm.setAttribute('style', 'color: red')
        labelconfirm.innerHTML = 'Confirmar Senha *As senhas não conferem'
        validSenha = false
    } else {
        labelconfirm.setAttribute('style', 'color: green')
        labelSenha.setAttribute('style', 'color: green')
        labelconfirm.innerHTML = 'Confirmar Senha *correto'
        validSenha = true
    }

     if ((nome != '' && email != '' && senha != '' && senha2 != '') && (validNome && validEmail && validSenha && validEmailRepetido)) {
        // Adiciona o usuário no banco de dados
        addUser (nome, senha, email);
        alert ('Usuário salvo com sucesso. Proceda com o login');
        window.location.href = 'login.html'
    } else {
        alert("Preencha todos os campos corretamente antes de prosseguir")
    }
}

function acessarTelaLogin() {
    return window.location.href = 'login.html'
}
  // Associar salvamento ao botao
  document.getElementById('cadastrar').addEventListener('click', salvaCadastro);
  
```

### Instruções de acesso

Na página inicial do login o usuário seleciona o link "cadastre-se" e é encaminahdo para a página do cadastro.

## Login do usuário (RF-)
### Desenvolvedor(a): Juliana Dutra Moreira

O login é a página inicial do site, no qual é possível visualizar a logo, avatar e um texto explicativo sobre o site. O usuário insere nos campos e-mail e senha seus dados de login e seleciona o botão "entrar" para acessar o site. Caso, inicialmente, o usuário não tenha cadastro, é possível realizar o cadastro pelo link "Cadastra-se" abaixo do campo "senha". Este mesmo campo possui uma ferramenta que permite o usuário visualizar sua senha clicando no ícone de olho.

<img src="img/Login.jpg">

### Requisitos atendidos

Funcionalidade sem requisitos específicos

### Artefatos da funcionalidade

- Login.html
- Login.css
- Login.js
- logo3.png
- tinaavatar.png
- favicon.ico


```js
const LOGIN_URL = "login.html";

var db_usuarios = {};

var usuarioCorrente = {};

function generateUUID() { 
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const dadosIniciais = {
    usuarios: [
        { "id": generateUUID (), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"},
        { "id": generateUUID (), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com"},
    ]
};

function initLoginApp () {
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
    }
    
    var usuariosJSON = localStorage.getItem('db_usuarios');

    if (!usuariosJSON) {  // Se NÃO há dados no localStorage

        db_usuarios = dadosIniciais;

        localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));
    }
    else  {
        db_usuarios = JSON.parse(usuariosJSON);    
    }
};

function loginUser (email, senha) {
    
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
        
        if (email == usuario.email && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.senha = usuario.senha;
            usuarioCorrente.nome = usuario.nome;
            
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            console.log(usuarioCorrente.nome)
            console.log(usuarioCorrente.email)
            console.log(usuarioCorrente.senha)
            
            return true
        }
    }
    return false;
}

function addUser (nome, senha, email) {
    
    let newId = generateUUID ();
    let usuario = { "id": newId, "senha": senha, "nome": nome, "email": email };
    
    db_usuarios.usuarios.push (usuario);

    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

// function setUserPass () {

// }

function processaFormLogin (event) {                
    event.preventDefault ();

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    resultadoLogin = loginUser (email, senha);
    if (resultadoLogin) {
        window.location.href = 'perfil.html';
    }
    else { // Se login falhou, avisa ao usuário
        alert ('Usuário ou senha incorretos');
    }
}

initLoginApp ();
document.getElementById ('entrar').addEventListener ('click', processaFormLogin);

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

```

### Instruções de acesso

Para acessar o login o usuário deve acesar o site. Também é possível acessar o login ao clicar na logo, localizada canto superior esquerdo na página do cadastro, assim também, ao realizar logout.  

## Perfil do usuário (RF-)
### Desenvolvedor(a): Juliana Dutra Moreira

O perfil exibe as informações armazenadas no cadastro do usuário e outras funcionalidades como habilitar ou desabilitar o envio de notificações por e-mail e inserir foto.
<img src="img/Perfil.jpg">
### Requisitos atendidos

Funcionalidade sem requisitos específicos

### Artefatos da funcionalidade

- Perfil.html
- Perfil.css
- Perfil.js
- logo2.png
- favicon.ico
- /Images

```js
function exibeUsuarios() {
    
    document.querySelector("#nome").value = usuarioCorrente.nome
    document.querySelector("#email").value = usuarioCorrente.email
}

function initPage() {
    document.getElementById('btn_logout').addEventListener('click', logoutUser);
    exibeUsuarios ();
}

window.addEventListener('load', initPage);

document.querySelector('#image_input').addEventListener('change', function () {
    const reader = new FileReader()

    reader.addEventListener('load', () => {
        localStorage.setItem("recent-image", reader.result)
    })

    reader.readAsDataURL(this.files[0])
})

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("recent-image")
    if (recentImageDataUrl) {
        document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl)
    }
})

document.querySelector('#salvaFoto').addEventListener('click', function recarregarPagina(){
    window.location.reload();
} )

function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location.href = 'login.html'
}
```

### Instruções de acesso

A tela perfil é possível acessar clicando no icone localizado no canto superior direito da página do site, após o usuário realizar o login.
