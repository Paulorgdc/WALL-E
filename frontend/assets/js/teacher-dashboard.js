/**
 * @fileoverview Teacher Dashboard Module
 * Manages class rosters and student performance metrics modal views.
 */

const mockStudentRegistry = {
  "1º Semestre - A": [
    { name: "Ana Clara", id: "202312345", performance: "85%" },
    { name: "João Pedro", id: "202312346", performance: "90%" },
    { name: "Maria Silva", id: "202312347", performance: "78%" },
  ],
  "3º Semestre - B": [
    { name: "Paulo Ricardo", id: "202212345", performance: "88%" },
    { name: "Carla Souza", id: "202212346", performance: "95%" },
  ],
  "5º Semestre - C": [
    { name: "Lucas Almeida", id: "202112345", performance: "92%" },
    { name: "Fernanda Lima", id: "202112346", performance: "89%" },
  ],
};

/**
 * Displays student performance modal for selected class section.
 * @param {string} className 
 */
function showStudents(className) {
  const modalContainer = document.getElementById("student-modal");
  const modalClassTitle = document.getElementById("class-name");
  const studentTableBody = document.getElementById("student-list");

  if (!modalContainer || !studentTableBody || !mockStudentRegistry[className]) return;

  if (modalClassTitle) {
    modalClassTitle.textContent = className;
  }

  studentTableBody.innerHTML = mockStudentRegistry[className]
    .map(
      (student) => `
    <tr>
      <td>${student.name}</td>
      <td>${student.id}</td>
      <td>${student.performance}</td>
    </tr>
  `
    )
    .join("");

  modalContainer.style.display = "flex";
}

/**
 * Closes the active student performance modal window.
 */
function closeModal() {
  const modalContainer = document.getElementById("student-modal");
  if (modalContainer) {
    modalContainer.style.display = "none";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

window.addEventListener("click", (event) => {
  const modalContainer = document.getElementById("student-modal");
  if (event.target === modalContainer) closeModal();
});