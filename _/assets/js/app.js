//= include ../bower_components/jquery/dist/jquery.min.js
//= include ../_/assets/js/plugins/noframework.waypoints.min.js



(function($) {

  //--------------------
  //  Internal Scripts
  //--------------------

  // The GlobalUI object contains Javascript used across all pages (Navigation, Search, Etc.).
  // The code below is for demonstration only. Please add/modify/delete/change as necessary.
  var GlobalUI = {

    config: {
    },

    init: function() {

      this.reactiveHeader();
      this.smoothScroll();
      this.headerColors();

    },

    reactiveHeader: function() {
			/* if(!navigator.userAgent.match('CriOS')) { //conditional check for Chrome for iOS - DONT HIDE MENU BAR*/
			var elSelector = '#altr-header',
				elClassHidden = 'altr-header--scrolled',
				elNarrowOffset = 50,
				throttleTimeout = 250,
				$element = $(elSelector);
			if (!$element.length)
				return true;
			var $window = $(window),
				wHeight = 0,
				wScrollCurrent = 0,
				wScrollBefore = 0,
				wScrollDiff = 0,
				$document = $(document),
				dHeight = 0,
				throttle = function(delay, fn) {
					var last, deferTimer;
					return function() {
						var context = this,
						args = arguments,
						now = +new Date;
						if (last && now < last + delay) {
							clearTimeout(deferTimer);
							deferTimer = setTimeout(function() {
								last = now;
								fn.apply(context, args);
							}, delay);
						} else {
							last = now;
							fn.apply(context, args);
						}
					};
				};
			$window.on('scroll', throttle(throttleTimeout, function() {
				dHeight = $document.height();
				wHeight = $window.height();
				wScrollCurrent = $window.scrollTop();
				wScrollDiff = wScrollBefore - wScrollCurrent;

				if (wScrollCurrent <= 0) $element.removeClass(elClassHidden);

				else if (wScrollDiff > 0 && $element.hasClass(elClassHidden)) $element.removeClass(elClassHidden);
				else if (wScrollDiff < 0) {
					if (wScrollCurrent + wHeight >= dHeight && $element.hasClass(elClassHidden)) $element.removeClass(elClassHidden);
					else $element.addClass(elClassHidden);
				}
				wScrollBefore = wScrollCurrent;
			}));
			/*}; //end conditional check for Chrome for iOS */

    },//reactiveHeader


    smoothScroll: function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
      });
    },//smoothScroll

    headerColors: function() {
      var pagePositionWrap = $('#altr-header'),
          indicatorChanger = document.getElementsByClassName('indicator-change');

      for (var i = 0; i < indicatorChanger.length; i++) {
        new Waypoint({
          element: indicatorChanger[i],
          handler: function(direction) {
            if (direction === "down") {
              if (!pagePositionWrap.hasClass('header-dark')) {
                pagePositionWrap.addClass('header-dark')
                console.log("going-light");
              } else {
                pagePositionWrap.removeClass('header-dark')
                console.log("going-dark");
              }
            } else if (direction === "up") {
              if (!pagePositionWrap.hasClass('header-dark')) {
                pagePositionWrap.addClass('header-dark')
                console.log("going-light");
              } else {
                pagePositionWrap.removeClass('header-dark')
                console.log("going-dark");
              }
            }
          },
          offset: '10%'
        })
      }
    },//headerColors




  };//global




  // The BindUIActions object intitializes per-page objects if the page title exists as a class added to the body element.
  // See the page_bodyclass() function in extras.php to see this in action.
  var BindUIActions = {

    init: function() {

      if ($('body.home').length > 0 ) {
        //HomeUI.init();
      } else /* if ($('body.about-us').length > 0 ) */ {
        //AboutUI.init();
      }


      //GlobalUI is initialized on docready for every page.
      GlobalUI.init();

    }
  };


  //--------------------
  //  External Scripts
  //--------------------

  function launch() {

  }

  //------------------
  //  Initialization
  //------------------

  $(document).ready(function() {
    console.log("document ready");

    var windowWidth = $(window).width();

    BindUIActions.init();

    if (($('body.home').length > 0)) {
     //launch();

    } else {

    }


  });

})(jQuery);