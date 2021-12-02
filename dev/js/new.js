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
        autoplay:true,
        autoplayTimeout:5000,
        slideSpeed : 5000,
    });
    gsap.registerPlugin(ScrollTrigger);
    let tl = new TimelineMax();
    tl.from('.top_carousel', {
        delay:2,
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
        x:'0',
    }).from('.top_new_title_tp',{
        opacity:0,
        duration: 1.4,
        x:'100',
        ease:'circ.easeIn',
    });
    $('.top_carousel').on('initialized.owl.carousel', function(){
        $('#icon_num').text(1);
    });
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
            y:'150',
            ease:'slow.easeIn',
        },{
            opacity:1,
            y:'0',
        });
    });
})