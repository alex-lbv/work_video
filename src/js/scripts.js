const header = document.querySelector('.header');
const menuButton = header.querySelector('.header__menu');
const menu = header.querySelector('.header__navigation');
const title = document.querySelector('h1');
const button = document.querySelector('.btn');
const services = document.querySelectorAll('.services__card');
const promotions = document.querySelectorAll('.promotions__item');
const costButton = document.querySelector('.first-screen__container .btn');
const servicesButton = document.querySelector('.services__form .btn')
const filter = document.querySelector('.solutions__filter');
const filterButtonOpen = document.querySelector('.solutions__filter-btn');
const filterButtonClose = document.querySelector('.solutions__filter-close');

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

document.querySelectorAll(".gallery-swiper").forEach(function (slider, index) {
  slider.classList.add("gallery-swiper--" + index);
  window["swiper" + index] = new Swiper(".gallery-swiper--" + index, {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".gallery__button-next--" + index,
      prevEl: ".gallery__button-prev--" + index,
    },
  });
});

menuButton.addEventListener('click', openMenu);
window.addEventListener('scroll', windowScroll);

if (window.innerWidth < 1099) {
  document.addEventListener('scroll', mobileServices);
  document.addEventListener('scroll', mobilePromotions);
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
const estimateBtn = document.querySelector('.solutions__announcement .btn--dark')

if (costButton) {
  costButton.addEventListener('click', openPopup);
}
if (servicesButton) {
  servicesButton.addEventListener('click', openPopup);
}
if (estimateBtn) {
  estimateBtn.addEventListener('click', (evt => {
    evt.preventDefault();
    openPopup();
  }));
}
costBg.addEventListener('click', closePopup);
costBtnClose.addEventListener('click', closePopup);

const maskPhone = (selector, masked = '+7 (___) ___-__-__') => {
  const elements = document.querySelectorAll(selector);

  function mask(event) {
    const keyCode = event.keyCode;
    const template = masked,
      def = template.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    let i = 0,
      newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, this.value.length).replace(/_+/g,
      function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type === "blur" && this.value.length < 5) {
      this.value = "";
    }
  }

  for (const elem of elements) {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }
}

maskPhone('input[type="tel"]');

const menuItem = document.querySelector('#menu-item-214');

if (menuItem && window.innerWidth < 1099) {
  menuItem.addEventListener('click', openMenu);
}

const toggleFilter = () => {
  filter.classList.toggle('opened');
  document.body.classList.toggle('hidden');
};

let oldValue = 0
let newValue = 0

const windowScrollFilter = () => {
  const topCoords = document.querySelector('.solutions').getBoundingClientRect().top;
  const bottomCoords = document.querySelector('.solutions').getBoundingClientRect().bottom
  newValue = window.pageYOffset;
  oldValue > newValue && topCoords < -25 && bottomCoords > 750 ? filterButtonOpen.classList.add('sticky') : filterButtonOpen.classList.remove('sticky');
  oldValue = newValue;
};

if (window.innerWidth < 1199 && filterButtonOpen) {
  document.addEventListener('scroll', windowScrollFilter);
  filterButtonOpen.addEventListener('click', toggleFilter);
  filterButtonClose.addEventListener('click', toggleFilter);
}

const solutionsList = document.querySelector('.solutions__list');

if (solutionsList) {
  const solutionItems = solutionsList.querySelectorAll('.solution');

  solutionItems.forEach((item) => {
    const characteristics = item.querySelectorAll('.solution__characteristics > li');

    if (characteristics.length > 7) {
      const seeAllButton = document.createElement('button');
      seeAllButton.textContent = 'Посмотреть все';
      seeAllButton.classList.add('solution__btn-see-all');

      characteristics.forEach(() => {
        item.classList.add('solution--drop');
        item.querySelector('.solution__container').appendChild(seeAllButton);
      });

      const defaultList = () => {
        solutionItems.forEach((solItem) => {
          if (solItem.classList.contains('solution--opened')) {
            solItem.classList.remove('solution--opened');

            solutionsList.querySelectorAll('.solution__btn-see-all')
              .forEach((btn) => {
                btn.textContent = 'Посмотреть все';
              });
          }
        });
      };

      const openList = () => {
        const topCoords = item.getBoundingClientRect().top;
        setTimeout(() => {
          window.scrollBy(
            {
              top: topCoords - 80,
              behavior: 'smooth',
            });
        }, 300);
        if (item.classList.contains('solution--drop')) {
          item.classList.add('solution--opened');
          seeAllButton.textContent = 'Скрыть';

          seeAllButton.addEventListener('click', hideList);
          seeAllButton.removeEventListener('click', openList);
        }
      };

      const hideList = () => {
        if (item.classList.contains('solution--opened')) {
          item.classList.remove('solution--opened');
          seeAllButton.textContent = 'Посмотреть все'
          seeAllButton.removeEventListener('click', hideList);
          seeAllButton.addEventListener('click', openList);
        }
        const topCoords = item.getBoundingClientRect().top;
        setTimeout(() => {
          window.scrollBy(
            {
              top: topCoords - 80,
              behavior: 'smooth',
            });
        }, 300);
      };

      seeAllButton.addEventListener('click', openList);
    }
  });
}
