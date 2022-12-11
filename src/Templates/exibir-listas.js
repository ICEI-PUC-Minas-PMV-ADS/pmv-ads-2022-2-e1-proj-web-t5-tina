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

//Esconder listas
function esconderLista(lista) {
    if(lista == 'itens'){
        if(document.querySelector(".listas .lista-itens").style.display != 'none'){
            document.querySelector(".listas .lista-itens").style.display = 'none';
        } else {
            document.querySelector(".listas .lista-itens").style.display = 'block'
        }
    }
    if(lista == 'habitos'){
        if(document.querySelector(".listas .lista-habitos").style.display != 'none'){
            document.querySelector(".listas .lista-habitos").style.display = 'none';
        } else {
            document.querySelector("#container-listas").style.visibility = 'visible'
            document.querySelector(".listas .lista-habitos").style.display = 'block'
        }
    }
    if(document.querySelector(".listas .lista-itens").style.display == 'none' && document.querySelector(".listas .lista-habitos").style.display == 'none'){
       document.querySelector("#container-listas").style.visibility = 'hidden'
    } else {
        document.querySelector("#container-listas").style.visibility = 'visible'
    }
 }

 
document.getElementById('itens').addEventListener('click', function(){esconderLista('itens')})
document.getElementById('habitos').addEventListener('click', function(){esconderLista('habitos')})
//document.getElementById('itens').addEventListener('click', esconderLista)