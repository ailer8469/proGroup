$(function(){
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
    
    let ball= $('.ball_item');
    var tl = gsap.timeline({
        onComplete: function() {
            //tl.tweenTo(3);
    } 
    });
    tl.to(ball,5,{
        bezier:{
            autoRotate:45,
            type:"soft",
            curviness:2,
            values:[
            {left:150,top:50},
            {left:250,top:150},
            {left:150,top:250},
            {left:50,top:150},
            {left:150,top:50},
            ]
        },
        ease:Linear.easeNone,
        repeat:-1
        });
})    
AOS.init();