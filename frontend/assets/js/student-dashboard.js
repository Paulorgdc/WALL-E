/**
 * @fileoverview Student Dashboard Module
 * Handles AI chat simulation and message rendering.
 */

function toggleChat() {
  const chatContainer = document.getElementById("chat-container");
  if (chatContainer) {
    chatContainer.classList.toggle("hidden");
  }
}

/**
 * Sends student questions to the backend chat API endpoint.
 * @param {string} question 
 * @param {string} className 
 */
async function sendQuestionToServer(question, className = "Simulação") {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, className }),
    });

    const data = await response.json();
    appendMessage("IA", data.answer);
  } catch (error) {
    console.error("Chat communication error:", error);
    appendMessage("Erro", "Estou offline no momento.");
  }
}

/**
 * Processes and sends user message from chat input field.
 */
function sendMessage() {
  const chatInput = document.getElementById("chat-input");
  const messageText = chatInput ? chatInput.value : "";

  if (messageText.trim() !== "") {
    appendMessage("Aluno", messageText);
    sendQuestionToServer(messageText);
    chatInput.value = "";
  }
}

/**
 * Renders chat message items into the chat container box.
 * @param {string} sender 
 * @param {string} message 
 */
function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  if (!chatBox) return;

  const messageElement = document.createElement("div");
  const senderType = sender.toLowerCase() === "ia" ? "ai" : "student";

  messageElement.classList.add("message", senderType);
  messageElement.textContent = message;

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("chat-input")?.addEventListener("keypress", (event) => {
  if (event.key === "Enter") sendMessage();
});