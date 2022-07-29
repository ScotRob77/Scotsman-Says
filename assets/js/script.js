let sequence = []
let playerSequence = []
let level = 0;

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function nextStep() {
  const tiles = ['red', 'blue', 'green', 'yellow'];
  const random = tiles[Math.floor(Math.random() * tiles.length)]

  return random
}

function nextRound() {
  level++;

  const nextSequence = [...sequence]
}

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer';
}

startButton.addEventListener('click', startGame);