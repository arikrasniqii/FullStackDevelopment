var x = 30;

if (x>=15){
    console.log("Ju mund te krijoni account")
}
else{
    console.log("Ju nuk mund te krijoni account")
}

for(i=0; i<5; i++){
    console.log(Hello)
}

var names = ['Ari', 'Olta', 'Elda', 'Drini']

for(var e = 0; e<nxenesit.length; e++){
    console.log(nxenesit[e]);
}

var i = 0;
do{
    i = i +1;
    console.log("hello from while loop");
}while(i<10)

var e = 0;
do{
    e = e +2;
    console.log("hello");
}while(e<10)

let n = 0;
let u = 0;

while(n<3){
    n++
    u = u +n
    console.log(u)
    console.log(n)
}

var person={
    firstName: "John",
    lastName: "Doe",
    age:50
}

for(y in person){
    console.log(y + ":" + person[y])
}

var ushqimev = ["mish", "buke", "kos", "vaj", "sheqer"];

for(z in ushqimev){
    console.log(ushqimev[z]);
}

var teksti = "Hello World";

var shumaeO = 0;

for (l of teksti){
    console.log(l);

    if(l =="o"){
        shumaO++;
    }
}
console.log(shumaeO)
