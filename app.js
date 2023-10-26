(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Replace with the actual endpoint URL where you want to handle form submissions.
        const endpointUrl = 'https://your-server.com/submit';

        fetch(endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObject),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Form submitted successfully!');
                } else {
                    alert('Form submission failed.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });


