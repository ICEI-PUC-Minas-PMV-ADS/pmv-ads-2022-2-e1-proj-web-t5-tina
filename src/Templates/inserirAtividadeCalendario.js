function inserirAtividades(dayString, daySquare) {

    getDados().forEach(atividade => {

        if (atividade.dataInicio === dayString && getDados() != []) {

            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            
// Alterando a cor da atividade de acordo com a categoria 
// pegos os dados salvo no LocalStorage e comparo o nome da categoria com a categoria declarada na atividade, depois checo qual a cor e aplico a estilização
            const getLocalStorage = () => JSON.parse(localStorage.getItem('db_categoria')) ?? []
            getLocalStorage().forEach(categoria => {    

                if (atividade.categoria == categoria.nome) {
                  if (categoria.cor == "Azul")
                    eventDiv.classList.add("blueText");
                  else if (categoria.cor == "Amarelo")
                    eventDiv.classList.add("yellowText");
                  else if (categoria.cor == "Vermelho")
                    eventDiv.classList.add("redText");
                  else if (categoria.cor == "Verde")
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
