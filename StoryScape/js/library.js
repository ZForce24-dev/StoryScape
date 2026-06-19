const libraryContainer =
document.getElementById("library-container");

function displayRecommendations(items) {

    libraryContainer.innerHTML = "";

    items.forEach(item => {

        const card =
        document.createElement("div");

        card.classList.add("library-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.media}</p>
            <p>${item.description}</p>
            <button class="library-btn">
                Learn More
            </button>
        `;

        card.querySelector(".library-btn")
        .addEventListener("click", () => {

            localStorage.setItem(
                "selectedRecommendation",
                JSON.stringify(item)
            );

            window.location.href =
                "recommendation.html";

        });

        libraryContainer.appendChild(card);

    });

}

displayRecommendations(recommendations);
document
.querySelectorAll(".filter-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        const category =
        button.dataset.category;

        document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

button.classList.add("active");

        if (category === "all") {

            displayRecommendations(recommendations);

        } else {

            const filteredRecommendations =
            recommendations.filter(item => {

                return item.media === category;

            });

            displayRecommendations(filteredRecommendations);

        }

    });

});

const searchInput =
document.getElementById("library-search");

searchInput.addEventListener("input", () => {

    const searchTerm =
    searchInput.value.toLowerCase();

    const filteredRecommendations =
    recommendations.filter(item => {

        return item.title
            .toLowerCase()
            .includes(searchTerm);

    });

    displayRecommendations(filteredRecommendations);

});

const urlParams =
new URLSearchParams(window.location.search);

const selectedCategory =
urlParams.get("category");

if (selectedCategory) {

    const filteredRecommendations =
    recommendations.filter(item => {
        return item.media === selectedCategory;
    });

    displayRecommendations(filteredRecommendations);

    const matchingButton =
    document.querySelector(
        `[data-category="${selectedCategory}"]`
    );

    if (matchingButton) {

        document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

        matchingButton.classList.add("active");

    }

}