console.log('JS OK');


/*
BONUS 
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, 
  divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, 
  divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, 
  divise in 7 caselle per 7 righe;

Note:
- questo bonus richiederà una riflessione extra per quel che riguarda 
  il calcolo della larghezza delle celle ;)

Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, 
dividiamo il lavoro in micro problemi.
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento
*/

/*
ANALISI:

- Prepariamo l'HTML ed il CSS per ottenere il risultato grafico.
- Prendo gli elementi dalla pagina.
- Dichiaro una funzione per creare il titolo nella pagina.
- Dichiaro delle variabili che raccolgono il numero di colonne, 
  di righe e il totale delle celle.
- Dichiaro una funzione per creare una cella. 
- Apro un ciclo for per ripetere l'operazione 100 volte.
- Agganciare un event listener al button.  
- Aggancio un event listener alla cella creata.

*/

// Dichiaro una funzione per creare una cella.
function createCell() {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  return cell;
}

// Prendo gli elementi dalla pagina.
const gridElement = document.getElementById('grid');
const buttonElement = document.getElementById('button');
const difficultyLevelElement = document.getElementById('difficulty-level');
// console.log(difficultyLevelElement);

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


// Apro un ciclo for per ripetere l'operazione 100 volte.
for (let i = 1; i <= totalCells; i++) {

    const cell = createCell();

    // Agganciare un event listener al button.  
    buttonElement.addEventListener('click', function() {
      
      startPlay.classList.add('d-none');
      gridElement.appendChild(cell);
      cell.append(i);
    
    })
      
    // Aggancio un event listener alla cella creata.
    cell.addEventListener('click', function() {
      cell.classList.add('clicked');  
      console.log(`Cella numero: ${i}`);

    })

}










