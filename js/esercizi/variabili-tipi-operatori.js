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


//esercizio 2.10
let a = 5;
let b = 10;

console.log(`Prima dello scambio: a = ${a}, b = ${b}`);

// Scambio dei valori con la destrutturazione
[a, b] = [b, a];

console.log(`Dopo lo scambio: a = ${a}, b = ${b}`);

// esercizio 2.11
let num = 22
let pari = true;
let dispari = false;
if (num % 2 == 0){
    return pari;
}else{
    return dispari;
}

// esercizio 2.12
// 1. Il booleano false
console.log(Boolean(false));      // false

// 2. Il numero zero (e lo zero negativo)
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false

// 3. Il numero BigInt zero
console.log(Boolean(0n));         // false

// 4. Stringa vuota
console.log(Boolean(""));         // false

// 5. null (assenza di valore)
console.log(Boolean(null));       // false

// 6. undefined (valore non assegnato)
console.log(Boolean(undefined));  // false

// 7. NaN (Not a Number, risultato di calcoli matematici errati)
console.log(Boolean(NaN));        // false

// esercizio 2.13
let raggio = 5;
const pi = 3.14;
let area = r*r*pi
let circonferenza = 2*r*pi
console.log(`l'area è ${area} e la circonferenza è: ${circonferenza}`);

// esercizio 2.14
let euro = 34
let dollari = euro * 1.17
let sterline = euro * 0.87
let yen = euro * 186.62

// esercizio 2.15

let minuti = 250
let minutiTotali = 250;

// Calcola le ore (divisione senza decimali)
let ore = Math.floor(minutiTotali / 60);

// Calcola i minuti rimanenti (il resto della divisione per 60)
let minutiRimanenti = minutiTotali % 60;

console.log(`${ore} ore e ${minutiRimanenti} minuti`);

// esercizio 2.17
let a1 = 2, a2 = 4, a3 = 5
if((a1 + a2) > a3 || a1 + a3 > a2 || a2 + a3 > a1){
    console.log("il triangolo è valido");
    return true;
}

// esecizio 2.18
let numero = 472;

// 1. Estrai le centinaia: dividi per 100 e arrotonda per difetto
let centinaia = Math.floor(numero / 100);

// 2. Estrai le decine: prendi il resto della divisione per 100 per avere "72", 
// poi dividi per 10 e arrotonda
let decine = Math.floor((numero % 100) / 10);

// 3. Estrai le unità: è semplicemente il resto della divisione per 10
let unita = numero % 10;

console.log("Centinaia:", centinaia);
console.log("Decine:", decine);
console.log("Unità:", unita);
