const userAnswerObject =
JSON.parse(localStorage.getItem("storyscapeAnswers"));
const answerValues =
Object.values(userAnswerObject);

recommendations.forEach(item => {

    item.score = 0;

    if (userAnswerObject.media !== "No Preference" && item.media === userAnswerObject.media) {item.score += 5;}
    if (userAnswerObject.genre !== "No Preference" && item.tags.includes(userAnswerObject.genre)) {item.score += 4;}
    if (userAnswerObject.format !== "No Preference" && item.tags.includes(userAnswerObject.format)) {item.score += 4;}
    if (userAnswerObject.experience !== "No Preference" && item.tags.includes(userAnswerObject.experience)) {item.score += 3;}
    if (userAnswerObject.tone !== "No Preference" && item.tags.includes(userAnswerObject.tone)) {item.score += 2;}
    if (userAnswerObject.length !== "No Preference" && item.tags.includes(userAnswerObject.length)) {item.score += 1;}
});

const maxScore = 19;

recommendations.forEach(item => {
    item.matchPercentage =
    Math.round((item.score / maxScore) * 100);
});

recommendations.sort((a,b) => {
    return b.score - a.score;
});

const topMatch = recommendations[0];
const secondMatch = recommendations[1];
const thirdMatch = recommendations[2];

document.getElementById("top-title").textContent = topMatch.title;
document.getElementById("top-description").textContent = topMatch.description;
document.getElementById("top-media").textContent = topMatch.media;
document.getElementById("top-image").src = topMatch.image;
document.getElementById("second-title").textContent = secondMatch.title;
document.getElementById("third-title").textContent = thirdMatch.title;
document.getElementById("second-media").textContent =
    secondMatch.media;
document.getElementById("third-media").textContent =
    thirdMatch.media;
document.getElementById("second-image").src = secondMatch.image;
document.getElementById("third-image").src = thirdMatch.image;
document.getElementById("second-description").textContent =
    secondMatch.description;
document.getElementById("third-description").textContent =
    thirdMatch.description;
document.getElementById("top-match-percent").textContent =
    topMatch.matchPercentage + "% Match";

document.getElementById("second-match-percent").textContent =
    secondMatch.matchPercentage + "% Match";

document.getElementById("third-match-percent").textContent =
    thirdMatch.matchPercentage + "% Match";
const userPreferencesContainer =
document.getElementById("user-preferences");
userPreferencesContainer.innerHTML = "";
answerValues.forEach(answer => {
    if (answer === "No Preference") {
        return;
    }
    const tag =
    document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = answer;
    userPreferencesContainer.appendChild(tag);
});

recommendations.forEach(item => {

    item.matchPercentage =
    Math.round(
        (item.score / maxScore) * 100
    );

});

document.getElementById("top-learn-more")
.addEventListener("click", () => {
    localStorage.setItem(
        "selectedRecommendation",
        JSON.stringify(topMatch)
    );
    window.location.href =
        "recommendation.html";
});
document.getElementById("second-learn-more")
.addEventListener("click", () => {
    localStorage.setItem(
        "selectedRecommendation",
        JSON.stringify(secondMatch)
    );
    window.location.href =
        "recommendation.html";
});
document.getElementById("third-learn-more")
.addEventListener("click", () => {
    localStorage.setItem(
        "selectedRecommendation",
        JSON.stringify(thirdMatch)
    );
    window.location.href =
        "recommendation.html";
});
localStorage.setItem(
    "allRecommendations",
    JSON.stringify(recommendations)
);

