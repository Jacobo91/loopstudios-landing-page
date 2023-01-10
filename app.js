const navbar = document.querySelector('nav');
const navHeight = navbar.clientHeight;
const banner = document.querySelector('.banner');
const toggleBtn = document.querySelector('.toggle-menu');
const toggleIcon = document.querySelector('.bars-icon');
const navUl = document.querySelector('ul');

banner.style.top = - + navHeight + 'px';



function handleMenu() {
    toggleIcon.classList.toggle('fa-xmark');
    toggleIcon.classList.toggle('fa-bars');

    navUl.style.display = (navUl.style.display === 'block') ? 'none': 'block';
}

toggleBtn.addEventListener('click', handleMenu);