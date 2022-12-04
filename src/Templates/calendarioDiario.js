let nav = 0;
let clicked = null;

const calendar = document.getElementById("calendar");
const diaSemana = document.getElementById("dia-semana");
const weekday = document.createElement("div");
let diaDaSemana = "";
const intervaloHorarios = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

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

  daySquare.innerText = day;

  // inserirAtividades(dayString, daySquare);

  daySquare.id = "currentDayDiario";

  const horarios = document.createElement("div");
  horarios.id = "horarios";


  intervaloHorarios.forEach(horario => {
    const intervalo = document.createElement("span");
    intervalo.innerText = horario
    horarios.appendChild(intervalo);
  });

  weekday.classList.add("weekday");
  diaDaSemana = dt.toLocaleDateString("pt-br", {
    weekday: "long",
  });

  weekday.innerText = diaDaSemana;

  calendar.appendChild(daySquare);
  diaSemana.appendChild(weekday);
  daySquare.appendChild(horarios);
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
