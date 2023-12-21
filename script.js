
let nomeUtente = prompt("Inserisci qui il tuo nome"); 
console.log("nomeUtente");

let cognomeUtente = prompt("Inserisci qui il tuo cognome"); 
console.log("cognomeUtente");

let coloreUtente = prompt("Inserisci qui il tuo colore preferito"); 
console.log("coloreUtente");

let randomNumber = Math.floor((Math.random(0, 100) * 10) + 1);

document.writeln('<p class="text" > ' + nomeUtente + "/" + cognomeUtente + "/" + coloreUtente + "/" + randomNumber + "</p>"); 

