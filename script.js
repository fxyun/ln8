document.getElementById('burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
