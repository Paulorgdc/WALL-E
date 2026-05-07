document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault();

    const studentId = document.getElementById("matricula").value;
    const password = document.getElementById("senha").value;

    window.location.href = "../../template/student/login.html";
};
