let slideIndex = 0;
let slideTimer; // Store the timeout ID for the automatic slider

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slideTimer = setTimeout(showSlides, 5000); // Set the timer for the next slide
}

function plusSlides(n) {
    clearTimeout(slideTimer); // Clear the existing timer
    slideIndex += n - 1; // Adjust index for manual navigation
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName("mySlides").length - 1;
    }
    showSlides(); // Update the slides and restart the timer
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Start the slider
showSlides();

document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav-links li a');
    const activeClass = 'active';

    // Set the initial active link (Home)
    navLinks[0].classList.add(activeClass);

    // Add click event to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove(activeClass));
            // Add active class to the clicked link
            link.classList.add(activeClass);
        });
    });
});

