function onOff(type, action = null) {
    if (type == "atividade") {
        document.querySelector("#modal-atividade").classList.toggle("hide")
        document.querySelector("#modal-atividade").classList.toggle("addScroll")
        limparCampos()
        limparErros()
    }
    else if (type == "item") {
        document.querySelector("#modal-item").classList.toggle("hide")
        document.querySelector("#modal-item").classList.toggle("addScroll")
        limparCampos()
        limparErros()
        mostrarBotoes(action)
    }
    else if (type == "habito") {
        document.querySelector("#modal-habito").classList.toggle("hide")
        document.querySelector("#modal-habito").classList.toggle("addScroll")
        limparCampos()
        limparErros()
        mostrarBotoesHabito(action)
    }
    else if (type == "categoria") {
        document.querySelector("#modal-categoria").classList.toggle("hide")
        document.querySelector("#modal-categoria").classList.toggle("addScroll")
    }
}
