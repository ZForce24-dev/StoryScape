document
.querySelectorAll(".home-learn-more")
.forEach(button => {

    button.addEventListener("click", () => {

        const title =
        button.dataset.title;

        const recommendation =
        recommendations.find(
            item => item.title === title
        );

        if (recommendation) {

            localStorage.setItem(
                "selectedRecommendation",
                JSON.stringify(recommendation)
            );

            window.location.href =
                "recommendation.html";
        }

    });

});
