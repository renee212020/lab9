var age =prompt("Please enter your age");

console.log(age);

var newDate = new Date();
var year = newDate.getFullYear();

console.log(year);
console.log(birthYear);

var birthYear = year - age;

document.getElementById("output").innerHTML = birthYear;
