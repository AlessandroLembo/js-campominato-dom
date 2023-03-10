console.log('JS OK');


/*
#Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
(attenzione: avviso - non bisogna copiare tutta la cartella dell'esercizio ma solo
l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, 
per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà 
prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo 
una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista 
dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso 
e la partita termina. Altrimenti la cella cliccata si colora di azzurro e 
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge 
il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte 
le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero 
di volte che l’utente ha cliccato su una cella che non era una bomba.
# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e 
il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, 
controllando se il numero di cella è presente nell'array di bombe. Se si, 
la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che 
la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare
se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso 
la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio 
appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata 
una bomba o se perchè l'utente ha raggiunto il punteggio massimo. 
Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato 
in caso di vittoria o sconfitta.

/*
ANALISI:

- Dichiaro una variabile che fa da contatore del punteggio dell'utente.
- Controllo per verificare se la cella è stata già cliccata escluderla da conteggio.

- Genero 16 numeri random da 1 a 100 e senza doppioni e li stampo in console.

- AL CLICK SULLA CELLA: 
   1 - Controllo se ho calpestato una bomba.
   2 - Se si, la cella diventa rossa e finisce la partita. Stampo in console punteggio
       e messaggio.
   3 - Se no, la partita continua ed incremento il punteggio.

- Controllo se il punteggio accumulato ha raggiunto il massimo consentito 
  (totale celle - totale numeri random): ho vinto, stampo il messaggio in pagina.
*/

// Prendo gli elementi dalla pagina.
const gridElement = document.getElementById('grid');
const buttonElement = document.getElementById('button');
const difficultyLevelElement = document.getElementById('difficulty-level');
// console.log(difficultyLevelElement);

// Dichiaro una funzione per creare una cella.
function createCell() {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  return cell;
}

// Dichiaro una funzione per generare un numero random.
const getUniqueRandomNumber = (min, max, blacklist) => {
  let randomNumber;

  do{
    randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
  } while (blacklist.includes(randomNumber));

  return randomNumber;
}

// Dichiaro una funzione per creare il titolo nella pagina.
function createTitle() {
  const titleText = document.createElement('h1');
  const message = "Premi play ed inizia la partita";
  titleText.append(message);
  gridElement.append(titleText);
  
  return titleText;
}

const startPlay = createTitle();


/* Dichiaro delle variabili che raccolgono il numero di colonne, 
   di righe e il totale delle celle. */
const rows = 10;
const cols = 10;
const totalCells = rows * cols;
// console.log(totalCells);


// Ripeto la funzione per tante volte quante occorrono per ottenere 16 numeri diversi.
const dangerNumber = [];

for (let i = 1; i <= 16; i++) {
  const bombCell = getUniqueRandomNumber (1, totalCells, dangerNumber);

  dangerNumber.push(bombCell);

}

console.log(dangerNumber);

// Variabile che conta il punteggio del giocatore;
let counter = 0;

// Apro un ciclo for per ripetere l'operazione 100 volte.
for (let i = 1; i <= totalCells; i++) {

    // Agganciare un event listener al button.  
    buttonElement.addEventListener('click', function() {
      
      buttonElement.classList.add('invalidate');
      startPlay.classList.add('d-none');
      gridElement.appendChild(cell);
      cell.append(i);

})
    
const cell = createCell();

    // Array che accumula le celle già selezionate.
    const clickedCells = [];

    // Aggancio un event listener alla cella creata.
      cell.addEventListener('click', function() {

        
        if(clickedCells.includes(i)){
          alert('hai già cliccato questa cella');
          return;
        } 
        
        cell.classList.add('clicked');  
        // console.log(`Cella numero: ${i}`);
        
        clickedCells.push(i);
        // console.log(clickedCells);

        // Controllo se ho calpestato una bomba.
        if (dangerNumber.includes(i)) {
          cell.classList.add('red-cells');
          gridElement.classList.add('invalidate');
          console.log(`Partita terminata, hai totalizzato ${counter} punti`);    
        } else {
          counter = counter + 1;
          // console.log(counter);
        }

        const finishLine = totalCells - dangerNumber.length;

        if(counter === finishLine){
          console.log('Complimenti, hai vinto la partita');
          
        }
         
      })
                 
}














