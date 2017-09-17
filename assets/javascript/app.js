//Global Variables
//---------------------------------------------

//counters start at 0
var counter = {
	correct: 0,
	wrong: 0,
	unanswered:0
};

//number starts at 30
var number = 30;
//stores interval value
var intervalId;

//Functions
//---------------------------------------------

//StartGame function sets up intervalId and runs decrement functions every second
function StartGame() {

	intervalId = setInterval(decrement, 1000);
	$("#maintext-Container").css('visibility', 'visible');
};

//Decrement function starts at number (30) and decreases number by 1 until 0
//When number is 0, game ends, intervalId is cleared
function decrement() {
    //print number in #startTimer div
    $("#startTimer").html("<h2>" + number + "</h2>");

    //number decreases by 1 and stores its value
    number--;

    //When number is 0:
    if (number === 0) {
    	//EndGame function is called
    	EndGame();
    	//intervalId is cleared
    	clearInterval(intervalId);
    }
};

//EndGame function:
//stores selected values of questions 
//checks whether values are correct or wrong or neither (unanswered)
//alerts user of score
function EndGame(){

	//stop the timer!
	clearInterval(intervalId);

	//check value of question 1
	var question1 = document.questionDiv.question1.value;
	
	//check value of question 2
	var question2 = document.questionDiv.question2.value;
	
	//check value of question 3
	var question3 = document.questionDiv.question3.value;

	//---Question 1 Check---
	//if value of question1 is correct:
	if (question1 === "correct"){
		//correct counter increases by 1 and stores its value
		counter.correct++;
	}
	//else if value of question 1 is wrong:
	else if (question1 === "wrong"){
		//wrong counter increases by 1 and stores its value
		counter.wrong++;
	}
	//else no values match: 
	else {
		//then unanswered increases by 1 and stores its value
		counter.unanswered++;
	};

	//---Question 2 Check---
	//if value of question2 is correct:
	if (question2 === "correct"){
		//correct counter increases by 1 and stores its value
		counter.correct++;
	}
	//else if value of question 2 is wrong:
	else if (question2 === "wrong"){
		//wrong counter increases by 1 and stores its value
		counter.wrong++;
	}
	//else no values match:
	else {
		//then unanswered increases by 1 and stores its value
		counter.unanswered++;
	};

	//---Question 3 Check---
	//if value of question3 is correct:
	if (question3 === "correct"){
		//correct counter increases by 1 and stores its value
		counter.correct++;
	}
	//else if value of question 3 is wrong:
	else if (question3 === "wrong"){
		//wrong counter increases by 1 and stores its value
		counter.wrong++;
	}
	//else no values match:
	else {
		//then unanswered increases by 1 and stores its value
		counter.unanswered++;
	};

	//#maintext-Container is replaced wtih final scores
	$("#maintext-Container").html("<h2>" + "</h2>");
	$("#maintext-Container").addClass("text-center");
	//cycle through the counter object and append the final scores
	$("#maintext-Container").append("<h2> Correct: " + counter.correct + "</h2>");
	$("#maintext-Container").append("<h2> Wrong: " + counter.wrong + "</h2>");
	$("#maintext-Container").append("<h2> Unanswered: " + counter.unanswered + "</h2>");

	//#startTimer is replaced with a gif
    $("#startTimer").html(
    	"<img src='https://i.giphy.com/media/p9MrGLrUDrU1a/giphy.webp' />"
    );

};



//Gameplay
//---------------------------------------------

//Game starts when user hits Start button
//StartGame function runs
$("#startTimer").on("click", StartGame);

//When game is complete and user hits Done button
//EndGame function runs
$("#doneButton").on("click", EndGame);


