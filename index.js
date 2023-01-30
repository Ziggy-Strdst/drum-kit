const w = new Audio('sounds/tom-1.mp3');
const a = new Audio('sounds/tom-2.mp3');
const s = new Audio('sounds/tom-3.mp3');
const d = new Audio('sounds/tom-4.mp3');
const j = new Audio('sounds/snare.mp3');
const k = new Audio('sounds/crash.mp3');
const l = new Audio('sounds/kick-bass.mp3');

for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function (e) {
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

document.addEventListener('keydown', function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      w.play();
      break;
    case 'a':
      a.play();
      break;
    case 's':
      s.play();
      break;
    case 'd':
      d.play();
      break;
    case 'j':
      j.play();
      break;
    case 'k':
      k.play();
      break;
    case 'l':
      l.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
  const btn = document.querySelector('.' + key);
  btn.classList.add('pressed');

  setTimeout(function () {
    btn.classList.remove('pressed');
  }, 100);
}
