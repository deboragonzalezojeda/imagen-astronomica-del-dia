const API = 'https://api.nasa.gov/planetary/apod?api_key=Um0UoBnHg71HzRXu0HOB7fricj2mzgsx63Lk8qOU&date='

let dateTitle = document.getElementById('date-title');
let imageContainer = document.getElementById('image-container');

function showData(dataArray) {
    dateTitle.innerHTML += dataArray.date;
    imageContainer.innerHTML = `
    <img class="img-fluid" src="${dataArray.hdurl}" alt="${dataArray.explanation}">

    <h3 class="display-6 p-3">${dataArray.title}</h3>

    <p class="lead">${dataArray.explanation}</p>

    <p>${dataArray.copyright}</p>
    `
}

async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    showData(data);
}

const date = sessionStorage.date ? sessionStorage.date : '1996-03-16';
const URL = API + date;

fetchData(URL);

let btn = document.getElementById('image-search');
let input = document.querySelector('input');
let enteredData;

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