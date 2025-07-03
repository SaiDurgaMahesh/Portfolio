const cursorBlob = document.querySelector('.cursor-blob');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursorBlob.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
});


const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  navbar.classList.add('active');
  menuToggle.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  navbar.classList.remove('active');
  menuToggle.style.display = 'block';
});
