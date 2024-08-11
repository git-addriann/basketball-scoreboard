
let homeBtn = document.getElementById("home--btn");
let guestBtn = document.getElementById("guest--btn");
let onePointBtn = document.getElementById("btn--one");
let twoPointsBtn = document.getElementById("btn--two");
let threePoints = document.getElementById("btn--three");
let homeCount = document.getElementById("home--count");
let guestCount = document.getElementById("guest--count");


//Function for HOME scoreboard
let homeScore = homeBtn;
homeScore = 0;

function plusOne() {
          homeScore++;
          homeBtn.textContent = homeScore;
}

function plusTwo() {
          homeScore += 2;
          homeBtn.textContent = homeScore ;
}

function plusThree() {
          homeScore += 3;
          homeBtn.textContent = homeScore;
}

//Function for Guest scoreboard
let guestScore = guestBtn;
guestScore = 0;

function guestPlusOne() {
          guestScore++;
          guestBtn.textContent = guestScore;
}

function guestPlusTwo() {
          guestScore += 2;
          guestBtn.textContent = guestScore;
}

function guestPlusThree() {
      guestScore += 3;
      guestBtn.textContent = guestScore;    
}


//Function for Saving score
function saveClick() {
          homeCount.textContent  += homeScore + " - ";
          homeBtn.textContent = 0;
          homeScore = 0;

          guestCount.textContent += guestScore + " - ";
          guestBtn.textContent = 0;
          guestScore = 0;
}

