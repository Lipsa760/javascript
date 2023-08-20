var noOfDrums =document.querySelectorAll(".drum").length;
for(var i=0 ; i< noOfDrums;i++ ){

  // button detection
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 var buttonInnerHtml=this.innerHTML;
 makesound(buttonInnerHtml);
});
}

// key detection
document.addEventListener("keypress",function(event){
  makesound(event.key);
});



function makesound(key){
  switch(key){
      case "W":
          var tom11 = new Audio("tom-1.mp3");
          tom11.play();
        break;
        case "A":
          var tom22 = new Audio("tom-2.mp3");
          tom22.play();
        break;
        case "S":
          var tom33 = new Audio("tom-3.mp3");
          tom33.play();
        break;
        case "D":
          var tom44 = new Audio("tom-4.mp3");
          tom44.play();
        break;
        case "J":
          var snare1 = new Audio("snare.mp3");
          snare1.play();
        break;
        case "K":
          var crash1 = new Audio("crash.mp3");
          crash1.play();
        break;
        case "L":
          var kick1 = new Audio("kick-bass.mp3");
          kick1.play();
        break; 
        case "w":
          var tom1 = new Audio("tom-1.mp3");
          tom1.play();
        break;
        case "a":
          var tom2 = new Audio("tom-2.mp3");
          tom2.play();
        break;
        case "s":
          var tom3 = new Audio("tom-3.mp3");
          tom3.play();
        break;
        case "d":
          var tom4 = new Audio("tom-4.mp3");
          tom4.play();
        break;
        case "j":
          var snare = new Audio("snare.mp3");
          snare.play();
        break;
        case "k":
          var crash = new Audio("crash.mp3");
          crash.play();
        break;
        case "l":
          var kick = new Audio("kick-bass.mp3");
          kick.play();
        break; 
        default:
        alert("invalid");
        break;
      }
}
