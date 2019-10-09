(function () {
  var ESC_KEYCODE = 27;

  window.utils = {
    isEscEvent: function (evt, cb) {
      if (evt.keyCode === ESC_KEYCODE) {
        cb();
      }
    }
  }
})();

(function () {
  var causesSlider = new Swiper('.causes__slider', {
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="causes__slider-dot slider__dot button ' + className + '">' + (index + 1) + '</span>';
      }
    }
  });
})();

(function () {
  var page = document.querySelector('.page');
  var menuButton = document.querySelector('.header__menu-button');
  var headerSide = document.querySelector('.header__side');

  var onMenuButtonClick = function (evt) {
    evt.preventDefault();
    page.classList.toggle('js-disabled');
    page.classList.toggle('js-opened');
  }

  menuButton.addEventListener('click', onMenuButtonClick);
})();

(function () {
  var riskTabs = document.querySelector('.risk.tabs');
  var tabsContents = riskTabs.querySelectorAll('.tabs__content');
  var tabsItems = riskTabs.querySelectorAll('.tabs__item');
  var currentActiveTab = riskTabs.querySelector('.tabs__content.js-active');
  var currentActiveContent = riskTabs.querySelector('.tabs__item.js-active');
  var currentIndex;

  var onTabClick = function (evt, index) {
    evt.preventDefault();
    currentIndex = index;
    currentActiveTab.classList.remove('js-active');
    currentActiveContent.classList.remove('js-active');
    currentActiveTab = tabsItems[currentIndex];
    currentActiveContent = tabsContents[currentIndex];
    currentActiveTab.classList.add('js-active');
    currentActiveContent.classList.add('js-active');
  }

  var addTabClickListener = function (tab, index) {
    tab.addEventListener('click', function (evt) {
      onTabClick(evt, index);
    });
  }

  for (var i = 0; i < tabsItems.length; i++) {
    addTabClickListener(tabsItems[i], i);
  }
})();

(function () {
  var page = document.querySelector('.page');
  var feedbackPopup = document.querySelector('.popup--feedback');
  var feedbackLink = document.querySelector('.header__feedback-link');
  var feedbackCloseButton = feedbackPopup.querySelector('.popup__close-button');

  var closePopup = function () {
    feedbackPopup.classList.remove('js-shown');
    document.removeEventListener('click', onPopupEscPress);
    page.classList.remove('js-disabled');
  }

  var onPopupEscPress = function (evt) {
    window.utils.isEscEvent(evt, closePopup);
  }

  var onFeedbackLinkClick = function (evt) {
    evt.preventDefault();

    feedbackPopup.classList.add('js-shown');
    page.className = 'page js-disabled';
    document.addEventListener('keydown', onPopupEscPress)
  }

  var onCloseButtonClick = function (evt) {
    evt.preventDefault();
    closePopup();
  }

  var onOverlayClick = function (evt) {
    if (evt.target === feedbackPopup) {
      closePopup();
    }
  }

  feedbackLink.addEventListener('click', onFeedbackLinkClick);
  feedbackPopup.addEventListener('click', onOverlayClick);
  feedbackCloseButton.addEventListener('click', onCloseButtonClick);
})();
