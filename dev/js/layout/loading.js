const load = lottie.loadAnimation({
    container: document.getElementById("loaded"), 
    loop: false,
    autoplay: true,
    path: "https://assets2.lottiefiles.com/packages/lf20_wz1jiozw.json"
});

$(function(){
    circle= $('#loaded');
    $('body').waitForImages({
        finished: function() {
            $('main').css('display', 'none');
            // animation up
            load.playSegments([250,360], true);
            $('#progress').fadeOut(1000);
            setTimeout(function(){
                let tl = new TimelineMax({
                    onComplete: animateComplete
                });
                tl.to(circle,{
                    opacity:0
                },'-=50').to($('.mask_wrap'), {
                    opacity:1
                },'-=5').to($('#mask_circle'),3,{
                    scale:20,
                    opacity:0,
                    ease: "power1.out",
                }).to($('#mask_circle_deep'),3,{
                    scale:300
                },'-=2').to($('.loadpage'),{
                        'background-color':'transparent'
                },'-=5');
                $('main').css('display', 'block');
            }, 1000);
        },
        each: function(loaded, count, success) {
            var pNum = parseInt((loaded / count) * 100);
            $('#loadpage').find('#progress').text(pNum+'%');
        },
        waitForAll: true
    });
    function animateComplete(){
        var tl2 = new TimelineMax();
        tl2.to('#loading', 1.6, {opacity: 0, onComplete: function(){
            $('#loading').hide();
        }});
    };
});
