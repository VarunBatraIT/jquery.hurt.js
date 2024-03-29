// Generated by CoffeeScript 1.8.0
(function() {
  $(function() {
    return $.fn.hurt = function(options) {
      var displayError, errorDisplayed, removeError, settings;
      settings = $.extend({
        swearWords: ['fuck off', 'kill yourself', 'mother fucker', 'hate you', 'go to hell', 'leave me alone', 'you are dead'],
        errorMessage: 'Kind of language you are using can actually <b>HURT</b> someone. Please reconsider.',
        classOnElement: 'hurt',
        onEvent: 'focusout',
        errorTemplate: '<div class="text-warning">errorMessage</div>'
      }, options);
      settings.errorTemplate = '<div id="hurt-error">' + settings.errorTemplate.replace('errorMessage', settings.errorMessage) + '</div>';
      errorDisplayed = false;
      removeError = function($element) {
        if (errorDisplayed) {
          $('#hurt-error').remove();
          $element.removeClass(settings.classOnElement);
          return errorDisplayed = false;
        }
      };
      displayError = function($element) {
        if (!errorDisplayed) {
          $('#hurt-error').remove();
          $element.addClass(settings.classOnElement);
          $(settings.errorTemplate).insertBefore($element);
          return errorDisplayed = true;
        }
      };
      return this.on(settings.onEvent, function() {
        var $this;
        $this = $(this);
        return $.each(settings.swearWords, function(index, word) {
          if ($this.val().toLowerCase().indexOf(word.toLowerCase()) >= 0) {
            displayError($this);
            return false;
          } else {
            removeError($this);
            return true;
          }
        });
      });
    };
  });

}).call(this);
