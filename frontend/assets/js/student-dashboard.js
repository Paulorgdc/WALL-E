function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.classList.toggle("hidden");
}

async function sendQuestionToServer(question, className = "Simulação") {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, className }),
        });

        const data = await response.json();
        appendMessage("IA", data.answer);
    } catch (error) {
        appendMessage("Erro", "Estou offline no momento.");
    }
}

function sendMessage() {
    const chatInput = document.getElementById("chat-input");
    const messageText = chatInput.value;

    if (messageText.trim() !== "") {
        appendMessage("Aluno", messageText);
        sendQuestionToServer(messageText);
        chatInput.value = "";
    }
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    
    const senderType = sender.toLowerCase() === "ia" ? "ai" : "student";
    messageElement.classList.add("message", senderType);
    messageElement.textContent = message;
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("chat-input")?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});