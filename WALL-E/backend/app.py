from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat_simulation():
    data = request.json
    user_question = data.get("question", "") # Variável em Inglês

    if "banco de dados" in user_question.lower():
        answer = "Um banco de dados é uma coleção organizada de informações ou dados que podem ser acessados, gerenciados e atualizados."
    else:
        answer = "Esta é uma resposta fixa simulada para qualquer pergunta."

    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(debug=True)