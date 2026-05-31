let score = 0;

function toonCoin(knop) {
  const coin = knop.parentElement.querySelector('.coin');
  if (coin.classList.contains('spring')) return; // al gespeeld

  // reset animatie zodat hij opnieuw kan triggeren als nodig
  coin.classList.remove('spring');
  void coin.offsetWidth; // reflow forceren

  coin.classList.add('spring');
  knop.disabled = true;

  score++;
  document.getElementById('score').textContent = 'Coins: ' + score;
}