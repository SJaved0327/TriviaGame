//Global Variables
//----------------------------------------
var correct = 0;
var wrong = 0;
var unanswered = 0;



//Functions
//----------------------------------------




//Gameplay
//----------------------------------------

//When game is complete

$("#doneButton").click(function(){
	
	//check value of question 1
	var question1 = document.questionDiv.question1.value;
	
	//check value of question 2
	var question2 = document.questionDiv.question2.value;
	
	//check value of question 3
	var question3 = document.questionDiv.question3.value;

	//Question 1 Check
	if (question1 === "correct"){
		correct++;
	}
	else if (question1 === "wrong"){
		wrong++;
	}
	else {
		unanswered++;
	};

	//Question 2 Check
	if (question2 === "correct"){
		correct++;
	}
	else if (question2 === "wrong"){
		wrong++;
	}
	else {
		unanswered++;
	};

	//Question 3 Check
	if (question3 === "correct"){
		correct++;
	}
	else if (question3 === "wrong"){
		wrong++;
	}
	else {
		unanswered++;
	};


});

/*
if (time = 0){

	//run same end function

};
*/

//$("#maintext-Container").style.visibility = "visible";



//getElementById("#asdfads").value = 

//intro page displays

//click start to reveal gameplay page

//main page with questions
	//Question
	//Answers 1 - 4

//user selects radio buttons to choose answer
//user can only select one answer at a time

//hit Done button when done to go immediately to Done page

//time counts down 1 second at a time
//decrement 1000

//when time = 0, Done page displays
	// All Done!
	// Correct Answers = 0
	// Incorrect Answers = 0
	// Unanswered = 0