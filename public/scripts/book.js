import Swiper from '/scripts/swiper/swiper-bundle.esm.browser.min.js';

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}

window.onscroll = () =>{

    searchform.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
 
}


/*----- login form -------- */

var loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{

    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{

    loginForm.classList.remove('active');
}

/*-------- swiper ---------- */

var swiper = new Swiper(".books-list", {
   
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

/*-------- featured section start ---------- */

var swiper = new Swiper(".featured-slider", {
   
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
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


  /*-------- arrivals section start ---------- */

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

  
  /*-------- reviews section start ---------- */

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

   /*-------- blog section start ---------- */

   var swiper = new Swiper(".blog-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

//////////////////////thanh keo
const sliderContainer = document.querySelector('.slider-container');
const sliderRange = document.querySelector('.slider-range');
const sliderHandle = document.querySelector('.slider-handle');
const sliderValue = document.createElement('div');
sliderValue.className = 'slider-value';
sliderValue.textContent = '50'; // Giá trị mặc định
sliderContainer.appendChild(sliderValue);

sliderHandle.addEventListener('mousedown', startDragging);
sliderHandle.addEventListener('touchstart', startDragging);

function startDragging(event) {
  event.preventDefault();
  document.addEventListener('mousemove', updateValue);
  document.addEventListener('touchmove', updateValue);
  document.addEventListener('mouseup', stopDragging);
  document.addEventListener('touchend', stopDragging);
}

function updateValue(event) {
  const containerWidth = sliderContainer.offsetWidth;
  const handleWidth = sliderHandle.offsetWidth;
  const positionX = event.pageX || event.touches[0].pageX;
  const offsetX = Math.max(0, Math.min(positionX - sliderContainer.offsetLeft, containerWidth - handleWidth));
  const percentage = (offsetX / (containerWidth - handleWidth)) * 100;
  const value = Math.round(percentage);
  
  sliderRange.style.width = `${percentage}%`;
  sliderHandle.style.left = `${percentage}%`;
  sliderValue.style.left = `${percentage}%`;
  sliderValue.textContent = value.toString();
}

function stopDragging() {
  document.removeEventListener('mousemove', updateValue);
  document.removeEventListener('touchmove', updateValue);
  document.removeEventListener('mouseup', stopDragging);
  document.removeEventListener('touchend', stopDragging);
}

