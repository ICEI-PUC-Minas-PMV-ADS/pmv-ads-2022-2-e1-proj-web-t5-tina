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
    dbCategoria.push (adCategoria)
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
    debugger
    if (isValidFields()) {
        const adCategoria = {
            nome: document.getElementById('nome').value,
            cor: document.getElementById('cor').value,
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
    
    // mudando a cor categoria [ERRO]
    function condicional(){
    var tds=document.getElementsByTagName("td");
    var i;
    for(i=0; i<tds.length; i++){
        if(tds[i].innerHTML == 'Azul'){
            tds[i].style.backgroundColor ="rgba(93, 93, 214, 0.814)";
        }
        else if(tds[i].innerHTML == 'Rosa'){
            tds[i].style.backgroundColor ="rgba(239, 122, 217, 0.814)";
        }
        else if(tds[i].innerHTML == 'Vermelho'){
            tds[i].style.backgroundColor ="rgba(246, 55, 55, 0.762)";
        }
        else if(tds[i].innerHTML == 'Verde'){
            tds[i].style.backgroundColor ="rgb(126, 196, 126)";
        }
        else if(tds[i].innerHTML == 'Amarelo'){
            tds[i].style.backgroundColor ="rgba(239, 221, 122, 0.814)";
        }
    }
}

 
