var A = "Give it your ABSOLUTE effort Kid!!!";
window.alert(A);

document.write ("\"Be who you are and say what you feel, " + 
"because those who mind don\'t matter and those who matter don\'t mind.\"" 
+ " -Dr. Seuss");
document.write("<br><br>");
document.write ("This is me conatenating " + "a string!");

document.write("<br><br>");
var B = "Concatenated" + " String";
document.write(B);

document.write("<br><br>");
var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine",
Daughter = "Penny", Son = "Zorro";
document.write (Dad);

document.write("<br>");
var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

document.write("<br><br>");
document.write(3*9);

//This is how you write a comment in JS
document.write("<br><br>");

function My_First_Function () { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a 
                                    //str variable
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result; //Putting the value
                                                            //of result into HTML elment with "Green_Text" id
}