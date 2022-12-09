function inserirAtividades(dayString, daySquare) {
  getDados().forEach((atividade) => {
    if (
      atividade.periodizacao === "nao-se-aplica" &&
      atividade.dataInicio === dayString &&
      getDados() != []
    ) {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");

      // Alterando a cor da atividade de acordo com a categoria
      // pegos os dados salvo no LocalStorage e comparo o nome da categoria com a categoria declarada na atividade, depois checo qual a cor e aplico a estilização
      eventDiv.style.background = getLocalStorage().find(
        (categoria) => atividade.categoria == categoria.nome
      ).codigo;

      eventDiv.setAttribute("id", atividade.titulo);
      eventDiv.innerText = atividade.titulo;
      daySquare.appendChild(eventDiv);
    }

    if (
      atividade.periodizacao === "diariamente" &&
      atividade.dataInicio <= dayString &&
      getDados() != []
    ) {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");

      eventDiv.style.background = getLocalStorage().find(
        (categoria) => atividade.categoria == categoria.nome
      ).codigo;

      eventDiv.setAttribute("id", atividade.titulo);
      eventDiv.innerText = atividade.titulo;
      daySquare.appendChild(eventDiv);
    }
    
    if (
      atividade.periodizacao === "semanalmente" &&
      atividade.dataInicio === dayString &&
      getDados() != []
    ) {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");

      eventDiv.style.background = getLocalStorage().find(
        (categoria) => atividade.categoria == categoria.nome
      ).codigo;

      eventDiv.setAttribute("id", atividade.titulo);
      eventDiv.innerText = atividade.titulo;
      daySquare.appendChild(eventDiv);
    }

    for (i = 8; i <= 1000; i += 7) {
      semanal = i;

      const dataSemanal = addDays(
        new Date(Date.parse(atividade.dataInicio)),
        semanal
      );
      const dayStringSemanal = `${dataSemanal.getFullYear()}-${
        dataSemanal.getMonth() < 9 ? "0" : ""
      }${dataSemanal.getMonth() + 1}-${
        dataSemanal.getDate() < 10 ? "0" : ""
      }${dataSemanal.getDate()}`;

      if (
        atividade.periodizacao === "semanalmente" &&
        (dayString === dayStringSemanal && getDados() != [])
      ) {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        eventDiv.style.background = getLocalStorage().find(
          (categoria) => atividade.categoria == categoria.nome
        ).codigo;

        eventDiv.setAttribute("id", atividade.titulo);
        eventDiv.innerText = atividade.titulo;
        daySquare.appendChild(eventDiv);
      }
    }

    if (
      atividade.periodizacao === "mensalmente" &&
      atividade.dataInicio === dayString &&
      getDados() != []
    ) {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");

      eventDiv.style.background = getLocalStorage().find(
        (categoria) => atividade.categoria == categoria.nome
      ).codigo;

      eventDiv.setAttribute("id", atividade.titulo);
      eventDiv.innerText = atividade.titulo;
      daySquare.appendChild(eventDiv);
    }

    for (i = 1; i <= 240; i++) {
        mensal = i;

        const dataMensal = addMonths(
          new Date(Date.parse(atividade.dataInicio)),
          mensal
        );

        const dayStringMensal = `${dataMensal.getFullYear()}-${
          dataMensal.getMonth() < 9 ? "0" : ""
        }${dataMensal.getMonth() + 1}-${
          dataMensal.getDate() < 10 ? "0" : ""
        }${dataMensal.getDate() + 1}`;

        if (
          atividade.periodizacao === "mensalmente" &&
          dayString === dayStringMensal &&
          getDados() != []
        ) {
          const eventDiv = document.createElement("div");
          eventDiv.classList.add("event");

          eventDiv.style.background = getLocalStorage().find(
            (categoria) => atividade.categoria == categoria.nome
          ).codigo;

          eventDiv.setAttribute("id", atividade.titulo);
          eventDiv.innerText = atividade.titulo;
          daySquare.appendChild(eventDiv);
        }
    }
  });
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addMonths(date, months) {
  var d = date.getDate();
  date.setMonth(date.getMonth() + months);
  if (date.getDate() != d) {
    date.setDate(0);
  }
  return date;
}

