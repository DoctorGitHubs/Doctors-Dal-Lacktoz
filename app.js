document.getElementById('cat').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('meow').play();
});

document.getElementById('duck').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('quack').play();
});

document.getElementById('cheese').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('emotional-damage').play();
});