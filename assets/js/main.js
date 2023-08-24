/*

Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Consigli:
non usate bootstrap, fate a mano per ora meno cose dobbiamo gestire e meglio é.
per semplificarvi un pó la vita almeno per ora non usate il tag form per racchiudere gli input ma metteteli semplicemente in un div.  div>input e non form>input
Bonus (opzionale):
Prova a racchiudere gli input ed il bottone in un tag form e prova a far funzionare il form evitando che la pagina si refreshi quando il form viene inviato cliccando su genera.
Questo richiederá un minimo di ricerca per capire come usare il parametro e dentro la funzione anonima dell'event listener. function(e){ console.log(e) }

*/

/* STRUMENTI

-const/let


*/

//TODO Chiedere nome e cognome

// Prendo i km scritti dall'utente sull'input



// Prendo la fascia d'età selezionata dall'utente



// Metto le costanti riguardanti lo sconto per fascia d'età e il prezzo/km

const teenagerDiscount = Number(0.80);
const adultDiscount = Number(0.60);
const perKmPrice = Number(0.21);

let totalPrice
let fixedPrice

// Aggiungo eventListener al pulsante in modo da poter prendere le informazioni digitate dall'utente e poter invocare la funzione di calcolo del prezzo

const submit = document.querySelector(".submit");

submit.addEventListener('click',

function() {

    let kilometers = Number(document.getElementById("kilometers").value);
    console.log(kilometers);
    let userAge = Number(document.getElementById("age").value);
    console.log(userAge);

    if (userAge === 0.8) {
        totalPrice = kilometers * perKmPrice * teenagerDiscount;
    } else if (userAge === 0.6) {
        totalPrice = kilometers * perKmPrice * adultDiscount;
    } else {
        totalPrice = kilometers * perKmPrice;
    }
    console.log(totalPrice);
}
)

