let rulesForm=document.getElementById("rulesId");
let quizForm=document.getElementById("quizId");
let resultForm=document.getElementById("resultId");
let QuestionNum=document.getElementById("questionNum");
let Question=document.getElementById("questionId");
let Answer_1=document.getElementById("option1");
let Answer_2=document.getElementById("option2");
let Answer_3=document.getElementById("option3");
let Answer_4=document.getElementById("option4");
let submitBtn =document.getElementById("submitId");




/*=========================================================== Display Questions Function ============================================*/
let answerR= document.getElementsByName("options");


let num =0;
let theAnswer = Questions[num].answer;

answerR.forEach(element=>{                             //for controling the visibility of the button
    element.addEventListener("click",()=>{
        submitBtn.style.visibility="visible";
    })
});

function displayQuestions(){
    if(num<Questions.length){
        answerR.forEach(element=>{
            element.parentElement.parentElement.style.background="none";
        })
        rulesForm.style.display="none";
        quizForm.style.display="block";
        QuestionNum.innerText=`${num+1}`;
        Question.innerText= Questions[num].question;
        Answer_1.innerText= Questions[num].choice1;
        Answer_2.innerText= Questions[num].choice2;
        Answer_3.innerText= Questions[num].choice3;
        Answer_4.innerText= Questions[num].choice4;
       
    quizCountdown();
    }
        
}
    



//======================================================steper=======================================

let startBtn =document.getElementById("startId");
let QuizStep =document.getElementById("QuizStep");
startBtn.addEventListener("click",()=>{
    displayQuestions();
    QuizStep.classList.add("completed");
});

//====================================================progress Bar / correctAnswer===========================
let progressBar = document.getElementById("progFront");
let n=20;
let score=0;
submitBtn.addEventListener("click",()=>{
    submitBtn.style.visibility="hidden";
    num++;
    if(num<Questions.length){
                clearInterval(counterTime);
                counterElement.innerHTML = 10;
                    progressBar.style.width=n+"%";
                    n=n+10;
                let x;
                answerR.forEach(element=>{
                    let elementBtn =element.parentElement.parentElement;
                    if(element.checked==true){
                        x=element.value;
                        console.log(Questions[num].answer)
                        if(x==Questions[num-1].answer){
                            elementBtn.style.background="green";
                            // clearTimeout(next);
                            score++;
                        }else{
                            elementBtn.style.background="red";
                        }
                    }
                    element.checked=false;
                    // elementBtn.style.background="none";
            
                })
                
    }else {
        Result();            //to take me to the result form after last submit
    }
    next =setTimeout(displayQuestions,1500); // to wait for 1.5 s befor go to the next question
});



//====================================================timeCounter===========================

var counterElement = document.getElementById("timeCounter");
function quizCountdown(){
   counterTime = setInterval(()=>{
    if(counterElement.innerHTML>0){
        counterElement.innerHTML -= 1;
    }else if(counterElement.innerHTML==0){
    //   clearInterval(counterTime);
        if(num<Questions.length){
            submitBtn.click();
            counterElement.innerHTML = 10;
        }else{
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
    resultForm.style.display="block";
    console.log(score);
}








// sort()
// Math.random()