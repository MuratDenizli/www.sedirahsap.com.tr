//  Theme Custom jquery file,

      // Created on   : 18/07/2017.
      // Theme Name   : World Flooring.
      // Description  : World Flooring - Flooring and Tiling Services.
      // Version      : 1.0.
      // Author       : @Unifytheme.
      // Developed by : Jubayer al hasan. (jubayer.hasan1991@gmail.com)


"use strict";

// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });

        });
  }
}


// Theme Search Box 
function searchBox () {
  var search = $("#search-button"),
      mainSearch = $("#searchWrapper"),
      close = $("#close-button");
  if(search.length) {
    search.on('click', function(){
      mainSearch.addClass('show-box');
    });
    close.on('click', function() {
      mainSearch.removeClass('show-box');
    });
  }
}



// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}



// Theme-banner slider
function BannerSlider () {
  var banner = $("#theme-main-banner");
  if (banner.length) {
    banner.revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:true,
      delay:4000,
      navigation: {
        arrows: {
              style:"hesperiden",
              enable:true,
              hide_onmobile:true,
              hide_under:778,
              hide_onleave:true,
              hide_delay:200,
              hide_delay_mobile:1200,
              tmp:'',
              left: {
                h_align:"right",
                v_align:"center",
                h_offset:30,
                v_offset:124
              },
              right: {
                h_align:"right",
                v_align:"center",
                h_offset:30,
                v_offset:44
              }
            }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,303],
                gridheight:[935,935,900,730],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                },
    });
  };
}



// Main Menu Function
function themeMenu () {
  var menu= $("#mega-menu-holder");
  if(menu.length) {
    menu.slimmenu({
      resizeWidth: '991',
      animSpeed:'500',
      indentChildren: true,
      easingEffect: 'easeOutSine',
    });
  }
}




// Service Slider
function serviceSlider () {
  var cSlider = $ (".service-slider");
  if(cSlider.length) {
      cSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1200,
        lazyLoad:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// Testimonial SLider
function testimonialSlider () {
  var cSlider = $ (".testimonial-slider");
  if(cSlider.length) {
      cSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1200,
        lazyLoad:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:2
            }
        }
    })
  }
}


// Blog Slider
function blogSldier () {
  var bSlider = $ (".blog-slider");
  if(bSlider.length) {
      bSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:5000,
        autoplaySpeed:1200,
        lazyLoad:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// Partner Logo Footer 
function partnersLogo () {
  var pSlider = $ ("#partner-logo");
  if(pSlider.length) {
     pSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:900,
        lazyLoad:true,
        dragEndSpeed:1000,
        responsive:{
            0:{
                items:2
            },
            700:{
                items:3
            },
            992:{
                items:4
            }
        }
    })
  }
}


// Project Details page slide
function projectSLider () {
  var pSldier = $(".project-slider-wrapper");
  if(pSldier.length) {
      var galleryTop = new Swiper('.gallery-top', {
          spaceBetween: 10,
          loop:true,
          loopedSlides: 5, //looped slides should be the same     
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 10,
          slidesPerView: 3,
          touchRatio: 0.2,
          loop:true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true
      });
      galleryTop.params.control = galleryThumbs;
      galleryThumbs.params.control = galleryTop;

  }
}



// Related Project Slider
function projectSlider () {
  var nSlider = $ ("#related-project-slider");
  if(nSlider.length) {
      nSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1300,
        lazyLoad:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            650:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}

// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitUp-item").length) {
    $("#mixitUp-item").mixItUp()
  };
}



// Scroll to top
function scrollToTop () {
  var scrollTop = $ (".scroll-top")
  if (scrollTop.length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        scrollTop.fadeIn();
      } else {
        scrollTop.fadeOut();
      }
    });

    //Click event to scroll to top
      scrollTop.on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert-success').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// Sticky header
function stickyHeader () {
  var sticky = $('.theme-main-menu'),
      scroll = $(window).scrollTop();

  if (sticky.length) {
    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  };
}



// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");

    });

    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });

    $('.panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.stopPropagation();
        }
    });

  };
}


// Product Slider
function productSlider () {
  var nSlider = $ (".related-product-slider");
  if(nSlider.length) {
      nSlider.owlCarousel({
        loop:true,
        nav:true,
        navText: ["",""],
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1300,
        lazyLoad:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// shop price ranger
function priceRanger () {
  if ($('.price-ranger').length) {
    $( '.price-ranger #slider-range' ).slider({
      range: true,
      min: 0,
      max: 1200,
      values: [ 99, 1035 ],
      slide: function( event, ui ) {
        $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + ui.values[ 0 ] );
        $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + ui.values[ 1 ] );
      }
    });
      $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 0 ) );
    $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 1 ) );        
  };  
}


// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     BannerSlider ();
     searchBox ();
     CounterNumberChanger ();
     themeMenu ();
     serviceSlider ();
     testimonialSlider ();
     blogSldier ();
     partnersLogo ();
     projectSLider ();
     projectSlider ();
     mixitupGallery ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     themeAccrodion ();
     priceRanger ();
     productSlider ();
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		  prealoader ();
  })(jQuery);
 });


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ();
  })(jQuery);
});
