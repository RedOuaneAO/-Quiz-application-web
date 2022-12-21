let quizForm=document.getElementById("quizform");
let submitBtn =document.getElementById("submitId") 
let startBtn =document.getElementById("startId") 
let rulesForm=document.getElementById("rulesId");








/*=========================================================== Display Questions Function ============================================*/

var num =0;
function getQuestions(){
    rulesForm.style.display="none";
    displayQustions(num);
    num++;
}

// clearTimeout(timeOut); 

function displayQustions(num){
        quizForm.innerHTML =` 
    <div id="TimerId">
        <span>00</span><span>:</span><span>45</span>
    </div>
    <progress id="file" class="" style="height: 20px;" max="100" value="5"></progress>
    <div>
        <p>Question <span>${num+1}</span></p>
        <p class="fw-bold" id="questionId"> ${Questions[num]["question"]} </p><hr>
    </div>
    <form action="" method="">
        <div>
            <button class="border rounded" style="width:100%"><label for="option1Id" class="p-2">${Questions[num]["choice1"]}</label></button>
            
            <button class="border rounded mt-2" style="width:100%"><label for="option2Id" class="p-2">${Questions[num]["choice2"]}</label></button>
                
            <button class="border rounded my-2" style="width:100%"><label for="option3Id" class="p-2">${Questions[num]["choice3"]}</label></button>
                
            <button class="border rounded" style="width:100%"><label for="option4Id" class="p-2">${Questions[num]["choice4"]}</label></button>
        </div>
        <div class="mt-5 d-flex justify-content-evenly">
                <button class="btn bg-success text-white px-3" id="submitId" onclick="getQuestions()">Submit</button>
                <button class="btn bg-primary text-white px-4">Exit</button>
        </div>
    </form> `;
    // const timeOut=  setTimeout(getQuestions, 3000); //kola 3 tawani kadoz lso2al akhor
};



// ======================================Timer==========================
var timeDiv=document.getElementById("TimerId");
var time;


var sec=30;
time= setInterval(timeDiv.innerHTML='00:'+sec,1000);
sec--;





