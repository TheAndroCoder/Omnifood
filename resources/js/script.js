$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>$(window).height()-25){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
        //console.log($(window).scrollTop());
    });
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop:$('.section-plans').offset().top},2000);
    });
    $('.js--scroll-down').click(function(){
        $('html,body').animate({scrollTop:$('.section-features').offset().top},1000);
    });
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
      $('.mobile-nav-icon').click(function(){
          var nav=$('.main-nav');
          
          nav.slideToggle(200);
          var mobnav = $('#mobnav');
          var name = mobnav.attr('name');
          if(name=="menu"){
            mobnav.attr('name','close');
          }else{
            mobnav.attr('name','menu');
          }
      });
});
