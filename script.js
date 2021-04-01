const quizDB = [
    {
        question: "1. What is full form of ASCII?",
        a: "Authentic Standard Code for Information Interchange",
        b: "Australian Standard Code for Information Interchange",
        c: "American Standard Code for Information Interchange",
        d: "None",
        ans: "ans3"
    },

    {
        question: "2. What is the full form of URL?",
        a: "Universal Resource Locator",
        b: "Unified Resource Locator",
        c: "Uniform Resource Locator",
        d: "Unified Request Locator",
        ans: "ans3"
    },

    {
        question: "3. What is the full form of PDF?",
        a: "Printable Document Format",
        b: "Portable Document Format",
        c: "Paperless Document Format",
        d: "Portable Digital Format",
        ans: "ans2"
    },

    {
        question: "4. What is full form of DB?",
        a: "DATABASE",
        b: "DISKBASE",
        c: "DATA BANDWIDTH",
        d: "DISK BANDWIDTH",
        ans: "ans1"
    },

    {
        question: "5. What is full form of CMOS?",
        a: "Crystal Metal Oxide Semiconductor",
        b: "Complementary Mineral Oxide Semiconductor",
        c: "Cover Metal Oxide Semiconductor",
        d: "Complementary Metal Oxide Semiconductor",
        ans: "ans4"
    },

    {
        question: "6. What is full form of ASIC?",
        a: "Auxillary Specific Integrated Circuit",
        b: "Auto Specific Integrated Circuit",
        c: "Application Super Integrated Circuit",
        d: "Application Specific Integrated Circuit",
        ans: "ans4"
    },

    {
        question: "7. What is full form of CDRW?",
        a: "Content Disk Re-writer",
        b: "Compact Disk Re-writer",
        c: "Copy Disk Re-writer",
        d: "None",
        ans: "ans2"
    },

    {
        question: "8. What is full form of JPEG?",
        a: "JOINT PICTURE EXPERTS GROUP",
        b: "JOINT PHOTOGRAPHIC EXPERTS GROUP",
        c: "JOINT PROCESSOR EXPERTS GROUP",
        d: "None",
        ans: "ans2"
    },

    {
        question: "9. What is full form of AMD?",
        a: "Advanced Micro Devices",
        b: "Advice Micro Devices",
        c: "Application Micro Devices",
        d: "None",
        ans: "ans1"
    },

    {
        question: "10. What is full form of JPEG?",
        a: "Joint Panel Experts Group",
        b: "Jolly Photographic Experts Group",
        c: "Joint Photographic Emergency Group",
        d: "Joint Photographic Experts Group",
        ans: "ans4"
    },

]

const ansList = [];


const question = document.querySelector('.question');
console.log( question);
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const prev = document.querySelector('#prev');

const answers = document.querySelectorAll('.answer');

//for enable submit button 
answers.forEach(answer => answer.addEventListener('change', () => {
    submit.style.background = "blue";
} ));
  




const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML =  questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}

loadQuestion();


const getCheckAsnwer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
            
        }
    });

    return answer;
};



const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAsnwer();
    console.log(checkedAnswer);

    ansList[questionCount] = checkedAnswer;
    console.log(ansList);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    deselectAll();


    

    
    prev.classList.add('fadeIn');

    if(questionCount < quizDB.length){
        loadQuestion();
    } else{

        showScore.innerHTML = `
            <h3> You scored ${score} out of ${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()">Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }

    submit.style.background = "#74b9ff";


    answers.forEach((answer) =>{
        if(answer.id == ansList[questionCount] ){
            answer.checked = true;
            submit.style.background = "blue";


            return;
        }
    });
});

    

prev.addEventListener('click',() => {
    questionCount--;
    loadQuestion();
    deselectAll();
    
    answers.forEach((answer) =>{
        if(answer.id == ansList[questionCount] ){
            answer.checked = true;
            return;
        }
    });


    if(ansList[questionCount] == quizDB[questionCount].ans){
        score--;
    }


    submit.style.background = "blue";
});







