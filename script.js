// Declare variables of different data types
let myString = "Javascript is fun";
let myNumber = 42;
let myBoolean = true;

// Define functions for operations 
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function divide(a,b){
    return a / b;
}

function multiply(a,b){
    return a * b;
}

console.log(add(5, 3));
console.log(subtract(10, 4)); 
console.log(divide(15, 3)); 
console.log(multiply(7, 2)); 

function updateText(){
    document.getElementById("demo").innerText = "Text updated!";
    document.getElementById("myButton").addEventListener("click", function(){
        alert("Button was pressed!");
    });
}

