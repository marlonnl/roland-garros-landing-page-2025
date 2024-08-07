AOS.init();

const eventDate = new Date("May 19 2025 12:00:00");
const timestampEvent = eventDate.getTime();

// convertions
const dayMs     = 1000 * 60 * 60 * 24;
const hourMs    = 1000 * 60 * 60;
const minuteMs  = 1000 * 60;

const timeCounter = setInterval(function() {
    let dateNow = new Date();
    let timeTo = timestampEvent - dateNow.getTime();

    let days = Math.floor(timeTo / dayMs);
    let hours = Math.floor((timeTo % dayMs) / hourMs);
    let minutes = Math.floor((timeTo % hourMs) / minuteMs);
    let seconds = Math.floor((timeTo % minuteMs) / 1000);

    document.getElementById('counter').innerHTML = `
        ${days} dias
        ${hours} horas
        ${minutes} minutos
        ${seconds} segundos
        `;

    //if event has already started
    if (timeTo < 0) {
        clearInterval(timeCounter);
        document.getElementById('counter').innerHTML = 'Roland Garros 2025 já começou!';
    }

}, 1000);