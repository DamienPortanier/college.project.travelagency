/* for create this js i took inspiration on https://www.youtube.com/watch?v=BN6fH1nRDxA */

/* Menu button when user use small screen */

const menubutton = document.querySelector('#menu-button'); /* select the id menu-button and store it, into the constant menubutton */
const navbar = document.querySelector('.header .navbar'); /* select the two class header navbar and store it, into the constant navbar */

/* When the user click on the menu button he gonna run the function below; this gonna add (.classList.toggle) the class active in CSS; so then hamburger menu gonna be display on small screen (because inside @media) */
menubutton.addEventListener('click',()=>{
    navbar.classList.toggle('active'); /*  https://www.w3schools.com/howto/howto_js_toggle_class.asp */

})

/* Swiper the carousel - for create the swiper js my source is https://swiperjs.com/get-started#initialize-swiper */ 

 const swiper = new Swiper('.home-slider', {
    loop: true, //this permit to slide images of carousel indefinitely 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  }); 