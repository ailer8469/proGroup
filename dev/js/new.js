$(function(){
    // learn more
    const CRT=9;
    $('.new_item:gt('+(CRT-1)+')').hide();
    $('#new_learnMore').on('click',function(){
        $('.new_item:gt('+(CRT-1)+')').slideToggle();
        $(this).hide();
    })

    //top carousel
    $('.top_carousel').slick({
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
})