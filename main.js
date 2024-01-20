import Typed from 'typed.js';
import confetti from 'canvas-confetti';


const typed = new Typed('#element', {
  strings: ['programer  .', ' designer'],
  typeSpeed: 50,
});



const apresiasiBtn = document.getElementById("apresiasi");

apresiasiBtn.addEventListener("click", () => {


  var myCanvas = document.createElement('canvas');
  myCanvas.style.position = "fixed"
  myCanvas.style.inset = 0
  myCanvas.style.width = "100vw"
  myCanvas.style.height = "100vh"
  document.body.appendChild(myCanvas);

  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
  });
  myConfetti({
    particleCount: 100,
    spread: 160
    // any other options from the global
    // confetti function
  });


})

