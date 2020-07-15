// custom js file

    // Created on   : 12/11/2017.
    // Theme Name   : binsur.
    // Description  : binsur.  Insurance-Agency HTML Template.
    // Version      : 1.0.
    // Author       : @Unifytheme.
    // Developed by : @Unifytheme.

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
  var inputField = $("input,textarea");
  if (inputField.length) {
    inputField.each(
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


// scroll header
function stickyHeader () {
  var sticky = $('.theme-main-menu'),
      scroll = $(window).scrollTop();

  if (sticky.length) {
    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}

// toggle menu for mobile
function mobileDropdown () {
  if($('.main-menu').length) {
    $('.main-menu nav ul li.dropdown-holder').append(function () {
      return '<i class="fa fa-bars" aria-hidden="true"></i>';
    });
    $('.main-menu nav ul li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
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

// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}


// Theme-banner slider 
function BannerSlider () {
  var banner = $("#theme-main-banner");
  if (banner.length) {
      banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
        height: '800px',
        navigation: false,
        pagination: true,
        thumbnails: false,
        playPause: false,
        autoplay:true,
        pauseOnClick: false,
        hover: false,
        overlayer: true,
        loader: 'none',
        time: 5000,
        minHeight: '700px',
      });
  };
}


// isoptop Project Gallery
function masanory () {
  if ($("#isotop-gallery-wrapper").length) {
    var $grid = $('#isotop-gallery-wrapper').isotope({
      // options
      itemSelector: '.isotop-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-sizer'
      }

    });

    // filter items on button click
    $('.isotop-menu-wrapper').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

     // change is-checked class on buttons
      $('.isotop-menu-wrapper').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
  };
}


// GALLERY MiXiTup 
function GALLERYMiXiTup () {
  if ($("#mixitup_list").length) {
    $("#mixitup_list").mixItUp()
  };
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


// W-l- Insurance-List-Slider
function InsuranceListSlider () {
  var InsuranceSlider = $ ("#Insurance-List-Slider");
  if(InsuranceSlider.length) {
      InsuranceSlider.owlCarousel({
        margin:30,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            526:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  }
}


// W-l- Insurance-Service-Slider
function InsuranceServiceSlider () {
  var InsuranceService = $ ("#Insurance-Service-Slider");
  if(InsuranceService.length) {
      InsuranceService.owlCarousel({
        margin:30,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            651:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// W-l- Insurance-Service-Slider-V-Two
function InsuranceServiceSliderVtwo () {
  var InsuranceServiceVtwo = $ ("#Insurance-Service-Slider-V-Two");
  if(InsuranceServiceVtwo.length) {
      InsuranceServiceVtwo.owlCarousel({
        margin:15,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            651:{
                items:2
            },
            992:{
                items:3
            },
            1300:{
                items:4
            }
        }
    })
  }
}



// W-l- Testimonial-Slider
function TestimonialSlider () {
  var Testimonial = $ ("#Testimonial-Slider");
  if(Testimonial.length) {
      Testimonial.owlCarousel({
        margin:30,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            651:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// W-l- Team-Slider
function TeamSlider () {
  var Team = $ ("#Team-Slider");
  if(Team.length) {
      Team.owlCarousel({
        margin:30,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            551:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// W-l- Create-Strong-Slider
function CreateStrongSlider () {
  var CreateStrong = $ ("#Create-Strong-Slider");
  if(CreateStrong.length) {
      CreateStrong.owlCarousel({
        loop:true,
        nav:false,
        dots:1,
        autoplay:true,
        autoplayTimeout:2000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
  }
}


// W-l- Our Achivements Slider
function AchivementsSlider () {
  var Achivements = $ ("#Achivements-Slider");
  if(Achivements.length) {
      Achivements.owlCarousel({
        margin:30,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            526:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  }
}


// W-l- side-bar-Testimonials-Slider
function SideBarTestimonialsSlider () {
  var SideBar = $ ("#side-bar-Testimonials-Slider");
  if(SideBar.length) {
      SideBar.owlCarousel({
        loop:true,
        nav:false,
        dots:1,
        autoplay:true,
        autoplayTimeout:2000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
  }
}


// W-l- product-Slider
function productSlider () {
  var product = $ ("#product-Slider");
  if(product.length) {
      product.owlCarousel({
        margin:30,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        smartSpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:2
            },
            551:{
                items:3
            },
            768:{
                items:4
            }
        }
    })
  }
}


// Course price ranger
function priceRanger () {
  if ($('#price-ranger').length) {
    $("#price-ranger").slider({});       
  };  
}


// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       50,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  }
}


// Fancybox 
function FancypopUp () {
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.6)'
                }
            }
        }
    });
  };
}


//Contact Form Validation
function contactFormValidation () {
  var activeform = $(".form-validation");
  if(activeform.length){
      activeform.validate({ // initialize the plugin
        rules: {
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          web: {
            required: true
          },
          message: {
            required: true
          }
        },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeform.fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeform.fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
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


// RoundCircle Progress
function roundCircleProgress () {
  var rounderContainer = $('.piechart');
  if (rounderContainer.length) {
    rounderContainer.each(function () {
      var Self = $(this);
      var value = Self.data('value');
      var size = Self.parent().width();
      var color = Self.data('border-color');

      Self.find('span').each(function () {
        var expertCount = $(this);
        expertCount.appear(function () {
          expertCount.countTo({
            from: 1,
            to: value*100,
            speed: 2000
          });
        });

      });
      Self.appear(function () {         
        Self.circleProgress({
          value: value,
          size: 266,
          thickness: 5,
          emptyFill: 'rgba(243,243,243,1)',
          animation: {
            duration: 2000
          },
          fill: {
            color: color
          }
        });
      });
    });
  };
}


// Product value
function productValue () {
  var inputVal = $("#product-value");
  if(inputVal.length) {
    $('#value-decrease').on('click', function() {
        inputVal.html(function(i, val) { return val*1-1 });
    });
    $('#value-increase').on('click', function() {
        inputVal.html(function(i, val) { return val*1+1 });
    });
  }
}



// DOM ready function
jQuery(document).on('ready', function(){
	(function($){
		mobileDropdown ();
    removePlaceholder ();
    searchBox ();
		BannerSlider ();
		InsuranceListSlider ();
    InsuranceServiceSlider ();
    InsuranceServiceSliderVtwo ();
    TestimonialSlider ();
    TeamSlider ();
    CreateStrongSlider ();
    AchivementsSlider ();
    GALLERYMiXiTup ();
    SideBarTestimonialsSlider ();
    productSlider ();
		CounterNumberChanger ();
		wowAnimation ();
		priceRanger ();
		FancypopUp ();
		scrollToTop ();
		contactFormValidation ();
    themeAccrodion ();
    productValue ();
		closeSuccessAlert ()
	})(jQuery);
});



// Window scroll function
jQuery(window).on('scroll', function(){
	(function($){
		stickyHeader ();
	})(jQuery);
});



// Window on load function
jQuery(window).on('load', function(){
	(function($){
		prealoader ();
		masanory ();
    roundCircleProgress ();
	})(jQuery);
});

