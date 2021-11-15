$(document).ready(function(){
    //open copy phone
    $('#link_phone').on('click',function(){
        $('.poptext').fadeToggle(600)
    });
    //copy phone number
    $('#popnumber').click(function(){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#copyPhone').text()).select();
        document.execCommand("copy");
        $temp.remove();

        let modal = document.getElementById("alert_modal");
        let span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
            }
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            }
        }
        window.ontouchend = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });

    //open cooperate modal
    let modal=$('.cooperate_modal');
    let open_modal=$('.cooperate_item');
    let close_modal =$(".modal_close");
    open_modal.on('click',function(){
        modal.css({
            'display':"flex",
        })
    });
    close_modal.on('click',function(){
        modal.css({
            'display':"none",
        })
    });
    $(window).click(function(event){
        if(event.target.className == 'cooperate_modal'){
            modal.css({
                'display':"none",
            })
        }
    });  
    //hover animation
    $('.map_box.ask').hover(function(){
        $('.pig_map_off').hide();
        $('.pig_map_on').show();
        $('.ask .path-line').animate({
            'stroke-dashoffset':'0'
        },1500);
        $('.ask span').fadeIn(2000);
    },function(){
        $('.pig_map_off').show();
        $('.pig_map_on').hide();
        $('.ask .path-line').animate({
            'stroke-dashoffset':'1000'
        });
        $('.ask span').fadeOut();
    });
    $('.map_box.member').hover(function(){
        $('.up_board_off').hide();
        $('.up_board_on').show();
        $('.member .path-line').animate({
            'stroke-dashoffset':'0'
        },1500);
        $('.member span').fadeIn(2000);
    },function(){
        $('.up_board_off').show();
        $('.up_board_on').hide();
        $('.member .path-line').animate({
            'stroke-dashoffset':'1000'
        });
        $('.member span').fadeOut();
    });
    $('.map_box.about').hover(function(){
        $('.down_board_off').hide();
        $('.down_board_on').show();
        $('.about .path-line').animate({
            'stroke-dashoffset':'0'
        },1500);
        $('.about span').fadeIn(2000);
    },function(){
        $('.down_board_off').show();
        $('.down_board_on').hide();
        $('.about .path-line').animate({
            'stroke-dashoffset':'1000'
        });
        $('.about span').fadeOut();
    });
    $('.map_box.knowledge').hover(function(){
        $('.book_off').hide();
        $('.book_on').show();
        $('.knowledge .path-line').animate({
            'stroke-dashoffset':'0'
        },1500);
        $('.knowledge span').fadeIn(2000);
    },function(){
        $('.book_off').show();
        $('.book_on').hide();
        $('.knowledge .path-line').animate({
            'stroke-dashoffset':'1000'
        });
        $('.knowledge span').fadeOut();
    });
    $('.map_box.new').hover(function(){
        $('.new .path-line').animate({
            'stroke-dashoffset':'0'
        },1500);
        $('.new span').fadeIn(2000);
    },function(){
        $('.new .path-line').animate({
            'stroke-dashoffset':'1000'
        });
        $('.new span').fadeOut();
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#mask_clip_1', {
        scrollTrigger:'#clipping',
        duration: 2,
        opacity:0,
        y:'1000',
        ease:'back',
    }); 
    gsap.from('#mask_clip_2', {
        scrollTrigger:'#clipping',
        duration: 2.3,
        opacity:0,
        y:'1000',
        ease:'back',
    }); 
    gsap.from('#mask_clip_3', {
        scrollTrigger:'#clipping',
        duration: 2.5,
        opacity:0,
        y:'1000',
        ease:'back',
    }); 
    

});
AOS.init();
//cloud parallax
const wrap=document.getElementById('top_cloud_wrap');
const scene = new Parallax(wrap,{
    scalarX: 10,
	scalarY: 10,
});
// for (var i = 0, l = this.layers.length; i < l; i++) {
//     var layer = this.layers[i];
//     if (this.transform3DSupport) this.accelerate(layer);
// } 
//talk animation
var controller = new ScrollMagic.Controller();
const talkPath= new TimelineMax()
.staggerFrom(".normal", 8, 
    {x: 2200,opacity:0, 
    ease: Circ.easeOut}, 
    0.5).staggerFrom(".quick", 8, 
    {x: 2200,opacity:0, 
    ease: Circ.easeOut}, 
    0.5).staggerFrom(".slow", 8, 
    {x: 2200,opacity:0, 
    ease: Circ.easeOut}, 
    0.5)
let talk_scene = new ScrollMagic.Scene({
    triggerElement: ".page02_01", 
    duration:1000,
    triggerHook:0
})
.setTween(talkPath)
.addIndicators({name: "staggering"})
.setPin(".page02_01")
.addTo(controller);
