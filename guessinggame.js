var RandomNum = Number(Math.floor(Math.random() * 100) + 1);
console.log(RandomNum);
var counter = 0;
var guessingGame = function() {
counter++;

var response = prompt("Please choose a number between 1 and 100");
   if (response < RandomNum) {
      alert("Sorry, your number was too low. Please try again.");
guessingGame();
   } else if (response > RandomNum) {
      alert("Sorry, your number was too high. Please try again.");
      guessingGame();
   } else if (response == RandomNum) {
      alert("You are correct. You took " + counter + " guesses.");
   }
};

guessingGame();
