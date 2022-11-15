
var codersIntro = document.querySelector("#start-section")
var questionsEl = document.getElementById("quiz-section")
var questionCount;

const questions = [ 
    {
        question: "What is Javascript primarily used for?",
        answers: ["1. <outlining the website>", "2. <adding design>", "3. <adding user interface>", "4. <all of the above>"],
        correctAnswer: "3. <adding user interface>"
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
        question: "How does a FOR loop start?",
        answers: ["1. for (i <= 5; i++)", "2. for (i = 0; i <= 5)", "3. for i = 1 to 5", "4. for (i = 0; i <= 5; i++)"],
        correctAnswer: "4. for (i = 0; i <= 5; i++)"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: ["1. if(i<>5)", "2. if i=!5 then", "3. if(i!=5)", "4. if i <>5"],
        correctAnswer: "3. if(i!=5)"
    }
];

document.getElementById("start").addEventListener("click", startQuiz)
// const beginning = document.querySelector("#quizBox");


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
        questions[id].answers.forEach(function(answer){
            var button = document.createElement("button")
            button.textContent = answer;
            button.setAttribute("value", answer)
            button.onclick = function() {
            if (this.value !== questions[id].correctAnswer) {
                console.log('wrong!')
                totalTime -=10;
            } else {
                score++;
            }
            questionCount++; setQuestion(questionCount)
            }
            document.querySelector(".answer-box").appendChild(button)
        })
        
    } else {
        console.log("end game")
        questionsEl.setAttribute("class", "hide")
    }
}

var totalTime = 60;
function countDown() {
    var timeInterval = setInterval(function () {
        document.getElementById("timer").textContent = totalTime
        totalTime--;
        

    if(totalTime === 0) {
        clearInterval(timeInterval)
        // endMessage();
    }

}, 1000);
}


// var totalScore = function (arr) {
//     var result = 0;

//     for (var i = 0; i < arr.length; i++) {
//         var currentNumber = arr[i];
//         result += currentNumber;
//     }

//     return result;
// };


// function saveScore() {
//     // Save related form data as an object
//     var highScore = {
//         user: userName,
//         grade: grade.value,
//         comment: comment.value.trim()
//     };
//     // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//     localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// }

