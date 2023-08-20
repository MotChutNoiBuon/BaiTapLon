$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()) {
            $('#myBtn').fadeIn();
        } else
        $('#myBtn').fadeOut();
    });
    $("#myBtn").click(function(){
        $('html, body').animate({scrollTop: 0
        },1000);
    });

    $(window).load(function() {
        if ($('header').length > 0) {
         var _top = $('header').offset().top - parseFloat($('header').css('marginTop').replace(0));
         $(window).scroll(function() {
          var _y = $(this).scrollTop();
          if (_y > _top) {
           $('header').addClass('fixed');
           $('.main-1').css("margin-top", "30px")
          } else {
           $('header').removeClass('fixed');
           $('.main-1').css("margin-top", "0")
          }
         })
        }
       });
});
