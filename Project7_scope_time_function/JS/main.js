//Global Scope variables = declared outside of functions
//Local Scope variables = declared inside of functions
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write (X + 100 + "<br>");
}

Add_numbers_1();
Add_numbers_2();

//Local Scope Example
function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
//console.log() would shows that Y was not defined in Add_numbers_4()
function Add_numbers_4() {
    document.write (Y + 100);
}

Add_numbers_3();
Add_numbers_4();

//"If statements": type of conditional statement that specifies that a section of code is 
//to be executed if a condition is true 
//ex: if (1 < 2); "if"= branching statement ; (1 < 2) = conditional statement
if (1 < 2) {
    document.write("The left number is smaller than the number the number on the right.")
}

//Get Date Methods
function get_Date () {
    if (new Date().getHours() < 18) {//Date().getHours() method returns the hour in the specified date according to local time
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }//Will result in "How are you today?" if time is before 18:00=6pm
}

// "Else Statements" : specifies a block of code that will be executed if the condition is false
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Wine_Tasting_Function() 
function Wine_Tasting_Function() {
    Age = document.getElementById("Attendees_Age").value;
    if (Age >= 21) {
        Wine_tasting = "You are old enough to go wine-tasting!";
    }
    else {
        Wine_tasting = "You are not old enough to go wine-tasting!";
    }
    document.getElementById("Can_you_go_wine_tasting?").innerHTML = Wine_tasting;
}

// "Else if" Statements
// "else if" statements follow "if" statments; ran when "if" is false
//Time Function(); Is it morning, afternoon, or evening?
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}