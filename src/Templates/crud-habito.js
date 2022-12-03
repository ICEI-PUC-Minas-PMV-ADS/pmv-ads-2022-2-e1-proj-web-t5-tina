//LocalStorage de Hábitos
const getDadosHabito = () => JSON.parse(localStorage.getItem("dbHabitos")) ?? [];
const setDadosHabito = (dbHabitos) => localStorage.setItem("dbHabitos", JSON.stringify(dbHabitos));

const habitoTitulo = document.getElementById('habito-titulo')
const habitoDescricao = document.getElementById('habito-descricao')
const habitoDataInicio = document.getElementById('habito-data-inicio')
const habitoDataFim = document.getElementById('habito-data-fim')
const habitoCategoria = document.getElementById('habito-categoria')
const habitoPrioridade = document.getElementById('habito-prioridade')
const habitoPeriodizacao = document.getElementById('habito-periodizacao')

const inputsHabito = [habitoTitulo, habitoDescricao, habitoDataInicio, habitoDataFim, habitoCategoria, habitoPrioridade, habitoPeriodizacao]

//Criar Habito
const inserirHabito = (habito) => {
    const dbHabitos = getDadosHabito()
    dbHabitos.push(habito)
    setDadosHabito(dbHabitos)
}

const saoDadosValidosEmHabito = (habito) => {
    const dbHabitos = getDadosHabito()
    var elementoUnico = true
    var inputsVaziosEmHabito = 0;

    inputsHabito.forEach(input => {
        if (input.value.trim() == "") {
            input.classList.add('campo-vazio')
            inputsVaziosEmHabito++
        } else {
            input.classList.remove('campo-vazio')
        }
    });

    dbHabitos.forEach(dadoHabito => {
        if (dadoHabito.titulo == habito.titulo && habito.titulo != document.getElementById('idHabito').value) {
            habitoTitulo.classList.add('campo-vazio')
            elementoUnico = false
        }
    });
    return elementoUnico && inputsVaziosEmHabito == 0;
}

function adicionarUltimoHabitoEmLista(titulo) {
    var divModelo = document.getElementById('cada-habito')
    var cadaHabito= divModelo.cloneNode(true)
    cadaHabito.innerHTML = titulo
    cadaHabito.style.display = 'block'
    listaHabitos.appendChild(cadaHabito)
}

function criarHabito() {
    const habito = {
        titulo: habitoTitulo.value.trim(),
        descricao: habitoDescricao.value,
        dataInicio: habitoDataInicio.value,
        dataFim: habitoDataFim.value,
        categoria: habitoCategoria.value,
        prioridade: habitoPrioridade.value,
        periodizacao: habitoPeriodizacao.value
    }

    if (saoDadosValidosEmHabito(habito)) {
        inserirHabito(habito)
        onOff("habito")
        adicionarUltimoHabitoEmLista(habito.titulo)
    } else {
        alert("Não foi possível salvar. Há campos vazios ou título igual ao de outro hábito.")
    }

}

//Ler Habito
function abrirModalHabito(evento) {
    var habitoParaLer = evento.target.innerText
    const habito = getDadosHabito().find(evento => evento.titulo === habitoParaLer)
        document.getElementById('modal-habito')
        /*var h1= document.querySelector('#modal-habito .novo-habito .cabecalho')
        h1.innerText('Atualizar Hábito')*/
    onOff("habito", 'ler')
    prencherInputsHabitos(habito)
}

const prencherInputsHabitos = (habito) => {
    document.getElementById('idHabito').value = habito.titulo
    document.getElementById('habito-titulo').value = habito.titulo
    document.getElementById('habito-descricao').value = habito.descricao
    document.getElementById('habito-data-inicio').value = habito.dataInicio
    document.getElementById('habito-data-fim').value = habito.dataFim
    document.getElementById('habito-categoria').value = habito.categoria
    document.getElementById('habito-prioridade').value = habito.prioridade
    document.getElementById('habito-periodizacao').value = habito.periodizacao

}

//Atualizar Habito
function atualizarHabito() {
    var indice = getDadosHabito().findIndex(e => e.titulo === document.getElementById('idHabito').value)
    var db = getDadosHabito()
    const novoHabito = {
        titulo: habitoTitulo.value.trim(),
        descricao: habitoDescricao.value,
        dataInicio: habitoDataInicio.value,
        dataFim: habitoDataFim.value,
        categoria: habitoCategoria.value,
        prioridade: habitoPrioridade.value,
        periodizacao: habitoPeriodizacao.value
    }

    if (saoDadosValidosEmHabito(novoHabito)) {
        db[indice] = novoHabito
        Array.prototype.forEach.call(document.getElementsByClassName("cada-habito"), function (divisor) {
            if (divisor.innerText == document.getElementById('idHabito').value) {
                divisor.innerText = habitoTitulo.value
            }
        });
        setDadosHabito(db)
        onOff("habito")
    } else {
        alert("Não foi possível salvar. Há campos vazios ou título igual a outro hábito.")
    }
}

//Remover Hábito
function removerHabito() {
    var confirmacao = confirm("Você tem certeza que quer apagar o hábito '" + idHabito.value + "' ?")
    if (confirmacao) {
        var indice = getDadosHabito().findIndex(e => e.titulo === document.getElementById('idHabito').value)
        var db = getDadosHabito()
        
        db.splice(indice, 1)
        setDadosHabito(db)
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('btn-criar-habito').addEventListener('click', criarHabito)

