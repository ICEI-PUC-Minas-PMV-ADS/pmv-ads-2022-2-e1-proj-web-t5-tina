let nav = 0;

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText =
        `${dt.toLocaleDateString('pt-br', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        const dayString = `${year}-${month + 1}-${i - paddingDays}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;

            inserirAtividades(dayString, daySquare);

            if (i - paddingDays === day && nav === 0) {
                daySquare.id = 'currentDay';
            }

        } else {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }
}

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });
}

function inserirAtividades(dayString, daySquare) {

    getDados().forEach(atividade => {

        if (atividade.dataInicio === dayString) {

            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.setAttribute('id', atividade.titulo)
            eventDiv.setAttribute('onClick', 'getId(this)')
            eventDiv.innerText = atividade.titulo;
            daySquare.appendChild(eventDiv);
        }
    });
}

initButtons();
load();
