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
    else if (type == "item"){
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
    else if (type == "categoria"){
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
