const openBtn = document.getElementById('openPopupBtn');
const closeBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});


openBtn.addEventListener('click', () => {
  popup.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});


