$(function(){
    // hover animation
    $('#arrow_right').hover(function(){
        $('#arrow_right').addClass('active');
    },function(){
        $('#arrow_right').removeClass('active');
    });
    $('#arrow_left').hover(function(){
        $('#arrow_left').addClass('active');
    },function(){
        $('#arrow_left').removeClass('active');
    });

    // carousel

    // change title
    let index= $('.member_slider.slick-current').index();
    $('.main_slider').on('afterChange', function(){
        // load item number
        $('.title_item').addClass('memactive');
    });
});