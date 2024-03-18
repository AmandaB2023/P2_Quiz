/* jshint esversion: 8 */

//Selecting required elements
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-button");
const displayContainer = document.getElementById("display-container");
const scoreContainer = document.querySelector(".score-container");
const restart = document.getElementById("restart");
const userScore = document.getElementById("user-score");
const startScreen = document.querySelector(".start-screen");
const startButton = document.getElementById("start-button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".info-buttons .exit-btn");
const playBtn = infoBox.querySelector(".info-buttons .play-btn");
let timeLeft = document.querySelector(".time-left");
let countOfQuestion = document.querySelector(".number-of-question");
let currentYear = new Date().getFullYear();
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;


// creating the new div tags for icons
const tickIcon = '<div class="icon-tick"><i class="fa-regular fa-circle-check"></i></div>';
const crossIcon = '<div class="icon-cross"><i class="fa-regular fa-circle-xmark"></i></div>';


//Restart Quiz
restart.addEventListener("click", () => {
    startGame();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

function showResult() {
    //user score
    userScore.innerHTML = "Your score is " + scoreCount + " out of " + questionCount;
    if (scoreCount === 0 && scoreCount <= 3) {
        userScore.innerHTML += "<p>I think you need practice!!</p>";
    } else if (scoreCount === 4 && scoreCount <= 8) {
        userScore.innerHTML += "<p>Not Bad!</p>";
    } else if (scoreCount === 8 && scoreCount <= 10) {
        userScore.innerHTML += "<p> Excellent !! You are as Irish as The Late Late Show</p>";
    }
}

//Next Button
const displayNext = () => {
    //increment questionCount
    questionCount++;
    //if last question
    if (questionCount == questionsArray.length) {
        //hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        showResult();
    } else {
        //display questionCount
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + questionsArray.length + " Question";
        //display quiz
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }

};
nextBtn.addEventListener("click", displayNext);

// Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            //when countdown reaches 0 clearInterval and go to next question
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".quiz-container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
    //Disable Next Button
    nextBtn.disabled = true;
};


function showQuestion() {
    //Generate quiz
    for (let i of questionsArray) {
        //Quiz card creation
        let div = document.createElement("div");
        div.classList.add("quiz-container-mid", "hide");
        // //Quiz question number
        countOfQuestion.innerHTML = 1 + " of " + questionsArray.length + " Question";
        // //Quiz question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        //Answer options
        div.innerHTML += `
    <button class="option-div" onclick=" checkAnswer(this)">${i.options[0]}</button>
    <button class="option-div" onclick=" checkAnswer(this)">${i.options[1]}</button>
    <button class="option-div" onclick=" checkAnswer(this)">${i.options[2]}</button>
    <button class="option-div" onclick=" checkAnswer(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Check answer function to check if user selected answer option is correct or incorrect.
function checkAnswer(userAnswer) {
    let userSelectedAnswer = userAnswer.innerText;
    let question =
        document.getElementsByClassName("quiz-container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSelectedAnswer === questionsArray[questionCount].correct) {
        //adding green color to correct selected option
        userAnswer.classList.add("correct");
        //Add tick icon to correct selected option
        userAnswer.insertAdjacentHTML("beforeend", tickIcon);
        scoreCount++;
    } else {
        //Add red color to incorrect selected option
        userAnswer.classList.add("incorrect");
        //Add cross icon to incorrect selected option
        userAnswer.insertAdjacentHTML("beforeend", crossIcon);
        options.forEach((element) => {
            if (element.innerText == questionsArray[questionCount].correct) {
                element.classList.add("correct");


            }
        });
    }
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
    //Next Button enabled.
    nextBtn.removeAttribute('disabled');
}
//initial setup
function startGame() {
    quizContainer.innerHTML = "";
    // Randomly sort questions
    questionsArray.sort(() => Math.random() - 0.5);
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    showQuestion();
    quizDisplay(questionCount);
    timerDisplay();
}

// Play Button on Information Box popup, on click brings up quiz container. 
playBtn.onclick = () => {
    infoBox.classList.remove("active");
    //Shows Quiz container
    quizContainer.classList.add("quiz-container");
    //Hides start screen.
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    startGame();
};

// Exit button on Information box popup, on click exits.
exitBtn.onclick = () => {
    //Wll hide rules.
    infoBox.classList.remove("active");

};
//Start Button on click brings up quiz playing information.
startButton.onclick = () => {
    //Shows information  box
    infoBox.classList.add("active");
};
//Hide quiz and display start screen.
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

//Current Year
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currentYear').textContent = currentYear;
});