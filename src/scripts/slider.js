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
