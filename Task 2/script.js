const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "High Tech Machine Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Python", "SQL"],
        answer: 1
    },
    {
        question: "Which language makes web pages interactive?",
        options: ["JavaScript", "CSS", "XML", "Python"],
        answer: 0
    },
    {
        question: "Which HTML tag is used to create a link?",
        options: ["link", "href", "url", "a"],
        answer: 3
    },
    {
        question: "Which CSS property changes text color?",
        options: ["font-color", "text-style", "color", "background-color"],
        answer: 2
    }
];

const quiz = document.getElementById("quiz");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const options = document.getElementById("options");
const message = document.getElementById("message");
const nextBtn = document.getElementById("next-btn");

const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const feedback = document.getElementById("feedback");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let q = questions[currentQuestion];

    questionNumber.textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionText.textContent = q.question;
    options.innerHTML = "";

    for (let i = 0; i < q.options.length; i++) {
        options.innerHTML += `
            <label class="option">
                <input type="radio" name="answer" value="${i}">
                ${q.options[i]}
            </label>
        `;
    }

    message.textContent = "";

    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = "Submit Quiz";
    } else {
        nextBtn.textContent = "Next Question";
    }
}

nextBtn.addEventListener("click", function () {

    const selected = document.querySelector(
        'input[name="answer"]:checked'
    );
    if (!selected) {
        message.textContent = "Please select an answer!";
        return;
    }
    if (Number(selected.value) === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");

    scoreEl.textContent = score + "/" + questions.length;

    if (score >= 4) {
        feedback.textContent = "Great job! You really know your stuff!";
    } else if (score >= 3) {
        feedback.textContent = "Good effort! Keep practicing.";
    } else {
        feedback.textContent = "Keep learning and try again!";
    }
}

restartBtn.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;

    result.classList.add("hidden");
    quiz.classList.remove("hidden");
    showQuestion();
});

showQuestion();
