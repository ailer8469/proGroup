$(function(){
    // learn more
    const CRT=9;
    $('.new_item:gt('+(CRT-1)+')').hide();
    $('#new_learnMore').on('click',function(){
        $('.new_item:gt('+(CRT-1)+')').slideToggle();
        $(this).hide();
    })
    //top carousel
    $('.top_carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:false,
        autoplayTimeout:6000,
        slideSpeed : 300,
    });
    let tl = new TimelineMax({
        onComplete:init()
    });
    tl.from('.top_carousel', {
        delay:2,
        duration: 1,
        opacity:0,
        x:'-500',
        ease:'back',
    }).fromTo('.top_new_title', {
        scrollTrigger:'.top_new_title',
        duration: .7,
        opacity:0,
        x:'50',
        ease:'slow.easeIn',
    },{
        opacity:1,
        x:'0',
    }).from('.top_new_title_tp',{
        delay:.5,
        opacity:0,
        duration: 1.4,
        x:'50',
        ease:'circ.easeIn',
    });
    function init(){
        $('#icon_num').text(1);
        $('.owl-carousel').trigger('play.owl.autoplay');
        var carousel = $('.owl-carousel').data('owl.carousel');
        carousel.settings.autoplay = true; 
        carousel.options.autoplay = true;
        $('.owl-carousel').trigger('refresh.owl.carousel');
    } 
    $('.top_carousel').on('translate.owl.carousel', function(){
        $('.top_new_title').css({
            'opacity':'0'
        })
    });
    $('.top_carousel').on('translated.owl.carousel', function(){
        // load item number
        let index= $('.owl-item.active').index()-2;
        if(index > 5){
            $('#icon_num').text(1);
        }else{
            $('#icon_num').text(index);
        }
        gsap.fromTo('.top_new_title', {
            scrollTrigger:'.top_new_title',
            duration: .7,
            opacity:0,
            y:'50',
            ease:'slow.easeIn',
        },{
            opacity:1,
            y:'0',
        });
    });
})