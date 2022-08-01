(function($) {
  
  "use strict";

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

 

    /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation 
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    }); 

    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    // Slick Nav 
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'span',
      allowParentLinks: true,
      duplicate: false,
      label: '',
    });


/* 
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 1000
    });

/* 
   MixitUp
   ========================================================================== 
  $('#portfolio').mixItUp()*/


  $(function(){
    $('#portfolio').mixItUp({
      load: {
        filter: '.videos'
      }
    });
  });


  /*Flip-card========================================================================== */
const card=document.querySelector('.card__inner');
card.addEventListener('click', function (e) {
  card.classList.toggle('is-flipped');
})

const card1=document.querySelector('.card__inner1');
card1.addEventListener('click', function (e) {
  card1.classList.toggle('is-flipped');
})

const card2=document.querySelector('.card__inner2');
card2.addEventListener('click', function (e) {
  card2.classList.toggle('is-flipped');
})

const card3=document.querySelector('.card__inner3');
card3.addEventListener('click', function (e) {
  card3.classList.toggle('is-flipped');
})

const card4=document.querySelector('.card__inner4');
card4.addEventListener('click', function (e) {
  card4.classList.toggle('is-flipped');
})

const card5=document.querySelector('.card__inner5');
card5.addEventListener('click', function (e) {
  card5.classList.toggle('is-flipped');
})


const height = document.querySelector('#hero-area').offsetHeight
$(window).scroll(function(){
  if($(this).scrollTop()>height/2.35) {
      $('#hero-area img').attr('src','img/Edit/Logo_Black_1.png');
  }
  else {
      $('#hero-area img').attr('src','img/Edit/Logo White11.png');
  }
})

$(function () {
  $('#hero-area img').attr('src','img/Edit/Logo White11.png');
});

/*

  $(".navbar-brand .img-fulid").click(function() {
    $('#hero-area img').attr('src','img/Edit/Logo White11.png');
  });

  */


jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 992) {
      $('.cnt').addClass('content-right');
      $('.cnt').removeClass('content-left');
    } else if (ww >= 992) {
      $('.cnt').addClass('content-left');
      $('.cnt').removeClass('content-remove');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});



/* 
   Touch Owl Carousel
   ========================================================================== */
   var owl = $(".touch-slider");
   owl.owlCarousel({
     navigation: false,
     pagination: true,
     slideSpeed: 1000,
     lopp: true,
     stopOnHover: false,
     autoPlay: true,
     items: 3,
     itemsDesktop : [1199,3],
     itemsDesktopSmall: [1024, 2],
     itemsTablet: [600, 1],
     itemsMobile: [479, 1]
   });

   $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
   $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

/* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

/* 
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


  /* 
   SMOOTH SCROLL
   ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

/* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


/* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

/* 
   Page Loader
   ========================================================================== */
  $('#loader').fadeOut();

}(jQuery));

