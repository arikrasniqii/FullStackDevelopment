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