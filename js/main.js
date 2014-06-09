//************************************************************
// Global Variables
//************************************************************
var totalBoxes = 16;
var randWhiteBoxes=[];
var count;
var numWhiteBoxes=3;

//************************************************************
// On Click Handlers
//************************************************************
$(".box").on("click",flipBox);
$(".reset").on("click", initialize);

//************************************************************
// Functions that load when page is refreshed
//************************************************************
showUserFront();

//************************************************************
// Main Code: resets box values, shows front, shows back, shows front
//************************************************************

function initialize(){
	clearMessage();
	showUserFront();
	resetBoxes();
	randWhiteBoxes = assignRandWhite();
	defineBack();
	setTimeout(showUserBack,1000);
	setTimeout(showUserFront,2000);
}


//************************************************************
// Clear message
//************************************************************
function clearMessage(){
	$(".message").html("");
	$(".reset").html("");
}

//************************************************************
// Creates 3 random numbers
//************************************************************
function assignRandWhite(){
	var whiteArray = [];
	var i=0;
	while (i<numWhiteBoxes){
		var randNum = Math.floor((Math.random() * totalBoxes) + 1);
		if (whiteArray.indexOf(randNum) == -1){
			whiteArray.push(randNum);
			i++;
		}
	}
	return whiteArray;
}


//************************************************************
// Removes all color classes from back box
//************************************************************
function resetBoxes(){
	for (var i=1; i<=totalBoxes; i++){
		var temp = ".box." + i;
		$(temp).children(".back").removeClass("white black");
		count=0;
	}
}


//************************************************************
// Assign color values to Back 
//************************************************************
function defineBack(){
	for (var i=1; i<=totalBoxes; i++){
		var temp = ".box." + i;
		if(i==randWhiteBoxes[0] || i==randWhiteBoxes[1] || i==randWhiteBoxes[2]){	//hard coded-should be a better way
			$(temp).children(".back").addClass("white");
		}
		else{
			$(temp).children(".back").addClass("black");
		}
	}
}

//************************************************************
// Displays all the front 
//************************************************************
function showUserFront(){
	$(".wrapper").fadeIn(1000);
	for (var i=1; i<=totalBoxes; i++){
		var temp = ".box." + i;
		$(temp).children(".front").show();
		$(temp).children(".back").hide();

	}
}

//************************************************************
// Displays all the back 
//************************************************************
function showUserBack(){
	for (var i=1; i<=totalBoxes; i++){
		var temp = ".box." + i;
		$(temp).children(".back").show();
		$(temp).children(".front").hide();
	}
}


//************************************************************
// Flips box from front to back
//************************************************************
function flipBox(){
	$(this).children(".back").show();
	$(this).children(".front").hide();
	if ($(this).children(".back").hasClass("white") && count!=2){		//hard-coded
		count++;
		var numLeft = 3 - count;
 		$(".message").html("Good job! There are " + numLeft + " more")
	}
	else if($(this).children(".back").hasClass("white") && count==2){	//hard-coded
		$(".message").html("You Win!");
		$(".reset").html("Play Again");
	}
	else{
		$(".message").html("You Lose.");
		$(".reset").html("Play Again");
		$(".wrapper").fadeOut(1000);
	}
}
























