// Заголовок

let text = "Квиз для любителей кинематографа...";
let i= 0;
let speed = 100;

function type() {
    if(i<text.length) {
        document.querySelector("#heading").textContent +=text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

//Form

const button = document.querySelector(".btn");
const result =document.querySelector("#results");


button.addEventListener("click", beep);
    function beep (e) {
    e.preventDefault ();

    let points = 0;
    if(document.querySelector("#answer1").checked) {
        points++;
    }
    if(document.querySelector("#answer2").checked) {
        points++;
    }
    if(document.querySelector("#answer3").checked) {
        points++;
    }
    if(document.querySelector("#answer4").checked) {
        points++;
    }

    result.textContent = "Ваши баллы: " + points;
    result.style.display = "block";
    }