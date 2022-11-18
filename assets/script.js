
var codersIntro = document.querySelector("#start-section")
var questionsEl = document.getElementById("quiz-section")
var endEl = document.getElementById("end-section")
let finalName = document.getElementById("#username");
var questionCount;
let scoreList = [];
let highscoresEl = document.querySelector("#save");
const scores = document.querySelector("#high-scores")
let scoreListEl = document.querySelector(".score-list");
var username;
var userScore;


const questions = [
    {
        question: "What is Javascript primarily used for?",
        answers: ["1. Outlining the website", "2. Adding design", "3. Adding user interface", "4. All of the above"],
        correctAnswer: "3. Adding user interface"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["1. alertBox('Hello World');", "2. msg('Hello World');", "3. msgBox('Hello World');", "4. alert('Hello World');"],
        correctAnswer: "4. alert('Hello World');"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["1. if i == 5 then", "2. if i = 5 then", "3. if (i == 5)", "4. if i = 5"],
        correctAnswer: "3. if (i == 5)"
    },
    {
        question: "Which class hides something?",
        answers: ["1. hidden", "2. gohide", "3. hidenow", "4. hide"],
        correctAnswer: "4. hide"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: ["1. if(i<>5)", "2. if i=!5 then", "3. if(i!=5)", "4. if i <>5"],
        correctAnswer: "3. if(i!=5)"
    }
];

document.getElementById("start").addEventListener("click", startQuiz)


var score = 0;


function startQuiz() {
    codersIntro.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    questionCount = 0;

    countDown();
    setQuestion(questionCount);

    
}

// SET QUESTION FUNCTION
function setQuestion(id) {
    if (id < questions.length) {
        document.querySelector(".question").textContent = questions[id].question;
        document.querySelector(".answer-box").innerHTML = ""
        questions[id].answers.forEach(function (answer) {
            var button = document.createElement("button")
            button.textContent = answer;
            button.setAttribute("value", answer)
            button.onclick = function () {
                if (this.value !== questions[id].correctAnswer) {
                    console.log('wrong!')
                    totalTime -= 10;
                } else {
                    score++;
                }
                questionCount++; setQuestion(questionCount);
            }
            document.querySelector(".answer-box").appendChild(button)
        })

    } else {
        console.log("end game")
        questionsEl.setAttribute("class", "hide")
        endEl.removeAttribute("class")
        highscoresEl.removeAttribute("class")
}
    }

var totalTime = 60;
function countDown() {
    var timeInterval = setInterval(function () {
        document.getElementById("timer").textContent = totalTime
        totalTime--;


        if (totalTime === 0) {
            clearInterval(timeInterval)
            // endMessage();
        }

    }, 1000);
}

function saveScore() {
    // Save related form data as an object
    highscoresEl.style.display = "block";
    var highScore = highscoresEl;
    
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    // localStorage.setItem("username", JSON.stringify(finalName));
    // let storedScoreList = JSON.parse(localStorage.getItem("score-list"));
    // renderMessage();

    // scoreList.push({ username: init, score: secondsLeft });

    // scoreList.push(highScore);
    console.log(username)
    console.log(finalName)


    highscoresEl.addEventListener("click", function(event) {
        event.preventDefault();
        
        var userScore = {
          username: finalName.value
        };
        
        localStorage.setItem("userScore", JSON.stringify(userScore));
        renderMessage();
        
        });
}

saveScore();