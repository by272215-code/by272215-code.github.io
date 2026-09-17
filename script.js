// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// Mobile menu link click ke baad close

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// CONTACT FORM - FORMSPREE
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");

        // Button ko temporarily disable karna
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                alert("Thank you! Your message has been sent successfully.");

                contactForm.reset();

                submitButton.disabled = false;
                submitButton.textContent = "Send Message →";

            } else {

                alert("Sorry, your message could not be sent. Please try again.");

                submitButton.disabled = false;
                submitButton.textContent = "Send Message →";
            }

        } catch (error) {

            alert("Something went wrong. Please try again.");

            submitButton.disabled = false;
            submitButton.textContent = "Send Message →";
        }

    });

}
