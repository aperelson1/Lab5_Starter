// explore.js

const synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector("select");
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) option.textContent += " - DEFAULT";
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoices();
  synth.addEventListener('voiceschanged', populateVoices);


  // set listener for submit
  const ready = document.querySelector('button');
  ready.addEventListener('click', (e) => {
    e.preventDefault(); 
    let utter = new SpeechSynthesisUtterance(document.querySelector('textarea').value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utter.voice = voice;
      }
    }

    // set listeners for utterance
    utter.addEventListener('start', (e) => {
      document.querySelector('img').src = "assets/images/smiling-open.png";
    });

    utter.addEventListener('end', (e) => {
      document.querySelector('img').src = "assets/images/smiling.png";
    });

    synth.speak(utter);
  });
}