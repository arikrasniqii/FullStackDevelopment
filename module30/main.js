var level = 52

if (level>=75){
    console.log("You can pass through")
}
else{
    console.log("You cannot pass through")
}

var input=document.getElementById("input_id")
var button=document.getElementById("button_id")
var text=document.getElementById("text_id")

button.onclick=function(){
    text.innerHTML=input.value;
}

var age=document.getElementById("mosha")
var button_m=document.getElementById("button_mosha")
var text_m=document.getElementById("text")

button_m.onclick=function(){
    if (age.value>18){
        text_m.innerHTML="You can vote";
    }
    else if(age.value==18){
        text_m.innerHTML="You can vote, congrats on your first time voting";
    }
    else{
        text_m.innerHTML="You cannot vote";
    }
}

var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var button_add = document.getElementById('add')
var button_sub = document.getElementById('subtract')
var button_multi = document.getElementById('multiply')
var button_div = document.getElementById('divide')
var result = document.getElementById('result')

button_add.onclick=function(){
    result.innerHTML=parseInt(num1.value)+parseInt(num2.value)
}
button_add.setAttribute("class","button")

button_sub.onclick=function(){
    result.innerHTML=parseInt(num1.value)-parseInt(num2.value)
}
button_sub.setAttribute("class","button")

button_multi.onclick=function(){
    result.innerHTML=parseInt(num1.value)*parseInt(num2.value)
}
button_multi.setAttribute("class","button")

button_div.onclick=function(){
    result.innerHTML=parseInt(num1.value)/parseInt(num2.value)
}
button_div.setAttribute("class","button")