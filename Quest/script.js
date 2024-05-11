const questions = [
    { 
        question: "Qual destes é um sistema operacional?",
        options: ["Microsoft Word", "Google Chrome", "Windows", "Microsoft Excel"], 
        answer: "Windows"
    },
    { 
        question: "Qual destes não é um tipo de arquivo de imagem?",
        options: ["JPEG", "MP3", "PNG", "GIF"], 
        answer: "MP3"
    },
    { 
        question: "O que significa 'WWW' na internet?",
        options: ["World Web Web", "World Wide Web", "Wide World Web", "Web World Wide"], 
        answer: "World Wide Web"
    },
    { 
        question: "Qual destas não é uma linguagem de programação?",
        options: ["Python", "Java", "Adobe Photoshop", "C++"], 
        answer: "Adobe Photoshop"
    },
    { 
        question: "O que é um 'mouse' no contexto de computadores?",
        options: ["Um inseto", "Um tipo de teclado", "Um dispositivo de entrada", "Um animal"], 
        answer: "Um dispositivo de entrada"
    },
    { 
        question: "Qual destas não é uma rede social?",
        options: ["Facebook", "Twitter", "LinkedIn", "Google Maps"], 
        answer: "Google Maps"
    },
    { 
        question: "O que é um 'URL'?",
        options: ["Um tipo de carro", "Um endereço de internet", "Uma sigla para uma empresa", "Um tipo de animal"], 
        answer: "Um endereço de internet"
    },
    { 
        question: "O que é um 'browser'?",
        options: ["Um tipo de computador", "Um tipo de televisão", "Um navegador de internet", "Um tipo de celular"], 
        answer: "Um navegador de internet"
    },
    { 
        question: "Qual destas é uma unidade de armazenamento de dados?",
        options: ["Metro", "Gigabyte", "Segundo", "Litro"], 
        answer: "Gigabyte"
    },
    { 
        question: "O que é um 'e-mail'?",
        options: ["Um tipo de avião", "Um endereço de internet", "Uma comida", "Um tipo de animal"], 
        answer: "Um endereço de internet"
    }
];

const questionContainer = document.getElementById('question-container');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

function createQuestionElement(question) {
    const div = document.createElement('div');
    div.classList.add('question');
    div.innerHTML = `
        <p>${question.question}</p>
    `;
    question.options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="${question.question}" value="${option}">
            ${option}<br>
        `;
        div.appendChild(label);
    });
    return div;
}

questions.forEach(question => {
    const questionElement = createQuestionElement(question);
    questionContainer.appendChild(questionElement);
});

submitBtn.addEventListener('click', () => {
    let score = 0;
    questions.forEach(question => {
        const selectedOption = document.querySelector(`input[name="${question.question}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = question.answer;
            if (userAnswer === correctAnswer) {
                score++;
                selectedOption.parentElement.classList.add('correct');
            } else {
                selectedOption.parentElement.classList.remove('correct');
            }
        }
    });
    resultDiv.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
});