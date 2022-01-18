function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11 ) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//JavaScript Stringth Length: returns the length of a string
let text = "Work hard, play harder!";
let length = text.length;

document.getElementById("play hard").innerHTML = length;


// "For Loops" : used to repeat a section of code a number of times; used when the number of iterations are known!

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function Instrument_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Arrays are objects; objects can have properties (characteristics)
// and methods (actions)

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture the cat is " +
        Cat_Picture[2] + ".";
}

//Constant Keyword Example
function Sweet_Car_function() {
    const Sweet_Car = {type:"Model S Plaid", brand:"Tesla", color:"green"};
    Sweet_Car.color = "seabreeze green";
    Sweet_Car.price = "$129,990";
    document.getElementById("Sweet Car").innerHTML = "The cost of the " + 
    Sweet_Car.type + " is " + Sweet_Car.price + "!!!";
}

// "let" keyword: declares variable that can have block scope
// variables declared outside of a function with "var" or "let" have global scope

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

// output of code =
// 82
// 33
// 82

var Y = 82;
document.write(Y);
{
    var Y = 33;
    document.write("<br>" + Y);
}
document.write("<br>" + Y);
// output =
// 82
// 33
// 33

// "Return" Function: returns the value called in the function
function pie_Function() {
    return Math.PI;
}
document.getElementById("Pie").innerHTML = pie_Function();

// "Object" Function; Ex: "object" =Future Car; "properties"= color, max speed, mpg
// "method" = drive

let future_Car = {
    make: "Tesla ",
    model: "Model S Plaid",
    year: "2022 ",
    color: "seabreeze green ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model
        + "!";
    }

};
document.getElementById("Future_Car").innerHTML = future_Car.description();

