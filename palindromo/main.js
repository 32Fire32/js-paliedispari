'strict mode'

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// FUNZIONI



const word = prompt("inserisci una parola");
let word1 = "";
let word2 = "";

function isPalindrome(word){

    console.log(typeof(word));

    for ( i = 0; i < word.length; i++ ) {
        word1 = word1 + word[i];
        
      }
      console.log("la parola inserita è " + word1);
    
    for ( i = word.length - 1; i >= 0; i-- ) {
        word2 += word[i];
        
    }
    console.log("la parola al contrario è " + word2);
    
    if ( word1 === word2) {
        alert("hai inserito una parola palindroma");
    }

    return word;
}

isPalindrome(word);


















