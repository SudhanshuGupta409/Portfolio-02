$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });
    
    let hamberger = document.querySelector('.hamberger');
    let cancle = document.querySelector('.cancle');
    let mobileNav = document.querySelector('.mobile-nav');
    let links = document.querySelector('.hide');

    hamberger.addEventListener("click", ()=>{
        mobileNav.classList.add('open')
    });
    cancle.addEventListener("click", ()=>{
        mobileNav.classList.remove('open')
    });
    links.addEventListener("click", ()=>{
        mobileNav.classList.remove('open')
    })

});
