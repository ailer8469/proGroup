$(function(){
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
    // word animation
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.animation_01', {
        scrollTrigger:'.animation_01',
        duration: 2,
        opacity:0,
        x:'1000',
        ease:'back',
    }); 
    // ball animation
    let ball= $('.ball_item');
    const rotate={
        autoRotate:45,
        type:"soft",
        curviness:2,
        values:[
        {left:150,top:50},
        {left:250,top:150},
        {left:150,top:250},
        {left:50,top:150},
        {left:150,top:50},
        ],
    };
    let tl = new TimelineMax();
    tl.from('.animation_02', {
        scrollTrigger:'.animation_02',
        duration: 2,
        opacity:0,
        x:'-1000',
        ease:'back',
    })
    .fromTo('.out_circle',.5,{
        scrollTrigger:'.out_circle',
        delay:2,
        scale: 0,
    },{
        scale: 1,
        ease:Circ.easeOut,
    }).fromTo('.inner_circle',1,{
        scale: 0,
    },{
        scale: 1,
        ease:Circ.easeOut,
    }).fromTo('.ball_img',.5,{
        scale: 0,
    },{
        scale: 1,
        opacity:1,
        ease:Circ.easeOut,
    }).fromTo('.ball_span',1,{
        y:'-50'
    },{
        y:0,
        opacity:1,
        ease:Back.easeOut,
    }).to('.animation_01',1, {
        x:'-500',
        ease:Back.easeOut,
    }).to('.animation_02',1, {
        x:'500',
        ease:Back.easeOut,
    },"-=1");
});    
//aos init
AOS.init();
//button switch
let learnMore=document.getElementById('page01_learnMore');

learnMore.addEventListener('click',() => {
    window.location.href='index.html';
});

// page transform
// var controller = new ScrollMagic.Controller();
// var page = new TimelineMax()
// .fromTo("#page02", 1, {y:'-100%'},
// { y: '0%',ease: Expo.easeInOut});

// // create scene to pin and link animation
// new ScrollMagic.Scene({
//     triggerElement: "#page02",
//     duration: '100%',
//     triggerHook:0
// })
// .setPin("#page02")
// .setTween(page)
// .addIndicators() 
// .addTo(controller);