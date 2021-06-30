
/* Function Call - Call Function Ones */

   jQuery(document).ready(function(){
	"use strict";
	
	// here all ready functions
	
	scroll_top();
    counter_up();
    magnific_popup();
    video_popup();
    accordion();
    team_carousel();
    clients_carousel();
    testimonial_slider();
    gallery_carousel();
    services_carousel();
    team_carousel_alt();
    grid_carousel_alt();
    news_carousel_alt();
    projects_carousel();
    welding_carousel();
    testimonial_carousel();
});

/* Scrolling Top - Button to scroll up */
function scroll_top(){
    "use strict";
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

};

/* FAQ Accordion - This is the accordion used on the FAQ page */
function accordion(){
};
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
(jQuery)

/* Team Carousel - This is used for the team carousel */
function team_carousel(){ 
    $('.team-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow:1
            }
        }]
    });
};
/* Clients Carousel - This is used for the clients carousel */
function clients_carousel(){ 
    $('.clients-carousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow:3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow:2
            }
        }]
    });
};

/* Testimonials Carousel - This is used for the testimonial slider */
function testimonial_slider(){ 
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        singleItem:false,
        navigationText:["",""],
        autoPlay:true
    });
};
/* Gallery Carousel - This is used for the gallery carousel */
function gallery_carousel(){ 
    $('.gallery-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow:1
            }
        }]
    });
};

/* Magnific Popup - This is used for the popup gallery */
function magnific_popup(){
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', 
        gallery:{
        enabled:true
     },
        zoom: {
        enabled: true, 

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        opener: function(openerElement) {

          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    });  
};

/* Youtube Popup - This is used for the youtube video popup */

function video_popup(){    
  var $btnLoadMore = $(
    '<div class="btn-wrapper text-center"><a href="#" class="btn load-more">Load More</a></div>'
  );
  var items = $(".youtube-popup[data-listnum]");
  var count = items.length;
  var slice = 2;
  var current = 0;

  if (items.length > slice) {
    //bind load more event
    $btnLoadMore.on("click", function(e) {
      e.preventDefault();
      loadMoreNews();
    });
    //append load more button
    items.closest(".salvattore-grid").after($btnLoadMore);
  }

  function getItem(listnum) {
    return items
        .filter(function(index) {
          if ($(this).attr("data-listnum") == listnum) {
            return true;
          }
        });
  }
  
  function loadMoreNews() {
    var end = current + slice;
    if (end >= count) {
      end = count;
      $btnLoadMore.hide();
    }
    while (current < end) {
      var listnum = current + 1; //data-listnum : 1-based
      var item = getItem(listnum);
      if (item) {
        item.fadeIn();
      }
      current++;
    }
  }

  //youtube popup
  $(".popup-youtube").magnificPopup({
    type: "iframe",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0"
        }
      },
      srcAction: "iframe_src"
    }
  });

  //init load
  loadMoreNews();
 }; 

/* Counter - This is used for the counter section */
"use strict";
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

/* Counter Up This is used for the counter section */

function counter_up(){

    "use strict";

    $.fn.counterUp = function (options) {

        // Defaults
        var settings = $.extend({
                'time': 400,
                'delay': 10,
                'offset': 100,
                'beginAt': 0,
                'formatter': false,
                'context': 'window',
                callback: function () {
                }
            }, options),
            s;

        return this.each(function () {

            // Store the object
            var $this = $(this),
                counter = {
                    time: $(this).data('counterup-time') || settings.time,
                    delay: $(this).data('counterup-delay') || settings.delay,
                    offset: $(this).data('counterup-offset') || settings.offset,
                    beginAt: $(this).data('counterup-beginat') || settings.beginAt,
                    context: $(this).data('counterup-context') || settings.context
                };

            var counterUpper = function () {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $this.attr('data-num') ? $this.attr('data-num') : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, '');
                var decimalPlaces = (num.split('.')[1] || []).length;
                if (counter.beginAt > num)
                    counter.beginAt = num;

                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);

                // Convert time to total seconds
                if (isTime) {
                    var times = num.split(':'),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60;
                    }
                }

                // Generate list of incremental numbers to display
                for (var i = divisions; i >= counter.beginAt / num * divisions; i--) {

                    var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);

                    // Add incremental seconds and convert back to time
                    if (isTime) {
                        newNum = parseInt(s / divisions * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                    }

                    // Preserve commas if input had commas
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                        }
                    }
                    if (settings.formatter) {
                        newNum = settings.formatter.call(this, newNum);
                    }
                    nums.unshift(newNum);
                }

                $this.data('counterup-nums', nums);
                $this.text(counter.beginAt);

                // Updates the number until we're done
                var f = function () {
                    if (!$this.data('counterup-nums')) {
                        settings.callback.call(this);
                        return;
                    }
                    $this.html($this.data('counterup-nums').shift());
                    if ($this.data('counterup-nums').length) {
                        setTimeout($this.data('counterup-func'), counter.delay);
                    } else {
                        $this.data('counterup-nums', null);
                        $this.data('counterup-func', null);
                        settings.callback.call(this);
                    }
                };
                $this.data('counterup-func', f);

                // Start the count up
                setTimeout($this.data('counterup-func'), counter.delay);
            };

            // Perform counts when the element gets into view
            $this.waypoint(function (direction) {
                counterUpper();
                this.destroy(); //-- Waypoint 3.0 version of triggerOnce
            }, {offset: counter.offset + "%", context: counter.context});
        });

    };

(jQuery);
    
};

/* Imager hover Movement - This is used for the image hover on the about-us-2.html page */
$(document).on('mousemove', function (e) {
      $('.light').css({
        left: e.pageX - 300,
        top: e.pageY - 300 });

    });

    var el = $('.js-tilt-container');

    el.on('mousemove', function (e) {var _$$offset =
      $(this).offset(),left = _$$offset.left,top = _$$offset.top;
      var cursPosX = e.pageX - left;
      var cursPosY = e.pageY - top;
      var cursFromCenterX = $(this).width() / 2 - cursPosX;
      var cursFromCenterY = $(this).height() / 2 - cursPosY;


      $(this).css('transform', 'perspective(500px) rotateX(' + cursFromCenterY / 40 + 'deg) rotateY(' + -(cursFromCenterX / 40) + 'deg) translateZ(10px)');

      var invertedX = Math.sign(cursFromCenterX) > 0 ? -Math.abs(cursFromCenterX) : Math.abs(cursFromCenterX);

      //Parallax transform on image
      $(this).find('.js-perspective-neg').css('transform', 'translateY(' + cursFromCenterY / 10 + 'px) translateX(' + -(invertedX / 10) + 'px) scale(1.15)');

      $(this).removeClass('leave');
    });

    el.on('mouseleave', function () {
      $(this).addClass('leave');
});

/* Filter Gallery This is used for filter gallery */
$(function(){
    var $margin = $("#kehl-grid").isotope({
        itemSelector:".grid-box",
        // Different transition duration
        transitionDuration: "0.5s"
    });

    // on filter button click
    $( ".filter-container li" ).click( function( e ) {
        var $this = $(this);

        // Prevent default behaviour
        e.preventDefault();
        $('.filter li').removeClass('active');
        $this.addClass('active');

        // Get the filter data attribute from the button
        var $filter = $this.attr( "data-filter" );

        // filter
        $margin.isotope({
            filter: $filter
        });
    });
});
/* Masonry Gallery Loader - This is used on the grid gallery to avoid image overlapping */
// external js: masonry.pkgd.js, imagesloaded.pkgd.js
// init Masonry after all images have loaded
var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-box',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  }); 
});


/* Grid Carousel - This is used on the grid carousel on the default home page */
function services_carousel(){
    $('.grid-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow:1
            }
        }]
    });
 };

/* Team Carousel - This is used on the team carousel located on the construction home page */
function team_carousel_alt(){
    $('.team-carousel-alt').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow:1
            }
        }]
    });
 };

/* Grid Carousel Alt - This is used on the grid carousel */
function grid_carousel_alt(){
    $('.services-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow:1
            }
        }]
    });
 };

/* News Carousel - This is used on the blog news at the template pages bottom */
function news_carousel_alt(){
    $('.news-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow:1
            }
        }]
    });
 };

/* Projects Carousel - This is used on the project carousel, it display the related projects */
function projects_carousel(){
    $('.projects-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow:1
            }
        }]
    });
 };

/* Welding Carousel - This is used on the welding home page carousel */
function welding_carousel(){
    $('.welding-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow:1
            }
        }]
    });
 };

/* Contact Form - This is used for the contact form */
function testimonial_carousel(){
    $("#testimonial-carousel").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[992,2],
        itemsTablet:[750,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        singleItem:false,
        navigationText:["",""],
        autoPlay:true
    });
};
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

