const dataMinima = new Date()

const ano = dataMinima.getFullYear()
const mes = dataMinima.getMonth()
const dia = dataMinima.getDate()

const dataMinimaFormatada = `${ano}-${mes < 9 ? '0' : '' }${mes + 1}-${dia}`

// botões
const botoes = document.querySelectorAll('.button')

function onOff(type) {
    if (type == "atividade") {
        dataInicio.setAttribute('min', dataMinimaFormatada)
        dataFim.setAttribute('min', dataMinimaFormatada)
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-atividade')) {
                botao.removeAttribute('onclick')
            }
        })
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
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-atividade') &&
            document
            .querySelector("#modal-atividade")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-item')) {
                botao.setAttribute('onclick', "onOff('item')")
            }
            if (!botao.parentElement.classList.contains('criacao-atividade') &&
            document
            .querySelector("#modal-atividade")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-habito')) {
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
        document
            .querySelector("#modal-item")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-item")
            .classList
            .toggle("addScroll")
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-item') &&
            document
            .querySelector("#modal-item")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-atividade')) {
                botao.setAttribute('onclick', "onOff('atividade')")
            }
            if (!botao.parentElement.classList.contains('criacao-item') &&
            document
            .querySelector("#modal-item")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-habito')) {
                botao.setAttribute('onclick', "onOff('habito')")
            }
        })

    }
    else if (type == "habito") {
         botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-habito')) {
                botao.removeAttribute('onclick')
            }
        })
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("addScroll")
        botoes.forEach(botao => {
            if (!botao.parentElement.classList.contains('criacao-habito') &&
            document
            .querySelector("#modal-habito")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-atividade')) {
                botao.setAttribute('onclick', "onOff('atividade')")
            }
            if (!botao.parentElement.classList.contains('criacao-habito') &&
            document
            .querySelector("#modal-habito")
            .classList
            .contains('hide') && botao.parentElement.classList.contains('criacao-item')) {
                botao.setAttribute('onclick', "onOff('item')")
            }
        })
    } else if (type == "atualizar-atividade") {
        dataInicioEditado.setAttribute('min', dataMinimaFormatada)
        dataFimEditado.setAttribute('min', dataMinimaFormatada)
        botoes.forEach(botao => {
            if (botao.id !== 'atualizar-atividade') {
                botao.removeAttribute('onclick')
            }
        })
        document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("addScroll")
        limparErrosEdicao()
        botoes.forEach(botao => {
            if (botao.id !== 'atualizar-atividade' && document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("hide")&& botao.parentElement.classList.contains('criacao-atividade')) {
                botao.reAttribute('onclick', "onOff('atividade')")
            }
            if (botao.id !== 'atualizar-atividade' && document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("hide")&& botao.parentElement.classList.contains('criacao-item')) {
                botao.reAttribute('onclick', "onOff('item')")
            }
            if (botao.id !== 'atualizar-atividade' && document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("hide")&& botao.parentElement.classList.contains('criacao-habito')) {
                botao.reAttribute('onclick', "onOff('habito')")
            }
        })
    }
}

// if (modalAtividade.classList.contains('hide')) {
// //     botaoHoje.removeAttribute('onclick')
// //     botaoHabito.removeAttribute('onclick')
// //     botaoItem.removeAttribute('onclick')
// // }

