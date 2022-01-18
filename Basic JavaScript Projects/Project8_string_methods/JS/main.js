//Concat() Method
//connects two or more strings

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice() Method
//string method that extracts a section of a string and then returns the extract
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() Method
//string method that makes 
function toUpperCase_Method() {
    var text = "Don't be so uninspired that you work for someone else's dreams for 8 hrs and don't work on yours when you get home!";
    var result = text.toUpperCase(); 
    document.getElementById("toUpperCase").innerHTML = result;
}

// Search() Method
function search_Method() {
    var sentence = "I like pineapple on my pizza; deal with it!";
    var position = sentence.search("pineapple");
    document.getElementById("search").innerHTML = position;
}

// Numbers() Method : toString() Method = returns a number as a string
function string_Method() {
    var number = 30;
    document.getElementById("Numbers_to_string").innerHTML = number.toString();
}

//toPrecision() Method : formats a number to a specified length
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// toFixed() Method:converts a number to a string, rounded to a specified number of decimals
function toFixed_Method() {
    var num = 5.67890;
    var n = num.toFixed();
    document.getElementById("toFixed()").innerHTML = n;
}

// valueOf() Method: returns the primitive value of a number:
function valueOf_Method() {
    var num = 23;
    var n = num.valueOf();
    document.getElementById("valueOf()").innerHTML = n;
}