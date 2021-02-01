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

});