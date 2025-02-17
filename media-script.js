document.addEventListener("DOMContentLoaded", function () {
    // Initialize each slider-container
    document.querySelectorAll(".slider-container").forEach((container) => {
        let slider = container.querySelector(".slider");
        let slides = container.querySelectorAll(".slide");
        let prevButton = container.querySelector(".prev");
        let nextButton = container.querySelector(".next");
        let currentIndex = 0;
        let modalId = container.getAttribute("data-modal");

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        });

        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        });

        slides.forEach((slide, slideIndex) => {
            slide.addEventListener("click", function () {
                openModal(slideIndex, modalId);
            });
        });
    });
});

function openModal(index, modalId) {
    let modal = document.getElementById(modalId);
    if (!modal) return;

    let modalSlider = modal.querySelector(".modal-slider");
    let modalSlides = modal.querySelectorAll(".modal-slide");
    let currentIndex = index;

    // Show modal
    modal.style.display = "flex";
    updateModalSlider();

    // Function to update the modal slider
    function updateModalSlider() {
        modalSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Modal navigation buttons for the current modal
    let modalNext = modal.querySelector(".modal-next");
    let modalPrev = modal.querySelector(".modal-prev");
    let modalClose = modal.querySelector(".modal-close");
    modalClose.classList.add("show");

    // Show the navigation arrows
    modalNext.style.display = "block";
    modalPrev.style.display = "block";

    modalNext.onclick = function () {
        currentIndex = (currentIndex + 1) % modalSlides.length;
        updateModalSlider();
    };

    modalPrev.onclick = function () {
        currentIndex = (currentIndex - 1 + modalSlides.length) % modalSlides.length;
        updateModalSlider();
    };

    modalClose.onclick = function () {
        modal.style.display = "none";
        hideNavigationArrows();
    };

    // Close modal if the user clicks outside the modal content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            hideNavigationArrows();
        }
    });

    // Hide navigation arrows
    function hideNavigationArrows() {
        modalNext.style.display = "none";
        modalPrev.style.display = "none";
    }
}
