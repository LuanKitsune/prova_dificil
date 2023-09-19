document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === "Login bem-sucedido") {
                alert("Login bem-sucedido!");
                window.location.href = "home.html";
            } else {
                document.getElementById("error-message").textContent =
                    "Credenciais inválidas. Tente novamente.";
            }
        })
        .catch((error) => {
            console.error("Erro:", error);
        });
});
