function DrumKitController() {
  this.drumElements = {
    'w': "sounds/tom-1.mp3",
    'a': "sounds/tom-2.mp3",
    's': "sounds/tom-3.mp3",
    'd': "sounds/tom-4.mp3",
    'j': "sounds/snare.mp3",
    'k': "sounds/crash.mp3",
    'l': "sounds/kick-bass.mp3",
  }

  this.playSound = (key) => {
    if(this.drumElements.hasOwnProperty(key)) {
      var audio = new Audio();
      var src = document.createElement("source");
      src.type = "audio/mpeg";
      src.src  = this.drumElements[key];
      audio.appendChild(src);
      audio.play();
    }
  }
}

function animateButton(key) {
  var button = document.querySelector("." + key);
  if(button != null) {
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 100);
  }
}

var drumButtons = document.getElementsByClassName('drum');
var drumKitController = new DrumKitController();

for (let index = 0; index < drumButtons.length; index++) {
  drumButtons[index].addEventListener("click", function () {
    animateButton(this.innerHTML);
    drumKitController.playSound(this.innerHTML);
  });
}

document.addEventListener('keydown', function (event) {
  animateButton(event.key)
  drumKitController.playSound(event.key);
});