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
$('textarea, input').hurt(
{
      swearWords: ['fuck off', 'kill yourself', 'mother fucker', 'hate you', 'go to hell', 'leave me alone',
                   'you are dead'], #array of words/sentences if found, plugin will warn
      errorMessage: 'Kind of language you are using can actually <b>HURT</b> someone. Please reconsider.' #message to show
      classOnElement: 'hurt' #class will be added to input text or textarea where user is typing
      onEvent: 'focusout' #or keyup, keydown
      errorTemplate: '<div class="text-warning">errorMessage</div>'
    }
);

```

