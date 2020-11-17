//This will output when the page loads
var start = new Date();
var seconds = start.getSeconds();

console.log(seconds);

//This will output when a button is pressed
var stop = new Date();

console.log(stop);

document.getElementById("stoptime").innerHTML=result;

var myConfirm =confirm("Please Confirm");


console.log(myConfirm);
