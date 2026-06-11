function validateForm(){

var name = document.getElementById("name").value 
var age = document.getElementById("age").value
var email = document.getElementById("email").value
var password = document.getElementById("password").value

var nameRegex=/^[a-zA-Z]+$/;
var ageRegex=/^[1-9][0-9]?$/;
var emailRegex=/^\w+@\w+\.\w+$/;
var passwordRegex=/^.{6,}$/;

if(!nameRegex.test(name)) {
    message.textContent = "Please enter a valide name(letters only).";
} 
else if(!ageRegex.test(age)) {
    message.textContent = "Please enter a valide age(1-99).";
} 
else if(!emailRegex.test(email)) {
    message.textContent = "Please enter a valide email address.";
} 
else if(!emailRegex.test(email)) {
    message.textContent = "Please enter a valide email address.";
} 
else{
    message.textContent = "Form submitted successfully!";
}

message.setAtttribute("class", "error");

if(messgae.textContent ==="Form submitted successefully!") {
    message.setAtttribute("class", "success")
}
}