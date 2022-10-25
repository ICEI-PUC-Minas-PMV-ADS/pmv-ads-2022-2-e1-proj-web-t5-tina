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
    }
    else if(type == "item"){
        document
            .querySelector("#modal-item")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-item")
            .classList
            .toggle("addScroll")
        
    }
    else if (type == "habito"){
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("hide")
        document
            .querySelector("#modal-habito")
            .classList
            .toggle("addScroll")
    }
}

function checkFields(event) {

    const valuesToCheck = [
        "titulo",
        "data-inicio",
        "data-fim",
        "horario-inicio",
        "horario-final",
        "Categoria",
        "Prioridade",
    ]

    const isEmpty = valuesToCheck.find(function (value) {
        const checkifIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        if (checkifIsString && checkIfIsEmpty) {
            return true
        }
    })

    if (isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }
}

server.post("/", function (req, res) {
    const query = `INSERT INTO ideas (image, title, category, description, url) VALUES (?,?,?,?,?);`
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.url
    ]

    db.run(query, values, function (err) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        return res.redirect("/ideias")
    })

})