// Apparition au scroll
const sections = document.querySelectorAll('section');

const options = { threshold: 0.1 };

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    revealOnScroll.observe(section);
});

// Lightbox pour la galerie
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);

            const img = document.createElement('img');
            img.src = image.src;
            lightbox.appendChild(img);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });

    // Transition douce entre les pages
    const links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });

    // Slider tactile spécialités
    const slider = document.getElementById("slider");
    if (slider) {
        let scrollAmount = 0;
        function autoScrollSlider() {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
                scrollAmount = 0;
            } else {
                scrollAmount += 270;
                slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
            }
        }
        setInterval(autoScrollSlider, 4000);
    }

    // Carrousel infini (clone pour tourner en boucle si utilisé)
    const track = document.querySelector(".carousel-track");
    if (track) {
        const clone = track.innerHTML;
        track.innerHTML += clone;
    }
});

// Fade-in au chargement
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});