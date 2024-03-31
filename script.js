const questionContainer = document.getElementById('question');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const statusText = document.getElementById('status');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.add('hide');
  statusText.innerText = '';
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtonsContainer.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer.correct));
    answerButtonsContainer.appendChild(button);
  });
}

function selectAnswer(correct) {
  if (correct) {
    score++;
    statusText.innerText = 'Correct!';
  } else {
    statusText.innerText = 'Incorrect!';
  }
  nextButton.classList.remove('hide');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    nextButton.classList.add('hide');
  } else {
    endGame();
  }
}

function endGame() {
  questionContainer.innerText = `Your score: ${score} out of ${questions.length}`;
  answerButtonsContainer.innerHTML = '';
  statusText.innerText = '';
}

startGame();
