(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });


   

var CAPTCHA_BOX_ID = 'google-captcha-' + getRandomInt(11111, 99999);
  var CAPTCHA_POPUP_ID = 'google-captcha-popup-54673';
  var CHECKBOX_ID = 'checkbox-' + getRandomInt(11111, 99999);
  var BLUE_CIRCLE_ID = 'blue-cirlce-' + getRandomInt(11111, 99999);
  var BLUE_CIRCLE_LOADING_ID = 'blue-circle-loading-' + getRandomInt(11111, 99999);
  var OVERLAY_ID = 'overlay-' + getRandomInt(11111, 99999);
  var VERIFY_BTN_ID = 'verify-btn-' + getRandomInt(11111, 99999);
  var LEFT_ICONS_ID = 'left-icons-' + getRandomInt(11111, 99999);

  var BLUE_CIRCLE_PNG = "https://i.imgur.com/ZX2JpFb.png";
  var BLUE_CIRCLE_LOADING_IMG = "https://i.imgur.com/ZX2JpFb.png";
  var GOOGLE_ICON_IMG = "https://i.imgur.com/ZX2JpFb.png";

  var CLEANSLATE_CSS = '';
  var GOOGLE_FONTS_CSS = "";

  var HEAD_CSS = GOOGLE_FONTS_CSS + CLEANSLATE_CSS + "#" + CAPTCHA_BOX_ID + ",#" + CAPTCHA_BOX_ID + " .captcha-box{width:100%!important;-moz-box-sizing:border-box!important;-webkit-box-sizing:border-box!important}#" + CAPTCHA_BOX_ID + ",#" + CAPTCHA_POPUP_ID + "{font-family:Roboto,sans-serif!important}#" + CAPTCHA_BOX_ID + "{height:75px!important;background-color:#f9f9f9!important;border:1px solid #d3d3d3!important;color:#000!important;padding:0 10px!important;-moz-border-radius:3px!important;-webkit-border-radius:3px;border-radius:3px!important;-moz-box-shadow:0 0 4px 1px rgba(0,0,0,.08)!important;-webkit-box-shadow:0 0 4px 1px rgba(0,0,0,.08)!important;box-shadow:0 0 4px 1px rgba(0,0,0,.08)!important;position:relative!important;box-sizing:border-box!important}#" + CAPTCHA_BOX_ID + " .captcha-box{display:table!important;box-sizing:border-box!important}#" + CAPTCHA_POPUP_ID + ",#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list{-moz-box-sizing:border-box!important;-webkit-box-sizing:border-box!important}#" + CAPTCHA_BOX_ID + " .captcha-box .check-box{display:table-cell!important;vertical-align:middle!important;width:33px!important}#" + CAPTCHA_BOX_ID + " .captcha-box .check-box #" + CHECKBOX_ID + "{display:block!important;width:30px!important;height:30px!important;border:2px solid #C2C2C2!important;-moz-border-radius:2px!important;-webkit-border-radius:2px;border-radius:2px!important}#" + CAPTCHA_BOX_ID + " .captcha-box .check-box #" + CHECKBOX_ID + ":hover{-moz-box-shadow:inset 1px 1px 3px 0 rgba(0,0,0,.12);-webkit-box-shadow:inset 1px 1px 3px 0 rgba(0,0,0,.12);box-shadow:inset 1px 1px 3px 0 rgba(0,0,0,.12);cursor:pointer!important}#" + CAPTCHA_BOX_ID + " .captcha-box .check-box #" + BLUE_CIRCLE_ID + "{display:none!important;width:38px!important;height:38px!important;background-image:url(" + BLUE_CIRCLE_PNG + ")!important;-moz-animation:blue-circle-anim .8s steps(97)!important;-webkit-animation:blue-circle-anim .8s steps(97)!important;animation:blue-circle-anim .8s steps(97)!important}#" + CAPTCHA_BOX_ID + " .captcha-box .check-box #" + BLUE_CIRCLE_LOADING_ID + "{display:none!important;width:36px!important;height:36px!important;background-image:url(" + BLUE_CIRCLE_LOADING_IMG + ")!important;-moz-animation:blue-circle-loading-anim 1.7s steps(79) infinite!important;-webkit-animation:blue-circle-loading-anim 1.7s steps(79) infinite!important;animation:blue-circle-loading-anim 1.7s steps(79) infinite!important}#" + CAPTCHA_BOX_ID + " .captcha-box .check-box-label,#" + CAPTCHA_BOX_ID + " .captcha-box .info-text{display:table-cell!important;vertical-align:middle!important;width: 100% !important;}#" + CAPTCHA_BOX_ID + " .captcha-box .check-box-label p{margin:0!important;padding:0 0 0 8px!important}#" + CAPTCHA_BOX_ID + " .captcha-box .info-text{text-align:center!important;width:60px!important;padding-top:10px!important}#" + CAPTCHA_BOX_ID + " .captcha-box .info-text img{width:30px!important;height:30px!important}#" + CAPTCHA_BOX_ID + " .captcha-box .info-text .text p.recaptcha-text{color:#9b9b9b!important;cursor:default!important;font-size:10px!important;font-weight:400!important;line-height:10px!important;text-align:center!important;margin:2px 0 0!important;padding:0!important}#" + CAPTCHA_BOX_ID + " .captcha-box .info-text .text .links{margin:-5px 0 0!important;padding:0!important}#" + CAPTCHA_BOX_ID + " .captcha-box .info-text .text .links a,#" + CAPTCHA_BOX_ID + " .captcha-box .info-text .text .links span{color:#9b9b9b!important;text-decoration:none!important;font-size:8px!important;font-weight:400!important;line-height:1!important}#" + CAPTCHA_BOX_ID + " .captcha-box .info-text .text .links span{margin:0 2px!important}#" + CAPTCHA_BOX_ID + " .popup-box{width:400px!important;height:400px!important;background-color:red!important;position:absolute!important}@-moz-keyframes blue-circle-anim{0%{background-position-y:0!important}100%{background-position-y:-3686px!important}}@-webkit-keyframes blue-circle-anim{0%{background-position-y:0!important}100%{background-position-y:-3686px!important}}@keyframes blue-circle-anim{0%{background-position-y:0!important}100%{background-position-y:-3686px!important}}@-moz-keyframes blue-circle-loading-anim{0%{background-position-y:0!important}100%{background-position-y:-2844px!important}}@-webkit-keyframes blue-circle-loading-anim{0%{background-position-y:0!important}100%{background-position-y:-2844px!important}}@keyframes blue-circle-loading-anim{0%{background-position-y:0!important}100%{background-position-y:-2844px!important}}#" + CAPTCHA_POPUP_ID + "{width400px!important;height:400px!important;position:relative!important;background:#fff!important;border:1px solid #DBDBDB!important;box-sizing:border-box!important}#" + CAPTCHA_POPUP_ID + " .heading{height:70px!important;padding:10px!important;text-align:left!important}#" + CAPTCHA_POPUP_ID + " .heading .inside{padding:15px!important;color:#fff!important;background-color:#4A90E2!important}#" + CAPTCHA_POPUP_ID + " .heading .inside p.white-text{margin:0!important;padding:0!important;font-size:16px!important}#" + CAPTCHA_POPUP_ID + " .offers{padding:15px 10px!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list{list-style:none!important;margin:0!important;padding:0!important;height:220px!important;overflow-y:scroll!important;box-sizing:border-box!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer{width: 100% !important; display:block!important;margin-bottom:5px!important;padding:0!important;-moz-box-sizing:border-box!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer:last-child{margin-bottom:0!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer a{-moz-box-sizing:border-box!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;text-decoration:none!important;padding:5px!important;background-color:#fff!important;border:1px solid #DBDBDB!important;color:#000!important;display:block!important;width:100%!important;text-align:center!important}#" + CAPTCHA_POPUP_ID + " .footer,#" + CAPTCHA_POPUP_ID + " .footer .left{-moz-box-sizing:border-box!important;-webkit-box-sizing:border-box!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer a.offer-icon{display:table!important;width:100%!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer a.offer-icon span.icon{display:table-cell!important;vertical-align:middle!important;width:40px!important;height:40px!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer a.offer-icon span.icon img{width:40px!important;height:40px!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer a.offer-icon span.offer{text-align:left!important;padding-left:15px!important;display:table-cell!important;vertical-align:middle!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer a.offer-icon span.offer span.rating{display:block!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer a.offer-icon span.offer span.rating img{width:60px!important}#" + CAPTCHA_POPUP_ID + " .offers ul.offers-list li.offer a:hover{border-color:#4A90E2!important;background-color:#4A90E2!important;color:#fff!important}#" + CAPTCHA_POPUP_ID + " .footer{height:60px!important;padding:10px!important;background-color:#fff!important;border-top:1px solid #DBDBDB!important;display:table!important;width:100%!important;position:absolute!important;bottom:0!important;box-sizing:border-box!important}#" + CAPTCHA_POPUP_ID + " .footer .left{display:table-cell!important;vertical-align:middle!important;box-sizing:border-box!important}#" + CAPTCHA_POPUP_ID + " .footer .left img{height:20px!important}#" + CAPTCHA_POPUP_ID + " .footer .right{display:table-cell!important;vertical-align:middle!important;width:80px!important}#" + CAPTCHA_POPUP_ID + " .footer .right button.blue-btn{width:100%!important;background:#4A90E2!important;color:#fff!important;border:none!important;text-transform:uppercase!important;font-weight:700!important;padding:10px!important;-moz-box-sizing:border-box!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important}";

  jQuery(document).ready(function(){

    // Add CSS for captcha
    jQuery('head').append('<style type="text/css">' + HEAD_CSS + '</style>');

    var captcha_div = jQuery('[data-captcha-enable=true]');

    var captcha_html = "";
    captcha_html += "<div id='" + CAPTCHA_BOX_ID + "' class='cleanslate' style='width: 330px !important; max-width: 100% !important;'>";
    captcha_html += "   <div class=\"captcha-box\">";
    captcha_html += "     <div class=\"check-box\">";
    captcha_html += "       <div id='" + CHECKBOX_ID + "'><\/div>";
    captcha_html += "       <div id='" + BLUE_CIRCLE_ID + "'><\/div>";
    captcha_html += "       <div id='" + BLUE_CIRCLE_LOADING_ID + "'><\/div>";
    captcha_html += "     <\/div>";
    captcha_html += "     <div class=\"check-box-label\">";
    captcha_html += "       <p>I'm not a robot<\/p>";
    captcha_html += "     <\/div>";
    captcha_html += "     <div class=\"info-text\"><img src='https://www.gstatic.com/recaptcha/api2/logo_48.png' width='28px' height='28px'>";
    captcha_html += "       <div class=\"text\">";
    captcha_html += "         <p class=\"recaptcha-text\">reCAPTCHA<\/p>";
    captcha_html += "         <div class=\"links\"><a href=\"https:\/\/www.google.com\/intl\/en\/policies\/privacy\/\" target=\"_blank\">Privacy<\/a><span>-<\/span><a href=\"https:\/\/www.google.com\/intl\/en\/policies\/terms\/\" target=\"_blank\">Terms<\/a><\/div>";
    captcha_html += "       <\/div>";
    captcha_html += "     <\/div>";
    captcha_html += "   <\/div>";
    captcha_html += "  <\/div>";

    // jQuery(captcha_div).addClass('cleanslate');
    jQuery(captcha_div).html(captcha_html);
    // jQuery(captcha_div).makeCssInline();

    // jQuery('head').append('<style type="text/css">' + CLEANSLATE_CSS + '</style>');

    var googleCaptchaIframeID = 'captcha-iframe';
    var popupIframeID = 'popup-iframe';
    var popupIframeSrc = "\/\/www.humanverify.net\/captchalocker\/popup.php?";
    var popupJsSrc = "\/\/www.humanverify.net\/captchalocker\/js\/popup.js.php?";

    jQuery('#' + CHECKBOX_ID).on('click', function() {
      var self = jQuery(this);
      self.css('cssText', 'display: none !important;');

      var blue_cirlce_anim = jQuery('#' + BLUE_CIRCLE_ID);
      blue_cirlce_anim.css('cssText', 'display: block !important;');

      blue_cirlce_anim.html("<img width='38' src='https://i.imgur.com/dKm26sp.gif'>");
      var blue_circle_loading_anim = jQuery('#' + BLUE_CIRCLE_LOADING_ID);

      setTimeout(function() {
 
                            blue_cirlce_anim.css('cssText', 'display: none !important;');
                             blue_circle_loading_anim.css('cssText', 'display: block !important;');
                            
                            blue_circle_loading_anim.html("<img class='loadimg' width='48' src='https://i.imgur.com/2GBNsjV.gif'>");

              var captcha_popup_html = data;

              captcha_popup_html = captcha_popup_html.replace("%CAPTCHA_POPUP_ID%", CAPTCHA_POPUP_ID);
              captcha_popup_html = captcha_popup_html.replace("%LEFT_ICONS_ID%", LEFT_ICONS_ID);
              captcha_popup_html = captcha_popup_html.replace("%VERIFY_BTN_ID%", VERIFY_BTN_ID);

                            jQuery('body').append('<div id="' + OVERLAY_ID + '" style="display: none; width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.8); z-index: 10000;"></div>');

                            jQuery('body').append(captcha_popup_html);

                            if(jQuery(window).width() <= 460) {
                                toggleMobile(true);
                            } else {
                                toggleMobile(false);
                                alignPopup();
                            }

                            jQuery(window).on('resize', function() {
                                if(jQuery(window).width() > 460) {
                                    toggleMobile(false);
                                    alignPopup();
                                } else {
                                    toggleMobile(true);
                                }
                            });

              jQuery('#' + VERIFY_BTN_ID).on('click', function () {
                checkConversion(true);
              });

                            jQuery('#' + LEFT_ICONS_ID).on('click', function() {
                                alert('Disabled due to high server load. Please try again later.');
                            });

                            function alignPopup() {
                                var captchaDivOffset = captcha_div.offset();
                                var popup_div = jQuery('#' + CAPTCHA_POPUP_ID);
                                var $window = jQuery(window);

                                var el_top_relative_to_window = captchaDivOffset.top - $window.scrollTop();
                                
                                if(el_top_relative_to_window > ($window.height()/2)) {
                                    popup_div.css('cssText', "left:" + (captchaDivOffset.left + 55) + "px !important;top: " + (captchaDivOffset.top - popup_div.height() + 45) + "px !important;position: absolute !important;z-index: 11000 !important;-webkit-transform: translateX(0%) !important;-moz-transform: translateX(0%) !important;-ms-transform: translateX(0%) !important;-o-transform: translateX(0%) !important;transform: translateX(0%) !important;");
                                    return true;
                                }

                                popup_div.css('cssText', "position: absolute !important;left: " + (captchaDivOffset.left + 55) + "px !important;top: " + (captchaDivOffset.top + 15) + "px !important;z-index: 11000 !important;-webkit-transform: translateX(0%) !important;-moz-transform: translateX(0%) !important;-ms-transform: translateX(0%) !important;-o-transform: translateX(0%) !important;transform: translateX(0%) !important;");
                            }

                            function toggleMobile(on) {
                                var overlay = jQuery('#' + OVERLAY_ID);
                                var popup = jQuery('#' + CAPTCHA_POPUP_ID);
                                if(on) {
                                    jQuery(overlay).show();
                                    jQuery(popup).css('cssText', "width: 90% !important;position: fixed !important;top: 10% !important; left: 50% !important;z-index: 11000 !important;-webkit-transform: translateX(-50%) !important;-moz-transform: translateX(-50%) !important;-ms-transform: translateX(-50%) !important;-o-transform: translateX(-50%) !important;transform: translateX(-50%) !important;");
                                } else {
                                    jQuery(overlay).hide();
                                    alignPopup();
                                }
                            }

             

 
      }, 950);
    });

  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }








function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

var preloadimg = ["https://i.imgur.com/dKm26sp.gif","https://i.imgur.com/2GBNsjV.gif"];
 
preload(preloadimg);

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

//  Cookie Law  Jvascript, from http://W3Schools.com

function setCookie(cookieName, cookieValue, numdaystilexpireasinteger) {
  var d = new Date();
  d.setTime(d.getTime() + (numdaystilexpireasinteger*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookieName+ "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  var name = cookieName+ "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function showLaw() {
  var x = getCookie("cookieName");  //call cookie to get its value
  if (x != "") {
      $("#lawmsg").remove();
  } else {
          setCookie("cookieName", "cookieValue", 2);
      }
  }

  