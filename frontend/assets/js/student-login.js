/**
 * @fileoverview Student Login Module
 * Handles student portal authentication routing.
 */

const studentLoginForm = document.getElementById("loginForm");

if (studentLoginForm) {
  studentLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentIdInput = document.getElementById("matricula");
    const passwordInput = document.getElementById("senha");

    const studentId = studentIdInput ? studentIdInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value : "";

    if (!studentId || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    window.location.href = "/student/dashboard";
  });
}