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

// ball animation
let ball= document.querySelectorAll('.ball_item');
let animate1=document.getElementById('animation_01');
let animate2=document.getElementById('animation_02');

const tl = new TimelineLite({ 
    defaults: { ease: "power1.out" } 
});
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
tl.from(animate1,{
    x:-200,
    duration:1
});
tl.to(ball,5,{
    Bezier:rotate,
    ease:Linear.easeNone,
    repeat:-1
});