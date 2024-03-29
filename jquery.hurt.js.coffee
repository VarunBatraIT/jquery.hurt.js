$ ->
  $.fn.hurt = (options) ->
    settings = $.extend({
    #  These are the defaults.
      swearWords: ['fuck off', 'kill yourself', 'mother fucker', 'hate you', 'go to hell', 'leave me alone',
                   'you are dead'], #array of words/sentences if found plugin will warn
      errorMessage: 'Kind of language you are using can actually <b>HURT</b> someone. Please reconsider.' #message to show
      classOnElement: 'hurt' #class will be added to input text or textarea where user is typing
      onEvent: 'focusout' #or keyup, keydown
      errorTemplate: '<div class="text-warning">errorMessage</div>'
    }, options);
    settings.errorTemplate = '<div id="hurt-error">' + settings.errorTemplate.replace('errorMessage',
      settings.errorMessage) + '</div>'
    errorDisplayed = false
    removeError = ($element) ->
      if(errorDisplayed)
        $('#hurt-error').remove()
        $element.removeClass(settings.classOnElement)
        errorDisplayed = false

    displayError = ($element) ->
      if(!errorDisplayed)
        $('#hurt-error').remove()
        $element.addClass(settings.classOnElement)
        $(settings.errorTemplate).insertBefore($element)
        errorDisplayed = true

    this.on(settings.onEvent, ->
      $this = $(this)
      $.each(settings.swearWords, (index, word) ->
        if($this.val().toLowerCase().indexOf(word.toLowerCase()) >= 0)
          displayError($this)
          false
        else
          removeError($this)
          true
      )
    )
