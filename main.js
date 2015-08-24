var cards = document.querySelectorAll(".cards"); //grab all of the card
var attempt = 0;//set an initial value of "turn"
var peoplePictures = ["pictures/paul.jpg", "pictures/paul.jpg", "pictures/steve.jpg", "pictures/steve.jpg", "pictures/alex.jpg", "pictures/alex.jpg", "pictures/brian.jpg", "pictures/brian.jpg", "pictures/greg.jpg", "pictures/greg.jpg", "pictures/leslie.jpg", "pictures/leslie.jpg", "pictures/kayla.jpg", "pictures/kayla.jpg"];
var tempArray = peoplePictures.slice();
//console.log(tempArray);
var click = 0;
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
}

function reset(){
	$(".cards").html("");



}


function newGame(){

	reset();
	build();

}

$("#newGame").on("click", newGame)

$(".mainBoard").on('click', ".cards img", showPicture);


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


// function checkMatch(){

// // show two pictures attched to the two clicks
// // see if the two cards clicked on are equal to one another
// // if match, keep the two pictures there; if not flip back over to GA; then allow two more clicks before checkMatch again
// // call checkFInishBoard

// }

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

