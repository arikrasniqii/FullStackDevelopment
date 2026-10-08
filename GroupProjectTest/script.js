var statsBtn = document.getElementById("statsBtn");
var statsBox = document.getElementById("statsBox");
var statNumbers = document.querySelectorAll("#statsBox h4");
 
function animateNumber(el) {
  var target = parseInt(el.getAttribute("data-target"));
  var prefix = el.getAttribute("data-prefix") || "";
  var suffix = el.getAttribute("data-suffix") || "";
  var current = 0;
  var duration = 1200;
  var steps = 60;
  var increment = target / steps;
  var stepTime = duration / steps;
 
  var counter = setInterval(function () {
    current += increment;
 
    if (current >= target) {
      current = target;
      clearInterval(counter);
    }
 
    el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
  }, stepTime);
}

statsBtn.onclick=function () {
  statsBox.classList.toggle("hidden");

  if (statsBox.classList.contains("hidden")) {
    statsBtn.textContent = "Our Stats";
  } else {
    statsBtn.textContent = "Hide Stats";
 
    statNumbers.forEach(function (el) {
      animateNumber(el);
    });
  }
};

function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email != "" && password != "") {
        document.getElementById("message").innerHTML = "Welcome to Air Prishtina!";
    }

    return false;
}

function signIn() {
    alert("Thank you for signing in to our website!");

    return false;
}