
// Demo contact form validation

const demoForm = document.getElementById("contact-form");
const demoMessage = document.getElementById("form-message");

if (demoForm && demoMessage) {

    demoForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!demoForm.checkValidity()) {
            demoForm.reportValidity();
            return;
        }

        demoMessage.textContent =
            "This is a demo website. The form is not connected to a real enquiry system.";

        demoMessage.style.color = "#b47c28";

        demoForm.reset();

    });

}


// Automatically update copyright year

document.querySelectorAll(".year").forEach(element => {
    element.textContent = new Date().getFullYear();
});
