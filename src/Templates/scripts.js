
const dataMinima = new Date()

const ano = dataMinima.getFullYear()
const mes = dataMinima.getMonth()
const dia = dataMinima.getDate()

const dataMinimaFormatada = `${ano}-${mes < 9 ? '0' : '' }${mes + 1}-${dia < 10 ? '0' : ''}${dia}`

// botões
const botoes = document.querySelectorAll('.button')

function onOff(type, action = null) {
    if (type == "atividade") {
        dataInicio.setAttribute('min', dataMinimaFormatada)
        dataFim.setAttribute('min', dataMinimaFormatada)
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-atividade')) {
                botao.removeAttribute('onclick')
            }
        })
        document.querySelector("#modal-atividade").classList.toggle("hide")
        document.querySelector("#modal-atividade").classList.toggle("addScroll")
        limparCampos()
        limparErros()
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-atividade') &&
            document.querySelector("#modal-atividade").classList.contains('hide') && botao.parentElement.classList.contains('criacao-item')) {
                botao.setAttribute('onclick', "onOff('item')")
            }
            if (!botao.parentElement.classList.contains('criacao-atividade') &&
            document.querySelector("#modal-atividade").classList.contains('hide') && botao.parentElement.classList.contains('criacao-habito')) {
                botao.setAttribute('onclick', "onOff('habito')")
            }
        })
    }
    else if (type == "item") {
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-item')) {
                botao.removeAttribute('onclick')
            }
        })
        document.querySelector("#modal-item").classList.toggle("hide")
        document.querySelector("#modal-item").classList.toggle("addScroll")
        limparCampos()
        limparErros()
        mostrarBotoes(action)
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-item') &&
            document.querySelector("#modal-item").classList.contains('hide') && botao.parentElement.classList.contains('criacao-atividade')) {
                botao.setAttribute('onclick', "onOff('atividade')")
            }
            if (!botao.parentElement.classList.contains('criacao-item') &&
            document.querySelector("#modal-item").classList.contains('hide') && botao.parentElement.classList.contains('criacao-habito')) {
                botao.setAttribute('onclick', "onOff('habito')")
            }
        })
    }
    else if (type == "habito") {
        habitoDataInicio.setAttribute('min', dataMinimaFormatada)
        habitoDataFim.setAttribute('min', dataMinimaFormatada)
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-habito')) {
                botao.removeAttribute('onclick')
            }
        })
        document.querySelector("#modal-habito").classList.toggle("hide")
        document.querySelector("#modal-habito").classList.toggle("addScroll")
        limparCampos()
        limparErros()
        mostrarBotoesHabito(action)
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-habito') &&
            document.querySelector("#modal-habito").classList.contains('hide') && botao.parentElement.classList.contains('criacao-atividade')) {
                botao.setAttribute('onclick', "onOff('atividade')")
            }
            if (!botao.parentElement.classList.contains('criacao-habito') &&
            document.querySelector("#modal-habito").classList.contains('hide') && botao.parentElement.classList.contains('criacao-item')) {
                botao.setAttribute('onclick', "onOff('item')")
            }
        })
    } else if (type == "categoria") {
        document.querySelector("#modal-categoria").classList.toggle("hide")
        document.querySelector("#modal-categoria").classList.toggle("addScroll")
    } else if (type == "atualizar-atividade") {
        dataInicioEditado.setAttribute('min', dataMinimaFormatada)
        dataFimEditado.setAttribute('min', dataMinimaFormatada)
        botoes.forEach(botao => {
            if (botao.id !== 'atualizar-atividade') {
                botao.removeAttribute('onclick')
            }
        })
        document.querySelector("#modal-atualizar-atividade").classList.toggle("hide")
        document.querySelector("#modal-atualizar-atividade").classList.toggle("addScroll")
        limparErrosEdicao()
        botoes.forEach(botao => {
            if (botao.id !== 'atualizar-atividade' && document.querySelector("#modal-atualizar-atividade").classList.contains("hide") && botao.parentElement.classList.contains('criacao-atividade')) {
                botao.setAttribute('onclick', "onOff('atividade')")
            }
            if (botao.id !== 'atualizar-atividade' && document.querySelector("#modal-atualizar-atividade").classList.contains("hide") && botao.parentElement.classList.contains('criacao-item')) {
                botao.setAttribute('onclick', "onOff('item')")
            }
            if (botao.id !== 'atualizar-atividade' && document.querySelector("#modal-atualizar-atividade").classList.contains("hide") && botao.parentElement.classList.contains('criacao-habito')) {
                botao.setAttribute('onclick', "onOff('habito')")
            }
        })
        }
    }

document.getElementById('btn-ajuda').addEventListener('click', function(){window.location.href = "./duvidas.html"})

document.getElementById('btn-configuracoes').addEventListener('click', function(){window.location.href = "./configuracoes.html"})

document.getElementById('btn-visualizacao-mensal').addEventListener('click', function(){window.location.href = "./home.html"})

document.getElementById('btn-visualizacao-diaria').addEventListener('click', function(){window.location.href = "./home-calendario-diario.html"})
