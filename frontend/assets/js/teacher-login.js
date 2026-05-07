document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault();

    const teacherId = document.getElementById("cpf").value;
    const password = document.getElementById("senha").value;

    if (teacherId.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    window.location.href = "/teacher/dashboard";
}