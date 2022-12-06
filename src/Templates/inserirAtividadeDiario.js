function inserirAtividadeDiario(dayString, intervalo, idIntervalo) {
  getDados().forEach((atividade) => {
    if (atividade.dataInicio === dayString && getDados() != []) {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");

      eventDiv.style.background = getLocalStorage().find(categoria => atividade.categoria == categoria.nome).codigo

      eventDiv.setAttribute("id", atividade.titulo);
      eventDiv.innerText = atividade.titulo;

      const [horas, minutos] = atividade.horarioInicio.split(":");
      const [horasIntervalo, minutosIntervalo] = idIntervalo.split(":");
      if (
        horasIntervalo == horas &&
        minutosIntervalo == 00 && minutos < 30
      ) {
        intervalo.appendChild(eventDiv);
      }
      if (horasIntervalo == horas && minutosIntervalo == 30 && minutos >= 30) {
        intervalo.appendChild(eventDiv);
      }
    }
  });
}
