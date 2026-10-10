let homeScore = 0;
let guestScore = 0;

let HomeScoreDisplay = document.getElementById("home-score");
let GuestScoreDisplay = document.getElementById("guest-score");
let ResetGameDisplay = document.getElementById("reset-btn");

function addHomePoints(points){
    homeScore = homeScore + points
    //HomeScoreDisplay.textContent = homeScore
    updateDisplay();
};

function addGuestPoints(points){
    guestScore += points
    //GuestScoreDisplay.textContent = guestScore
    updateDisplay();
};

function resetGame(){
    //HomeScoreDisplay.textContent = 0;
    //GuestScoreDisplay.textContent = 0;
    homeScore = 0;
    guestScore = 0;
    updateDisplay()
}

function updateDisplay() {
    HomeScoreDisplay.textContent = String(homeScore).padStart(2, "0");
    GuestScoreDisplay.textContent = String(guestScore).padStart(2, "0");
};