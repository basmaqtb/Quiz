var myQuestions = [
    {
        question: "Quel est l'équivalent anglais de 'chapeau' ?",
        answers: {
            a: 'Hat',
            b: 'Coat',
            c: 'Shoes',
            d: 'Shirt'
        },
        correctAnswer: 'a'
    },
    {
        question: "Quel est le synonyme de 'happy' ?",
        answers: {
            a: 'Sad',
            b: 'Joyful',
            c: 'Angry',
            d: 'Boring'
        },
        correctAnswer: 'b'
    }
]; 

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var progressContainer = document.getElementById('progress');

var currentQuestion = 0;
var numCorrect = 0;

function showQuestion() {
    var questionNumber = currentQuestion + 1;
    var progressPercentage = ((currentQuestion + 1) / myQuestions.length) * 100;

    var question = myQuestions[currentQuestion];
    var answersHTML = '';

    for (var letter in question.answers) {
        answersHTML += '<label class="answer">' +
            '<input type="radio" name="question' + currentQuestion + '" value="' + letter + '">' +
            ' ' +
            question.answers[letter] +
            '</label>';
    }

    // Concatenate all the HTML content
    var htmlContent = '<div class="questionNum">Question ' +
        questionNumber + ' out of ' +
        myQuestions.length + '</div>' +
        '<div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="' +
        progressPercentage + '" aria-valuemin="0" aria-valuemax="100">' +
        '<div class="progress-bar bg-success" style="width: ' + progressPercentage + '%"></div></div>' +
        '<div class="question">' + question.question + '</div>' +
        '<div class="answers">' + answersHTML + '</div>';

    // Set the HTML content to quizContainer
    quizContainer.innerHTML = htmlContent;
}

function showResults() {
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

submitButton.onclick = function () {
    var selectedOption = document.querySelector('input[name="question' + currentQuestion + '"]:checked');

    if (selectedOption) {
        if (selectedOption.value === myQuestions[currentQuestion].correctAnswer) {
            numCorrect++;
        }
        currentQuestion++;

        if (currentQuestion < myQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    } else {
        alert('Please select an answer!');
    }
};

// Show the first question when the page loads
showQuestion();
