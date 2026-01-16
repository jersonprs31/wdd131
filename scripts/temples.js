const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

const hamburgerBtn = document.getElementById('menu');
const navList = document.querySelector('.navigation');

hamburgerBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
    hamburgerBtn.classList.toggle('open');
});