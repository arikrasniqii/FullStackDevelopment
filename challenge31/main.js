var emrat = [];

function addEmri() {
    var x = document.getElementById("emri").value;
    emrat.push(x);

    for (x of emrat) {
        console.log(x);
    }
}