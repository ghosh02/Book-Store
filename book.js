searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}


let loginForm=document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}


window.onscroll=()=>{

    searchForm.classList.remove('active');
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fadeout();
}

var swiper = new Swiper(".book-slider", {
   loop:true,
   centeredSlides:true,
   autoplay:{
    delay:1600,
    disableOnInteraction:false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },

      740: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

// featured book section
  var swiper = new Swiper(".featured-slider", {
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
       450:{
        slidesPerView: 2,
       },
 
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
     },
   });

//    new arrivals
var swiper = new Swiper(".arrival-slider", {
    loop:true,
    centeredSlides:true,
    spaceBetween:10,
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
 
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
         spaceBetween:40,
       },
     },
   });

  //  review slider 

  var swiper = new Swiper(".review-slider", {
    spaceBetween:15,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9000,
     disableOnInteraction:false,
    },
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
 
       740: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
     },
   });

  //  blog slider 
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween:15,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    // autoplay:{
    //  delay:9000,
    //  disableOnInteraction:false,
    // },
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
 
       740: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
     },
   });

  //  loader section 
  function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  function fadeout(){
    setTimeout(loader,1200);
  }