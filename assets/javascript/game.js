
// targetNumber is ther random number for the user to match to win game
var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
$("#number-to-guess").text(targetNumber);

//this counter tracks the user's total.
var counter = 0;
var wins;
var lossess;

//numberOptions for each img
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var increment = numberOptions[Math.round(Math.random())];

/*  For each iteration, we will create an imageCrystal
var imageCrystal = $("<img>");

Lastly, each crystal image (with all it classes and attributes) will get added to the page.
crystals.append(imageCrystal); */


$("#crystal-imgs").on("click", ".crystal-imgs", function () {
      counter += increment;

      alert("New score: " + counter);

      //if_else statement for the wins & losses
      if (counter == targetNumber) {
        wins++;
        alert("Winner!");
      } else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
        alert("You lose!!");
      }



     /*  var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>"; */