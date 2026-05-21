function showmessage(){
    alert('This is my first function')
}

showmessage()

function toCelsius (Farhenheit){
    return(5/9) * (Farhenheit - 32)
}


var result = toCelsius(54)
console.log("Farhenheit in celsius is "+result+ "degree")


function sum(numri1, numri2){
    return numri1 + numri2
}
console.log(sum(32,42))

function sub(numri1, numri2){
    return numri1 - numri2
}
console.log(sub(32,42))

function multi(numri1, numri2){
    return numri1 * numri2
}
console.log(multi(32,42))

function div(numri1, numri2){
    return numri1 / numri2
}
console.log(div(32,42))

function digitalschool(){
    var shkolla = 'DigitalSchool';
    alert(shkolla)
}

digitalschool()

function siperfaqja_e_trekendeshit(baza,lartesia){
    return baza * lartesia * 0.5
}

console.log('Siperfaqja e trekendeshit eshte: '+siperfaqja_e_trekendeshit(5,7))

var audia = {
    type: 'RS6',
    color: 'Black',
    viti_i_prodhimit:2023,
    kilometra:120.000,
    engine:function(){
        alert('Vroommmm')
    },
    get getkilometra(){
        return this.kilometra

    },

    set setkilometra(km){
        this.kilometra = km

    }


}

alert(audia.type)



audia.engine()
console.log(audia.getkilometra)
audia.setkilometra = 180;
console.log(audia.setkilometra)