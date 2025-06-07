const quizData = [
  {
    question: "Which device operates at Layer 3 of the OSI model?",
    options: ["Switch", "Router", "Hub", "Repeater"],
    answer: "Router"
  },
  {
    question: "What protocol is used to translate domain names into IP addresses?",
    options: ["DHCP", "FTP", "DNS", "SSH"],
    answer: "DNS"
  },
  {
    question: "Which of the following uses port 443 by default?",
    options: ["HTTP", "FTP", "HTTPS", "Telnet"],
    answer: "HTTPS"
  },
  {
    question: "Which topology requires a central device?",
    options: ["Bus", "Ring", "Mesh", "Star"],
    answer: "Star"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(button, currentQuestion.answer);
    optionsContainer.appendChild(button);
  });

  nextButton.style.display = "none";
}

function selectAnswer(button, correctAnswer) {
  const allButtons = optionsContainer.querySelectorAll("button");

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = "#16a34a"; // green
    } else {
      btn.style.backgroundColor = "#dc2626"; // red
    }
  });

  if (button.textContent === correctAnswer) {
    score++;
  }

  nextButton.style.display = "block";
}

function showScore() {
  questionElement.textContent = "Quiz Completed!";
  optionsContainer.innerHTML = "";
  nextButton.style.display = "none";
  scoreDisplay.textContent = `Your Score: ${score} / ${quizData.length}`;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
});

showQuestion();
