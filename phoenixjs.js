let header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    const scrolled= window.scrollY;

    if(scrolled>50){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
});

$('.header__menu-btn i').click(function(){
    $('.header__nav').toggleClass("active");
    $('.header__menu-btn i').toggleClass("active");
});

$(document).ready(function(){
    $('.home__title').hide(0).show(2000)
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 20,
        margin: 20,
        loop: true,
        autoplayTimeOut: 1500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
           
            600:{
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false  
            }
        }
    });
  });