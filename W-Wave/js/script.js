window.addEventListener('DOMContentLoaded', function () {

  const modal = new GraphModal();

  $(".accordion-list").accordion({
    heightStyle: "content",
    active: true,
    collapsible: true,
    icons: false
  });

  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });


  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('right-block__burger_active')
    document.querySelector('.header__nav').classList.toggle('header__nav_active')
    document.querySelector('.header').classList.toggle('header-active')
    document.querySelector('.header-bottom__nav').classList.toggle('header-bottom__nav_active')
  });

  document.querySelector('.bottom-btns__btn-players-archive').addEventListener('click', function () {
    document.querySelector('.bottom-btns__btn-players-archive .passive').classList.toggle('btn-active')
  });

  document.querySelector('.bottom-btns__btn-players-ether').addEventListener('click', function () {
    document.querySelector('.bottom-btns__btn-players-ether .passive').classList.toggle('btn-active')
  });

  document.querySelector('.header-bottom__btns-mobil').addEventListener('click', function () {
    document.querySelector('.bottom-btns').classList.toggle('header-bottom__btns_active')
    document.querySelector('.header-bottom__btns-mobil').classList.toggle('header-bottom__btns-mobil_active')
    document.querySelector('.header__bottom').classList.toggle('header__bottom_active')
  });

  document.querySelector('.podcasts-btns__btn').addEventListener('click', function () {
    var elements = document.getElementsByClassName('podcasts__item');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("podcasts__item_active");
    }
  });

  document.querySelector('.podcasts-btns__btn').addEventListener('click', function () {
    document.querySelector('.podcasts-btns__btn').classList.toggle('podcasts-btns__btn--passive')
  });

  const anchors = document.querySelectorAll('.header-nav__link, .footer-nav__link')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
        btn.classList.remove('tabs-nav__btn--active')
      });
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });


  var swiper2 = new Swiper('.swiper-two', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-two .swiper-pagination',
      clickable: true,
    },
  });


  var swiper1 = new Swiper('.swiper-one', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-one.swiper-button-next',
      prevEl: '.swiper-one.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-one-pagination',
      clickable: true,
      type: 'fraction',
    },
  });



  new JustValidate('.about__form', {
    colorWrong: 'var(--color-error_color)',

    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 35
      },
      mail: {
        required: true,
        email: true
      },
    },
    messages: {
      name: {
        required: 'Ошибка',
        minLength: 'Ошибка',
        maxLength: 'Ошибка'
      },
      mail: {
        required: 'Ошибка',
        email: 'Ошибка'
      },
    },
  });

  const buttons = document.querySelectorAll('.content-desc__player')

  for (let button of buttons) {
    button.addEventListener("click", e => {
      let activeBtn = document.querySelector('button.pause')
      if (activeBtn && activeBtn !== e.target) {
        activeBtn.classList.remove('pause')
      }
      button.classList.toggle('pause')
    })
  }

});
