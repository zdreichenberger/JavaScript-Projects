document.write(typeof 3);
document.write("<br>");
document.write(typeof true);
document.write("<br>");
document.write(typeof "true");
document.write("<br>");
document.write("Apples" + 5);
document.write("<br>");

//Boolean = True
document.write(4>3);
document.write("<br>");

//Boolean = False
document.write(6<3);


//results in NaN ("Not a Number")
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}
//Test for Nan; result = True (is not a number)
function string_Function() {
    document.getElementById("String").innerHTML = isNaN("This is a string"); 
}
//Result= true; because a string is not a #

//Test for Nan; Result = False (is a number)
function number_Function() {
     document.getElementById("False").innerHTML = isNaN("007");
}
//Result= false; because it is a number

//Display infinity = any number larger than 1.797...E308
//Positive Infinity
function infinity_Function() {
    document.getElementById("infinity").innerHTML = (1.9E308);
}

//Negative Infinity
function neg_infinity_Function() {
    document.getElementById("-infinity").innerHTML = (-1.9E308);
}

console.log(2+2);
console.log(2<=1);
document.write("<br>");

//== : means a comparison
//comparison resulting in true
document.write(10==10);
document.write("<br>");
//comparison resulting in false
document.write(3==11);

// === (triple equal sign): check whether the data on the left side
//of the symbol is equal to the data on the right side AND that it
// is the same type of data as that on the right.

//"DataOfBirth1" = data of type "Date"; value of type of the data = "1/1/1970"
document.write("<br>");
X = 82;
Y = "82";
document.write(X===Y);

document.write("<br>");
X = 10;
Y = 10;
document.write(X===Y);
document.write("<br>");

//&&: AND operator (both have to be true to = a result of true)
document.write(5 > 2 && 10 > 4);//result=true
document.write("<br>");

//&&: AND operator (both have to be true to = a result of true)
document.write(5 > 2 && 10 > 4);//result=true
document.write("<br>");

//AND operator with a false result
document.write(5==2 && 10 < 3); //result = false
document.write("<br>");

//||: OR operator (either one or other needs to be true to = a result of true)
document.write(5>2 || 2==1); //OR result = true
document.write("<br>");

document.write(5<2 || 2==3); // OR result = false
document.write("<br>");

// !(not) operator checks whether or not something is true
// if false = "true" returned
// if true = "false" returned
function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10); 
}//return = false

// "double negative"=true
function not_not_Function() {
    document.getElementById("Not2x").innerHTML= !!(20>10);
}//return = true


