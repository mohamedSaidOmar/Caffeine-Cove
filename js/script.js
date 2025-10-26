const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('.nav .links');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav .links ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});