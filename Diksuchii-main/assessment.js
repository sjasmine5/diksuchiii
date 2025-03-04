let currentQuestion = 0;

const questions = [
    {
        question: "Which type of work environment do you thrive in?",
        options: [
            "A fast-paced, high-energy environment",
            "A quiet, focused environment",
            "A collaborative team setting",
            "A structured, rule-based environment"
        ]
    },
    {
        question: "When solving a problem, do you prefer to:",
        options: [
            "Use logic and reasoning to find a solution",
            "Visualize the problem and imagine different outcomes",
            "Talk through the problem with others",
            "Reflect on the problem quietly"
        ]
    },
    {
        question: "You are required to move a joystick to hit a target on a screen as quickly and accurately as possible. How fast can you react and how precise are your movements?",
        options: [
            "Very fast and precise",
            "Moderately fast and precise",
            "Slow but accurate",
            "Slow and inaccurate"
        ]
    },
    {
        question: "How interested are you in the following activities?",
        options: [
            "Analyzing financial data",
            "Designing a new product",
            "Teaching a class",
            "Conducting scientific research"
        ]
    },
    {
        question: "How often do you continue to work on a difficult task even when you feel discouraged?",
        options: [
            "Very often",
            "Often",
            "Sometimes",
            "Rarely"
        ]
    },
    {
        question: "Do you enjoy working with machines and tools?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        question: "You notice a colleague is unusually quiet and withdrawn. What do you do?",
        options: [
            "Ignore it; they might just be having a bad day.",
            "Ask them if something is wrong and if you can help.",
            "Keep an eye on them and decide later if you need to intervene."
        ]
    }
];

function loadQuestion() {
    const questionText = document.getElementById('question');
    const optionsContainer = document.querySelector('.options');
    
    // Load current question
    questionText.textContent = questions[currentQuestion].question;
    
    // Clear existing options
    optionsContainer.innerHTML = '';
    
    // Load new options
    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.onclick = nextQuestion;
        optionsContainer.appendChild(button);
    });
    
    updateProgressBar();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        endAssessment();
    }
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

function endAssessment() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `<h2>Thank you for completing the assessment!</h2>`;
    
    // Create a button to redirect to mentor page
    const mentorButton = document.createElement('button');
    mentorButton.textContent = 'Your Mentor';
    mentorButton.classList.add('blue-button'); // Add the blue-button class
    
    // Add a link to the button
    const mentorLink = document.createElement('a');
    mentorLink.href = 'mentor.html';
    mentorLink.appendChild(mentorButton);
    
    // Append the link to the question container
    questionContainer.appendChild(mentorLink);
    
    document.getElementById('nextButton').style.display = 'none';
}


// Ensure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
