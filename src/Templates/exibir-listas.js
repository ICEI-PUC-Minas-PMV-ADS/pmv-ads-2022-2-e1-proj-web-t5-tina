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

        cadaItem.style.background = getLocalStorage().find(categoria => elemento.categoria == categoria.nome).codigo

        /*const getLocalStorage = () => JSON.parse(localStorage.getItem('db_categoria')) ?? []
        getLocalStorage().forEach(categoria => {

            if (elemento.categoria == categoria.nome) {
                if (categoria.cor == "Azul")
                    cadaItem.classList.add("blueText");
                else if (categoria.cor == "Amarelo")
                    cadaItem.classList.add("yellowText");
                else if (categoria.cor == "Vermelho")
                    cadaItem.classList.add("redText");
                else if (categoria.cor == "Verde")
                    cadaItem.classList.add("greenText");
                else if (categoria.cor == "Rosa")
                    cadaItem.classList.add("pinkText");
            }
        });*/

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
        cadaHabito.style.background = getLocalStorage().find(categoria => elemento.categoria == categoria.nome).codigo
        listaHabitos.appendChild(cadaHabito)
    })
}
