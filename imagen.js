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


// APOD API URL
const API = 'https://api.nasa.gov/planetary/apod?api_key=Um0UoBnHg71HzRXu0HOB7fricj2mzgsx63Lk8qOU&date='


// Containers donde agregaremos informacion
let dateTitle = document.getElementById('date-title');
let imageContainer = document.getElementById('image-container');


// Funcion que muestra los datos de la imagen
function showData(dataArray) {
    dateTitle.innerHTML += dataArray.date;
    imageContainer.innerHTML = `
    <img class="img-fluid" id="img" src="${dataArray.hdurl}" alt="${dataArray.explanation}">

    <h3 class="display-6 p-3">${dataArray.title}</h3>

    <p class="lead">${dataArray.explanation}</p>

    <p>${dataArray.copyright}</p>
    `
}


// Funcion que realiza el fetch a la URL
async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    showData(data);
}

// Trae la fecha que guardamos anteriormente, para agregarle al URL de nuestra API, si no ingresamos una fecha, nos muestra la fecha de hoy
const date = sessionStorage.date ? sessionStorage.date : todaysDate;
const URL = API + date;

fetchData(URL);

function showAlert() {
    document.getElementById('alert').classList.add('show');
}

function hideAlert() {
    document.getElementById('alert').classList.remove('show');
}

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