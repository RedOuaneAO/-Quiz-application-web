// let Questions=document.getElementById("#questionId");
// let Option_1=document.getElementById("option1Id");
// let Option_2=document.getElementById("option2Id");
// let Option_3=document.getElementById("option3Id");
// let Option_4=document.getElementById("option4Id");
let quizForm=document.getElementById("quizform");
let submitBtn =document.getElementById("submitId") 








/*=========================================================== Display Questions Function ============================================*/


function displayQustions(){
    // quizForm.innerHTML="";
    for (let i = 0; i < Questions.length; i++) {
        // var index= 0;
       var  qNum=i+1;
        quizForm.innerHTML +=` 
        <div>
        <span>00</span><span>:</span><span>45</span>
    </div>
    <progress id="file" class="" style="height: 20px;" max="100" value="5"></progress>
    <div>
        <p>Question <span>${qNum}</span></p>
        <p class="fw-bold" id="questionId"> ${Questions[i]["question"]} </p><hr>
    </div>
    <form action="" method="">
        <table>
            <tr>
                <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option1Id"></td>
                <td><div class="border rounded"><label for="Answer_1" class="p-2">${Questions[i]["choice1"]}</label></div></td>
            </tr>
            <tr>
                <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option2Id"></td>
                <td><div class="border rounded"><label for="Answer_2" class="p-2">${Questions[i]["choice2"]}</label></div></td>
            </tr>
            <tr>
                <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option3Id"></td>
                <td><div class="border rounded"><label for="Answer_3" class="p-2">${Questions[i]["choice3"]}</label></div></td>
            </tr>
            <tr>
                <td><input class="me-4 form-check-input" type="radio" name="Questions" id="option4Id"></td>
                <td><div class="border rounded"><label for="Answer_4" class="p-2">${Questions[i]["choice4"]}</label></div></td>
            </tr>
        </table>
            <div class="mt-5 d-flex justify-content-evenly">
                    <button class="btn bg-success text-white px-3" id="submitId">Submit</button>
                    <button class="btn bg-primary text-white px-4">Skip</button>
            </div>
    </form> `
    }
};
displayQustions();

