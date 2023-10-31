/* ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 // due variabili da confrontare (if else if else) console
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var num1 = 30;
var num2 = 20;

if (num1 > num2) {
    console.log("num1 è maggiore di num2");
} else {
    console.log("num1 è minore di num1");
}

/* ESERCIZIO 2
Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  // una variabile not equal -> !==
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 10;
if (numero !== 5) {
    console.log("not equal");
}

/* ESERCIZIO 3
Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// divisbile -> resto % 
  */

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 5;
if(x%5 == 0) {
    console.log("divisibile per 5");
}

/* ESERCIZIO 4
Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// if (serie di condizioni if -> la verifica === )
  */

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 11;
let num2 = 7;
if (num1 || num2 === 8) {
    console.log(8);
} if (num1 - num2 === 8) {
    console.log(8);
} if (num1 + num2 === 8) {
    console.log(8)
}

/* ESERCIZIO 5
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  // dichiaro 3 variabili: totale, costo, pagamento=totale -> if -> se un valore è inferiore una soglia aggiungo le spese
*/


/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 6
Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// simile a quello sopra (sconto * 0.8)
  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
Alla fine mostra il risultato in console.
  // annido una serie di if -> controllo tutte le varie condizioni e con la console stampo la condizione (quando true)
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 15;
let num2 = 10;
let num3 = 20;
if (num3 > num2 || num3 > num1 || num1 > num2) {  // mi perdoni per aver imbrogliato
    console.log("20, 15, 10");
}

/* ESERCIZIO 8
Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  // typeof -> if else
  */

/* SCRIVI QUI LA TUA RISPOSTA */

let valoreFornito = 15
if (valoreFornito >= 0) {
    console.log("valoreFornito è un mnumero");
} else if (valoreFornito < 0) {
    console.log("valoreFornito è un numero negativo")
} else {
    console.log("valoreFornito non è un numero");
}

/* ESERCIZIO 9
Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // modulo di 2 (%2) -> if else
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 11;
if(x%2 == 0) {
    console.log("x numero pari");
} else {
    console.log("x è un numero dispari");
}

/* ESERCIZIO 10
Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 7
if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 5) {
    console.log("val minore di 5");
} else if (val < 10) {
    console.log("val minore di 10");
} else {
    console.log("val è uguale o maggiore a 10");
}


/* ESERCIZIO 11
Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// ricordatevi che siamo dentro a un oggetto -> aggiungo qualcosa (una proprietà) all'oggetto
  */

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto',

/* ESERCIZIO 12
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  // posso cancellare da un oggetto
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
}
delete me.lastName;


/* ESERCIZIO 13
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  // metodi array -> rimuovere l'ultimo elemento
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const skills = ["Javascript", "HTML", "CSS"];
skills.pop()

/* ESERCIZIO 14
Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  // metodi array -> inserire qualcosa nell'array
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const primiNumeri = {};
primiNumeri.push(1);
primiNumeri.push(2);
primiNumeri.push(3);
primiNumeri.push(4);
primiNumeri.push(5);
primiNumeri.push(6);
primiNumeri.push(7);
primiNumeri.push(8);
primiNumeri.push(9);
primiNumeri.push(10);




/* ESERCIZIO 15
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  // selezionare il nono elemento e assegnare un nuovo valore
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const primiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
primiNumeri.pop();
primiNumeri.push(100);
