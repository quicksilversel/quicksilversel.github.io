$(document).ready(function() {
  if ($(window).width() > 992) 

  // fixed navigation bar on scroll 
  {
    $(window).scroll(function(){  
      var topValue = document.getElementById("portfolio").offsetTop
       if ($(this).scrollTop() > topValue) {
          $(".navbar").addClass("fixed-top");
          // add padding top to show content behind navbar
          $("#porfolio").css("padding-top", $(".navbar").outerHeight() + "px");
        }
        else{
          $(".navbar").removeClass("fixed-top");
           // remove padding top from body
          $("#portfolio").css("padding-top", "0");
        }   
    });
  } 
  

  // change active list on click
  $("ul li a").click(function(){ 
    $("li a").removeClass("active"); 
    $(this).addClass("active"); 
  });



});