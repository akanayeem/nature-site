const navBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener("click", function(){
    navLinks.classList.toggle('active')
})