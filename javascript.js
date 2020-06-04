//if we click on the start/reset button
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.getElementById("startreset").onclick= function(){
//if we are playing
if(playing==true){
  location.reload(); //causes page to reload

}
else{
  playing=true;
  score = 0;
  document.getElementById("scorevalue").innerHTML =score;
  document.getElementById("timeremaining").style.display = "block";//show countdownbox
  document.getElementById("startreset").innerHTML = "reset game";
  timeremaining=60;
  document.getElementById("timeremainingvalue").innerHTML=timeremaining;
//hide gameover box1
hide("gameOver");
  //start countdown
  startCountdown();
  generateQA();
}
}
//clicking on answerbox
for(i=1;i<5;i++){
document.getElementById("box"+ i).onclick=function(){
//check if we are playing
if(playing==true){
  if(this.innerHTML == correctAnswer){
    score ++;
    document.getElementById("scorevalue").innerHTML=score;
    //hide wrong box1
    hide("wrong");
    show("correct");
    setTimeout(function(){
      hide("correct");
    }, 1000);
    //generate new // QUESTION:
    generateQA();
  }
  else{
    //wrong]
    hide("correct");
    show("wrong");
    setTimeout(function(){
      hide("wrong");
    }, 1000);
  }
}
}
}
 //reload page
//if we are not playing

//reduce time by 1sec in loops
// timeleft?
//yes->continue
//no->gameOver
//change button to reset//generate new Q&answers

//if we click on answer box
// if we are playing check if answer
//correct
  //yes score+=1
//show correct boxfor a 1sec and generaate new q&a
//no show try again box
function startCountdown(){
action = setInterval(function(){
  timeremaining -= 1;
  document.getElementById("timeremainingvalue").innerHTML=timeremaining;
  if(timeremaining==0){
   stopCountdown;
   document.getElementById("gameOver").style.display="block";
   document.getElementById("gameOver").innerHTML="<p>Game Over!</p> <p>Your score is "+score+"</p>";
   hide("timeremaining");
   hide("correct");
   hide("wrong");
   playing=false;
   document.getElementById("startreset").innerHTML="Start Game";
    document.getElementById("startreset").innerHTML="Play again";
   document.getElementById("startreset").onclick= function(){
       location.reload();
   }
  }
}, 1000);
}
function stopCountdown(){
    clearInterval(action);
}

function hide(Id){
  document.getElementById(Id).style.display = "none";
}
function show(Id){
  document.getElementById(Id).style.display = "block";
}

function generateQA(){
var x = Math.round(10*Math.random());
var y = Math.round(9*Math.random());
correctAnswer= x*y;
document.getElementById("question").innerHTML=x + "x" +y;
var correctPosition=1+Math.round(3*Math.random());
document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
var answers = [correctAnswer];
for(i=1; i<5;i++){
  if(i!=correctPosition){
    var wrongAnswer;
    do{
    wrongAnswer= Math.round(10*Math.random()) * Math.round(10*Math.random());
}while(answers.indexOf(wrongAnswer)>-1)
    document.getElementById("box"+i).innerHTML=wrongAnswer;
    answers.push(wrongAnswer);
  }
}
}
