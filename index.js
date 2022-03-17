// Create an Array of at least 3 losing messages
 
 const youcandobetter:5,
 const letsgo:7,
 const userScore = document.getElementById ["user-score"];
 const score =document.getElementById ("user-score")



// Create variables to count wins and losses

var win = 10,
var youcandobetter= 5,
var letsgo=7,
var losses = 0,
var userScore = 0,




for (var i = 0; i< questions.score; i++){

    var userAnswers = confirm ('T or F: ' + questions [i].questions)

    if (userAnwers === questions [i].answers)


    {

        score++


        alert("That's Correct! " + questions [i].score)
    }

    else {

        alert("That's Incorrect! " + questions[i].explanation)
    }
}

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

var wins = 0,
    message=0,
    losses = 0;

function iWins() {
    wins += 1;
}

function iLosses() {
    losses += 1;
}

function imessage() {

    message +=1;
}










// target all .box elements and attach a click event listener to each one using a loop

console. log (btns)
for(var i = 0; i < btns.length; i++ ) {

btns [i] .onclick = function (e) {
 
    span. textContent = e.target.textContent




}



}


var wins = 0,
    losses = 0;

function iWin() {
    wins += 1;
    document.getElementById('wins').innerHTML = wins;
}

function iLose() {
    losses += 1;
    document.getElementById('losses').innerHTML = losses;
}




// within each click event...


var btns = document.querySelectorAll ( 'button')

var span = document. getElementById ('clicked')

btnContainer.onclick = addButton

function addButton () {


    var box= document.createElement ('button')box.textContent = "1,2,3"

    btnContainer.appendchild (box)
    box.onclick= addbutton 
}

console.log (btns)
for (var i = 0; i <choices.leghth; i++) {



    


// determine which box was clicked with 'this.textContent' or event.target.textContent

btns [i] .onclick = function (e) {

    span.textContent = e. target.textContent
}
}

// convert that value to a Number and store it to a variable
 var win;
 win =10;


var youcandobetter!;
youcandobetter = 5;


var letsgo!;
letsgo = 7;

var losses;
losses = 0,


var userScore;
userScore = 0;


// create a random number between 1-3 and store it to a variable





// Between any two numbers
Math.floor(Math.random() * (max - min + 1)) + min;

// Between 0 and max
Math.floor(Math.random() * (max + 1));

// Between 1 and max
Math.floor(Math.random() * max) + 1;

// This number will represent the winning box

// Between 0 and max
Math.floor(Math.random() * (max + 1));





// determine if the box clicked is equal to the random number


function boxclick() {
    return Math.floor(Math.random() * 20);
}




// if the numbers match, display a winning message by changing the text content of the div#message element

alert ('Game over. Sorry!: ' + Math.floor (score / questions.legth *100)

// if the numbers match, increment wins and display the win count in div#wins


(function(){
    var div = 0;
    $(".create").click(function(){
      div++;
      $(".block").append('<div class="new_div">Div number '+div+'</div>');
    });
  })();




// if the numbers don't match, change the div#message element's text to a random losing message from the array above


function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  shuffleArray(arr);
  console.log(arr)


// if the numbers don't match, increment losses and display the loss count in div#losses

function incrementCount (event) {

  var buttonValue = EventTarget.getatributte ('data-count-value') 
  console.log(buttonValue)

count += parseInt (buttonValue)

CSSCounterStyleRule.textContent = count

}