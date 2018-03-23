//global variables

//game counters
var winCount = 0;
var lossCount = 0;
var totalCounter = 0;
var crystalImages =[
      "assets/images/blueCrystal.jpg",
      "assets/images/greenCrystal.png",
      "assets/images/purpleCrystal.jpg",
      "assets/images/yellowCrystal.jpg",
];

var targetNumber = 0; //starts at 0

function startGame(){ //whats being displayed on screen

targetNumber = Math.floor(Math.random() * (120 - 19)) + 19; //number for user to guess
totalCounter=0; 

$('#winCounter').text(winCount); //.text for span
$('#lossCounter').text(winCount);
$('#targetNumber').text(targetNumber);
$('#totalScore').text(totalCounter);



createCrystals();
}

function createCrystals(){ //displays imgs
      $("#crystal-section").empty();//refreshes crystals
for (var i =0;i<crystalImages.length;i++){
      var $div = $('<div>'); 
      var $img = $("<img>", {
            class: "crystal",
            src:crystalImages[i],
            width:"50",
            height: "50",
      });

//attributes # to img
      $img.attr("data-value", Math.floor(Math.random() * (12 - 1)) + 1);

$div.append($img);//img into div
$("#crystal-section").append($div); //finds img section into div
}
}

//when clicked run function, eventlistener
$("#crystal-section").on("click", ".crystal", function(){
var value = parseInt($(this).attr("data-value"));//string to int
console.log(value);
totalCounter +=value;//changes the value of totalcounter
$('#totalScore').text(totalCounter);


//determine if totalCounter is < targetNumber
if (totalCounter > targetNumber){
      lossCount++;
      startGame();
}else if (totalCounter==targetNumber){
      winCount++;
      startGame();
}
});

startGame();










$("#crystal-imgs").on("click", ".crystal-imgs", function () {
      totalCounter += increment;
      alert("New score: " + counter);

      

//change HTML to reflect round conditions
document.getElementById("numGuesess").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;

     
 $("#number-to-guess").text(targetNumber);

//numberOptions for each img
var increment = numberOptions[Math.round(Math.random())];

//  For each iteration, we will create an imageCrystal
var imageCrystal = $("<img>");

//Lastly, each crystal image (with all it classes and attributes) will get added to the page.
crystals.append(imageCrystal); 
} 

