$(document).ready(function() {
  /* loader */
  setTimeout(function() {
    $('.loading-container').fadeOut('fast');
  }, 4000); 

  // fade into view on scroll
  $(window).scroll(function() {
    $('.fade-in').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
          $(this).addClass('is-visible');
        }
      });
  });

  // fixed navigation bar on scroll 
  if ($(window).width() > 992) 
  {
    $(window).scroll(function(){  
      var topValue = document.getElementById("portfolio").offsetTop
       if ($(this).scrollTop() > topValue) {
          $(".navbar").addClass("fixed-top");
          $("#porfolio").css("padding-top", $(".navbar").outerHeight() + "px");
          $(".info").addClass("hidden");
        }
        else{
          $(".navbar").removeClass("fixed-top");
          $("#portfolio").css("padding-top", "0");
          $(".info").removeClass("hidden");
        }   
    });
  }

  // change active list on click
  $(".nav-link").click(function(){ 
    $(".nav-item").removeClass("active"); 
    $(this).parent().addClass("active"); 
  });

  // skill bars 
  $(window).scroll(function() {
    $('#bar .progress-bar').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
          $(this).css("width",
          function() {
              return $(this).attr("aria-valuenow") + "%";
          })
        }
      });
  });


  // business card animation with animeJS
  var card = document.querySelector(".about-card");
  var playing = false;

  card.addEventListener('click',function() {
    if(playing)
      return;
    
    playing = true;
    anime({
      targets: card,
      scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      rotateY: {value: '+=180', delay: 200},
      easing: 'easeInOutSine',
      duration: 400,
      complete: function(anim){
        playing = false;
      }
    });
});


});