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
                let tl = new TimelineMax();
                tl.to($('#mask_circle'), {
                    opacity:1
                }).to(circle,{
                    opacity:0
                }).to($('#mask_circle'),1,{
                    scale:20,
                    ease: "power1.out",
                }).to($('#loadpage'),{
                    'display':'none',
                }).to($('#mask'),1,{
                    scale:20,
                    ease: "power1.out",
                }).to($('#mask_circle'),{
                    'display':'none',
                });
            }, 1000);
            $('main').css('display', 'block');
        },
        each: function(loaded, count, success) {
            var pNum = parseInt((loaded / count) * 100);
            $('#loadpage').find('#progress').text(pNum+'%');
        },
        waitForAll: true
    });
});
