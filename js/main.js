document.addEventListener("DOMContentLoaded", function () {
 
    const toggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");
    const navLinks = document.querySelectorAll(".nav-item.nav-link");

    if (toggler && navbarCollapse) {
        toggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        });
    });


    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (cookieBanner && acceptBtn && declineBtn) {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        const cookiesDeclined = localStorage.getItem("cookiesDeclined");

        if (!cookiesAccepted && !cookiesDeclined) {
            cookieBanner.style.display = "flex";
        }

        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.style.display = "none";
        });

        declineBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesDeclined", "true");
            cookieBanner.style.display = "none";
        });
    }
});
