const studentData = {
  "1º Semestre - A": [
    { name: "Ana Clara", matricula: "202312345", desempenho: "85%" },
    { name: "João Pedro", matricula: "202312346", desempenho: "90%" },
    { name: "Maria Silva", matricula: "202312347", desempenho: "78%" },
  ],
  "3º Semestre - B": [
    { name: "Paulo Ricardo", matricula: "202212345", desempenho: "88%" },
    { name: "Carla Souza", matricula: "202212346", desempenho: "95%" },
  ],
  "5º Semestre - C": [
    { name: "Lucas Almeida", matricula: "202112345", desempenho: "92%" },
    { name: "Fernanda Lima", matricula: "202112346", desempenho: "89%" },
  ],
};

// Função para exibir os estudantes da turma selecionada
function showStudents(className) {
  const modal = document.getElementById("student-modal");
  const classTitle = document.getElementById("class-name");
  const studentList = document.getElementById("student-list");

  // Atualiza o título com o nome da turma
  classTitle.textContent = className;

  // Preenche a lista de estudantes no modal
  studentList.innerHTML = studentData[className]
    .map(
      (student) => `
    <tr>
      <td>${student.name}</td>
      <td>${student.matricula}</td>
      <td>${student.desempenho}</td>
    </tr>
  `
    )
    .join("");

  // Exibe o modal
  modal.style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("student-modal");
  modal.style.display = "none";
}

// Adiciona evento para fechar o modal ao pressionar "Escape"
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Adiciona evento de clique fora do modal para fechá-lo
window.addEventListener("click", function (event) {
  const modal = document.getElementById("student-modal");
  const modalContent = document.querySelector(".modal-content");

  // Se o clique foi fora da caixa de conteúdo, fecha o modal
  if (event.target === modal) {
    closeModal();
  }
});
