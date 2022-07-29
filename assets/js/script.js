let sequence = []
let playerSequence = []

const startButton = document.querySelector('.js-start');

function startGame() {
  startButton.classList.add('hidden')
}

startButton.addEventListener('click', startGame);