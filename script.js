// Dados Iniciais
let currentQ = 0;
let correctAnswer = 0;
let p = 0;
let progress = 0;
showQuestion();

// Evento de click
// Evento para fazer o botão de "Fazer Novamente" funcionar
document.querySelector('.button').addEventListener('click', restart);

// Funções
function showQuestion(){
    // Matemática para calcular a porcentagem de acertos e a movimentação da barra de progresso
    p = Math.floor( (correctAnswer / questions.length) * 100 );
    progress = Math.floor((currentQ /questions.length) * 100);

    // Codigo para mostrar as questões e as opções presentes no Quiz, assim como o resultado ao final do questionário
    if(questions[currentQ]){
    
        let quest = questions[currentQ];

        document.querySelector('.scoreArea').style.display = "none";
        document.querySelector('.questionArea').style.display = "block";

        document.querySelector('.question').innerHTML = quest.question;

        let showOptions = '';

        for(i in quest.options){
            let inter = parseInt(i);
            showOptions += `<div data-option="${i}" class="option"> <span>${inter+1}</span> ${quest.options[i]}</div>`
        };

        document.querySelector('.options').innerHTML = showOptions;

        document.querySelectorAll('.option').forEach( item => {
            item.addEventListener('click', selectOp);
        });

        document.querySelector('.progress--bar').style.width = `${progress}%`;        

    } else {
        document.querySelector('.scoreArea').style.display = "block";
        document.querySelector('.questionArea').style.display = "none";

        document.querySelector('.progress--bar').style.width = `100%`;
        showResult();
    }
};

// Função para validar a escolha das opções e, também, armazenar se acertou ou não a questão
function selectOp(e){
        let numberOptions= parseInt(e.target.getAttribute('data-option'));
        
        if(numberOptions === questions[currentQ].answer){
            correctAnswer ++;
        }

        currentQ ++;
        showQuestion();
};

// Função que mostra o quadro de resultado
function showResult(){

    if(p <30){
        document.querySelector('.scoreText1').innerHTML = "Você está ruim";
        document.querySelector('.scorePct').innerHTML = `Você acertou ${p}%`;
        document.querySelector('.scorePct').style.color = "rgb(190, 11, 11)";
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;
    } else if(p >=70){
        document.querySelector('.scoreText1').innerHTML = "Você é o cara!";
        document.querySelector('.scorePct').innerHTML = `Você acertou ${p}%`;
        document.querySelector('.scorePct').style.color = "rgb(25, 168, 12)";
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;
    } else{
        document.querySelector('.scoreText1').innerHTML = "Muito bem!";
        document.querySelector('.scorePct').innerHTML = `Você acertou ${p}%`;
        document.querySelector('.scorePct').style.color = "rgb(194, 197, 8)";
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;
    };
};

// Função para começar o Quiz novamente
function restart(){
    currentQ = 0;
    correctAnswer = 0;
    p = 0;
    progress = 0;

    showQuestion();
};