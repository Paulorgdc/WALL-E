const studentData = {
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

function showStudents(className) {
  const modal = document.getElementById("student-modal");
  const classTitle = document.getElementById("class-name");
  const studentList = document.getElementById("student-list");

  classTitle.textContent = className;

  studentList.innerHTML = studentData[className]
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

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("student-modal");
  modal.style.display = "none";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("student-modal");
  if (event.target === modal) closeModal();
});