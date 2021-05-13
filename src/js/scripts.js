const header = document.querySelector('.header');
const menuButton = header.querySelector('.header__menu');
const menu = header.querySelector('.header__navigation');
const title = document.querySelector('h1');
const button = document.querySelector('.btn');
const services = document.querySelectorAll('.services__card');
const promotions = document.querySelectorAll('.promotions__item');
const costButton = document.querySelector('.first-screen__container .btn');

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

const mobileServices = () => {
  for (const service of services) {
    const topCoords = service.getBoundingClientRect().top;
    topCoords < 300 && topCoords > 0 ? service.classList.add('opened') : service.classList.remove('opened');
  }
};

const mobilePromotions = () => {
  for (const promotion of promotions) {
    const topCoords = promotion.getBoundingClientRect().top;
    topCoords < 300 && topCoords > 0 ? promotion.classList.add('opened') : promotion.classList.remove('opened');
  }
};

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

menuButton.addEventListener('click', openMenu);
window.addEventListener('scroll', windowScroll);

if (window.innerWidth < 1099) {
  document.addEventListener('scroll', mobileServices);
  document.addEventListener('scroll', mobilePromotions);
} else {
  document.removeEventListener('scroll', mobileServices);
  document.removeEventListener('scroll', mobilePromotions)
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  cost.classList.add('opened');
  document.body.classList.add('hidden')
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePopup = () => {
  cost.classList.remove('opened');
  document.body.classList.remove('hidden')
  document.removeEventListener('keydown', onPopupEscKeydown);
};

button.addEventListener('mouseover', titleActive);
button.addEventListener('mouseout', titleActive);

const cost = document.querySelector('.cost');
const costBtnClose = cost.querySelector('.cost__close');
const costBg = cost.querySelector('.cost__bg');

costButton.addEventListener('click', openPopup);
costBg.addEventListener('click', closePopup);
costBtnClose.addEventListener('click', closePopup);
