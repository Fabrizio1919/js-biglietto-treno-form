/* Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
 */
// Chiedere all'utente Nome e cognome
const btnGenera = document.getElementById("genera")
btnGenera.addEventListener('click', function () {
    const name = document.getElementById('nome').value;
    console.log(`NOME E COGNOME ${name}`);
    const kmPercorsi = document.getElementById('kmPercorsi').value;
    console.log(`Km percorsi ${kmPercorsi}`);
    const mySelect = document.getElementById('mySelect').value;
    console.log(`Fascia d'eta ${mySelect}`);
    const genera = document.getElementById('genera').value;
    console.log(`Genera ${genera}`);
    const priceForKm = 0.21;
    const priceTotal = kmPercorsi * priceForKm;
    console.log(priceTotal);
    let tipoDiBiglietto = 'tipoBiglietto'

    if (mySelect == 'minorenne') {
        // Applicare sconto su minorenni del 20%
        console.log('Minorenne');
        const discount20 = (priceTotal / 100) * 20;
        finalPrice = (priceTotal - discount20);
        let tipoDiBiglietto = 'ridotto'
        console.log(finalPrice.toFixed(2));

    } else if (mySelect == 'over') {
        // Applicare sconto per gli over 65 del 40%
        console.log('over');
        const discount40 = (priceTotal / 100) * 40;
        finalPrice = (priceTotal - discount40);
        let tipoDiBiglietto = "ridotto"
        console.log(finalPrice.toFixed(2));
        // Prezzo finale
    } else if (mySelect == 'maggiorene') {
        console.log('Maggiorenne');
        finalPrice = (priceTotal.toFixed(2));
        let tipoDiBiglietto = "standard"
    };

    const sentence =
        `Chilometri ${kmPercorsi} biglietto  ${tipoDiBiglietto} prezzo del biglietto ${priceTotal} €`;
    console.log(sentence);

})
const btnAnnulla = document.getElementById("annulla")
btnAnnulla.addEventListener('click', function () {
    document.getElementById("nome").value = "";
    kmPercorsi.value = "";
    mySelect.value = "maggiorenne";
    console.log(`RESET`);
})








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