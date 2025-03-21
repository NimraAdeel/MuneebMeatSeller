document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.getAttribute("data-product");
            cart.push(product);
            alert(`${product} added to cart!`);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Add to Cart functionality
    const cart = [];
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.getAttribute("data-product");
            cart.push(product);
            alert(`${product} added to cart!`);
        });
    });

    // Order Form Submission
    document.getElementById("orderForm")?.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;

        if (name && phone && address && product && quantity) {
            alert(`Thank you, ${name}! Your order for ${quantity} KG of ${product} has been placed.`);
        } else {
            alert("Please fill in all the required fields.");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Contact Form Submission
    document.getElementById("contactForm")?.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
        } else {
            alert("Please fill in all the required fields.");
        }
    });
});
