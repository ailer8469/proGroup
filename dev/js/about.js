$(function(){
    // LocomotiveScroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('body'),
        smooth: true,
        repeat:true,
    })

    // carousel
    $('.pic_carousel').slick({
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        autoplay:true,
        cssEase: 'ease',
    });
})    