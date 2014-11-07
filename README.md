jquery.hurt.js
==============

A small plugin to warn people when using swear words.

#Motivation:

[![Think before you type](http://img.youtube.com/vi/YkzwHuf6C2U/0.jpg)](http://www.youtube.com/watch?v=YkzwHuf6C2U)

## How it works?
Plugin has inbuilt very small list (you can add more) of swear words/sentences so if anyone types something containing these words, it will give them a warning.

## Usage

Using plugin is pretty much forward:

```javascript
$("input, textarea").hurt({
        swearWords: ['fuck off', 'kill yourself', 'mother fucker', 'hate you', 'go to hell', 'leave me alone', 'you are dead'],
        errorMessage: 'Kind of language you are using can actually <b>HURT</b> someone. Please reconsider.',
        classOnElement: 'hurt',
        onEvent: 'focusout',
        errorTemplate: '<div class="text-warning">errorMessage</div>'
      }
})

```

