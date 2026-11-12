
document.addEventListener("DOMContentLoaded", function () {

    // =============================
    // PRELOADER
    // =============================

    const preloader = document.querySelector(".preloader");

    if (preloader) {
        window.addEventListener("load", function () {
            preloader.classList.add("hide");
        });
    }


    // =============================
    // MOBILE NAVIGATION
    // =============================

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("open");

            const isOpen = navbar.classList.contains("open");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });


        // Close mobile menu after clicking a link

        navbar.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

    }


    // =============================
    // SCROLL REVEAL ANIMATION
    // =============================

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // =============================
    // ACTIVE NAVIGATION
    // =============================

    const currentPage =
        window.location.pathname.split("/").pop().toLowerCase() || "index.html";

    document.querySelectorAll(".nav-link").forEach(function (link) {

        const href = link.getAttribute("href");

        if (!href) return;

        const linkPage = href.split("/").pop().toLowerCase();

        const isCurrentPage = linkPage === currentPage;

        link.classList.toggle("active", isCurrentPage);

        if (isCurrentPage) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }

    });


    // =============================
    // FOOTER YEAR
    // =============================

    const currentYear = new Date().getFullYear();

    document.querySelectorAll("#year, .year").forEach(function (element) {

        element.textContent = currentYear;

    });


    // =============================
    // DEMO CONTACT FORM
    // =============================

    const contactForm = document.getElementById("contact-form");

    const formMessage = document.getElementById("form-message");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;

            }

            formMessage.textContent =
                "This is a demo website. Your enquiry has not been sent because no form service is connected.";

            formMessage.style.color = "#b47c28";

            contactForm.reset();

        });

    }

});
