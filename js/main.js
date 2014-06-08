//************************************************************
// Global Variables
//************************************************************
var totalBoxes = 9;
var randWhiteBoxes=[];
var count;

$(".box").on("click",flipBox);
$(".start").on("click", initialize);

showUserFront();

function assignRandWhite(){
	var whiteArray = [];
	var i=0;
	while (i<3){
		var randNum = Math.floor((Math.random() * totalBoxes) + 1);
		if (whiteArray.indexOf(randNum) == -1){
			whiteArray.push(randNum);
			i++;
		}
	}
	return whiteArray;
}


function initialize(){
	showUserFront();
	resetBoxes();
	randWhiteBoxes = assignRandWhite();
	defineBack();
	setTimeout(showUserBack,1000);
	setTimeout(showUserFront,2000);
}



function resetBoxes(){
	for (var i=1; i<=totalBoxes; i++){
		var temp = ".box." + i;
		$(temp).children(".back").removeClass("white black");
		count=0;
	}
}

function defineBack(){
	for (var i=1; i<=totalBoxes; i++){
		var temp = ".box." + i;
		if(i==randWhiteBoxes[0] || i==randWhiteBoxes[1] || i==randWhiteBoxes[2]){
			$(temp).children(".back").addClass("white");
		}
		else{
			$(temp).children(".back").addClass("black");
		}
	}
}

function showUserFront(){
	for (var i=1; i<=totalBoxes; i++){
		var temp = ".box." + i;
		$(temp).children(".front").show();
		$(temp).children(".back").hide();

	}
}

function showUserBack(){
	for (var i=1; i<=totalBoxes; i++){
		var temp = ".box." + i;
		$(temp).children(".back").show();
		$(temp).children(".front").hide();
	}
}



function flipBox(){
	$(this).children(".back").show();
	$(this).children(".front").hide();
	if ($(this).children(".back").hasClass("white") && count!=2){
		count++;
		var numLeft = 3 - count;
 		$(".message").html("Good job! There are " + numLeft + " more")
	}
	else if($(this).children(".back").hasClass("white") && count==2){
		$(".message").html("You Win!");
		$(".start-game").html("Play Again");
	}
	else{
		$(".message").html("You Lose.");
		$(".start-game").html("Play Again")
	}
}



// 	if(==randWhiteBoxes[0])

// 		else 
// 			this.children(".back").addClass("black")
// }



















//************************************************************
//************************************************************

// setTimeout(flipAll,1000);
// 	setTimeout(flipAll,2000);
// $(".start").on("click", reset);
// 	var randWhiteBoxes = assignRandWhite(); //["3","4","6"];;
	




// $(".box").on("click", flipBox);
// $(".button").on("click", flipAll);


// function assignRandWhite (){
// 	var whiteArray = [];
// 	for (var i=0; i<3; i++){
// 		var randNum = Math.floor((Math.random() * totalBoxes) + 1);
// 		whiteArray.push(randNum);
// 	}
// 	return whiteArray;
// }



// function flipAll(){
// 	for (var i=1; i<=totalBoxes; i++){
// 		var temp = ".box." + i;
// 		$(temp).trigger("click")
// 	}
// }

// function flipBox(){
// 	if($(this).hasClass(randWhiteBoxes[0]) || $(this).hasClass(randWhiteBoxes[1]) || $(this).hasClass(randWhiteBoxes[2])){
// 		$(this).toggleClass("front back-white");
// 	}
// 	else{
// 		$(this).toggleClass("front back-black");
// 	}
// }



// var allBoxes = ["div.1", "div.2", "div.3", "div.4","div.5", "div.6", "div.7", "div.8", "div.9"];
// allBoxes.forEach(flipBox);

// function addClickHandler(value){
// 	$(value).on("click", toggleRed);

// }



// $(".button").on("click", toggleRandBoxes);		//can't use toggleWhiteBoxes(randNum)
// // setTimeout(toggleRandBoxes, 2000);

// function toggleRandBoxes(){
// 	var randBoxes = [3,4,6];
// 	randBoxes.forEach(toggleRed);
// }

// function toggleRed(value){
// 	var temp = ".box." + value;
// 	$(temp).toggleClass("red");
// }


