

function sayHello(){
  var response=prompt("What's your name?");
  alert("Hello "+response+",have a nice day!")
}

var score=0;
function answer(){
  var response=prompt("write down your answer");
  if(response=="烬"){
    alert("right answer!");
    score+=16;
  }
  else {
    alert("wrong answer");
  }
}
function answer1(){
  var response=prompt("write down your answer");
  if(response=="梦寐以求"){
    alert("right answer!");
    score+=16;
  }
  else {
    alert("wrong answer");
  }
}
function answer3(){
  var response=prompt("write down your answer");
  if(response=="周易"){
    alert("right answer!");
    score+=16;
  }
  else {
    alert("wrong answer");
  }
}function answer4(){
  var response=prompt("write down your answer");
  if(response=="明天冬" || "天门冬"){
    alert("right answer!");
    score+=16;
  }
  else {
    alert("wrong answer");
  }
}function answer5(){
  var response=prompt("write down your answer");
  if(response=="八成熟"){
    alert("right answer!");
    score+=16;
  }
  else {
    alert("wrong answer");
  }
}
function answer6(){
  var response=prompt("write down your answer");
  if(response=="旮旯"){
    alert("right answer!");
    score+=17;
  }
  else {
    alert("wrong answer");
  }
}
function result(){
  if(score==100){
    alert("Your score is "+score+" ,you are a brilliant guy！");
  }
  if(score>10&score<=99){
    alert("Your score is "+score+" ,keep fighting!");
  }
  if(score==10){
    alert("Your score is "+score+" ,you still have a long way to go");
  }
}
