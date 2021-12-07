$(function(){
    var wdth=$(window).width();
    $(window).resize(function(){
        wdth=$(window).width();
    });

    // hover animation
    $('#arrow_right').hover(function(){
        $('#arrow_right').addClass('active');
    },function(){
        $('#arrow_right').removeClass('active');
    });
    $('#arrow_left').hover(function(){
        $('#arrow_left').addClass('active');
    },function(){
        $('#arrow_left').removeClass('active');
    });

    // carousel
    $('.main-pos .mem_box').addClass('fadeUp');
    //swap images function
    function swap(action) {
        var direction = action;

        // prev
        if(direction == 'counter-clockwise') {
            var leftitem = $('.left-pos').attr('id') - 1;
            if(leftitem == 0) {
            leftitem = itemCount;
            }
            // restart settimeout
            clearInterval(autoSwap);
            autoSwap = setInterval( swap , 4800 );

            // restart css animate
            $('.shadow_line').before($('.shadow_line').clone(true)).remove();
            $('.load_icon .shadow').before($('.load_icon .shadow').clone(true)).remove();

            $('.right-pos').removeClass('right-pos').addClass('back-pos');
            $('.main-pos').removeClass('main-pos animate__animated animate__swing').addClass('right-pos');
            $('.left-pos').removeClass('left-pos').addClass('main-pos animate__animated animate__swing');
            $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
            
            startItem--;
            if(startItem < 1) {
                startItem = itemCount;
            }
        }
        // next
        if(direction == 'clockwise' || direction == '' || direction == null ) {
            function pos(positionvalue) {
            if(positionvalue != 'leftposition') {
                position++; 
                if((startItem + position) > resetCount) {
                position = 1 - startItem;
                }
            }
            
            // set left item
            if(positionvalue == 'leftposition') {
                position = startItem - 1;
                if(position < 1) {
                    position = itemCount;
                }
            }
                return position;
            }  
            // restart settimeout
            clearInterval(autoSwap);
            autoSwap = setInterval( swap , 4800 );

            // restart css animate
            $('.shadow_line').before($('.shadow_line').clone(true)).remove();
            $('.load_icon .shadow').before($('.load_icon .shadow').clone(true)).remove();

            $('#'+ startItem +'').removeClass('main-pos animate__animated animate__swing').addClass('left-pos');
            $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos animate__animated animate__swing');
            $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
            $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');
            startItem++;
            position = 0;
            if(startItem > itemCount) {
                startItem = 1;
            }
        }
    }
    var autoSwap = window.setInterval( swap , 4800 );
    // pause slideshow and reinstantiate on mouseout
    $('.pc .mem_wrap').hover(
    function () {
        clearInterval(autoSwap);
        $('.shadow_line').css({
            'animation':'none'
        });
        $('.load_icon .shadow').css({
            opacity:0,
            'animation':'none'
        });
    }, 
    function () {
        autoSwap = setInterval( swap , 4800 );
        $('.shadow_line').css({
            'animation':'load_line 5s linear infinite'
        });
        $('.load_icon .shadow').css({
            opacity:1,
            'animation':'load 5s linear infinite'
        });
    });
    var items = [];
    var startItem = 1 ;
    var position =  0 ;
    var itemCount = $('.main_slider.pc .member_slider').length;
    var resetCount = itemCount;

    $('.member_slider').each(function(index) {
        items[index] = $(this).text();
    }); 
    // next
    $('#arrow_right').click(function() {
        swap('clockwise');
    });
    // prev
    $('#arrow_left').click(function() {
        swap('counter-clockwise');
    });
    if(wdth>1200){
        $('.title_item').eq(0).addClass('current');
    }
    // 偵測DOM變化
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            /*********************************/ 
            // animate in words
            $('.main-pos .mem_box').addClass('fadeUp');
            // get id
            let curItem= ($('.member_slider.main-pos')).attr('id');
            // change loading number
            if(wdth>1200){
                $('.load_icon span').text(curItem + '/' + 5);
                // change title
                $('.title_item').removeClass('current');
                $('.title_item').eq(curItem - 1).addClass('current');
            }
            /*********************************/
        });
    });
    /**Element**/
    mutationObserver.observe($('.main_slider')[0], {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    });

    // carousel for sp
    var syncedSecondary = true;
    var sync1 = $('.main_slider_sp');
    var sync2 = $("#sync2");
    var allTitle= $('.title_item').length;

    if(wdth<1200){
        sync2.addClass('owl-carousel');
        $('.title_item').removeClass('current');
    }
    if(wdth<1200){
        sync1.owlCarousel({
            items:1,
            loop:true,
            slideSpeed : 200,
            mouseDrag:false,
            singleItem:true,
            touchDrag:false,
        }).on('changed.owl.carousel', syncPosition);
    }
    // sync1 animation when they changed
    sync1.on('translated.owl.carousel', function(){
        sync1.find('.owl-item').removeClass('animate__animated animate__headShake');
        sync1.find('.owl-item.active').addClass('animate__animated animate__headShake');
    });
    if(wdth<1200){
    sync2.on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").removeClass("current");
        sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
        items : 5,
        slideSpeed : 500,
        margin:30,
        slideBy: 5,
        mouseDrag:false,
        pullDrag:false,
        touchDrag:false,
        responsiveRefreshRate : 100,
        responsive:{
            0:{
                items:2,
                slideBy: 1,
            },
            380:{
                items:3,
                slideBy: 2,
            },
            500:{
                items:4,
                slideBy: 3,
            },
            800:{
                items:5,
                slideBy: 3,
            }
        }
    }).on('changed.owl.carousel', syncPosition2);
}

    function syncPosition(el) {
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);
        
        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }
        //end block
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
        
        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }

        //change loading number
        $('.load_icon span').text( (current+1) + '/' + 5);
    };
    
    function syncPosition2(el) {
        if(syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    };
    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        // change to click number's item
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);

        //change loading number
        $('.load_icon span').text( (number+1) + '/' + 5);
    });
});