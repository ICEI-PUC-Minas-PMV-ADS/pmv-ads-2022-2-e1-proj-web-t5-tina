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

var btnCriarItem = document.querySelector("#btn-criar-item");

btnCriarItem.addEventListener("click", function(event){
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
    novoItem.innerHTML = "Nome: " + item.nome + "<br>Descrição: "+ item.descricao + "<br>Categoria: " + item.categoria + "      Prioridade: " + item.prioridade ;


    listaItens.appendChild(novoItem);
    onOff("item");
})

var btnCriarHabito = document.querySelector("#btn-criar-habito");

btnCriarHabito.addEventListener("click", function(event){
    event.preventDefault();
    
    var formHabito = document.querySelector("#form-habito");
    var habito = {
        "nome": formHabito.titulo.value,
        "descricao": formHabito.descricao.value,
        "data_inicio": formHabito['data-inicio'].value,
        "data_fim" : formHabito['data-fim'].value,
        "categoria": formHabito.categoria.value,
        "prioridade": formHabito.prioridade.value,
        "periodizacao": formHabito.periodizacao.value
    }
    
    var listaHabitos = document.querySelector(".lista-habitos");
    var novoHabito = document.createElement("div");
    novoHabito.innerHTML = "Nome: " + habito.nome + "<br>Descrição: "+ habito.descricao + "<br>De: "+ habito.data_inicio + "  até  : "+ habito.data_fim + "<br>Categoria: " + habito.categoria + "      Prioridade: " + habito.prioridade + "<br>Periodização: "+ habito.periodizacao;


    listaHabitos.appendChild(novoHabito);
    onOff("habito");
})