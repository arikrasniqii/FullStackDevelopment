let result = document.getElementById("result");
let submitbutton = document.getElementById("submitbutton");

submitbutton.onclick = function(){

    let destination = document.getElementById("destination").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let travelType = document.getElementById("tt").value;
    let budget = document.getElementById("budget").value;
    let travelClass = document.getElementById("class").value;

    let totalGuests = Number(adults) + Number(children);

    let start = new Date(checkin);
    let end = new Date(checkout);
    let difference = end - start;
    let nights = difference / (1000 * 60 * 60 * 24);

    if (destination == "") {
        result.innerHTML = "Please choose a destination!";
        return;
    }

    if (totalGuests == 0) {
        result.innerHTML = "You need at least 1 guest!";
        return;
    }

    if (end < start) {
        result.innerHTML = "Check-out date must be after check-in!";
        return;
    }

    if (destination.toLowerCase() == "paris") {
      result.innerHTML = `
    <div class="travel-card">

        <img src="imgs/paris.png">

        <div class="travel-info">
            <h2>Paris</h2>

            <p>Check-in: ${checkin}</p>
            <p>Check-out: ${checkout}</p>
            <p>${nights} nights</p>

            <p>Adults: ${adults}</p>
            <p>Children: ${children}</p>
            <p>Total guests: ${totalGuests}</p>

            <p>Travel type: ${travelType}</p>
            <p>Budget: €${budget}</p>
            <p>Travel class: ${travelClass}</p>

            <p>Paris is known for its food, history and famous landmarks.</p>
        </div>

    </div>
`;
    }








if (destination.toLowerCase() == "tokyo") {
    result.innerHTML = `
        <div class="travel-card">

            <img src="imgs/tokyo.jpg">

            <div class="travel-info">
                <h2>Tokyo</h2>

                <p>Check-in: ${checkin}</p>
                <p>Check-out: ${checkout}</p>
                <p>${nights} nights</p>

                <p>Adults: ${adults}</p>
                <p>Children: ${children}</p>
                <p>Total guests: ${totalGuests}</p>

                <p>Travel type: ${travelType}</p>
                <p>Budget: €${budget}</p>
                <p>Travel class: ${travelClass}</p>

                <p>Tokyo is known for its modern cities, food and Japanese culture.</p>
            </div>

        </div>
    `;
}

if (totalGuests == 0) {
    result.innerHTML = "You need at least 1 guest!";
    return;
}

if (destination == "") {
    result.innerHTML = "Please choose a destination!";
    return;
}

if (budget == "" || Number(budget) <= 0) {
    result.innerHTML = "Please enter a valid budget!";
    return;
}

if (end < start) {
    result.innerHTML = "Check-out date must be after check-in!";
    return;
}


if (checkin == "") {
    result.innerHTML = "Please choose a check-in date!";
    return;
}

if (checkout == "") {
    result.innerHTML = "Please choose a check-out date!";
    return











}


}





















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