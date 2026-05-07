function validateCPF(cpfValue) {
    const cleanCPF = cpfValue.replace(/[^\d]+/g, ''); 
    if (cleanCPF.length !== 11) return false;
  
    if (/^(\d)\1+$/.test(cleanCPF)) return false;
  
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.charAt(9))) return false;
  
    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.charAt(10))) return false;
  
    return true;
}
  
document.getElementById('cpf').addEventListener('input', function () {
    const currentCPF = this.value;
    const messageElement = document.getElementById('cpf-mensagem');
  
    if (validateCPF(currentCPF)) {
        messageElement.textContent = 'CPF válido';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'CPF inválido';
        messageElement.style.color = 'red';
    }
});