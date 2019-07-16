var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert('You found a match');
		} else {
			alert('Sorry, No match');
		}
	}
}

function flipCard(cardId){
	console.log("User flipped: " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}



flipCard(2);
flipCard(3);