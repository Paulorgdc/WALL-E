document.getElementById("loginForm").onsubmit = function (event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Pega os valores dos campos
    const matricula = document.getElementById("matricula").value;
    const senha = document.getElementById("senha").value;

   

    // Aqui você pode adicionar outras validações, como verificar tamanho mínimo da senha

    // Redireciona para a página principal
    window.location.href = "pagina-principal-aluno.html";
};
