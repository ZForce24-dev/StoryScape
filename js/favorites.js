const favorites =
JSON.parse(
    localStorage.getItem("storyscapeFavorites")
) || [];

const favoritesContainer =
document.getElementById("favorites-container");

function displayFavorites() {

    favoritesContainer.innerHTML = "";

    if (favorites.length === 0) {

        favoritesContainer.innerHTML = `
            <div class="empty-favorites">
                <h2>No favorites yet</h2>

                <p>
                    Start exploring StoryScape and save your favorite
                    books, movies, shows, anime, and games here.
                </p>

                <a href="library.html" class="results-btn">
                    Browse Library
                </a>
            </div>
        `;

        return;
    }
    favorites.forEach(item => {

        const card =
        document.createElement("div");

        card.classList.add("favorite-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">

            <h3>${item.title}</h3>

            <p>${item.media}</p>

            <p>${item.description}</p>

            <button class="btn-small learn-more-btn">
                Learn More
            </button>

            <button class="remove-favorite-btn">
                Remove
            </button>
        `;

        card.querySelector(".learn-more-btn")
        .addEventListener("click", () => {

            localStorage.setItem(
                "selectedRecommendation",
                JSON.stringify(item)
            );

            window.location.href =
                "recommendation.html";

        });

        card.querySelector(".remove-favorite-btn")
        .addEventListener("click", () => {

            const updatedFavorites =
            favorites.filter(
                favorite => favorite.title !== item.title
            );

            localStorage.setItem(
                "storyscapeFavorites",
                JSON.stringify(updatedFavorites)
            );

            location.reload();

        });

        favoritesContainer.appendChild(card);

    });

}

displayFavorites();