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
        cadaItem.classList.add('cada-item')

        cadaItem.style.background = getLocalStorage().find(categoria => elemento.categoria == categoria.nome).codigo

        listaItens.appendChild(cadaItem)
    })
}

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
        cadaHabito.classList.add('cada-habito')
        cadaHabito.style.background = getLocalStorage().find(categoria => elemento.categoria == categoria.nome).codigo
        listaHabitos.appendChild(cadaHabito)
    })
}
