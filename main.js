var cards = document.querySelectorAll(".cards"); //grab all of the card
	attempts = 0;//set an initial value of attempts
	peoplePictures = ["pictures/paul.jpg", "pictures/paul.jpg", "pictures/steve.jpg", "pictures/steve.jpg", "pictures/alex.jpg", "pictures/alex.jpg", "pictures/brian.jpg", "pictures/brian.jpg", "pictures/greg.jpg", "pictures/greg.jpg", "pictures/leslie.jpg", "pictures/leslie.jpg", "pictures/kayla.jpg", "pictures/kayla.jpg", "pictures/julie.jpg", "pictures/julie.jpg", "pictures/blaise.jpg", "pictures/blaise.jpg", "pictures/eric.jpg", "pictures/eric.jpg", "pictures/noah.jpg", "pictures/noah.jpg", "pictures/kyle.jpg", "pictures/kyle.jpg", "pictures/percy.jpg", "pictures/percy.jpg", "pictures/adam.jpg", "pictures/adam.jpg", "pictures/john.jpg", "pictures/john.jpg", "pictures/andre.jpg", "pictures/andre.jpg", "pictures/jeff.png", "pictures/jeff.png", "pictures/taylor.jpg", "pictures/taylor.jpg"];
	tempArray = peoplePictures.slice();
	check = [];
	clicks = 0;
	player = 1;
	matches = 0;
	elapsedTime = 0;
	timeRunning = 0;
	TIMER = null;
	score = [];
	winner = "";


//This function gets the board prepared for a new game by calling 3 distinct functions.

function newGame(){

	reset();
	buildAndAssignPictures();
	resetTimer();
}


//This function resets board and kills the timer running.

function reset(){

	$(".cards").html("");
	TIMER = null;
}


//This function creates a temporary array to duplicate our static array holding all 36 pictures.
//Then, we're randomly choosing an individual picture from the temp array and doing two things 1) assigning it to one of the
//36 cards and deleting it from the temp array, so we deplete the tempArray at the end of the function.
//We are adding the pictures to a hidden class so we can manipulate viewing via CSS.

function buildAndAssignPictures (){

	tempArray = peoplePictures.slice();
	while (tempArray.length) {
		var y = tempArray.splice( Math.random()*peoplePictures.length, 1 );

		console.log(cards[ y ]);

		cards[ peoplePictures.length - (tempArray.length + 1) ].innerHTML += "<img class='hidden' src='" + y + "' />";
	}
}


//This function resets the timer to zero in preparation for player 2's round or a new game.

function resetTimer(){

	elapsedTime = 0;
	timeRunning = 0;
	document.getElementById("startRound").innerHTML = "Start Clock";
	document.getElementById("timeDisplay").innerHTML = "00:00:0";
}


//This function starts the timer (calls function startTimer) and changes the text on the button from "Start Clock" to "Running".

function timer(){

	if (timeRunning === 0) {
		timeRunning = 1;
		
		startTimer();

		document.getElementById("startRound").innerHTML = "Running";
	} else {
		timeRunning = 0;
		document.getElementById("startRound").innerHTML = "Start Clock";
	}
}


//This function starts the clock and displays the running time on screen in a 00:00:0 format.
//There is a 100 milisecond delay from click to clock starting.

function startTimer(){

	if (timeRunning = 1) {
		TIMER = setInterval(function(){
			elapsedTime ++;
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


//This function allows a user to click on TWO of the hidden pictures and see them briefly by eliminating them from the
//'hidden' class so they are visible to the user.
//Those two picture srcs are added to an array called check to get ready to be assessed for a match.

function showPicture(){

	if (clicks < 2) {	
		console.log("hit");
		
		if (check.length < 2) {
			this.classList.remove("hidden");
			console.log( "it got pushed")
			check.push(this);
	    } else {

	    }
		console.log(this);
		console.log(check);
		console.log(document.getElementById(this));
		clicks++;
		console.log(clicks + " clicks");
		
		if (clicks === 2) {
			setTimeout(function(){checkMatch()},400)
			clicks = 0;
		}
	}
}


//This function takes a look at the two components of the check array (above) and checks for a match.
//If there is a match, the two pictures stay visibile, if no match, they are added back to the 'hidden'
//class and ar no longer visible.  In either scenario, the check array is subsequently cleared to prep fo the next matching attempt.


function checkMatch(){

	console.log("I'm checking a match");

	if (check[0].src !== check[1].src || check[0].parentElement.id === check[1].parentElement.id){
			console.log("there is NO match");
			check[0].classList.add("hidden");
			check[1].classList.add("hidden");
			check = [];
			clicks = 0; 
	} else {
		console.log("YES, there is a match");
		check = [];
		clicks = 0
		matches++;
		console.log("there have been " + matches + " matches");
	}

	attempts++//The number of matching attempts are counted as they weigh into the scoring formula.

	if (matches === 18) { //When 18 matches are met the board is complete, timer stops and round is finished.
		clearInterval(TIMER)

		finishRound();
	}
}


//Player is informed of score in alert box and score is placed in the scoreboard on the left hand side of screen.
//If player one completed the round, player 2 will be prompted to play her round
//If player two completed the round, we trigger a function to determine and pronounce the winner.
//Scores are pushed to the 'score' array and scoring logic is: 1000 - (seconds elapsed in round - (attemtps * 5))

function finishRound(){

	if (player === 1) {
		score.push(1000 - (elapsedTime/10) - (attempts * 5));
		alert("Great work, your score is " + Math.ceil(score[0]) + "!");
		console.log(score);
		document.getElementById("box1").innerHTML = Math.ceil(score[0]);
		player++
		console.log("Player " + player + " is up.");
		alert("Player 2 is up.  Remember to click on 'Start Clock' when you are ready for the challenge!");
		matches = 0;
		attempts = 0;
		newGame();
	} else {
		score.push(1000 - (elapsedTime/10) - (attempts * 5));
		alert("Great work, your score is " + Math.ceil(score[1]) + "!");
		console.log(score[1]);
		document.getElementById("box2").innerHTML = Math.ceil(score[1]);

		getWinner();

		player = 1;

	}
}


//This function determines the winner by matching the two scores added to the 'score' array.
//Once a winner is determined the 'modal' class logic presents a winner message on screen.

function getWinner(){

		console.log("running winner logic");
		console.log(score[0]);
		console.log(score[1]);

		if (score[0] > score[1]) {
			winner = "Player 1";
			$('.modal').fadeIn(1500);
			$('.winner h1').html( winner + " takes it, baby! You crushed Player 2 by " + Math.ceil(score[0] - score[1]) + " points");
		} else if (score[1] > score[0]) {
			winner = "Player 2";
			$('.modal').fadeIn(1500);
			$('.winner h1').html( winner + " takes it, baby! You crushed Player 1 by " + Math.ceil(score[1] - score[0]) + " points");
		} else {
			winner = "It's a tie - that's boring";
			$('.modal').fadeIn(1500);
			$('.winner h1').html( winner );

		}

		newGame();
}


$("#newGame").on("click", newGame)//When the New Game button is clicked, 

$(".mainBoard").on('click', ".cards img", showPicture)

$("#startRound").on("click", timer)


//Allows a user to close the winner message on screen to proceed to the main board for another game to begin.

$('.close').on('click', function(){
        $('.modal').fadeOut(1000);
        window.setTimeout(function () {
        	newGame();
        }, 500);
       	document.getElementById("box1").innerHTML = "";
		document.getElementById("box2").innerHTML = "";
		matches = 0;
    });



