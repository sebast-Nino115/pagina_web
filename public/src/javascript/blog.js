document.addEventListener("DOMContentLoaded", () => {
    const blogCards = document.querySelectorAll(".blog-card");

    blogCards.forEach((card, index) => {
        card.addEventListener("mouseover", () => {
            clearActiveStates();
            card.classList.add("active");
            card.classList.remove("inactive");
        });

        card.addEventListener("mouseout", () => {
            card.classList.remove("active");
            card.classList.add("inactive");
        });
    });

    const clearActiveStates = () => {
        blogCards.forEach(card => {
            card.classList.add("inactive");
            card.classList.remove("active");
        });
    };

    clearActiveStates(); // Initial state
});
