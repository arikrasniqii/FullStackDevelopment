

function shuma (numri1,numri2){
    return numri1 + numri2
}

console.log(shuma(10,20))

function zbritja (numri1,numri2){
    return numri1 - numri2
}

console.log(zbritja(10,20))

function shumzimi (numri1,numri2){
    return numri1 * numri2
}

console.log(shumzimi(10,20))

function pjestimi (numri1,numri2){
    return numri1 / numri2
}

console.log(pjestimi(10,20))


var button = document.getElementById("bttn1")

button.onclick = function(){
    button.style.backgroundColor = "red";
    button.style.color = "white";

    alert("no data")

}

var nr1 = document.getElementById("numriipare")
var nr2 = document.getElementById("numriidyt")
var calculateButton = document.getElementById("calculate")
var result = document.getElementById("shfaqe")
var result2 = document.getElementById("shfaqe2")


function calculateSum(){
    var num1 = parseFloat(nr1.value);
    var num2 = parseFloat(nr2.value);
    var sum = num1 + num2;
result.textContent = "Shuma e numrave eshte:" + sum;
}

function isEligible(){
    var num1 = parseFloat(nr1.value);
    var num2 = parseFloat(nr2.value);
    if(num1+num2>20){
        result2.textContent="Ju keni te drejt te aplikoni"
    }
    else{
        result2.textContent="Ju nuk keni te drejt te aplikoni"
    }

}

calculateButton.onclick = function(){
calculateSum();
isEligible();
}