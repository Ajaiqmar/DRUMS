function playSound(instrument)
{
  switch(instrument)
  {
    case 'W':
      var aud = new Audio("SOUNDS/crash.mp3");
      aud.play();
      break;
    case 'A':
      var aud = new Audio("SOUNDS/kick-bass.mp3");
      aud.play();
      break;
    case 'S':
      var aud = new Audio("SOUNDS/snare.mp3");
      aud.play();
      break;
    case 'D':
      var aud = new Audio("SOUNDS/tom-1.mp3");
      aud.play();
      break;
    case 'J':
      var aud = new Audio("SOUNDS/tom-2.mp3");
      aud.play();
      break;
    case 'K':
      var aud = new Audio("SOUNDS/tom-3.mp3");
      aud.play();
      break;
    case 'L':
      var aud = new Audio("SOUNDS/tom-4.mp3");
      aud.play();
      break;
  }
}

function buttonAnimation(instrument)
{
  var ab = document.querySelector("."+instrument);
  ab.classList.add("pressed");
  setTimeout(function(){
    ab.classList.remove("pressed");
  },100);
}

var words = document.querySelectorAll(".words");

for(var i=0;i<words.length;i++)
{
    words[i].addEventListener("click",function(){
      playSound(this.innerHTML);
      buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
  playSound(event.key.toUpperCase());
  buttonAnimation(event.key.toUpperCase());
});
