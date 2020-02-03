// let el = document.getElementById('tron-legacy');
// if(el){
//   el.addEventListener('mouseover',tronLegacy);
// }
// document.getElementsByTagName('tron').addEventListener('onmouseout',tronLegacy());
let el1 = document.getElementById('tron-legacy');
if(el1){
  el1.addEventListener('mouseover',tronBackground);
  el1.addEventListener('mouseout',tronBackgroundstop);
}
// function tronLegacy() {
//   var sound = new Howl({
//     src: ['../../sounds/tron-1.mp3']
//   });

//   sound.play();
// }

var di1 
function tronBackground() {
  dil = sounder.play()
}

function tronBackgroundstop() {
  sounder.stop();
}

