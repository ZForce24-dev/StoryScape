const firstQuestion = {
    key: "media",
    question: "What type of media are you looking for?",
    answers: [
        "Books",
        "Movies & TV",
        "Video Games"
    ]
};

const questionSets = {
    "Video Games": [
        {
            key: "genre",
            question: "What video game genre are you interested in?",
            answers: ["RPG", "Shooter", "Survival", "Simulation", "Sports", "Horror", "Open World", "Sandbox", "Puzzle", "Roguelike", "Souls-like", "Strategy", "No Preference"]
        },
        {
            key: "experience",
            question: "What kind of game experience are you looking for?",
            answers: ["Base Building", "Crafting", "Multiplayer", "PvP", "Exploration", "Loot", "Story", "Co-Op", "No Preference"]
        },
        {
            key: "tone",
            question: "What tone are you looking for?",
            answers: ["Lighthearted", "Dark", "Emotional", "Inspirational", "Intense", "Relaxing", "No Preference"]
        },
        {
            key: "length",
            question: "How long of an experience do you want?",
            answers: ["Short", "Medium", "Long", "Very Long", "No Preference"]
        }
    ],

    "Books": [
        {
            key: "genre",
            question: "What book genre are you interested in?",
            answers: ["Romance", "Fantasy", "Sci-Fi", "Mystery & Thriller", "Historical Fiction", "Horror", "Action & Adventure", "Literary Fiction", "No Preference"]
        },
        {
            key: "format",
            question: "What book format are you interested in?",
            answers: ["Novels", "Comic Books", "Manga", "No Preference"]
        },
        {
            key: "experience",
            question: "What kind of reading experience are you looking for?",
            answers: ["Deep Story", "Character Development", "Worldbuilding", "Fast-Paced", "Emotional", "No Preference"]
        },
        {
            key: "tone",
            question: "What tone are you looking for?",
            answers: ["Lighthearted", "Dark", "Emotional", "Inspirational", "Intense", "Relaxing", "No Preference"]
        },
        {
            key: "length",
            question: "How long of an experience do you want?",
            answers: ["Short", "Medium", "Long", "Very Long", "No Preference"]
        }
    ],

    "Movies & TV": [
        {
            key: "format",
            question: "What format are you interested in?",
            answers: ["Live-Action Movies", "Live-Action TV", "Animated Movies", "Animated TV", "Anime", "No Preference"]
        },
        {
            key: "genre",
            question: "What screen genre are you interested in?",
            answers: ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Fantasy", "Mystery", "No Preference"]
        },
        {
            key: "tone",
            question: "What tone are you looking for?",
            answers: ["Lighthearted", "Dark", "Emotional", "Inspirational", "Intense", "Relaxing", "No Preference"]
        },
        {
            key: "experience",
            question: "What kind of viewing experience are you looking for?",
            answers: ["Deep Story", "Character Development", "Comedy", "Superheroes", "Space", "Mystery", "Emotional", "Adventure", "Worldbuilding", "Fast-Paced", "Inspirational", "No Preference"]
        },
        {
            key: "length",
            question: "How long of an experience do you want?",
            answers: ["Short", "Medium", "Long", "Very Long", "No Preference"]
        }
    ]
};
// Variables generated here
let userAnswerObject = {};



// Questions end here, continue with progress bar and other

const progressBar =
document.querySelector(".progress-bar");
let currentQuestion = 0;
let selectedMedia = "";
let activeQuestions = [firstQuestion];
let userAnswers = [];

const questionTitle =
document.getElementById("question-title");

const answersContainer =
document.getElementById("answers-container");

const progressText =
document.getElementById("progress-text");

function loadQuestion() {

    questionTitle.textContent =
        activeQuestions[currentQuestion].question;
	let totalQuestions;

    if (selectedMedia === "") {
        totalQuestions = 6;
    } else {
        totalQuestions = activeQuestions.length + 1;
    }

    const progress =
    ((currentQuestion + 1) / totalQuestions) * 100;

progressBar.style.width = progress + "%";

progressText.textContent =
    `Step ${currentQuestion + 1} of ${totalQuestions}`;

    answersContainer.innerHTML = "";

    activeQuestions[currentQuestion].answers.forEach(answer => {

    const button =
    document.createElement("button");

    button.textContent = answer;

    button.classList.add("answer-btn");

    // Restore previous selection
    if (userAnswers[currentQuestion] === answer) {
        button.classList.add("selected");
    }

    // Save answer when clicked
    button.addEventListener("click", () => {

        userAnswers[currentQuestion] = answer;

        const currentKey =
        activeQuestions[currentQuestion].key;

        userAnswerObject[currentKey] = answer;

        if (currentQuestion === 0) {
        selectedMedia = answer;
        activeQuestions = [firstQuestion, ...questionSets[selectedMedia]];
        userAnswers = [answer];
}

        document.querySelectorAll(".answer-btn").forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
    });

    answersContainer.appendChild(button);
});
}

loadQuestion();

document
.getElementById("next-btn")
.addEventListener("click", () => {

    if (!userAnswers[currentQuestion]) {

        alert("Please select an answer before continuing.");

        return;
    }

    if (currentQuestion < activeQuestions.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        showCompletionScreen();

    }

});

document
.getElementById("previous-btn")
.addEventListener("click", () => {

    if(currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();
    }

});

function showCompletionScreen() {

    questionTitle.textContent =
        "Questionnaire Complete!";

    answersContainer.innerHTML = `
		<p>
			Thank you for completing the StoryScape questionnaire.
			Click below to view your recommendations.
		</p>

		<br>

		<button id="results-btn" class="completion-btn">
			View My Results
		</button>
	`;

document.getElementById("results-btn")
.addEventListener("click", () => {
	
    localStorage.setItem(
        "storyscapeAnswers",
        JSON.stringify(userAnswerObject)
    );

    window.location.href = "results.html";

});

    document.querySelector(".navigation-buttons")
        .style.display = "none";

    progressBar.style.width = "100%";
}
