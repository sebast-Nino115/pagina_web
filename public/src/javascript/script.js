document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const captions = document.querySelectorAll(".caption");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const progressBar = document.querySelector(".progress-bar");
    const timerCells = document.querySelectorAll(".timer-cell");
    const highlightCards = document.querySelectorAll(".highlight-card");
    const intervalTime = 4000; // 4 segundos
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
        document.querySelector(".carousel-container").style.transform = `translateX(-${currentIndex * 100}%)`;
        captions.forEach((caption, index) => {
            if (index === currentIndex) {
                caption.classList.add("active");
                timerCells[index].style.opacity = 1;
            } else {
                caption.classList.remove("active");
                timerCells[index].style.opacity = 0.5;
            }
        });
    }

    function startCarousel() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, intervalTime);
    }

    function resetInterval() {
        clearInterval(interval);
        startCarousel();
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
        resetInterval();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
        resetInterval();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
            resetInterval();
        } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
            resetInterval();
        }
    });

    highlightCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.classList.add("flipped");
        });

        card.addEventListener("mouseout", () => {
            card.classList.remove("flipped");
        });
    });

    startCarousel();
    updateCarousel();
});
