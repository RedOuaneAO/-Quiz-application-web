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
}
    
    // clearTimeout(timeOut); 
// let num =0;
// function displayQuestions(){
//         quizForm.innerHTML =` 
//     <div id="TimerId">
//         <span>00</span><span>:</span><span>45</span>
//     </div>
//     <div id="progBack">
//         <div id="progFront">
//         </div>
//     </div>
//     <div>
//         <p>Question <span>${num+1}</span></p>
//         <p class="fw-bold" id="questionId"> `+ Questions[num].question +`</p><hr>
//     </div>
//     <form id="formId">
//     <table>
//     <tr>
//         <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option1Id" value="1"></td>
//         <td><label for="Answer_1" class="p-2">`+ Questions[num].choice1 +`</label></td>
//     </tr>
//     <tr>
//         <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option2Id" value="2"></td>
//         <td><label for="Answer_2" class="p-2">`+ Questions[num].choice2 +`</label></td>
//     </tr>
//     <tr>
//         <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option3Id" value="3"></td>
//         <td><label for="Answer_3" class="p-2">`+ Questions[num].choice3 +`</label></td>
//     </tr>
//     <tr>
//         <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option4Id" value="4"></td>
//         <td><label for="Answer_4" class="p-2">`+ Questions[num].choice4 +`</label></td>
//     </tr>
//     </table>
//         <div class="mt-5 d-flex justify-content-evenly">
//                 <button class="btn bg-success text-white px-3" id="submitId" onclick="displayQuestions()">Submit</button>
//                 <button class="btn bg-primary text-white px-4">Exit</button>
//         </div>
//     </form> `;
//     num++;
// //  var timeOut=  setTimeout(displayQustions, 3000); //kola 3 tawani kadoz lso2al akhor
// };

//======================================================steper=======================================

let startBtn =document.getElementById("startId");
let QuizStep =document.getElementById("QuizStep");
startBtn.addEventListener("click",()=>{
    QuizStep.classList.add("completed");
});

//====================================================progress Bar===========================

let progressBar = document.getElementById("progfront");
let submitBtn =document.getElementById("submitId");
submitBtn.addEventListener("click",()=>{
    progressBar.style.width+=10+"%";
})




// ======================================Timer==========================






















/* <table>
<tr>
    <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option1Id" value="1"></td>
    <td><div class="border rounded"><label for="Answer_1" class="p-2">${Questions[num]["choice1"]}</label></div></td>
</tr>
<tr>
    <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option2Id" value="2"></td>
    <td><div class="border rounded"><label for="Answer_2" class="p-2">${Questions[num]["choice2"]}</label></div></td>
</tr>
<tr>
    <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option3Id" value="3"></td>
    <td><div class="border rounded"><label for="Answer_3" class="p-2">${Questions[num]["choice3"]}</label></div></td>
</tr>
<tr>
    <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option4Id" value="4"></td>
    <td><div class="border rounded"><label for="Answer_4" class="p-2">${Questions[num]["choice4"]}</label></div></td>
</tr>
</table> */