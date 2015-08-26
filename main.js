var cards = document.querySelectorAll(".cards"); //grab all of the card
var attempts = 0;//set an initial value of attempts
var peoplePictures = ["pictures/paul.jpg", "pictures/paul.jpg", "pictures/steve.jpg", "pictures/steve.jpg", "pictures/alex.jpg", "pictures/alex.jpg", "pictures/brian.jpg", "pictures/brian.jpg", "pictures/greg.jpg", "pictures/greg.jpg", "pictures/leslie.jpg", "pictures/leslie.jpg", "pictures/kayla.jpg", "pictures/kayla.jpg", "pictures/julie.jpg", "pictures/julie.jpg", "pictures/blaise.jpg", "pictures/blaise.jpg", "pictures/eric.jpg", "pictures/eric.jpg", "pictures/noah.jpg", "pictures/noah.jpg", "pictures/kyle.jpg", "pictures/kyle.jpg", "pictures/percy.jpg", "pictures/percy.jpg", "pictures/adam.jpg", "pictures/adam.jpg", "pictures/john.jpg", "pictures/john.jpg", "pictures/andre.jpg", "pictures/andre.jpg", "pictures/jeff.png", "pictures/jeff.png", "pictures/taylor.jpg", "pictures/taylor.jpg"];
var tempArray = peoplePictures.slice();
var check = [];
var clicks = 0;
var player = 1;
var matches = 0;
var elapsedTime = 0;
var timeRunning = 0;
var TIMER = null;
var score = [];


function timer(){
	if (timeRunning === 0) {
		timeRunning = 1;
		startTimer();
		console.log("Timer started");
		document.getElementById("startRound").innerHTML = "Running";
	} else {
		timeRunning = 0;
		document.getElementById("startRound").innerHTML = "Start Round";
	}
}

function resetTimer(){
	elapsedTime = 0;
	timeRunning = 0;
	document.getElementById("startRound").innerHTML = "Start Round";
	document.getElementById("timeDisplay").innerHTML = "00:00:0";
	// alert("Player " + player " is up!");
}

function startTimer(){
	if (timeRunning = 1) {
	TIMER = setInterval(function(){
		elapsedTime ++;
		// console.log(elapsedTime);
		// console.log( document.getElementById("timeDisplay") );
		var minutes = Math.floor(elapsedTime/600);
		var seconds = Math.floor((elapsedTime-(minutes*600))/10);
		var tenthsSeconds = elapsedTime % 10;

		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		document.getElementById("timeDisplay").innerHTML = minutes + ":" + seconds + ":" + tenthsSeconds;

	}, 100);


	}
}


function buildAndAssignPictures (){
	tempArray = peoplePictures.slice();
	while (tempArray.length) {
		var y = tempArray.splice( Math.random()*peoplePictures.length, 1 );

		console.log(cards[ y ]);

		cards[ peoplePictures.length - (tempArray.length +1) ].innerHTML += "<img class='hidden' src='" + y + "' />";
	}

}

function reset(){
	$(".cards").html("");
	TIMER = null;
}


function newGame(){

	reset();
	buildAndAssignPictures();
	resetTimer();

}

function showPicture(){
	console.log("hit");//not firing on second time around
	this.classList.remove("hidden");
	check.push(this);
	console.log(this);
	console.log(check);
	clicks++;
	console.log(clicks + " clicks");
	if (clicks === 2) {
		setTimeout(function(){checkMatch()},500)
		
	} else {

	}

}

function checkMatch(){

	console.log("I'm checking a match");
	if (check[0].src !== check[1].src){
		console.log("there is NO match");
		check[0].classList.add("hidden");
		check[1].classList.add("hidden");
		check = [];
		clicks = 0;
		console.log(clicks + " clicks"); 
	} else {
		console.log("YES, there is a match");
		check = [];
		clicks = 0
		matches++;
		console.log("there have been " + matches + " matches");
	}

	attempts++
	console.log(attempts + " total attmepts made");

	if (matches === 1) {
		clearInterval(TIMER)
		finishRound();
	}

}

function finishRound(){

	if (player === 1) {
		score.push(1000 - (elapsedTime/10) - (attempts * 5));
		alert("Great work, your score is " + score[0] + "!");
		console.log(score);
		document.getElementById("box1").innerHTML = score[0];
		player++
		console.log("Player " + player + " is up");
		alert("Player 2 is up, are you ready?");
		matches = 0;
		attempts = 0;
		newGame();
	} else {
		score.push(1000 - (elapsedTime/10) - (attempts * 5));
		alert("Great work, your score is " + score[1] + "!");
		console.log(score[1]);
		document.getElementById("box2").innerHTML = score[1];

	}


}


$("#newGame").on("click", newGame)

$(".mainBoard").on('click', ".cards img", showPicture)

$("#startRound").on("click", timer)







// // show two pictures attched to the two clicks
// // see if the two cards clicked on are equal to one another
// // if match, keep the two pictures there; if not flip back over to GA; then allow two more clicks before checkMatch again
// // call checkFInishBoard

// }








// }

// $(".cards").on("click", function(){

// 	$(this).addClass("cardsClick");

// 	$(this).removeClass('cards');

// });


// function newGame(){

// // clear previous scores
// // clear names
// // set all cards so GA logos are visible
// // set clock back to 0:00
// // ask for players' names
// // alert("Press the START button when you're ready to be tested!");
// }
	

// function startRound(){}

// // refresh board, assign pictures to .cards[i] (var randomizer = peoplePictures - need to radomize them assign to a specific card)
// // each picture needs to be assigned to exactly two cards
// 		//var randomPicture = peoplePictures[Math.floor(Math.random()];
//         //document.getElementById("display").innerHTML = randomPicture;
// // Process:
// // 1) Have one static array with 18 pics x 2 pictures
// // 2) Create another array by randomizing those 36 pics into a new array (var randomPictures)
// // 3) randomPictures array assigned to 36 cards
// //start clock


// function checkFinishBoard(player){

// // check if all matches are made
// // if yes
// // 1) stop clock; 2) apply the score in the player box;
// // if player 1 finished, prompt player to play
// // if player 2 finished, call checkWinner

// }

// function checkWinner(){

// // compare scores to determine a winner
// // alert winner (do some cool animation in V2)
// // }

// // for(var i = 0; i < cards.length; i++) { //want to go through all of the cards in order to do something to them
// //     cards[i].addEventListener('click', showPicture);//now go through each box, listening for a click, then run the getPiece fx
// //     console.log(cards[i]);//display in console to make sure it's working


// // document.querySelector('#newGame').addEventListener('click', checkMatch);
// }

// //Simple array example
// //<!DOCTYPE html>
// // <html>
// // <body>

// // <p id="demo"></p>

// // <script>
// // var cars = ["Saab", "Volvo", "BMW"];
// // document.getElementById("demo").innerHTML = cars[0] + ", " + cars[1];
// // </script>

// // </body>
// // </html>

// //pushing photos into an array
// // var numberOfImages = 50; // or whatever
// // var im, pictures = new Array();
// // for (var i = 0; i < numberOfImages ; i++) {
// //     im = "images/" + i + ".jpg";
// //     pictures.push(im);
// // }

