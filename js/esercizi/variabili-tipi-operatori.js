// esercizio 2.1
let nome = "Riccardo";
const annoNascita = 2006;
console.log(nome + annoNascita);

//esercizio 2.2
let a = 3, b = 4;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

//esercizio 2.3
let prezzo = 49.90;
let scontato = prezzo * 0.8;

console.log("Prezzo scontato:", scontato);

//esercizio 2.4
let numero = 49.90;          // number
let testo = "Sconto";        // string
let attivo = true;           // boolean
let nonDefinita;             // undefined
let vuoto = null;            // null

console.log(typeof numero);
console.log(typeof testo);
console.log(typeof attivo);
console.log(typeof nonDefinita);
console.log(typeof vuoto);

//sercizio 2.5
let stringa = "123";
let numero = +stringa + 7;

console.log(numero); // Risultato: 130

//esercizio 2.7
let eta = 17;
let hapermesso = true;
if(eta>=18 || hapermesso){
    return true;
    console.log(eta,hapermesso);
}

//esercizio 2.8
let nome = "Mario";
let cognome = "Rossi";
let eta = 25;

// Uso del template literal
let presentazione = `Ciao, mi chiamo ${nome} ${cognome} e ho ${eta} anni.`;

console.log(presentazione);

// esercizio 2.9
let secondi = 3661;
let minuti = secondi/60;
let ore = minuti/60;
let secondir = secondi - (minuti+ore);
console.log(`i minuti sono" ${minuti}  i le ore sono ${ore} e i secondi rimanenti sono ${secondir}`);



