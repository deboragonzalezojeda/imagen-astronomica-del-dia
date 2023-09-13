// Defino la fecha de hoy para agregar como maximo al input
let inputDiv = document.getElementById('input-div');
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() < 10 ? '0' + currentDate.getMonth() : currentDate.getMonth();
let day = currentDate.getDate();
let todaysDate = year + '-' + month + '-' + day;

let btn = document.getElementById('image-search');
let input;
let enteredData;

// Agrego el input y de maximo la fecha actual
document.addEventListener('DOMContentLoaded', function() {
    inputDiv.innerHTML = `
    <input type="date" min="1995-06-16" max=${todaysDate} id="dateInput" class="form-control">
    `
    input = document.getElementById('dateInput');
});

// Funcion que muestra la alerta para que se ingrese una fecha
function showAlert() {
    document.getElementById('alert').classList.add('show');
}

// Funcion que saca la alerta anterior
function hideAlert() {
    document.getElementById('alert').classList.remove('show');
}

// Eventos sobre el boton 'Ver Imagen'
btn.addEventListener('click', function() {
    if(input.value) {
        enteredData = input.value;
        sessionStorage.setItem('date', enteredData);
        location.href = "imagen.html";
    } else {
        showAlert();
        setTimeout(() => {hideAlert();}, 1000)
    }
});