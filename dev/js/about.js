$(function(){
    gsap.registerPlugin(ScrollToPlugin);
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
    }).fromTo('#path_svg',1,{
        opacity:0,
        scale: 0
    },{
        scale: 1,
        opacity:1,
        ease:Back.easeOut,
    }).fromTo('.small_ball',.5,{
        opacity:0,
        scale: 0
    },{
        scale: 1,
        opacity:1,
        ease:Back.easeOut
    }).to('.animation_01',1, {
        x:'-500',
        ease:Back.easeOut,
    }).to('.animation_02',1, {
        x:'500',
        ease:Back.easeOut,
    },"-=1");
});   
var rotate= function(){
    gsap.to('.small_ball.white',30,{
        ease:Linear.easeNone,
        repeat:-1,
        type: "cubic",
        motionPath: {
            path: MotionPathPlugin.convertToPath("#path")[0],
            align: "#path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0.05,
            end:1
        }
    });
    gsap.to('.small_ball.green',30,{
        ease:Linear.easeNone,
        repeat:-1,
        type: "cubic",
        motionPath: {
            path: MotionPathPlugin.convertToPath("#path")[0],
            align: "#path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0.7,
            end:1.7
        }
    });
};

//aos init
AOS.init();
//button switch
let learnMore=document.getElementById('page01learnMore');
learnMore.addEventListener('click',() => {
    window.location.href='index.html';
});
