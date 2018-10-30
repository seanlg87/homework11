
function getFormValue() {

let greeting = document.getElementById("display"); 

let firstName = document.getElementById("fname").value; 

let lastName = document.getElementById("lname").value; 

greeting.innerHTML='Hello ' + firstName + " " + lastName;

}; 