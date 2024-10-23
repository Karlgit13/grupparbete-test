
// window.onload = function () {

// }
// Kortlek
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

// spelare och dealers hand
let playerHand = []
let dealerhand = []


// skapar kortlek och blandar
function createDeck() {
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push({ value: values[j], suit: suits[i] });
    }
  }
  deck = deck.sort(() => Math.random() - 0.5);
  console.log(deck);
  return deck;
}
const myDeck = createDeck();




// Räkna poängen för en hand
function calculatePoints(hand) {
  let points = 0;
  let aces = 0;

  hand.forEach(card => {
    if (card.value === 'A') {
      aces++;
      points += 11;
    } else if (['K', 'Q', 'J'].includes(card.value)) {
      points += 10;
    } else {
      points += parseInt(card.value);
    }
  });

  // konvertera ess från 11 till 1
  while (points > 21 && aces > 0) {
    points -= 10;
    aces--;
  }

  return points;
}


function showRandomCards() {

  const random = values[Math.floor(Math.random() * values.length)];

  const random2 = values[Math.floor(Math.random() * values.length)];

  const result = random + random2;

  document.getElementById('result').textContent = `Random Sum: ${result}`;






}





