let rulesForm=document.getElementById("rulesId");
let quizForm=document.getElementById("quizId");
let resultForm=document.getElementById("resultId");
let QuestionNum=document.getElementById("questionNum");
let Question=document.getElementById("questionId");
let Answer_1=document.getElementById("option1");
let Answer_2=document.getElementById("option2");
let Answer_3=document.getElementById("option3");
let Answer_4=document.getElementById("option4");




/*=========================================================== Display Questions Function ============================================*/
let answerR= document.getElementsByName("options");

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

//====================================================progress Bar / correctAnswer===========================


let theAnswer = Questions[num].answer;
let progressBar = document.getElementById("progFront");
let submitBtn =document.getElementById("submitId");
let n=10;
let number=0;
submitBtn.addEventListener("click",()=>{
    clearInterval(counterTime);
    counterElement.innerHTML = 10;
    if(number<Questions.length){
        progressBar.style.width=n+"%";
        n=n+10;
        number++;
    }else {
        Result();            //to take me to the result form after last submit
    }

    answerR.forEach(element=>{
        let elementBtn =element.parentElement.parentElement;
        if(element.checked==true){
            console.log(element.value);
            if(element.value==theAnswer){
                elementBtn.style.background="green";
            }else{
                elementBtn.style.background="red";
            }
        }
    element.checked=false;
    // elementBtn.style.background="none";
    })
});



//====================================================timeCounter===========================

var counterElement = document.getElementById("timeCounter");
function quizCountdown(){
   counterTime = setInterval(()=>{
    if(counterElement.innerHTML>0){
        counterElement.innerHTML -= 1;
    }else if(counterElement.innerHTML==0){
    //   clearInterval(counterTime);
    if(number<Questions.length){
        submitBtn.click();
        counterElement.innerHTML = 10;
        Result();
    }
    }
  }, 1000);
}



//===================================================Result===========================
let ResultStep =document.getElementById("ResultStep");

function Result(){
    ResultStep.classList.add("completed");
    rulesForm.style.display="none";
    quizForm.style.display="none";
    resultForm.style.display="block"

}








