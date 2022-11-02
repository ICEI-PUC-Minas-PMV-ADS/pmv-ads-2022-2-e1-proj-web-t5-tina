function onOff(type) {
    if (type == "atividade") {
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
    }
    else if (type == "item") {
        document
            .querySelector("#modal-item")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-item")
            .classList
            .toggle("addScroll")

    }
    else if (type == "habito") {
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("addScroll")
    }
    else if (type == "categoria") {
        document
            .querySelector("#modal-categoria")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-categoria")
            .classList
            .toggle("addScroll")
    }
}

//Criar Item
var btnCriarItem = document.querySelector("#btn-criar-item");

btnCriarItem.addEventListener("click", function (event) {
    event.preventDefault();

    var formItem = document.querySelector("#form-item");
    var item = {
        "nome": formItem.titulo.value,
        "descricao": formItem.descricao.value,
        "categoria": formItem.categoria.value,
        "prioridade": formItem.prioridade.value
    }

    var listaItens = document.querySelector(".lista-itens");
    var novoItem = document.createElement("div");
    novoItem.innerHTML = "Nome: " + item.nome + "<br>Descrição: " + item.descricao + "<br>Categoria: " + item.categoria + "      Prioridade: " + item.prioridade;


    listaItens.appendChild(novoItem);
    onOff("item");
})

//Criar Hábito
var btnCriarHabito = document.querySelector("#btn-criar-habito");

btnCriarHabito.addEventListener("click", function (event) {
    event.preventDefault();

    var formHabito = document.querySelector("#form-habito");
    var habito = {
        "nome": formHabito.titulo.value,
        "descricao": formHabito.descricao.value,
        "data_inicio": formHabito['data-inicio'].value,
        "data_fim": formHabito['data-fim'].value,
        "categoria": formHabito.categoria.value,
        "prioridade": formHabito.prioridade.value,
        "periodizacao": formHabito.periodizacao.value
    }

    var listaHabitos = document.querySelector(".lista-habitos");
    var novoHabito = document.createElement("div");
    novoHabito.innerHTML = "Nome: " + habito.nome + "<br>Descrição: " + habito.descricao + "<br>De: " + habito.data_inicio + "  até  : " + habito.data_fim + "<br>Categoria: " + habito.categoria + "      Prioridade: " + habito.prioridade + "<br>Periodização: " + habito.periodizacao;


    listaHabitos.appendChild(novoHabito);
    onOff("habito");
})

//Criar categoria

const titulo_categoria = document.getElementById('titulo')
const cor_categoria = document.getElementById('cor-categoria')

const getCategoria = () => JSON.parse(localStorage.getItem("dbCategoria")) ?? [];
const setCategoria = (dbCategoria) => localStorage.setItem("dbCategoria", JSON.stringify(dbCategoria));

const criarCategoria = (categoria) => {
    const dbCategoria = getDados();
    dbCategoria.push(categoria);
    setDados(dbCategoria)
}


// Criar Atividade

const titulo = document.getElementById('titulo')
const descricao = document.getElementById('descricao')
const dataInicio = document.getElementById('data-inicio')
const dataFim = document.getElementById('data-fim')
const horarioInicio = document.getElementById('horario-inicio')
const horarioFinal = document.getElementById('horario-final')
const categoria = document.getElementById('categoria')
const prioridade = document.getElementById('prioridade')
const periodizacao = document.getElementById('periodizacao')

const campos = [titulo, descricao, dataInicio, dataFim, horarioInicio, horarioFinal, categoria, prioridade, periodizacao]


const getDados = () => JSON.parse(localStorage.getItem("dbAtividade")) ?? [];
const setDados = (dbAtividade) => localStorage.setItem("dbAtividade", JSON.stringify(dbAtividade));

const criarAtividade = (atividade) => {
    const dbAtividade = getDados();
    dbAtividade.push(atividade);
    setDados(dbAtividade)
}

const limparCampos = () => {
    const inputs = document.querySelectorAll('form input')
    inputs.forEach(input => input.value = '')

    const textareas = document.querySelectorAll('form textarea')
    textareas.forEach(textarea => textarea.value = '')

    const selects = document.querySelectorAll('form select')
    selects.forEach(select => select.value = '')
}

const limparErros = () => {
    titulo.classList.remove('campo-vazio')
    descricao.classList.remove('campo-vazio')
    dataInicio.classList.remove('campo-vazio')
    dataFim.classList.remove('campo-vazio')
    horarioInicio.classList.remove('campo-vazio')
    horarioFinal.classList.remove('campo-vazio')
    categoria.classList.remove('campo-vazio')
    prioridade.classList.remove('campo-vazio')
    periodizacao.classList.remove('campo-vazio')
}


const isDadosValidos = (atividade) => {

    const atividades = getDados()
    var controlador = 0;
    var validade = true
    atividades.forEach(dadoAtividade => {

        if (dadoAtividade.titulo == atividade.titulo) {
            controlador++
        }
    });

    if (controlador != 0) {
        validade = false
        alert('Já existe atividade com o mesmo título registrada.')
    }
    return validade
}

const salvarAtividade = () => {
    var camposVazios = 0;

    campos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('campo-vazio')
            camposVazios++
        } else {
            campo.classList.remove('campo-vazio')
        }
    });

    if (camposVazios == 0) {

        const atividade = {
            titulo: titulo.value,
            descricao: descricao.value,
            dataInicio: dataInicio.value,
            dataFim: dataFim.value,
            horarioInicio: horarioInicio.value,
            horarioFinal: horarioFinal.value,
            categoria: categoria.value,
            prioridade: prioridade.value,
            periodizacao: periodizacao.value
        }

        criarAtividade(atividade)
        onOff(atividade)
        if (isDadosValidos(atividade)) {
            criarAtividade(atividade)
        }
        onOff('atividade')
    }
}

document.getElementById('criar-atividade')
    .addEventListener('click', salvarAtividade)


let nav = 0;

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
        `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        const dayString = `${month + 1}/${i - paddingDays}/${year}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;

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
}

initButtons();
load();