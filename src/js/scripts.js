const header = document.querySelector('.header');
const menuButton = header.querySelector('.header__menu');
const menu = header.querySelector('.header__navigation');
const title = document.querySelector('h1');
const button = document.querySelector('.btn');

const windowScroll = () => {
  const state = window.pageYOffset;
  (state > 50) ? header.classList.add('sticky') : header.classList.remove('sticky');
};

const openMenu = () => {
  menu.classList.toggle('opened');
  menuButton.classList.toggle('opened');
  document.body.classList.toggle('hidden')
};

const titleActive = () => {
  title.classList.toggle('active');
};



menuButton.addEventListener('click', openMenu);
window.addEventListener('scroll', windowScroll);

const swiperReview = new Swiper(".review-swiper", {
  navigation: {
    nextEl: ".review__button-next",
    prevEl: ".review__button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  centeredSlides: true,
  effect: "flip",
  grabCursor: true,
  loop: true,
});

const swiperPartners = new Swiper(".partners-swiper", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: true,
    }
  },
});

const swiperGallery = new Swiper(".gallery-swiper", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev",
  },
});

button.addEventListener('mouseover', titleActive);

button.addEventListener('mouseout', titleActive);

