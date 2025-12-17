from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat_simulation():
    data = request.json
    question = data.get("question", "")

    # Simulação de resposta fixa
    if "banco de dados" in question.lower():
        answer = "Um banco de dados é uma coleção organizada de informações ou dados que podem ser acessados, gerenciados e atualizados."
    else:
        answer = "Essa é uma resposta fixa simulada para qualquer pergunta."

    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(debug=True)
