function onOff(type, action = null) {
    if (type == "atividade") {
        document.querySelector("#modal-atividade").classList.toggle("hide")
        document.querySelector("#modal-atividade").classList.toggle("addScroll")
        limparCampos()
        limparErros()
    }
    else if (type == "item") {
        document.querySelector("#modal-item").classList.toggle("hide")
        document.querySelector("#modal-item").classList.toggle("addScroll")
        limparCampos()
        limparErros()
        mostrarBotoes(action)
    }
    else if (type == "habito") {
        document.querySelector("#modal-habito").classList.toggle("hide")
        document.querySelector("#modal-habito").classList.toggle("addScroll")
        limparCampos()
        limparErros()
        mostrarBotoesHabito(action)
    }
    else if (type == "categoria") {
        document.querySelector("#modal-categoria").classList.toggle("hide")
        document.querySelector("#modal-categoria").classList.toggle("addScroll")
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//LocalStorage de Item
const getDadosItem = () => JSON.parse(localStorage.getItem("dbItens")) ?? [];
const setDadosItem = (dbItens) => localStorage.setItem("dbItens", JSON.stringify(dbItens));

const itemTitulo = document.getElementById('item-titulo')
const itemDescricao = document.getElementById('item-descricao')
const itemCategoria = document.getElementById('item-categoria')
const itemPrioridade = document.getElementById('item-prioridade')

const inputsItem = [itemTitulo, itemDescricao, itemCategoria, itemPrioridade]

//Exibir Lista de Itens
var listaItens = document.querySelector("#todos-itens")
function exibirListaItens() {
    listaItens.classList.toggle("addScroll")

    var divModelo = document.getElementById('cada-item')
    var cadaItem;

    getDadosItem().forEach(elemento => {
        cadaItem = divModelo.cloneNode(true)
        cadaItem.innerHTML = elemento.titulo
        cadaItem.style.display = 'block'
        listaItens.appendChild(cadaItem)
    })
}

function mostrarBotoes(action) {
    if (action == "criar") {
        document.getElementById('btn-criar-item').style.display = 'inline'
        document.getElementById('btn-atualizar-item').style.display = 'none'
        document.getElementById('btn-remover-item').style.display = 'none'
    } else if (action == 'ler') {
        document.getElementById('btn-criar-item').style.display = 'none'
        document.getElementById('btn-atualizar-item').style.display = 'inline'
        document.getElementById('btn-remover-item').style.display = 'inline'
    }
}

//Criar Item
const inserirItem = (item) => {
    const dbItens = getDadosItem()
    dbItens.push(item)
    setDadosItem(dbItens)
}

const saoDadosValidosEmItem = (item) => {
    const dbItens = getDadosItem()
    var elementoUnico = true
    var inputsVaziosEmItem = 0;

    inputsItem.forEach(input => {
        if (input.value.trim() == "") {
            input.classList.add('campo-vazio')
            inputsVaziosEmItem++
        } else {
            input.classList.remove('campo-vazio')
        }
    });

    dbItens.forEach(dadoItem => {
        if (dadoItem.titulo == item.titulo && item.titulo != document.getElementById('idItem').value) {
            itemTitulo.classList.add('campo-vazio')
            elementoUnico = false
        }
    });

    return elementoUnico && inputsVaziosEmItem == 0;
}

function adicionarUltimoItemEmLista(titulo) {
    var divModelo = document.getElementById('cada-item')
    var cadaItem = divModelo.cloneNode(true)
    cadaItem.innerHTML = titulo
    cadaItem.style.display = 'block'
    listaItens.appendChild(cadaItem)
}

function criarItem() {
    const item = {
        titulo: itemTitulo.value.trim(),
        descricao: itemDescricao.value,
        categoria: itemCategoria.value,
        prioridade: itemPrioridade.value
    }

    if (saoDadosValidosEmItem(item)) {
        inserirItem(item)
        onOff("item")
        adicionarUltimoItemEmLista(item.titulo)
    } else {
        alert("Não foi possível salvar. Há campos vazios ou título igual ao de outro item.")
    }
}

//Ler Item
function abrirModalItem(evento) {
    var itemParaLer = evento.target.innerText
    const item = getDadosItem().find(evento => evento.titulo === itemParaLer)
    document.getElementById('modal-item')
    onOff("item", 'ler')
    prencherInputsItens(item)
}

const prencherInputsItens = (item) => {
    document.getElementById('idItem').value = item.titulo
    document.getElementById('item-titulo').value = item.titulo
    document.getElementById('item-descricao').value = item.descricao
    document.getElementById('item-categoria').value = item.categoria
    document.getElementById('item-prioridade').value = item.prioridade
}

//Atualizar Item
function atualizarItem() {
    var indice = getDadosItem().findIndex(e => e.titulo === document.getElementById('idItem').value)
    var db = getDadosItem()
    const novoItem = {
        titulo: itemTitulo.value.trim(),
        descricao: itemDescricao.value,
        categoria: itemCategoria.value,
        prioridade: itemPrioridade.value
    }

    if (saoDadosValidosEmItem(novoItem)) {
        db[indice] = novoItem
        Array.prototype.forEach.call(document.getElementsByClassName("cada-item"), function (divisor) {
            if (divisor.innerText == document.getElementById('idItem').value) {
                divisor.innerText = itemTitulo.value
            }
        });
        setDadosItem(db)
        onOff("item")
    } else {
        alert("Não foi possível salvar. Há campos vazios ou título igual a outro item.")
    }
}

//Remover Item
function removerItem() {
    var confirmacao = confirm("Você tem certeza que quer apagar o item '" + idItem.value + "'?")
    if (confirmacao) {
        var indice = getDadosItem().findIndex(e => e.titulo === document.getElementById('idItem').value)
        var db = getDadosItem()
        db.splice(indice, 1)
        setDadosItem(db)
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LocalStorage de Hábitos
const getDadosHabito = () => JSON.parse(localStorage.getItem("dbHabitos")) ?? [];
const setDadosHabito = (dbHabitos) => localStorage.setItem("dbHabitos", JSON.stringify(dbHabitos));

const habitoTitulo = document.getElementById('habito-titulo')
const habitoDescricao = document.getElementById('habito-descricao')
const habitoDataInicio = document.getElementById('habito-data-inicio')
const habitoDataFim = document.getElementById('habito-data-fim')
const habitoCategoria = document.getElementById('habito-categoria')
const habitoPrioridade = document.getElementById('habito-prioridade')
const habitoPeriodizacao = document.getElementById('habito-periodizacao')

const inputsHabito = [habitoTitulo, habitoDescricao, habitoDataInicio, habitoDataFim, habitoCategoria, habitoPrioridade, habitoPeriodizacao]

//Exibir Lista de Hábito
var listaHabitos = document.querySelector("#todos-habitos")
function exibirListaHabitos() {
    listaHabitos.classList.toggle("addScroll")

    var divModelo = document.getElementById('cada-habito')
    var cadaHabito;

    getDadosHabito().forEach(elemento => {
        cadaHabito = divModelo.cloneNode(true)
        cadaHabito.innerHTML = elemento.titulo
        cadaHabito.style.display = 'block'
        listaHabitos.appendChild(cadaHabito)
    })
}

function mostrarBotoesHabito(action) {
    if (action == 'criar') {
        document.getElementById('btn-criar-habito').style.display = 'inline'
        document.getElementById('btn-atualizar-habito').style.display = 'none'
        document.getElementById('btn-remover-habito').style.display = 'none'
    } else if (action == 'ler') {
        document.getElementById('btn-criar-habito').style.display = 'none'
        document.getElementById('btn-atualizar-habito').style.display = 'inline'
        document.getElementById('btn-remover-habito').style.display = 'inline'
    }
}

//Criar Habito
const inserirHabito = (habito) => {
    const dbHabitos = getDadosHabito()
    dbHabitos.push(habito)
    setDadosHabito(dbHabitos)
}

const saoDadosValidosEmHabito = (habito) => {
    const dbHabitos = getDadosHabito()
    var elementoUnico = true
    var inputsVaziosEmHabito = 0;

    inputsHabito.forEach(input => {
        if (input.value.trim() == "") {
            input.classList.add('campo-vazio')
            inputsVaziosEmHabito++
        } else {
            input.classList.remove('campo-vazio')
        }
    });

    dbHabitos.forEach(dadoHabito => {
        if (dadoHabito.titulo == habito.titulo && habito.titulo != document.getElementById('idHabito').value) {
            habitoTitulo.classList.add('campo-vazio')
            elementoUnico = false
        }
    });
    return elementoUnico && inputsVaziosEmHabito == 0;
}

function adicionarUltimoHabitoEmLista(titulo) {
    var divModelo = document.getElementById('cada-habito')
    var cadaHabito= divModelo.cloneNode(true)
    cadaHabito.innerHTML = titulo
    cadaHabito.style.display = 'block'
    listaHabitos.appendChild(cadaHabito)
}

function criarHabito() {
    const habito = {
        titulo: habitoTitulo.value.trim(),
        descricao: habitoDescricao.value,
        dataInicio: habitoDataInicio.value,
        dataFim: habitoDataFim.value,
        categoria: habitoCategoria.value,
        prioridade: habitoPrioridade.value,
        periodizacao: habitoPeriodizacao.value
    }

    if (saoDadosValidosEmHabito(habito)) {
        inserirHabito(habito)
        onOff("habito")
        adicionarUltimoHabitoEmLista(habito.titulo)
    } else {
        alert("Não foi possível salvar. Há campos vazios ou título igual ao de outro hábito.")
    }

}

//Ler Habito
function abrirModalHabito(evento) {
    var habitoParaLer = evento.target.innerText
    const habito = getDadosHabito().find(evento => evento.titulo === habitoParaLer)
        document.getElementById('modal-habito')
    onOff("habito", 'ler')
    prencherInputsHabitos(habito)
}

const prencherInputsHabitos = (habito) => {
    document.getElementById('idHabito').value = habito.titulo
    document.getElementById('habito-titulo').value = habito.titulo
    document.getElementById('habito-descricao').value = habito.descricao
    document.getElementById('habito-data-inicio').value = habito.dataInicio
    document.getElementById('habito-data-fim').value = habito.dataFim
    document.getElementById('habito-categoria').value = habito.categoria
    document.getElementById('habito-prioridade').value = habito.prioridade
    document.getElementById('habito-periodizacao').value = habito.periodizacao

}

//Atualizar Habito
function atualizarHabito() {
    var indice = getDadosHabito().findIndex(e => e.titulo === document.getElementById('idHabito').value)
    var db = getDadosHabito()
    const novoHabito = {
        titulo: habitoTitulo.value.trim(),
        descricao: habitoDescricao.value,
        dataInicio: habitoDataInicio.value,
        dataFim: habitoDataFim.value,
        categoria: habitoCategoria.value,
        prioridade: habitoPrioridade.value,
        periodizacao: habitoPeriodizacao.value
    }

    if (saoDadosValidosEmHabito(novoHabito)) {
        db[indice] = novoHabito
        Array.prototype.forEach.call(document.getElementsByClassName("cada-habito"), function (divisor) {
            if (divisor.innerText == document.getElementById('idHabito').value) {
                divisor.innerText = habitoTitulo.value
            }
        });
        setDadosHabito(db)
        onOff("habito")
    } else {
        alert("Não foi possível salvar. Há campos vazios ou título igual a outro hábito.")
    }
}

//Remover Hábito
function removerHabito() {
    var confirmacao = confirm("Você tem certeza que quer apagar o hábito '" + idHabito.value + "' ?")
    if (confirmacao) {
        var indice = getDadosHabito().findIndex(e => e.titulo === document.getElementById('idHabito').value)
        var db = getDadosHabito()
        
        db.splice(indice, 1)
        setDadosHabito(db)
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('btn-criar-item').addEventListener('click', criarItem)
document.getElementById('btn-criar-habito').addEventListener('click', criarHabito)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Criar categoria
const titulo_categoria = document.getElementById('titulo')
const cor_categoria = document.getElementById('cor-categoria')

const getCategoria = () => JSON.parse(localStorage.getItem("dbCategoria")) ?? [];
const setCategoria = (dbCategoria) => localStorage.setItem("dbCategoria", JSON.stringify(dbCategoria));

const criarCategoria = (categoria) => {
    const dbCategoria = getDados();
    dbCategoria.push(categoria);
    setDados(dbCategoria)
}


// Criar Atividade
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


let nav = 0;

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText =
        `${dt.toLocaleDateString('pt-br', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        // const dayString = `${month + 1}/${i - paddingDays}/${year}`;
        const dayString = `${year}-${month + 1}-${i - paddingDays}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
            const eventForDay = getDados().find(e => e.dataInicio === dayString);

            if (i - paddingDays === day && nav === 0) {
                daySquare.id = 'currentDay';
            }

            if (eventForDay) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = eventForDay.titulo;
                daySquare.appendChild(eventDiv);
            }

        } else {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }
}

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });
}

exibirListaItens()
exibirListaHabitos()
initButtons();
load();