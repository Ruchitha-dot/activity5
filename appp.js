
// Activity 5: JavaScript Basics and User Interaction

// 1. Reusable Toast Notification Function
function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #222;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-size: 16px;
        z-index: 9999;
        display: block;
    `;

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function () {
        toast.style.display = "none";
    }, 3000);
}


// 2. Smooth Scrolling for Book Buttons
document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const bookingForm = document.getElementById("booking");

            if (bookingForm) {
                event.preventDefault();

                bookingForm.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                showToast("Please fill in your booking details!");
            }

        });

    });

});
