const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_categoria')) ?? []
const setLocalStorage = (dbCategoria) => localStorage.setItem("db_categoria", JSON.stringify(dbCategoria))

// CRUD - create read update delete
const deleteCategoria = (index) => {
    const dbCategoria = readCategoria()
    dbCategoria.splice(index, 1)
    setLocalStorage(dbCategoria)
}

const updateCategoria = (index, adCategoria) => {
    const dbCategoria = readCategoria()
    dbCategoria[index] = adCategoria
    setLocalStorage(dbCategoria)
}

const readCategoria = () => getLocalStorage()

const createCategoria = (adCategoria) => {
    const dbCategoria = getLocalStorage()
    dbCategoria.push(adCategoria)
    setLocalStorage(dbCategoria)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveCategoria = () => {
    if (isValidFields()) {
        var codigo = document.getElementById('cor').value

        if (codigo == 'Azul') {
            codigo = "rgb(173, 216, 230)";
        }
        else if (codigo == 'Rosa') {
            codigo = "rgb(255, 182, 193)";
        }
        else if (codigo == 'Vermelho') {
            codigo = "rgb(240, 128, 128)";
        }
        else if (codigo == 'Verde') {
            codigo = "rgb(183, 213, 172)";
        }
        else if (codigo == 'Amarelo') {
            codigo = "rgba(239, 221, 122, 0.814)";
        }

        const adCategoria = {
            nome: document.getElementById('nome').value,
            cor: document.getElementById('cor').value,
            codigo: codigo
        }

        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createCategoria(adCategoria)
            updateTable()
            closeModal()
        } else {
            updateCategoria(index, adCategoria)
            updateTable()
            closeModal()
        }
    }
    window.location.reload()
}

const createRow = (adCategoria, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${adCategoria.nome}</td>
        <td class="nota">${adCategoria.cor}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbCategoria = readCategoria()
    clearTable()
    dbCategoria.forEach(createRow)
}

const fillFields = (adCategoria) => {
    document.getElementById('nome').value = adCategoria.nome
    document.getElementById('cor').value = adCategoria.cor
    document.getElementById('nome').dataset.index = adCategoria.index
}

const editCategoria = (index) => {
    const adCategoria = readCategoria()[index]
    adCategoria.index = index
    fillFields(adCategoria)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editCategoria(index)
        } else {
            const adCategoria = readCategoria()[index]
            const response = confirm(`Deseja realmente excluir essa categoria ${adCategoria.nome}`)
            if (response) {
                deleteCategoria(index)
                updateTable()
            }
        }
    }
}

updateTable()

//document.getElementById('modalClose')
//    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveCategoria)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', condicional)

document.getElementById('salvar')
    .addEventListener('click', condicional)

// mudando a cor do option categoria

var select = document.getElementById('cor');
select.onchange = function () {
    select.className = this.options[this.selectedIndex].className;
}

// mudando a cor da categoria na tabela de edição 
function condicional() {
    var tds = document.getElementsByTagName("td");
    var i;
    for (i = 0; i < tds.length; i++) {
        if (tds[i].innerHTML == 'Azul') {
            tds[i].style.backgroundColor = "rgb(173, 216, 230)";
        }
        else if (tds[i].innerHTML == 'Rosa') {
            tds[i].style.backgroundColor = "rgb(255, 182, 193)";
        }
        else if (tds[i].innerHTML == 'Vermelho') {
            tds[i].style.backgroundColor = "rgb(240, 128, 128)";
        }
        else if (tds[i].innerHTML == 'Verde') {
            tds[i].style.backgroundColor = "rgb(183, 213, 172)";
        }
        else if (tds[i].innerHTML == 'Amarelo') {
            tds[i].style.backgroundColor = "rgba(239, 221, 122, 0.814)";
        }
    }
}

// tornando a escolha da categoria (option)
const categoriaList = getLocalStorage()
const categoriaSelect = document.getElementById("categoria");
for (o in categoriaList) {
    option = new Option(categoriaList[o].nome, categoriaList[o].nome);
    option.style.backgroundColor = categoriaList[o].codigo;
    categoriaSelect.options[categoriaSelect.options.length] = option;
}

const categoriaSelecti = document.getElementById("item-categoria");
if (categoriaSelecti) {
    for (o in categoriaList) {
        option = new Option(categoriaList[o].nome, categoriaList[o].nome);
        option.style.backgroundColor = categoriaList[o].codigo;
        categoriaSelecti.options[categoriaSelecti.options.length] = option;
    }
}

const categoriaSelecth = document.getElementById("habito-categoria");
if (categoriaSelecth) {
    for (o in categoriaList) {
        option = new Option(categoriaList[o].nome, categoriaList[o].nome);
        option.style.backgroundColor = categoriaList[o].codigo;
        categoriaSelecth.options[categoriaSelecth.options.length] = option;
    }
}

const categoriaSelecta = document.getElementById("atualizar-categoria");
if (categoriaSelecta) {
    for (a in categoriaList) {
        option = new Option(categoriaList[a].nome, categoriaList[a].nome);
        option.style.backgroundColor = categoriaList[a].codigo;
        categoriaSelecta.options[categoriaSelecta.options.length] = option;
    }
}

const categoriaSelectFiltro = document.getElementById("filtro");
if (categoriaSelectFiltro) {
    for (a in categoriaList) {
        option = new Option(categoriaList[a].nome, categoriaList[a].nome);
        option.style.backgroundColor = categoriaList[a].codigo;
        categoriaSelectFiltro.options[categoriaSelectFiltro.options.length] = option;
    }
}