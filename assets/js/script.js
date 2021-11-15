// nav link script
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.my-link');
const link = document.querySelectorAll("a")
const blackBgColor = e => {
    e ? document.body.style.backgroundColor = "#0e0e0e" : document.body.style.backgroundColor = "#1E1E1E"
    e ? document.querySelector("header").style.backgroundColor = "#0e0e0e" : document.querySelector("header").style.backgroundColor = "#1E1E1E"
};

// event click humburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navLink.classList.toggle('active');
    blackBgColor(navLink.classList.contains("active"));
});

link.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navLink.classList.remove('active');
        blackBgColor(navLink.classList.contains("active"));
    });
});