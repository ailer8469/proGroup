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
        autoplaySpeed: 4700,
    });
    gsap.registerPlugin(ScrollTrigger);
    let tl = new TimelineMax();
    tl.from('.top_new_pic', {
        duration: 1,
        opacity:0,
        x:'-700',
        ease:'back',
    }).fromTo('.top_new_title', {
        scrollTrigger:'.top_new_title',
        duration: .7,
        opacity:0,
        x:'100',
        ease:'slow.easeIn',
    },{
        opacity:1,
    }).from('.top_new_title_tp',{
        opacity:0,
        duration: 1.4,
        x:'60',
        ease:'circ.easeIn',
    });
    $('.top_carousel').on('beforeChange', function(){
        $('.top_new_title').css({
            'opacity':'0'
        })
    });
    $('.top_carousel').on('afterChange', function(){
        gsap.fromTo('.top_new_title', {
            scrollTrigger:'.top_new_title',
            duration: .7,
            opacity:0,
            y:'70',
            ease:'slow.easeIn',
        },{
            opacity:1,
            y:'0',
        });
    });
})