let currentQ = 0;
let correctAnswer = 0;
let p = 0;
showQuestion();


function showQuestion(){
    p = Math.floor( (correctAnswer / questions.length) * 100 );

    if(questions[currentQ]){
    
        let quest = questions[currentQ];

        document.querySelector('.scoreArea').style.display = "none";
        document.querySelector('.questionArea').style.display = "block";

        document.querySelector('.question').innerHTML = quest.question;

        let showOptions = '';

        for(i in quest.options){
            let inter = parseInt(i);
            showOptions += `<div data-option="${i}" class="option"> <span>${inter+1}</span> ${quest.options[i]}</div>`
        }

        document.querySelector('.options').innerHTML = showOptions;

        document.querySelectorAll('.option').forEach( item => {
            item.addEventListener('click', selectOp);
        })

    } else {
        document.querySelector('.scoreArea').style.display = "block";
        document.querySelector('.questionArea').style.display = "none";

        showResult();
    }
}

function selectOp(e){
        let numberOptions= parseInt(e.target.getAttribute('data-option'));
        
        if(numberOptions === questions[currentQ].answer){
            correctAnswer ++;
        }

        currentQ ++;
        showQuestion();
}

function showResult(){

    if(p <30){
        document.querySelector('.scoreText1').innerHTML = "Você está ruim";
        document.querySelector('.scorePct').innerHTML = `Você acertou ${p}%`;
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;
    } else if(p >=70){
        document.querySelector('.scoreText1').innerHTML = "Você é o cara!";
        document.querySelector('.scorePct').innerHTML = `Você acertou ${p}%`;
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;
    } else{
        document.querySelector('.scoreText1').innerHTML = "Muito bem!";
        document.querySelector('.scorePct').innerHTML = `Você acertou ${p}%`;
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;
    };
}