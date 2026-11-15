const followBtn = document.getElementById('followBtn');

followBtn.addEventListener('click', () => {
  followBtn.classList.toggle('following');
  
  if (followBtn.classList.contains('following')) {
    followBtn.textContent = 'Following :)';
  } else {
    followBtn.textContent = 'Follow';
  }
});