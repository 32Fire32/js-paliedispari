'strict mode'

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione)
// Dichiariamo chi ha vinto.

// FUNZIONI //

function cpu_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(sum) {
    if ( sum % 2 === 0) {
        alert("la somma dei due numeri è pari");
    } else {
        alert("la somma dei due numeri è dispari");
    }
    return sum;
}

// /FUNZIONI //


// Chiedo all'utente di inserire il numero
const userNumber = Number(prompt("Scegli un  numero tra 1 e 5"));
if ( userNumber < 1 || userNumber > 5) {
    location.reload();
}
console.log("il numero scelta dall'utente è " + userNumber);

// Chiedo all'utente di scegliere tra pari e dispari
let userChoice = prompt("Pari o dispari?");
if (userChoice === "pari") {
    userChoice = true;
    console.log("L'utente ha scelto pari");
} else if ( userChoice === "dispari" ) {
    userChoice = false;
    console.log("L'utente ha scelto dispari");
} else {
   location.reload();
}


// Numero della cpu
let min = 1;
let max = 5;
const cpuNumber = cpu_number(min, max);
console.log("il numero scelto dalla cpu è " + cpuNumber);

// Faccio scegliere alla cpu true o false a seconda di quanto scelto dall'utente
let cpuChoice;
if ( userChoice === true) {
    cpuChoice = false;
    console.log("La cpu ha scelto dispari");
} else {
    cpuChoice = true;
    console.log("La cpu ha scelto pari");
}

// Sommo i numeri scelti
let sum = userNumber + cpuNumber;
console.log ("la somma dei due numeri è " + sum);

// Dichiaro se la somma è pari o dispari
isEven(sum);

// Proclamo il vincitore
if ( sum % 2 === 0 && userChoice === true ) {
    alert ("Hai vinto");
} else {
    alert ("Hai perso");
}


