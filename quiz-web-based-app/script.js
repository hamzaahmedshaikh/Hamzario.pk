var questions = [
  {
    q: "Which keyword lets you reassign a variable?",
    a: ["const", "let", "var", "static"],
    c: 1,
  },
  {
    q: "Which method gets an element by ID?",
    a: [
      "getElementByClass",
      "querySelector",
      "getElementById",
      "getElementsByTagName",
    ],
    c: 2,
  },
  {
    q: "What does onclick do?",
    a: ["Changes color", "Adds click event", "Hides element", "Creates button"],
    c: 1,
  },
  {
    q: "What is the difference between innerHTML and innerText?",
    a: [
        "innerHTML reads/writes HTML tags, innerText shows only visible text",
        "innerText can parse scripts but innerHTML cannot",
        "innerHTML automatically escapes all characters while innerText does not",
        "innerText updates only CSS properties, not content"
    ],
    c: 1
}

];

var index = 0;
var score = 0;

var ques = document.getElementById("question");
var btns = document.getElementById("answer-buttons");
var next = document.getElementById("next-btn");
var results = document.getElementById("results");
var scoreBox = document.getElementById("score");

function showQuestion() {
  btns.innerHTML = "";
  var current = questions[index];
  ques.innerHTML = current.q;

  for (var i = 0; i < current.a.length; i++) {
    var b = document.createElement("button");
    b.innerHTML = current.a[i];
    b.className = "btn";
    b.setAttribute("data-index", i);

    b.onclick = function () {
      checkAnswer(this);
    };

    btns.appendChild(b);
  }
}

function checkAnswer(btn) {
  var userChoice = btn.getAttribute("data-index");
  var correct = questions[index].c;

  if (userChoice == correct) {
    score++;
  }

  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-container").style.display = "none";
  results.classList.remove("hide");
  scoreBox.innerHTML = "Your score: " + score + " out of " + questions.length;
}

showQuestion();