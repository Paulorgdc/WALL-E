async function sendQuestionToServer(question, className = "Simulação") {
  try {
    console.log("Processing question:", question);

    const response = await fetch("http://127.0.0.1:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, className }),
    });

    if (!response.ok) {
      throw new Error("Server communication failed");
    }

    const data = await response.json();
    appendMessage("IA", data.answer);
  } catch (error) {
    console.error("Chat error:", error);
    appendMessage("Erro", "O sistema de chat está indisponível no momento.");
  }
}

function sendMessage() {
  const chatInput = document.getElementById("chat-input");
  const messageText = chatInput.value;

  if (messageText.trim() !== "") {
    appendMessage("Aluno", messageText);
    sendQuestionToServer(messageText);
  }

  chatInput.value = "";
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  
  const senderType = sender.toLowerCase() === "ia" ? "ai" : "student";
  messageElement.classList.add("message", senderType);
  
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);

  chatBox.scrollTop = chatBox.scrollHeight;
}