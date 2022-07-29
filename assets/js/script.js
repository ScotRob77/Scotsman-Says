let sequence = []
let playerSequence = []
let level = 0;

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function activateTile(color) {
  const tile = document.querySelector(`[data-tile='${color}']`);
  const sound = document.querySelector(`[data-sound='${color}']`);

  tile.classList.add('activated');
  setTimeout(() => {
    tile.classList.remove('activated');
  }, 300);
}

function playRound(nextSequence) {
  nextSequence.forEach((color, i) => {
    setTimeout(() => {
      activateTile(color);
    }, (i++) * 600);
  });
}

function nextStep() {
  const tiles = ['red', 'blue', 'green', 'yellow'];
  const random = tiles[Math.floor(Math.random() * tiles.length)]

  return random
}

function nextRound() {
  level++;

  const nextSequence = [...sequence]
  nextSequence.push(nextStep());
}

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer';
}

startButton.addEventListener('click', startGame);