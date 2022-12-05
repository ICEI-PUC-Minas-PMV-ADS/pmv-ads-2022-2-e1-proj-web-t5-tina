
const dataMinima = new Date()

const ano = dataMinima.getFullYear()
const mes = dataMinima.getMonth()
const dia = dataMinima.getDate()

const dataMinimaFormatada = `${ano}-${mes < 9 ? '0' : '' }${mes + 1}-${dia < 10 ? '0' : ''}${dia}`

// botões
const botoes = document.querySelectorAll('.button')

function onOff(type, action = null) {
    if (type == "atividade") {
        dataFim.disabled = true;
        dataInicio.setAttribute('min', dataMinimaFormatada)
        dataInicio.addEventListener('input', function() {
            dataFim.disabled = false;
            dataFim.setAttribute('min', dataInicio.value)
        })
        dataFim.setAttribute('min', dataMinimaFormatada)
        horarioFinal.disabled = true;
        horarioInicio.addEventListener('input', function() {
            horarioFinal.disabled = false;
        })
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-atividade')) {
                botao.removeAttribute('onclick')
            }
        })
        document
            .querySelector("#modal-atividade")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-atividade")
            .classList
            .toggle("addScroll")
        limparCampos()
        limparErros()
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-atividade') &&
            document
            .querySelector("#modal-atividade")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-item')) {
                botao.setAttribute('onclick', "onOff('item')")
            }
            if (!botao.parentElement.classList.contains('criacao-atividade') &&
            document
            .querySelector("#modal-atividade")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-habito')) {
                botao.setAttribute('onclick', "onOff('habito')")
            }
        })
    }
    else if (type == "item") {
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-item')) {
                botao.removeAttribute('onclick')
            }
        })
        document
            .querySelector("#modal-item")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-item")
            .classList
            .toggle("addScroll")
        limparCampos()
        limparErros()
        mostrarBotoes(action)
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-item') &&
            document
            .querySelector("#modal-item")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-atividade')) {
                botao.setAttribute('onclick', "onOff('atividade')")
            }
            if (!botao.parentElement.classList.contains('criacao-item') &&
            document
            .querySelector("#modal-item")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-habito')) {
                botao.setAttribute('onclick', "onOff('habito')")
            }
        })
    }
    else if (type == "habito") {
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-habito')) {
                botao.removeAttribute('onclick')
            }
        })
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("addScroll")
        limparCampos()
        limparErros()
        mostrarBotoesHabito(action)
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-habito') &&
            document
            .querySelector("#modal-habito")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-atividade')) {
                botao.setAttribute('onclick', "onOff('atividade')")
            }
            if (!botao.parentElement.classList.contains('criacao-habito') &&
            document
            .querySelector("#modal-habito")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-item')) {
                botao.setAttribute('onclick', "onOff('item')")
            }
        })
    } else if (type == "categoria") {
        document
            .querySelector("#modal-categoria")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-categoria")
            .classList
            .toggle("addScroll")
    } else if (type == "atualizar-atividade") {
        dataInicioEditado.setAttribute('min', dataMinimaFormatada)
        dataInicioEditado.addEventListener("input", function () {
          dataFimEditado.setAttribute("min", dataInicioEditado.value);
        });
        botoes.forEach(botao => {
            if (botao.id !== 'atualizar-atividade') {
                botao.removeAttribute('onclick')
            }
        })
        document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("addScroll")
        limparErrosEdicao()
        botoes.forEach(botao => {
            if (botao.id !== 'atualizar-atividade' && document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .contains("hide") && botao.parentElement.classList.contains('criacao-atividade')) {
                botao.setAttribute('onclick', "onOff('atividade')")
            }
            if (botao.id !== 'atualizar-atividade' && document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .contains("hide") && botao.parentElement.classList.contains('criacao-item')) {
                botao.setAttribute('onclick', "onOff('item')")
            }
            if (botao.id !== 'atualizar-atividade' && document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .contains("hide") && botao.parentElement.classList.contains('criacao-habito')) {
                botao.setAttribute('onclick', "onOff('habito')")
            }
        })
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


