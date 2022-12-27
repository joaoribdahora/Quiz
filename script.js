let currentQ = 0;
let correctAnswer = 0;
showQuestion();

let p = Math.floor( (correctAnswer/questions.length) * 100 );

function showQuestion(){
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
    console.log(p);
    console.log(correctAnswer);
    console.log(questions.length);

    if(p <30){
        document.querySelector('.scoreText1').innerHTML = "Você está ruim";
        document.querySelector('.scorePct').innerHTML = `Você acertou ${p}%`;
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;
    }
}