let score = 0;

function toonCoin(knop) {
  const coin = knop.previousElementSibling;
  if (!coin.classList.contains('zichtbaar')) {
    coin.classList.add('zichtbaar');
    score++;
    document.getElementById('score').textContent = 'Coins: ' + score;
  }
}