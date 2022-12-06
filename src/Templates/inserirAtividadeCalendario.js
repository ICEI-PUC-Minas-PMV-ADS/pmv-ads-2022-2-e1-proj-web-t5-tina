function inserirAtividades(dayString, daySquare) {

    getDados().forEach(atividade => {

        if (atividade.dataInicio === dayString && getDados() != []) {

            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            
// Alterando a cor da atividade de acordo com a categoria 
// pegos os dados salvo no LocalStorage e comparo o nome da categoria com a categoria declarada na atividade, depois checo qual a cor e aplico a estilização
            eventDiv.style.background = getLocalStorage().find(categoria => atividade.categoria == categoria.nome).codigo
            
            eventDiv.setAttribute('id', atividade.titulo)
            eventDiv.innerText = atividade.titulo;
            daySquare.appendChild(eventDiv);
        }
    });
}
