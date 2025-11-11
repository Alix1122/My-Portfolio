const title = document.getElementById("typing-title");
const headerContent = document.getElementById("hero");

function startAnimation() {
    // Réinitialiser l'animation
    title.classList.remove("typing-animation");
    title.style.width = "0";
    title.style.borderRightColor = "#20c997";

    // Forcer le reflow
    void title.offsetWidth;

    // Relancer l'animation
    title.classList.add("typing-animation");
}

// Démarrer l'animation au chargement de la page
document.addEventListener("DOMContentLoaded", startAnimation);

// Observer la visibilité de la section
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Si la section devient visible, relancer l'animation
                setTimeout(startAnimation, 500);
            }
        });
    },
    {
        threshold: 0.5, // Déclenche quand 50% de la section est visible
    }
);

observer.observe(headerContent);

document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les éléments
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    // Sélectionner TOUTES les images dans les items
    const allImages = document.querySelectorAll(".item1 img");

    // Ajouter l'événement click à CHAQUE image
    allImages.forEach(function (image) {
        image.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Fermer la modale
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fermer en cliquant en dehors de l'image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});

/* ============================================================================== */

// SUPPRIMEZ TOUS LES AUTRES CODES JAVASCRIPT
// ET UTILISEZ SEULEMENT CELUI-CI :

// Attendre que la page soit complètement chargée
window.onload = function () {
    console.log("Page chargée - initialisation du menu burger");

    // Récupérer les éléments
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");

    console.log("Burger trouvé:", burger);
    console.log("NavLinks trouvé:", navLinks);

    // Vérifier que les éléments existent
    if (!burger) {
        console.error("ERROR: Burger element not found!");
        return;
    }
    if (!navLinks) {
        console.error("ERROR: NavLinks element not found!");
        return;
    }

    // Fonction pour toggle le menu
    function toggleMenu() {
        console.log("Toggle menu called");
        navLinks.classList.toggle("active");
        burger.classList.toggle("active");
    }

    // Ajouter l'événement click
    burger.addEventListener("click", function (event) {
        event.stopPropagation(); // Empêcher la propagation
        toggleMenu();
    });

    // Fermer le menu en cliquant sur les liens
    const links = navLinks.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            navLinks.classList.remove("active");
            burger.classList.remove("active");
        });
    }

    // Fermer le menu en cliquant en dehors
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".navbar") && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            burger.classList.remove("active");
        }
    });

    console.log("Menu burger initialisé avec succès!");
};
