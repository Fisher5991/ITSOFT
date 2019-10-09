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
