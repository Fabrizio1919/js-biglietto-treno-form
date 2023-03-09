/* Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
 */
// Chiedere all'utente Nome e cognome
function myFunction() {
    let user = document.getElementById("myForm").name;
    document.getElementById("demo").innerHTML = "The name of the form is: ";
    console.log(user)
}
// Chiedere all'utente i KM da percorrere
const km = Number(prompt('Quanti chilometri vuoi percorrere?'));
function myFunction() {
    let km = document.getElementById("km").name;
    document.getElementById("demo").innerHTML = "How many kilometers do I have to travel: " ;
}

// Chiedere all'utente fascia d'età
const userAge = Number(prompt('Inserisci l\'età'));
console.log(userAge);





// Chiedere all'utente i chilometri che vuole percorrere 
/* const kilometers = Number(prompt('Quanti chilometri vuoi percorrere?'));
console.log(kilometers);

// Chiedere l'età al passegero 
const passengerAge = Number(prompt('Inserisci l\'età'));
console.log(passengerAge);

// Calcolare il prezzo totale del viaggio

// Definire il prezzo in base ai chilometri (0.21 € al km)
const priceForKm = 0.21;

// Moltiplico il prezzo dei chilomentri più i chilometri percorsi 
const priceTotal = kilometers * priceForKm;
console.log(priceTotal);


if (passengerAge < 18) {
    // Applicare sconto su minorenni del 20%
    console.log('Minorenne');
    const discount20 = (priceTotal / 100) * 20;
    finalPrice = (priceTotal - discount20);
    console.log(finalPrice.toFixed(2));

} else if (passengerAge > 65) {
    // Applicare sconto per gli over 65 del 40%
    console.log('Over65');
    const discount40 = (priceTotal / 100) * 40;
    finalPrice = (priceTotal - discount40);
    console.log(finalPrice.toFixed(2));
    // Prezzo finale
} else {
    finalPrice =(priceTotal.toFixed(2));
};

const sentence = 
`Chilometri ${kilometers} età del passeggero ${passengerAge} prezzo del biglietto ${priceTotal} €`;
console.log(sentence);

let cost = document.getElementById('costo');
cost.innerHTML= sentence;
 */