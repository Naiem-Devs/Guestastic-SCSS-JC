(function($) {
  "use strict";


  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.header-area').addClass('sticky')
    } else{
        $('.header-area').removeClass('sticky')
    }
});


 // menu 
  $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  const slBtn = document.querySelectorAll('.select_items li span')
  slBtn.forEach(slBtns => {
      slBtns.addEventListener('click', () => {
          removeActive()
          slBtns.classList.add('active')
      })
  })

  function removeActive() {
      slBtn.forEach(slBtns => {
          slBtns.classList.remove('active')
      })
  }

  const optBtn = document.querySelectorAll('.Delivery_opt li')
  optBtn.forEach(optBtns => {
      optBtns.addEventListener('click', () => {
          removeActive()
          optBtns.classList.add('active')
      })
  })

  function removeActive() {
      optBtn.forEach(optBtns => {
          optBtns.classList.remove('active')
      })
  }

  // owlCarousel
  $(".events_slider").owlCarousel({
    loop: true,
    margin: 50,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    smartSpeed: 1000,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2,
        margin: 20
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4,
        stagePadding: 50
      }
    }
  });

  // owlCarousel
  $(".post_wrp").owlCarousel({
    loop: true,
    margin: 20,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    smartSpeed: 1000,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  // owlCarousel
  $(".events-slider").owlCarousel({
    loop: true,
    margin: 20,
    navText: [
      '',
      '<i class="right-icon"><img src="assets/img/arrow_circle_right.svg" alt=""></i>'
    ],
    nav: true,
    smartSpeed: 1000,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".g_slider").owlCarousel({
    loop: true,
    margin: 0,
    navText: [
      '',
      '<i class="right-icon"><img src="assets/img/arrow_circle_right.svg" alt=""></i>'
    ],
    nav: true,
    smartSpeed: 1000,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 2
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      },
      1600: {
        items: 4
      }
    }
  });

  // // owlCarousel
  // $(".events-slider.v2").owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   navText: [
  //     '',
  //     '<i class="right-icon"><img src="assets/img/arrow_circle_right.svg" alt=""></i>'
  //   ],
  //   nav: true,
  //   smartSpeed: 1000,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     767: {
  //       items: 2
  //     },
  //     992: {
  //       items: 3
  //     },
  //     1200: {
  //       items: 3
  //     },
  //     1600: {
  //       items: 4
  //     }
  //   }
  // });



  $('select').niceSelect();

  $(document).ready(function() {
    $.getJSON("http://freegeoip.net/json/", function(data) {
      setCountry(data.country_code, data.country_name);
    });
    
  })
  
  function setCountry(code, name) {
    $('#country_select').find('option[value="' + code + '"]').remove();
    $('#country_select').prepend('<option value="' + code + '" selected>' + name + '</option>');
  }



})(jQuery);
