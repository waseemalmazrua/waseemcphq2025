// Array of 100 Questions, Options, Correct Answers, and Rationales
const questions = [
    {
        question: "What is the primary goal of healthcare quality improvement?",
        options: [
            "A. Increase staff workload",
            "B. Enhance patient outcomes",
            "C. Reduce patient length of stay",
            "D. Increase administrative efficiency"
        ],
        correct: 1,
        rationale: "The primary goal of healthcare quality improvement is to enhance patient outcomes by improving processes and care delivery."
    },
    {
        question: "Which tool is used for root cause analysis in healthcare?",
        options: [
            "A. Fishbone diagram",
            "B. Gantt chart",
            "C. Pareto chart",
            "D. Scatter plot"
        ],
        correct: 0,
        rationale: "The fishbone diagram (Ishikawa diagram) is a common tool used to identify root causes in quality improvement projects."
    },
    // Add more questions here following the same format...
];

// Load Questions into the Page
const quizContainer = document.getElementById("quiz-container");

questions.forEach((q, index) => {
    const questionCard = document.createElement("div");
    questionCard.className = "question-card";

    questionCard.innerHTML = `
        <h3>${index + 1}. ${q.question}</h3>
        ${q.options.map((option, i) => `
            <label>
                <input type="radio" name="q${index}" value="${i}"> ${option}
            </label><br>
        `).join('')}
        <p id="rationale-${index}" class="hidden rationale">
            <strong>Rationale:</strong> ${q.rationale}
        </p>
    `;

    quizContainer.appendChild(questionCard);
});

// Submit Logic
document.getElementById("submit-btn").addEventListener("click", () => {
    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const rationale = document.getElementById(`rationale-${index}`);

        if (selected) {
            if (parseInt(selected.value) === q.correct) {
                score++;
                rationale.style.color = "green";
                rationale.textContent = "Correct! " + q.rationale;
            } else {
                rationale.style.color = "red";
                rationale.textContent = "Wrong! " + q.rationale;
            }
        } else {
            rationale.style.color = "orange";
            rationale.textContent = "Not Answered! " + q.rationale;
        }

        rationale.classList.remove("hidden");
    });

    document.getElementById("results-container").innerHTML = `
        <h2>Your Score: ${score} / ${questions.length}</h2>
    `;
    document.getElementById("results-container").classList.remove("hidden");
});
