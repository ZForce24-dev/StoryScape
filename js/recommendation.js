const recommendation =
JSON.parse(
    localStorage.getItem(
        "selectedRecommendation"
    )
);

const backButton =
document.getElementById("back-btn");

const userAnswers =
JSON.parse(
    localStorage.getItem("storyscapeAnswers")
);

if (!userAnswers) {

    backButton.textContent =
        "Fill Out Questionnaire";

    backButton.href =
        "questionnaire.html";
}

document.getElementById(
    "recommendation-title"
).textContent =
recommendation.title;

document.getElementById(
    "recommendation-media"
).textContent =
recommendation.media;

document.getElementById(
    "recommendation-description"
).textContent =
recommendation.longDescription ||
recommendation.description;

document.getElementById(
    "recommendation-image"
).src =
recommendation.image;

const tagsContainer =
document.getElementById("recommendation-tags");
tagsContainer.innerHTML = "";
recommendation.tags.forEach(tagText => {

    const tag =
    document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = tagText;
    tagsContainer.appendChild(tag);
});

const allRecommendations =
JSON.parse(
    localStorage.getItem("allRecommendations")
) || recommendations;

const similarRow =
document.getElementById("similar-row");

const similarRecommendations =
allRecommendations
    .filter(item => item.title !== recommendation.title)
    .map(item => {
        let score = 0;
        item.tags.forEach(tag => {
            if (recommendation.tags.includes(tag)) {
                score++;
            }
        });
        return {
            ...item,
            score: score
        };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
similarRow.innerHTML = "";
similarRecommendations.forEach(item => {

    const card =
    document.createElement("div");
    card.classList.add("similar-card");
    card.innerHTML = `
        <img
            class="similar-image"
            src="${item.image}"
            alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.media}</p>
        <p>${item.description}</p>
        <button class="results-btn">
            Learn More
        </button>
    `;
    card.querySelector("button")
    .addEventListener("click", () => {
        localStorage.setItem(
            "selectedRecommendation",
            JSON.stringify(item)
        );
        window.location.href =
            "recommendation.html";
    });
    similarRow.appendChild(card);
});

const favoriteBtn =
document.getElementById("favorite-btn");

function updateFavoriteButton() {

    let favorites =
    JSON.parse(
        localStorage.getItem("storyscapeFavorites")
    ) || [];

    const alreadyFavorited =
    favorites.some(
        item => item.title === recommendation.title
    );

    favoriteBtn.textContent =
        alreadyFavorited
        ? "★ Favorited"
        : "☆ Add to Favorites";

}

updateFavoriteButton();

favoriteBtn.addEventListener("click", () => {

    let favorites =
    JSON.parse(
        localStorage.getItem("storyscapeFavorites")
    ) || [];

    const alreadyFavorited =
    favorites.some(
        item => item.title === recommendation.title
    );

    if (alreadyFavorited) {

        favorites =
        favorites.filter(
            item => item.title !== recommendation.title
        );

    } else {

        favorites.push(recommendation);

    }

    localStorage.setItem(
        "storyscapeFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteButton();

});
