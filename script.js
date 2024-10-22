
window.onload = function() {
    
}

const suits = ["hjärter", "ruter", "klöver", "spader"];
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
