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
    },
    
        { 
            question: "Qual destes é uma extensão de arquivo do Microsoft Word?",
            options: [".doc", ".pdf", ".xls", ".ppt"], 
            answer: ".doc"
        },
        { 
            question: "Qual comando é usado para copiar texto no Microsoft Word?",
            options: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+S"], 
            answer: "Ctrl+C"
        },
        { 
            question: "Qual opção é usada para alterar o tamanho da fonte no Microsoft Word?",
            options: ["Alt+S", "Alt+T", "Alt+P", "Alt+F"], 
            answer: "Alt+P"
        },
        { 
            question: "Qual opção é usada para inserir uma tabela no Microsoft Word?",
            options: ["Alt+T", "Alt+I", "Alt+L", "Alt+A"], 
            answer: "Alt+T"
        },
        { 
            question: "Qual opção é usada para alinhar o texto à direita no Microsoft Word?",
            options: ["Ctrl+D", "Ctrl+R", "Ctrl+L", "Ctrl+E"], 
            answer: "Ctrl+R"
        },
        { 
            question: "Qual opção é usada para salvar um documento no Microsoft Word?",
            options: ["Ctrl+S", "Ctrl+C", "Ctrl+P", "Ctrl+X"], 
            answer: "Ctrl+S"
        },
        { 
            question: "Qual opção é usada para desfazer uma ação no Microsoft Word?",
            options: ["Ctrl+Z", "Ctrl+Y", "Ctrl+A", "Ctrl+D"], 
            answer: "Ctrl+Z"
        },
        { 
            question: "Qual opção é usada para criar uma lista numerada no Microsoft Word?",
            options: ["Alt+N", "Alt+L", "Alt+O", "Alt+U"], 
            answer: "Alt+N"
        },
        { 
            question: "Qual opção é usada para imprimir um documento no Microsoft Word?",
            options: ["Ctrl+P", "Ctrl+E", "Ctrl+I", "Ctrl+T"], 
            answer: "Ctrl+P"
        },
        { 
            question: "Qual opção é usada para fechar um documento no Microsoft Word?",
            options: ["Ctrl+W", "Ctrl+F", "Ctrl+Q", "Ctrl+D"], 
            answer: "Ctrl+W"
        },
    
        
        { 
            question: "Qual destes é uma extensão de arquivo do Microsoft Excel?",
            options: [".xls", ".doc", ".ppt", ".pdf"], 
            answer: ".xls"
        },
        { 
            question: "Qual função é usada para somar valores em uma planilha do Excel?",
            options: ["SUM", "COUNT", "AVERAGE", "MAX"], 
            answer: "SUM"
        },
        { 
            question: "Qual opção é usada para inserir uma nova planilha no Microsoft Excel?",
            options: ["Alt+N", "Alt+I", "Alt+L", "Alt+A"], 
            answer: "Alt+L"
        },
        { 
            question: "Qual opção é usada para formatar células como moeda no Microsoft Excel?",
            options: ["Ctrl+M", "Ctrl+D", "Ctrl+C", "Ctrl+Shift+$"], 
            answer: "Ctrl+Shift+$"
        },
        { 
            question: "Qual opção é usada para copiar uma célula no Microsoft Excel?",
            options: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+Z"], 
            answer: "Ctrl+C"
        },
        { 
            question: "Qual opção é usada para inserir uma função no Microsoft Excel?",
            options: ["Ctrl+I", "Ctrl+F", "Ctrl+E", "Ctrl+Shift+P"], 
            answer: "Ctrl+E"
        },
        { 
            question: "Qual opção é usada para renomear uma planilha no Microsoft Excel?",
            options: ["Alt+R", "Alt+N", "Alt+P", "Alt+A"], 
            answer: "Alt+R"
        },
        { 
            question: "Qual opção é usada para proteger uma planilha no Microsoft Excel?",
            options: ["Alt+P", "Alt+S", "Alt+O", "Alt+U"], 
            answer: "Alt+P"
        },
        { 
            question: "Qual opção é usada para ocultar uma linha no Microsoft Excel?",
            options: ["Ctrl+H", "Ctrl+Shift+H", "Ctrl+9", "Ctrl+0"], 
            answer: "Ctrl+9"
        },
        { 
            question: "Qual opção é usada para inserir uma nova coluna no Microsoft Excel?",
            options: ["Ctrl+Shift+C", "Ctrl+Shift+V", "Ctrl+Shift+N", "Ctrl+Shift+I"], 
            answer: "Ctrl+Shift+I"
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
