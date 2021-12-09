$(function(){
    var wdth=$(window).width();
    $(window).resize(function(){
        wdth=$(window).width();
    });

    gsap.registerPlugin(ScrollToPlugin,MotionPathPlugin);
        var ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                } 
        });
    $('.slider').each(function(index,element) {  
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 'onEnter',
            offset:50
        }).addTo(ctrl)
        .on('enter', function () {
        TweenLite.to(window, 1, {
            scrollTo:{y:".page_0" + (index+1),  
            autoKill:false
        },ease:Back.easeOut});
        });
    }); 

    // bottom carousel
    $('.pic_carousel').slick({
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        autoplay:true,
        cssEase: 'ease',
    });

    gsap.registerPlugin(ScrollTrigger);
    // ball animation
    let tl = new TimelineMax({
        onComplete:function(){
            rotate();
        }
    });
    tl.from('.animation_02', {
        duration: 2,
        opacity:0,
        x:'-500',
        ease:'back',
    }).from('.animation_01', {
        duration: 2,
        opacity:0,
        x:'500',
        ease:'back',
    },'-=15')
    .fromTo('.out_circle',.5,{
        scale: 0,
    },{
        scale: 1,
        opacity:1,
        ease:Back.easeOut,
    }).fromTo('.inner_circle',1,{
        scale: 0,
    },{
        scale: 1,
        ease:Circ.easeOut,
    }).fromTo(['.ball_item','#path_shadow'],.5,{
        opacity:0,
        scale: 0
    },{
        scale: 0.905,
        opacity:1,
        ease:Back.easeOut
    }).to('.animation_01',1, {
        x:'-500',
        ease:Back.easeOut,
    }).to('.animation_02',1, {
        x:'500',
        ease:Back.easeOut,
    },"-=1");
    var rotate= function(){
        gsap.to('#path_shadow',{
            duration:30,
            repeat:-1,
            rotation:360,
            ease:Power0.easeNone
        });
        gsap.to('.orbit_line',{
            duration:30,
            repeat:-1,
            rotation:360,
            ease:Power0.easeNone
        });
        gsap.to('.ball_item',{
            duration:30,
            rotation:-360,
            repeat:-1,     
            ease:Power0.easeNone           
        });
    };

    ScrollTrigger.create({
        trigger: "#page02",
        animation: tl,
        markers: true,
        start: "top center +=300px",
        end: "+=300",
        scrub: 4,
    });
});   

//aos init
AOS.init();