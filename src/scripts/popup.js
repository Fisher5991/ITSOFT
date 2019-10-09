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
