const questions = [];

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random question
function generateQuestion() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operator = ['+', '-', '×', '÷'][getRandomInt(0, 3)];
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '×':
      correctAnswer = num1 * num2;
      break;
    case '÷':
      correctAnswer = num1 * num2; // Just for simplicity, division may not always result in an integer
      break;
  }
  return {
    question: `What is ${num1} ${operator} ${num2}?`,
    answers: [
      { text: String(correctAnswer), correct: true },
      { text: String(getRandomInt(1, 20)), correct: false },
      { text: String(getRandomInt(1, 20)), correct: false },
      { text: String(getRandomInt(1, 20)), correct: false }
    ]
  };
}

// Generate 300 questions
const numberOfQuestions = 300;
for (let i = 0; i < numberOfQuestions; i++) {
  questions.push(generateQuestion());
}

console.log(questions);
