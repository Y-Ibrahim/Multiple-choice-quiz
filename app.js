// Div Sections
var startQuiz = document.querySelector(".start");
const  quiz = document.querySelector(".quiz");
const question = document.querySelector(".question");
const Img = document.querySelector(".q-image");
const gameScore = document.querySelector(".score");
const  progress = document.getElementById("progress");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

var questions = [
    {
        question: "what does HTML stand for?",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png",
        choiceA: "Hyper Text Markup Language",
        choiceB: "Home Tool Markup Language",
        choiceC: "Hyperlink and Texts Markup Language",
        choiceD: "Hack Text Markup Language",
        correct: "A"
        
    },
    {
        question: "What is the tallest mountain in the world?",
        imgSrc: "https://cdn.onlinewebfonts.com/svg/img_571956.png",
        choiceA: "Mount Fiji",
        choiceB: "K2",
        choiceC: "Mount Everest",
        choiceD: "Lhotse",
        correct: "C"
        
    },
    {
        question: "When was JavaScript created?",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png",
        choiceA: "1990",
        choiceB: "1995",
        choiceC: "2001",
        choiceD: "1998",
        correct: "B"
        
    },
    {
        question: "Which country hosted the Winter Olympics?",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png",
        choiceA: "China",
        choiceB: "Canada",
        choiceC: "Japan",
        choiceD: "South Korea",
        correct: "D"
        
    },
    {
        question: "What is the smallest unit of memory?",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png",
        choiceA: "Megabyte",
        choiceB: "Kilobyte",
        choiceC: "bit",
        choiceD: "Byte",
        correct: "C"
        
    },
]
// the index of the question array is questions.length -1, as the first question is 0 index
const lQuestion = questions.length -1;
let currentQuestion = 0;
let score = 0;
// render question
function renderQuestion(){
    let q = questions[currentQuestion];
    
    question.innerHTML = "<p>" + q.question + "</p>";
    // Img.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
startQuiz.addEventListener("click", function(){
    startQuiz.style.display = "none";
    renderQuestion();
renderProgress();
quiz.style.display ="block";
})

// Start the quiz




// Progress
function renderProgress(){
    for(let i =0; i <= lQuestion; i++){
        progress.innerHTML += "<div class='prog' id=" + i + "></div>";
      
    }
}
// Check to see if answer is correct
function checkAnswer(answer){
    if(answer == questions[currentQuestion].correct){
        score++;
        // Change progress color to green
        ansIsCorrect();
    } else {
        // Change progress color to red
        ansIsIncorrect();

    }
    if(currentQuestion < lQuestion){
        currentQuestion++;
        renderQuestion();
    }else{
        scoreRender();
        quiz.style.display ="none";

    }

}

// answer is correct
function ansIsCorrect(){
    document.getElementById("background").style.backgroundColor = "#59BC6E";
}

// answer is incorrect
function ansIsIncorrect(){
    document.getElementById("background").style.backgroundColor = "#C92929";
}




function scoreRender(){
    gameScore.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
   
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "https://secureservercdn.net/72.167.241.134/844.46e.myftpupload.com/wp-content/uploads/10_NailedIt_1031a.gif?time=1577405334" :
              (scorePerCent >= 60) ? "https://media3.giphy.com/media/diUKszNTUghVe/giphy.gif?cid=790b7611cd7f78891c8632e0ef9b09a12fa49c5ab5162a6e&rid=giphy.gif" :
              (scorePerCent >= 40) ? "https://media0.giphy.com/media/l0Ex0ux7UbPAiR5E4/giphy.gif?cid=790b7611bd18aef8800b43c318a47ce97e7e3570719b3204&rid=giphy.gif" :
              (scorePerCent >= 20) ? "https://media3.giphy.com/media/xUA7aRaGvA53VSlxUk/giphy.gif?cid=790b7611c681bed79e42a01e35940473a7144489878cc8b4&rid=giphy.gif" :
              "https://media2.giphy.com/media/9AxX2im4PWDsY/giphy.gif?cid=790b76118a66c9c909c719d66164b32bb00b77e52730b549&rid=giphy.gif";
    
    gameScore.innerHTML = "<img src="+  img +">";
    gameScore.innerHTML += "<p>"+ "You have scored " + scorePerCent +"% </p>";

     
}
