let myButton = document.querySelector('.button');
let userInput = document.querySelector('.input');
let body = document.querySelector('body')

function changeBodyColor() {
    color = `background-color:${userInput.value}`
    body.setAttribute("style", color)
}

myButton.addEventListener('click', function() {
    changeBodyColor();
    userInput.value = "";
})

myButton.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        changeBodyColor();
    } 
})


