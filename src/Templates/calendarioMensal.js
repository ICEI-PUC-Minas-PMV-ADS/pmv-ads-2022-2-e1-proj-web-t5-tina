let nav = 0;
let clicked = null;

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

        const dayString = `${year}-${month < 9 ? '0' : ''}${month + 1}-${(i - paddingDays) < 10 ? '0' : ''}${i - paddingDays}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;

            inserirAtividades(dayString, daySquare);

            if (i - paddingDays === day && nav === 0) {
                daySquare.id = 'currentDay';
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

    document.getElementById('botao-hoje').addEventListener('click', () => {
        nav = 0;
        load();
    });
}

exibirListaItens()
exibirListaHabitos()

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


initButtons();
load();

