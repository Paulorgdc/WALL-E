import webbrowser
from flask import Flask, request, jsonify, render_template

app = Flask(__name__, 
            template_folder='../frontend/templates', 
            static_folder='../frontend/assets')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat_simulation():
    data = request.json
    user_question = data.get("question", "")
    
    if "banco de dados" in user_question.lower():
        answer = "Um banco de dados é uma coleção organizada de informações ou dados..."
    else:
        answer = "Esta é uma resposta fixa simulada para qualquer pergunta."

    return jsonify({"answer": answer})

@app.route('/student/login')
def student_login():
    return render_template('student/login.html')

@app.route('/student/dashboard')
def student_dashboard():
    return render_template('student/dashboard.html')

@app.route('/teacher/login')
def teacher_login():
    return render_template('teacher/login.html')

@app.route('/teacher/dashboard')
def teacher_dashboard():
    return render_template('teacher/dashboard.html')

if __name__ == "__main__":
    app.run(debug=True)