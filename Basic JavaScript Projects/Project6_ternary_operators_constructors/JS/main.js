function Ride_Function () {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_Ride + "to ride.";
}

function Vote_Function () {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age >= 18)? "You are old enough " : "You are too young ";
    document.getElementById("Vote").innerHTML = Can_Vote + "to vote."
}
//Object Constructor Example
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactored in " + Erik.Vehicle_Year;
}
function myVehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Zach = new Vehicle("Toyota", "Prius", 2008, "Gray");

function new_and_thisFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Zach drives a " + Zach.Vehicle_Color + "-colored " + Zach.Vehicle_Model +
    " manufactored in " + Zach.Vehicle_Year;
}

//Example of a Nested Function (function within a function)
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}