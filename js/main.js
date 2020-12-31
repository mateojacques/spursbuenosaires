let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
let closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0px)';
})

closeBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(200px)';
})