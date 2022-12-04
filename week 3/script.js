const start = document.getElementById('#start');
const sect = document.getElementsByTagName('section');
const timer = 300;
var i = 0;
var correct = 0;


function startQuiz() {
    setTimeout(() => {
        timer = timer - 1;

    }, 1000);


}

function nextQ() {
    if (i == questions.length) {
        highscores();

    } else {
        sect.innerHTML = `
        <h2 id="question">${questions[i]}</h2>
        <button class="answers" id="1" onclick="checkAnswer(0)">1.${answers[i][0]}</button>
        <button class="answers" id="2" onclick="checkAnswer(1)">2.${answers[i][1]}</button>
        <button class="answers" id="3" onclick="checkAnswer(2)">3.${answers[i][2]}</button>
        <button class="answers" id="4" onclick="checkAnswer(3)">4.${answers[i][3]}</button>`;
    }
}

function checkAnswer(pick) {
    let message = document.createElement('span');
    sect.appendChild(message);
    if (answers[i][pick] === correctAnswers[i]) {
        correct = correct + 1;
        message.textContent = 'Correct!';

    } else {
        timer = timer - 5;
        message.textContent = 'Wrong';
    }
    setTimeout(() => {
        message.remove();
    }, 1000);

}

function highscores() {
    sect.innerHTML = `
    <p>Enter your initials</p>
    <h2>All Done!</h2>
    <p>Your score is ${correct}</p>

<form action="submit">
    <input type="text">
    <button id="submitBtn" >submit</button>
</form>
    `
    let submit = getElementById('submitBtn');
    submit.addEventListener('click', highscorelist(correct));
}

function highscorelist(score){
    
    sect.innerHTML = '<h2>Highscores</h2>'
    

}
start.addEventListener('click', startQuiz());