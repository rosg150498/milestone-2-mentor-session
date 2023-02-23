const question = document.getElementById('quiz-question');

const choices = Array.from(document.getElementsByClassName('selected-answer'));

const score = document .getElementById('quiz-score');

let currentQuestion = {};

let acceptingAnswers = false;

let score = 0;

let questionsmanager = 0;

let availablequestions = [];

let questions = [];


fetch('questions.json')
.then((res) => {
    return res.json();
})

.then((loadedQuestions) => {
    questions = loadedQuestions;
    startGame();
})

.catch((err) => {
    console.error(err);
});



