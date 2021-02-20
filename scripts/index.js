$(document).ready(function() {
  if ($(window).width() > 992) 

  // fixed navigation bar on scroll 
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
  $('#bar .progress-bar').css("width",
    function() {
        return $(this).attr("aria-valuenow") + "%";
    }
  )

  // business card animation 
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