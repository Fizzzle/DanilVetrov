window.addEventListener('DOMContentLoaded',function(){
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});