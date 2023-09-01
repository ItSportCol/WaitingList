document.addEventListener("DOMContentLoaded", () => {
    const waitlistForm = document.getElementById("waitlist-form");

    waitlistForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        saveToServer(name, email);
    });

    function saveToServer(name, email) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "save.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                alert("Te has unido a la lista de espera.");
                waitlistForm.reset();
            }
        };
        xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
    }
});
