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