document.getElementById('toggle-lyrics').addEventListener('click', function () {
  const lyrics = document.querySelector('.lyrics');
  lyrics.classList.toggle('hidden');
  this.textContent = lyrics.classList.contains('hidden') ? 'Show Lyrics' : 'Hide Lyrics';
});
