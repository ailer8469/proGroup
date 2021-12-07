const load = lottie.loadAnimation({
    container: document.getElementById("loaded"), 
    loop: false,
    autoplay: true,
    path: "https://assets6.lottiefiles.com/packages/lf20_u9ho7gew.json"
});

$(function(){
    circle= $('#loaded');
        // switch to index ourwork
        const url = location.hash;
        const local=window.location.pathname;
        let index= local.substring(local.lastIndexOf('/')+1);
        if (url == "#ourwork") {     
            $('#loading').hide();
            $("html, body").animate({ scrollTop: $(".ourwork").offset().top }, 1000);
        }else if(index == 'index.html'){
            $('body').waitForImages({
            finished: function() {
            $('main').css('display', 'none');
            // animation up
            load.playSegments([250,360], true);
            $('#progress').fadeOut(1000);
            setTimeout(function(){
                let tl = new TimelineMax({
                    onComplete:animateComplete()
                });
                tl.to($('.mask_wrap'),1, {
                    opacity:1,
                })
                .to(circle,{
                    opacity:0
                },'-=2')
                .fromTo($('.mask_wrap'),1, {
                    opacity:1,
                },{
                    opacity:0,
                    scale:20,
                },'-=1')
                .to($('.loadpage'),{
                    'background-color':'transparent'
                },'-=100')
                .to($('.mask_circle_deep'),{
                    opacity:1,
                },'-=100')
                .to($('#mask_hole'),.5,{
                    scale:20,
                },'-=4')
                .to($('main'),{
                    'display':'block'
                },'-=300');
            }, 1000);
        },
        each: function(loaded, count, success) {
            var pNum = parseInt((loaded / count) * 100);
            $('#loadpage').find('#progress').text(pNum+'%');
        },
        waitForAll: true
            });
        }else{
            $('#progress').hide();
            $('body').waitForImages({
                finished: function() {
                $('main').css('display', 'none');
                // animation up
                setTimeout(function(){
                    let tl = new TimelineMax({
                        onComplete:animateComplete()
                    });
                    tl.to($('.mask_wrap'),1, {
                        opacity:1,
                    })
                    .fromTo($('.mask_wrap'),1, {
                        opacity:1,
                    },{
                        opacity:0,
                        scale:20,
                    },'-=1')
                    .to($('.loadpage'),{
                        'background-color':'transparent'
                    },'-=100')
                    .to($('.mask_circle_deep'),{
                        opacity:1,
                    },'-=100')
                    .to($('#mask_hole'),.5,{
                        scale:20,
                    },'-=4')
                    .to($('main'),{
                        'display':'block'
                    },'-=300');
                }, 1000);
            },
            waitForAll: true
                });
        }
    function animateComplete(){
        var tl2 = new TimelineMax();
        tl2.to('#loading', {opacity: 1, onComplete: function(){
            $('#loading').hide();
        }});
    };
});
