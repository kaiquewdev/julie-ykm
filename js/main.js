;(function ( window, document, jQuery ) {
  'use strict';
  var root = window.Julie = window.Julie || {};

  function randomBackgroundHandler () {
    var $html = $('html');
    var imgPath = 'img/';
    var imgs = [
      'bg1.jpg', 
      'bg2.jpg', 
      'bg3.jpg', 
      'bg4.jpg', 
    ];
    var randomIndex = Math.max( 0, Math.floor( Math.random() * ( imgs.length - 1 ) ) );
    var img = [ 
      imgPath, 
      imgs[ randomIndex ] 
    ].join('');

    $html.css({
      'background': 'url(' + img + ')'
    });

    return root;
  }
  root.randomBackground = randomBackgroundHandler;

  function runHandler () {
    root.randomBackground();
    setInterval(root.randomBackground, 45000);
    return root;
  }
  root.run = runHandler;

  root.run();
}) ( window, document, jQuery, undefined );
