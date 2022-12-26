let rulesForm=document.getElementById("rulesId");
let quizForm=document.getElementById("quizId");
let QuestionNum=document.getElementById("questionNum");
let Question=document.getElementById("questionId");
let Answer_1=document.getElementById("option1");
let Answer_2=document.getElementById("option2");
let Answer_3=document.getElementById("option3");
let Answer_4=document.getElementById("option4");




/*=========================================================== Display Questions Function ============================================*/


let num =0;
function displayQuestions(){
    rulesForm.style.display="none";
    quizForm.style.display="block";
    QuestionNum.innerText=`${num+1}`;
    Question.innerText= Questions[num].question;
    Answer_1.innerText= Questions[num].choice1;
    Answer_2.innerText= Questions[num].choice2;
    Answer_3.innerText= Questions[num].choice3;
    Answer_4.innerText= Questions[num].choice4;
    num++;
    quizCountdown();
}
    



//======================================================steper=======================================

let startBtn =document.getElementById("startId");
let QuizStep =document.getElementById("QuizStep");
startBtn.addEventListener("click",()=>{
    QuizStep.classList.add("completed");
});

//====================================================progress Bar===========================

let progressBar = document.getElementById("progFront");
let submitBtn =document.getElementById("submitId");
let n=10;
submitBtn.addEventListener("click",()=>{
    clearInterval(counterTime);
    counterElement.innerHTML = 10;
    progressBar.style.width=n+"%";
    n=n+10;
});



//====================================================timeCounter===========================

var counterElement = document.getElementById("timeCounter");
function quizCountdown(){
   counterTime = setInterval(()=>{
    if(counterElement.innerHTML>0){
        counterElement.innerHTML -= 1;
    }else if(counterElement.innerHTML==0){
    //   clearInterval(counterTime);
        submitBtn.click();
        counterElement.innerHTML = 10;
    }
  }, 1000);
}

//====================================================correct Answer===========================

// let answerR= document.querySelectorAll(".choices");
// let theAnswer = Questions[num].answer;
// let right="";
// let rAnswer =
// function rightAnswer(){
//     answerR.forEach(rAnswer=>{
//         if(theAnswer== answerR.value){

//         }
//     })
   
// }


// let options = document.querySelectorAll('input[type="radio"]');
// let checkedOption= options.checked;
// let rightAnswer = Questions[num].answer;
// function Answers(){
//     if(checkedOption==rightAnswer){
//         options.style.background="red";
//     }
// }


// console.log(checkedOption);











