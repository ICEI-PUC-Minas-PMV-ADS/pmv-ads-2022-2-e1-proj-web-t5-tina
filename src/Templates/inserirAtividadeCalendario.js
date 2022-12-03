function inserirAtividades(dayString, daySquare) {

    getDados().forEach(atividade => {

        if (atividade.dataInicio === dayString && getDados() != []) {

            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            
// Alterando a cor da atividade de acordo com a categoria 
// pegos os dados salvo no LocalStorage e comparo o nome da categoria com a categoria declarada na atividade, depois checo qual a cor e aplico a estilização
            const getLocalStorage = () => JSON.parse(localStorage.getItem('dbCategoria')) ?? []
            getLocalStorage().forEach(categoria => {    

                if (atividade.categoria.toUpperCase() == categoria.titulo.toUpperCase()) {
                    if (categoria.cor == "#0000FF")
                      eventDiv.classList.add("blueText");
                    else if (categoria.cor == "#FF00FF")
                      eventDiv.classList.add("yellowText");
                    else if (categoria.cor == "#000000")
                      eventDiv.classList.add("redText");
                    else if (categoria.cor == "#000033")
                      eventDiv.classList.add("greenText");
                    else if (categoria.cor == "Rosa")
                      eventDiv.classList.add("pinkText");
                }
            });

            eventDiv.setAttribute('id', atividade.titulo)
            eventDiv.innerText = atividade.titulo;
            daySquare.appendChild(eventDiv);
        }
    });
}
