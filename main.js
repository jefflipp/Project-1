var cards = document.querySelectorAll(".cards"); //grab all of the card
var attempts = 0;//set an initial value of attempts
var peoplePictures = ["pictures/paul.jpg", "pictures/paul.jpg", "pictures/steve.jpg", "pictures/steve.jpg", "pictures/alex.jpg", "pictures/alex.jpg", "pictures/brian.jpg", "pictures/brian.jpg", "pictures/greg.jpg", "pictures/greg.jpg", "pictures/leslie.jpg", "pictures/leslie.jpg", "pictures/kayla.jpg", "pictures/kayla.jpg", "pictures/julie.jpg", "pictures/julie.jpg", "pictures/blaise.jpg", "pictures/blaise.jpg", "pictures/eric.jpg", "pictures/eric.jpg", "pictures/noah.jpg", "pictures/noah.jpg", "pictures/kyle.jpg", "pictures/kyle.jpg", "pictures/percy.jpg", "pictures/percy.jpg", "pictures/adam.jpg", "pictures/adam.jpg", "pictures/john.jpg", "pictures/john.jpg", "pictures/andre.jpg", "pictures/andre.jpg", "pictures/jeff.jpg", "pictures/jeff.jpg", "pictures/taylor.jpg", "pictures/taylor.jpg"];
var tempArray = peoplePictures.slice();
var check = [];
//console.log(tempArray);
var clicks = 0;
var player = 1;


//console.log(cards);

function build (){
	while (tempArray.length) {
		var y = tempArray.splice( Math.random()*peoplePictures.length, 1 );

		console.log(cards[ y ]);

		cards[ peoplePictures.length - (tempArray.length +1) ].innerHTML += "<img class='hidden' src='" + y + "' />";
	}

}

function showPicture(){
	console.log("hit");
	this.classList.remove("hidden");
	check.push(this);
	console.log(this);
	console.log(check);
	clicks++;
	console.log(clicks + " clicks");
	if (clicks === 2) {
		setTimeout(function(){checkMatch()},600)
		
	} else {
		// showPicture();

	}

}
function checkMatch(){

	console.log("I'm checking a match");
	if (check[0].src !== check[1].src){
		console.log("there is NO match");
		check[0].classList.add("hidden");
		check[1].classList.add("hidden");
		clicks = 0;
		console.log(clicks + " clicks");
		check = [];  
	} else {
		console.log("YES, there is a match");
		check = [];
		clicks = 0
	}

attempts++
console.log(attempts + " total attmepts made");
}

// // show two pictures attched to the two clicks
// // see if the two cards clicked on are equal to one another
// // if match, keep the two pictures there; if not flip back over to GA; then allow two more clicks before checkMatch again
// // call checkFInishBoard

// }


function reset(){
	$(".cards").html("");



}


function newGame(){

	reset();
	build();

}

$("#newGame").on("click", newGame)

$(".mainBoard").on('click', ".cards img", showPicture)


// function showPicture(){



// //show a picture
// // 	click ++;
// // 	if (click === 2) {
// // 		checkMatch();
// // 	} else{

// // 	}
// }



// function addTestPicture(){
// 	// image.src = peoplePictures[0];
// 	image.innerHTML = '<img src="./pictures/paul.jpg" />';


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
