const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers:[
            {text: "Vatican City", correct: false},
            {text: "Bhutan", correct: true},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false}
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers:[
            {text: "Kalhari", correct: false},
            {text: "Gobi ", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true}
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const ansBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion()
{
    let currentQuestion = questions[current]
}