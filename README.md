# Laravel 4 Notifier

A simple and elegant flash notifer. It may also be used in any other HTML application. The CSS uses media 
queries for adapting the notifer to different device resolutions.


## Requirements

- jQuery


## How to Install

##### Download the Repository

    https://github.com/KyleGawryluk/laravel-4-notifier/archive/master.zip

##### Installation

Include the CSS and JS in your application.
    
    <link rel="stylesheet" type="text/css" href="path/to/your/CSS/notifier.css">
    <script src="path/to/your/JavaScript/notifier.js"></script>

or add into your existing JS

    function showNotifier (text) {
        $('.notifier').slideDown('fast');
        $('.notifier').text(text);
            //optional timeout
        setTimeout(function() {
            hideNotifier();
        }, 2000);
    }

    function hideNotifier () {
        $('.notifier').slideUp('fast');
    }


## Usage

### Activating the notifier

Change the text to the text of your notification message.

##### Inline HTML

    <button onclick="showNotifier('Saving')">Save</button>

##### Call via jQuery

    $('.view').on('click',function(){
        showNotifier('Loading');
    });

-----

### Hide the notifier

The notifier will disapper if the page refreshed but if you want to hide it 
via a trigger like a timeout or AJAX response, use: 

    hideNotifier();

-----

### Demo

[Notifier Demo](http://jsfiddle.net/AKUCw/4/)
<iframe width="100%" height="300" src="http://jsfiddle.net/AKUCw/9/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

-----


### LICENSE

> Version 1, December 2009

> Copyright (C) 2009 Philip Sturgeon <email@philsturgeon.co.uk>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

> DON'T BE A DICK PUBLIC LICENSE
> TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 1. Do whatever you like with the original work, just don't be a dick.

     Being a dick includes - but is not limited to - the following instances:

     1a. Outright copyright infringement - Don't just copy this and change the name.
     1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
     1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

 2. If you become rich through modifications, related works/services, or supporting the original work,
 share the love. Only a dick would make loads off this work and not buy the original works
 creator(s) a pint.

 3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes
 you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.
