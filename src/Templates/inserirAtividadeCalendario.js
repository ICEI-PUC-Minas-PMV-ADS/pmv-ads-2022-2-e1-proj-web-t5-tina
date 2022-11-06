function inserirAtividades(dayString, daySquare) {

    getDados().forEach(atividade => {

        if (atividade.dataInicio === dayString && getDados() != []) {

            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.setAttribute('id', atividade.titulo)
            eventDiv.innerText = atividade.titulo;  
            daySquare.appendChild(eventDiv);    
        }
    });
}
