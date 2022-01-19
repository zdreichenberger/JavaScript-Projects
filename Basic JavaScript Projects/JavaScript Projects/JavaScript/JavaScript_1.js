function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " tastes absolutely delicious!";
    switch(Foods) {
        case "Pizza":
            Food_Output = "Pizza" + Food_String;
        break;
        case "Ribs":
            Food_Output = "Ribs" + Food_String;
        break;
        case "Tacos":
            Food_Output = "Tacos" + Food_String;
        break;
        case "Fried Chicken":
            Food_Output = "Fried Chicken" + Food_String;
        break;
        case "Mac & Cheese":
            Food_Output = "Mac & Cheese" + Food_String;
        break;
        default:
            Food_Ouput = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

// getElementsByClassName() Method Example
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
    // index value of variable A is set to 0, meaning it will now be displayed in the
    // first element with the class "Click" (once the button is clicked)
}

// Add graphics to HTML canvas
var canvas = document.getElementById("ID_Name");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Fulfill Your Purpose", 10, 200);

var gradient = ctx.createLinearGradient(0, 0, 180, 300);
gradient.addColorStop(0, "black");
gradient.addColorStop(1, "white");
ctx.fillStyle = gradient;
ctx.fillRect(0, 20, 300, 100);
console.log(ctx);