
var score=0;
var timer = 60;
var hitvalrn=0;


function increasescore(){
  console.log("score")
  score +=10
  document.querySelector("#scoreval").textContent=score;
}


function getnewhit(){
hitvalrn= Math.floor(Math.random()*10);
 document.querySelector("#val").textContent=hitvalrn
}


function makebubble() {
  var clutter = "";
  for (let i = 1; i <= 216; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
    //clutter=cluter+ `<div class="bubble">5  </div>`
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}

function runtimer() {
  var timerinterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervalue").textContent = timer;
    } else {
      clearInterval(timerinterval);
      document.querySelector
      ("#pbottom").innerHTML=`<h1>Game Over !</h1>`
    }
  }, 1000);
}


document.querySelector("#pbottom")
.addEventListener("click",function(details)
{
console.log(Number(details.target.textContent))
if(Number(details.target.textContent) == hitvalrn){
  increasescore()
  getnewhit()
  makebubble()
  console.log(true)

}
else{
  console.log("false")
}

  
})
runtimer();
makebubble()
getnewhit()
