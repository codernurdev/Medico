window.onload = () => {
	let toggler = document.querySelector('.humbergar-icon');
	let mobileMenu = document.querySelector('.mobile-menu');
	let isOpen = false;

	toggler.addEventListener('click', navigationOpen);

	function navigationOpen() {
        if (!isOpen) {
                  toggler.classList.add('open')
                  mobileMenu.classList.add('open')
                  isOpen = true
		} else {
			toggler.classList.remove('open')
                  mobileMenu.classList.remove('open')
                  isOpen = false
            }
    }

    // Scroll to add class (Sticky top)

    $(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
                  $('#header').addClass('navbar__active')
                  $("#header_top").addClass('navTop-active')
		} else {
                  $('#header').removeClass('navbar__active')
                  $("#header_top").removeClass('navTop-active')
		}
    });

      // Counter up jaquery

      $('.counter').counterUp({
            delay: 20,
            time: 2000
      });

      // OWl-carousel 

      var owl = $('.testimonial');
      owl.owlCarousel({
        margin:20,
        loop: true,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      })
  
  // Gallery image show

  var owl = $('.gallery');
  owl.owlCarousel({
    margin:15,
    loop: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
};
