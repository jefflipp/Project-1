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
var winner = "";

function timer(){
	if (timeRunning === 0) {
		timeRunning = 1;
		startTimer();
		console.log("Timer started");
		document.getElementById("startRound").innerHTML = "Running";
	} else {
		timeRunning = 0;
		document.getElementById("startRound").innerHTML = "Start Clock";
	}
}

function resetTimer(){
	elapsedTime = 0;
	timeRunning = 0;
	document.getElementById("startRound").innerHTML = "Start Clock";
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

function getWinner(){
		console.log("running winner logic");
		console.log(score[0]);
		console.log(score[1]);

		if (score[0] > score[1]) {
			winner = "Player 1";
			$('.modal').fadeIn(500);
			$('.winner h1').html( winner + " takes it, baby!");
		} else if (score[1] > score[0]) {
			winner = "Player 2";
			$('.modal').fadeIn(500);
			$('.winner h1').html( winner + " takes it, baby!");
		} else {
			winner = "It's a tie - that's boring";
			$('.modal').fadeIn(500);
			$('.winner h1').html( winner );

		}

		newGame();

}



$("#newGame").on("click", newGame)

$(".mainBoard").on('click', ".cards img", showPicture)

$("#startRound").on("click", timer)



$('.close').on('click', function(){
        $('.modal').fadeOut(500);
        window.setTimeout(function () {
        newGame();
        }, 500);
       	document.getElementById("box1").innerHTML = "";
		document.getElementById("box2").innerHTML = "";
		matches = 0;
    });



