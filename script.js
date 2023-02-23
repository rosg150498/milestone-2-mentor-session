// https://opentdb.com/api.php?amount=10&category=16&type=multiple

const _question = document.getElementById('quiz-question');

const _options = document.querySelector('.selected-answer');

async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=1&category=16&type=multiple';
    const result = await fetch('${APIUrl}');
    const data = await result.json();
    // console.log(data.results[0]);
    showQuestions(data.results[0]);
}  

function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect.answers;
    let selectedanswer = incorrectAnswer;
    //selectedanswer.splice(Math.floor() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    console.log(selectedAnswer);
    console.log(correctAnswer);

    _question.innerHTML = '${data.question} <br> <span class="category">${data.category} </span>';
}



// loadQuestion();