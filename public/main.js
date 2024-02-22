// import { currSpell } from "./sketch.js";
let currSpell = false;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;



//look for the button with class startBtn
const startBtnJs = document.querySelector("#startBtn");

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";

//only output the highest confidence result
recognition.interimResults = false;

//how many alternatives do you want to check for
recognition.maxAlternatives = 1;


startBtnJs.addEventListener("click", () => {
    recognition.start();
});

recognition.onresult = (e) => {
    console.log(e.results[e.results.length - 1][0].transcript.trim());
    let spell = e.results[e.results.length - 1][0].transcript.trim();
    if (spell === 'abracadabra'){
      currSpell = true;
      
      
    }
    else if (spell === 'stop'){
      recognition.stop();
      currSpell = false;
    }
  recognition.start(); 
}


export { currSpell };

// spellActive = false;