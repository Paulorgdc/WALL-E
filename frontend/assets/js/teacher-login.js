/**
 * @fileoverview Teacher Login Module
 * Handles educator portal login form submissions.
 */

const teacherLoginForm = document.getElementById("loginForm");

if (teacherLoginForm) {
  teacherLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const cpfInput = document.getElementById("cpf");
    const passwordInput = document.getElementById("senha");

    const teacherCpf = cpfInput ? cpfInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";

    if (!teacherCpf || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    window.location.href = "/teacher/dashboard";
  });
}