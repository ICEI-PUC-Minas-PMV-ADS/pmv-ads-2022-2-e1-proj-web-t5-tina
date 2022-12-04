let nav = 0;
let clicked = null;

const calendar = document.getElementById("calendar");
const diaSemana = document.getElementById("dia-semana");
const weekday = document.createElement("div");
let diaDaSemana = "";

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setDate(new Date().getDate() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  document.getElementById("monthDisplay").innerText = `${dt.toLocaleDateString(
    "pt-br",
    { month: "long" }
  )} ${year}`;

  calendar.innerHTML = "";

  const daySquare = document.createElement("div");
  daySquare.classList.add("dayDiario");

  const dayString = `${year}-${month < 9 ? "0" : ""}${month + 1}-${
    day < 10 ? "0" : ""
  }${day}`;

  daySquare.innerText = day;

  // inserirAtividades(dayString, daySquare);

  daySquare.id = "currentDayDiario";
  weekday.classList.add("weekday");
  diaDaSemana = dt.toLocaleDateString("pt-br", {
    weekday: "long",
  });

  weekday.innerText = diaDaSemana;

  calendar.appendChild(daySquare);
  diaSemana.appendChild(weekday);
}

function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
  });

  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });

  // document.getElementById('botao-hoje').addEventListener('click', () => {
  //     nav = 0;
  //     load();
  // });
}

// exibirListaItens()
// exibirListaHabitos()

initButtons();
load();
