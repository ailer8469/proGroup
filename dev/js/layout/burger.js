$(function(){ 
    // change size
    var wdth=$(window).width();
    $(window).resize(function(){
        wdth=$(window).width();
    });
    $('.burger').click(function(){
        if(wdth <=1200){
            $('.nav-sp-bar').toggle().css({
                'position': 'fixed',
            }) 
        }
        let tl = new TimelineMax();
            tl.fromTo($('.bar_background.first'),.3, {
                height:'0',
            },{
                height:'100%',
                ease: Linear.easeInOut
            }).fromTo($('.bar_background.second'),.3, {
                height:'0',
            },{
                height:'100%',
                ease: Linear.easeInOut
            }).fromTo($('.bar_background.third'),.3, {
                height:'0',
            },{
                height:'100%',
                ease: Linear.easeInOut
            }).fromTo($('.bar_background.forth'),.3, {
                height:'0',
            },{
                height:'100%',
                ease: Linear.easeInOut
            }).fromTo($('.bar_wrap li'),1,{
                y:60,
                opacity:0
            },{
                y:0,
                opacity:1,
                ease: Expo.easeInOut
            }).fromTo($('.nav_link'),.5,{
                y:20,
                opacity:0
            },{
                y:0,
                opacity:1,
                ease: Expo.easeInOut
            });
        $('body').toggleClass('active');
        //open copy phone
        $('#sp_link_mail').on('click',function(){
            $('#sp_popmail').fadeToggle(600)
        });
        //copy phone number
        $('#sp_popmail').click(function(){
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($('#sp_copyMail').text()).select();
            document.execCommand("copy");
            $temp.remove();
        });
    });
});
