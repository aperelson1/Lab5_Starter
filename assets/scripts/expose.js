// expose.js

let hornChanged = function (e) {

  let val = e.target.value;
  let display = document.querySelector("img");
  let sound = document.querySelector("audio");

  switch (val) {
    case 'air-horn': 
      display.src = "assets/images/air-horn.svg";
      // load sound
      sound.src = "assets/audio/air-horn.mp3";
      break;
    case 'car-horn':
      display.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
      break;
    case 'party-horn':
      display.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
      break;
    default: 

  }
}
window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  // TODO
  let hornSelector = document.getElementById("horn-select");
  hornSelector.addEventListener('change', hornChanged);

  // set listener for play button
  const speaker = document.querySelector("audio");
  document.querySelector("button").addEventListener('click', () => {speaker.play()
    if (document.getElementById("horn-select").value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  // set listener for volume slider
  const slider = document.getElementById("volume");
  slider.addEventListener('input', (e) => {

    let curr = e.target.value;
    let volDisplay = document.querySelector("div img");

    speaker.volume = (curr / 100);
    if (curr == 0) {
      volDisplay.src = "assets/icons/volume-level-0.svg";
    } else if (curr > 0 && curr < 33) {
      volDisplay.src = "assets/icons/volume-level-1.svg";
    } else if (curr > 0 && curr < 67) {
      volDisplay.src = "assets/icons/volume-level-2.svg";
    } else {
      volDisplay.src = "assets/icons/volume-level-3.svg";
    }
  })

}
