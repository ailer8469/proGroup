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
    gsap.registerPlugin(MotionPathPlugin);
    let tl = new TimelineMax({
        onComplete:function(){
            rotate();
        }
    });
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
        opacity:1,
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
var rotate= function(){
    gsap.to('#ball_01',30,{
        ease:Linear.easeNone,
        repeat:-1,
        type: "cubic",
        motionPath: {
            path: MotionPathPlugin.convertToPath("#path")[0],
            align: "#path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0.42,
            end:1.5
        }
    });
    gsap.to('#ball_02',14,{
        ease:Linear.easeNone,
        repeat:-1,
        type: "cubic",
        motionPath: {
            path: MotionPathPlugin.convertToPath("#path")[0],
            align: "#path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end:1
        }
    });
    gsap.to('#ball_03',15,{
        ease:Linear.easeNone,
        repeat:-1,
        type: "cubic",
        rotationZ:'360',
        motionPath: {
            path: MotionPathPlugin.convertToPath("#path")[0],
            align: "#path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0.8,
            end:1.8
        }
    });
};

//aos init
AOS.init();
//button switch
let learnMore=document.getElementById('page01_learnMore');
learnMore.addEventListener('click',() => {
    window.location.href='index.html';
});

new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    scrollBar: true
});
// ScrollMagic
var controller = new ScrollMagic.Controller()
var first = new ScrollMagic.Scene({
    triggerElement: '.page_02',
    duration: "100%",
})
.addTo(controller);