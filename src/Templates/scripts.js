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

// Criar Atividade

const titulo =  document.getElementById('titulo')
const descricao =  document.getElementById('descricao')
const dataInicio =  document.getElementById('data-inicio')
const dataFim =  document.getElementById('data-fim')
const horarioInicio =  document.getElementById('horario-inicio')
const horarioFinal =  document.getElementById('horario-final')
const categoria =  document.getElementById('categoria')
const prioridade =  document.getElementById('prioridade')
const periodizacao =  document.getElementById('periodizacao')

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

const salvarAtividade = () => {
    var erros = 0
    
    if (titulo.value == '') {
        titulo.classList.add('campo-vazio')
        erros++
    }
    if (descricao.value == '') {
        descricao.classList.add('campo-vazio')
        erros++
    }
    if (dataInicio.value == '') {
        dataInicio.classList.add('campo-vazio')
        erros++      
    }
    if (dataFim.value == '') {
        dataFim.classList.add('campo-vazio')
        erros++        
    }
    if (horarioInicio.value == '') {
        horarioInicio.classList.add('campo-vazio')
        erros++        
    }
    if (horarioFinal.value == '') {
        horarioFinal.classList.add('campo-vazio')
        erros++        
    }
    if (categoria.value == '') {
        categoria.classList.add('campo-vazio')
        erros++    
    }
    if (prioridade.value == '') {
        prioridade.classList.add('campo-vazio')
        erros++      
    }
    if (periodizacao.value == '') {
        periodizacao.classList.add('campo-vazio')
        erros++
    }
    
    if (erros == 0) {
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
    }
}

document.getElementById('criar-atividade')
    .addEventListener('click', salvarAtividade)

// function checkFields(event) {

//     const valuesToCheck = [
//         "titulo",
//         "data-inicio",
//         "data-fim",
//         "horario-inicio",
//         "horario-final",
//         "Categoria",
//         "Prioridade",
//     ]

//     const isEmpty = valuesToCheck.find(function (value) {
//         const checkifIsString = typeof event.target[value].value === "string"
//         const checkIfIsEmpty = !event.target[value].value.trim()
//         if (checkifIsString && checkIfIsEmpty) {
//             return true
//         }
//     })

//     if (isEmpty) {
//         event.preventDefault()
//         alert("Por favor, preencha todos os campos")
//     }
// }



// server.post("/", function (req, res) {
//     const query = `INSERT INTO ideas (image, title, category, description, url) VALUES (?,?,?,?,?);`
//     const values = [
//         req.body.image,
//         req.body.title,
//         req.body.category,
//         req.body.description,
//         req.body.url
//     ]

//     db.run(query, values, function (err) {
//         if (err) {
//             console.log(err)
//             return res.send("Erro no banco de dados!")
//         }

//         return res.redirect("/ideias")
//     })

// })