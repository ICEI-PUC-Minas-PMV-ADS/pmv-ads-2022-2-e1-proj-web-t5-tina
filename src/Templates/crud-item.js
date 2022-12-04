////////////////////////////////////////////////////////////////////////////////////////////////////
//LocalStorage de Item
const getDadosItem = () => JSON.parse(localStorage.getItem("dbItens")) ?? [];
const setDadosItem = (dbItens) => localStorage.setItem("dbItens", JSON.stringify(dbItens));

const itemTitulo = document.getElementById('item-titulo')
const itemDescricao = document.getElementById('item-descricao')
const itemCategoria = document.getElementById('item-categoria')
const itemPrioridade = document.getElementById('item-prioridade')

const inputsItem = [itemTitulo, itemDescricao, itemCategoria, itemPrioridade]

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

function adicionarUltimoItemEmLista(item) {
    var divModelo = document.getElementById('cada-item')
    var cadaItem = divModelo.cloneNode(true)
    cadaItem.innerHTML = item.titulo
    cadaItem.style.display = 'block'
    //cadaItem.classList.add(corDiv);
    cadaItem.style.background = getLocalStorage().find(categoria => item.categoria == categoria.nome).codigo
    listaItens.appendChild(cadaItem)
}

var corDiv;
function criarItem() {
    const item = {
        titulo: itemTitulo.value.trim(),
        descricao: itemDescricao.value,
        categoria: itemCategoria.value,
        prioridade: itemPrioridade.value
    }

    /*const getLocalStorage = () => JSON.parse(localStorage.getItem('db_categoria')) ?? []
    getLocalStorage().forEach(categoria => {

        if (item.categoria == categoria.nome) {
            if (categoria.cor == "Azul")
                corDiv = "blueText";
            else if (categoria.cor == "Amarelo")
                corDiv = "yellowText";
            else if (categoria.cor == "Vermelho")
                corDiv = "redText";
            else if (categoria.cor == "Verde")
                corDiv = "greenText";
            else if (categoria.cor == "Rosa")
                corDiv = "pinkText";
        }
    });*/

    if (saoDadosValidosEmItem(item)) {
        inserirItem(item)
        onOff("item")
        adicionarUltimoItemEmLista(item)
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
                divisor.style.background = getLocalStorage().find(categoria => novoItem.categoria == categoria.nome).codigo
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

document.getElementById('btn-criar-item').addEventListener('click', criarItem)