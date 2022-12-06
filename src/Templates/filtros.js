
function filtrar(event) {
    var filtro = event.target.value
    var prioridade, categoria;
    if(filtro == 'Todos'){
        window.location.href = './home.html';
    } else if(filtro.includes('Prioridade')){
        filtro = filtro.slice(11)
        filtrarPrioridade(filtro)
    } else {
        filtrarCategoria(filtro)
    }
}

function filtrarCategoria(categoria){
    Array.prototype.forEach.call(document.getElementsByClassName("cada-item"), function (divisor) {
        var item = getDadosItem().find(item => item.categoria == categoria && item.titulo == divisor.innerHTML)
        if (item && divisor.innerText == item.titulo) {
            divisor.style.display = 'block'
        } else {
            divisor.style.display = 'none'
        }
    });

    Array.prototype.forEach.call(document.getElementsByClassName("cada-habito"), function (divisor) {
        var habito = getDadosHabito().find(habito => habito.categoria == categoria && habito.titulo == divisor.innerHTML)
        if (habito && divisor.innerHTML == habito.titulo) {
                divisor.style.display = 'block'
        } else {
            divisor.style.display = 'none'
        }

    });

    Array.prototype.forEach.call(document.getElementsByClassName("event"), function (divisor) {
        var atividade = getDados().find(atividade => atividade.categoria == categoria && atividade.titulo == divisor.innerHTML)
        if (atividade && divisor.innerHTML == atividade.titulo) {
                divisor.style.display = 'block'
        } else {
            divisor.style.display = 'none'
        }
    });

}

function filtrarPrioridade(prioridade) {

    Array.prototype.forEach.call(document.getElementsByClassName("cada-item"), function (divisor) {
        var item = getDadosItem().find(item => item.prioridade == prioridade  && item.titulo == divisor.innerHTML)
        if (item && divisor.innerText == item.titulo) {
            divisor.style.display = 'block'
        } else {
            divisor.style.display = 'none'
        }
    });

    Array.prototype.forEach.call(document.getElementsByClassName("cada-habito"), function (divisor) {
        var habito = getDadosHabito().find(habito => habito.prioridade == prioridade)
        if (habito && divisor.innerHTML == habito.titulo) {
                divisor.style.display = 'block'
        } else {
            divisor.style.display = 'none'
        }
    });

    Array.prototype.forEach.call(document.getElementsByClassName("event"), function (divisor) {
        var atividade = getDados().find(atividade => atividade.prioridade == prioridade)
        if (atividade && divisor.innerHTML == atividade.titulo) {
                divisor.style.display = 'block'
        } else {
            divisor.style.display = 'none'
        }
    });

}

function aparecerFiltros(){
    if(document.getElementById('filtro').style.display == 'none'){
        document.getElementById('filtro').style.display = 'block'
    } else {
        document.getElementById('filtro').style.display = 'none'
    }
}