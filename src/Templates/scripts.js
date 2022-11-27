const dataMinima = new Date()

const ano = dataMinima.getFullYear()
const mes = dataMinima.getMonth()
const dia = dataMinima.getDate()

const dataMinimaFormatada = `${ano}-${mes + 1}-${dia}`

function onOff(type) {
    if (type == "atividade") {
        dataInicio.setAttribute('min', dataMinimaFormatada)
        dataFim.setAttribute('min', dataMinimaFormatada)
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
    } else if (type == "atualizar-atividade") {
        dataInicioEditado.setAttribute('min', dataMinimaFormatada)
        dataFimEditado.setAttribute('min', dataMinimaFormatada)
        document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-atualizar-atividade")
            .classList
            .toggle("addScroll")
        limparErrosEdicao()
    }
}

