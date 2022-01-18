//Basic JS addition

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = addition;
}

//Basic JS Subtraction

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = subtraction;
}


//Basic JS Multiplication

function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("multiplication").innerHTML = multiplication;
}


//Basic JS Division

function division_Function() {
    var division = 48 / 6;
    document.getElementById("division").innerHTML = division;
}
function increment_Function () {
    var X = 5;
    X++;
    document.write(X);
}

function decrement_Function() {
    var Y = 5.25;
    Y--;
    document.write(Y);
}

//random number between 0 an 1
window.alert(Math.random());
document.write("<br>");

//random number between 0 and 100
window.alert(Math.random() * 100);
document.write("<br>");

//Math Object 
function PI_Function () {
    document.getElementById("demo").innerHTML = Math.PI
}