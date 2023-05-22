'useStrict';

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    console.log('No Number');
    document.querySelector('.right .message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'too Low';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'too Hight';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});
