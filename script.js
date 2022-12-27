let currentQ = 0;
let correctAnswer = 0;
let p = 0;
let progress = 0;
showQuestion();

document.querySelector('.button').addEventListener('click', restart);


function showQuestion(){
    p = Math.floor( (correctAnswer / questions.length) * 100 );
    progress = Math.floor((currentQ /questions.length) * 100);


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

function selectOp(e){
        let numberOptions= parseInt(e.target.getAttribute('data-option'));
        
        if(numberOptions === questions[currentQ].answer){
            correctAnswer ++;
        }

        currentQ ++;
        showQuestion();
};

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

function restart(){
    currentQ = 0;
    correctAnswer = 0;
    p = 0;
    progress = 0;

    showQuestion();
};