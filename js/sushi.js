$(document).ready(function() {

    //nice scroll
     $('body').niceScroll();

     //scroll to top button
     $(window).scroll(function() {
       $(this).scrollTop() >= 900?  $('#scroll-top').fadeIn(1100) : $('#scroll-top').hide();
          })

     $('#scroll-top').click(function() {
         $('html,body').animate({scrollTop:0}, 500);
     })

     //menu
     $('.navbar-toggle').click(function() {
        $('.navbar-inverse .navbar-collapse').slideToggle(1000);
      } );

});