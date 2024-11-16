//説明文の表示
$(function(){
    $(window).scroll(function (){
        $('.fadeIn').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 230){
              $(this).addClass('active');
            }
        });
    });
});

