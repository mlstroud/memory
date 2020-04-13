export function Card() {
  this.word = word;
  this.number = number;
  this.cards = [];
}


//for this time we need 4 divs or some boxes for these cards////////////
Card.prototype.wordDeck = function (){
  var wordCards = ["apple", "apple", "orange", "orange"]; 
  var randomNum = Math.floor(Math.random() * wordsCards.length) 
  for (var i = 0; i< wordsCards.length; i++){
    this.cards.push(wordCards[i]);  
  }
 return this.cards; // wordCards array is random now
}

// UI logic/////////////////////////////////////////////////////////////
// user clicks start button this will happen vvvvvvvvvvvvvvvvvvvvvvvvvvv
function assignCards(cardsToAssign){
  var cardsDeck = $("div.word-cards");
  var htmlForCards = "";
  for (var i = 0; i<cardsToAssign.cards.length; i++){
    $(".word-cards").append(cardsToAssign.cards[i]);
  }
  cardsDeck.append(htmlForCards);
}
var usersCards = "";