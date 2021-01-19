AOS.init();

$('.nav-circle').click(() =>{

    $('.layer').css("left","0%");
});
$('.cross').click(() =>{
    $('.layer').css("left","-100%");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("nav").css("background-color","white")
  } else {
    $("nav").css("background-color","transparent")
  }
}


var swiper = new Swiper('.swiper-container', {
effect: 'coverflow',
grabCursor: true,
centeredSlides: true,
slidesPerView: 'auto',
coverflowEffect: {
rotate: 50,
stretch: 0,
depth: 100,
modifier: 1,
slideShadows : true,
},
pagination: {
el: '.swiper-pagination',
},
});