document.getElementById("loginForm").onsubmit = function (event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Pega os valores dos campos
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    // Valida se os campos estão preenchidos
    if (cpf.trim() === "" || senha.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar outras validações, como verificar o formato do CPF

    // Redireciona para a página do professor
    window.location.href = "pagina-principal-professor.html";
}