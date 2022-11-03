
$(document).ready(function(){

  $('#menu-btn').click(function(){
    $('.navbar').addClass('active')
  })

  $('.navbar').click(function(){
    $('.navbar').removeClass('active')
  })

  $('#account-btn').click(function(){
    $('.account-form').addClass('active')
  })

  $('#close-form').click(function(){
    $('.account-form').removeClass('active')
  })

  $('.more12').click(function(){
    $('.courses .box').removeClass('hide')
    
  $('.more12').fadeOut(400)
  })

  $('.accordion').click(function(e){
    e.preventDefault();
   
    $(this).toggleClass('active').siblings().removeClass('active');
  
});
})



var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  loop:true,
grabCursor:true,

});

var swiper = new Swiper(".home-courses-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  loop:true,
grabCursor:true,

});


var swiper = new Swiper(".teacher-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  loop:true,
grabCursor:true,

});


var swiper = new Swiper(".reviw-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  loop:true,
grabCursor:true,

});







