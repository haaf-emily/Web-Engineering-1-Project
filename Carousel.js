let slideIndexes = [0, 0, 0];
let slideContainers = document.getElementsByClassName("slideshow-container");

const breakpoints = [
    window.matchMedia('(max-width: 600px)'),  // Small screens (phones)
    window.matchMedia('(max-width: 900px)'),  // Medium screens (tablets)
    window.matchMedia('(max-width: 1200px)'), // Large screens (laptops)
    window.matchMedia('(min-width: 1201px)')  // Extra large screens (desktops)
];

for (let i = 0; i < slideContainers.length; i++) {
    showSlides(i, slideIndexes[i]);
    breakpoints.forEach(bp => bp.addListener(() => showSlides(i, slideIndexes[i]))); // Re-apply on resize
}

// Next/previous controls
function plusSlides(n, button) {
    let containerIndex = getButtonContainerIndex(button);
    showSlides(containerIndex, slideIndexes[containerIndex] += n);
}

// Thumbnail image controls
function currentSlide(n, button) {
    let containerIndex = getButtonContainerIndex(button);
    showSlides(containerIndex, slideIndexes[containerIndex] = n);
}

function showSlides(containerIndex, slideIndex) {
    let slides = slideContainers[containerIndex].getElementsByClassName("mySlides");
    let slidesToShow = determineSlidesToShow();

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndexes[containerIndex] = (slideIndex + slides.length) % slides.length;

    let shownIndexes = []; // Add this line

    for (let j = 0; j < slidesToShow; j++) {
        let index = (slideIndexes[containerIndex] + j) % slides.length;
        if (shownIndexes.includes(index)) { // Add this line
            j--; // Try the next slide
            slideIndexes[containerIndex] = (slideIndexes[containerIndex] + 1) % slides.length; // Move the index forward
            continue; // Skip this iteration
        }
        slides[index].style.display = "block";
        shownIndexes.push(index); // Add this line
    }
}

function determineSlidesToShow() {
    if (breakpoints[0].matches) {
        return 1; // Small screens (phones)
    } else if (breakpoints[1].matches) {
        return 2; // Medium screens (tablets)
    } else if (breakpoints[2].matches) {
        return 3; // Large screens (laptops)
    } else {
        return 4; // Extra large screens (desktops)
    }
}

function getButtonContainerIndex(button) {
    let container = button.closest(".slideshow-container");
    return Array.prototype.indexOf.call(slideContainers, container);
}