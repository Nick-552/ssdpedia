let poll = {
    question:"А у Вас уже есть ssd?",
    answers:[
        "Стоит уже давно",
        "Поставил недавно",
        "Нет, но хочу купить",
        "Что такое ssd",
        "Тык"
    ],
    pollCount: 50,
    answersCount: [12, 13, 18, 1, 6],
    selectedAnswer: -1
};
let pollDOM = {
    question: document.querySelector(".question"),
    answers: document.querySelector(".answers")
};
pollDOM.question.innerHTML = poll.question;
pollDOM.answers.innerHTML = poll.answers.map(function(answer, i) {
    return (
        `
            <div class="answer" onclick="markAnswer('${i}')">
                <span class="answerDescription">${answer}</span>
                <span class="percentage-bar"></span>
                <span class="percentage-value"></span>
            </div>
        `
    );
}).join("");

function markAnswer(i) {
    poll.selectedAnswer = i;
    try {
        document.querySelector(".poll .answers .answer.selected")
            .classList.remove("selected");
    } catch(msg) {}
    document.querySelectorAll(".poll .answers .answer")[i].classList.add("selected");
    showResults();
}

function showResults() {
    let answers = document.querySelectorAll(".poll .answers .answer");
    for(let i = 0; i < answers.length; i++) {
        let percentage = 0;
        if (i == poll.selectedAnswer) {
            percentage = Math.round((poll.answersCount[i] + 1) * 100 / (poll.pollCount + 1));
        } else {
            percentage = Math.round(poll.answersCount[i] * 100 / (poll.pollCount + 1));
        }
        answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
        answers[i].querySelector(".percentage-value").innerText = percentage + "%";
    }
}