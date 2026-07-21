const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const res = await response.json();

        result.innerText = res.message;

        if(res.success){
            form.reset();
        }

    } catch (err) {

        result.innerText = "Something went wrong.";

    }

});