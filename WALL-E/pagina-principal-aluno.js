async function sendQuestionToChatGPT(question, className = "Simulação") {
  try {
    // Log para depuração
    console.log("Pergunta enviada:", question);

    // Simula uma chamada ao backend Flask
    const response = await fetch("http://127.0.0.1:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, className }),
    });

    if (!response.ok) {
      throw new Error("Erro na comunicação com o servidor simulado");
    }

    const data = await response.json();
    appendMessage("IA", data.answer);
  } catch (error) {
    console.error("Erro no chat:", error);
    appendMessage("Erro", "Simulação indisponível no momento.");
  }
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value;

  if (message.trim() !== "") {
    appendMessage("Aluno", message);
    sendQuestionToChatGPT(message);
  }

  input.value = "";
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender.toLowerCase());
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);

  chatBox.scrollTop = chatBox.scrollHeight;
}
