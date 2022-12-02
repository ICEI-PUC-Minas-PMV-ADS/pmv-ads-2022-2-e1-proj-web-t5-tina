//LocalStorage de Item
const getDadosItem = () => JSON.parse(localStorage.getItem("dbItens")) ?? [];
const setDadosItem = (dbItens) => localStorage.setItem("dbItens", JSON.stringify(dbItens));

const itemTitulo = document.getElementById('item-titulo')
const itemDescricao = document.getElementById('item-descricao')
const itemCategoria = document.getElementById('item-categoria')
const itemPrioridade = document.getElementById('item-prioridade')

const inputsItem = [itemTitulo, itemDescricao, itemCategoria, itemPrioridade]

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

document.getElementById('btn-criar-item').addEventListener('click', criarItem)
var todasDivsItens = document.getElementsByClassName('cada-item')
for (var i = 0; i < todasDivsItens.length; i++) {
    todasDivsItens[i].addEventListener('click', abrirModalItem);
}