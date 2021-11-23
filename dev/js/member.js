$(function(){
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
    $('.member_slider').hover(
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
    //if any visible items are clicked
    $('.member_slider').click(function() {
        if($(this).attr('class') == 'member_slider left-pos') {
            swap('counter-clockwise'); 
        }
        else {
            swap('clockwise'); 
        }
    });
    // 偵測DOM變化
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            /*********************************/ 
            // animate in words
            $('.main-pos .mem_box').addClass('fadeUp');
            // get id
            let curItem= ($('.member_slider.main-pos')).attr('id');
            // change title
            $('.title_item').removeClass('memactive');
            $('.title_item').eq(curItem - 1).addClass('memactive');
            // change loading number
            $('.load_icon span').text(curItem + '/' + 5);
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
    $('.main_slider_sp').slick({
        dots: false,
        infinite: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4600,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'linear',
        touchMove: true,
    }).on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('.member_slider').removeClass('animate__animated animate__swing');
        $('.member_slider.slick-current').addClass('animate__animated animate__swing');
    });

    $('.title_item').on('click', function() {
        let index= $('.title_item').index(this);
        $('.main_slider_sp').slick('slickGoTo', index , true);
        $('.title_item').removeClass('memactive');
        $('.title_item').eq(index).addClass('memactive');
        $('.main_slider_sp').slick('slickPlay');
        // change loading number
        $('.load_icon span').text(index+1 + '/' + 5);

        // restart css animate
        $('.shadow_line').before($('.shadow_line').clone(true)).remove();
        $('.load_icon .shadow').before($('.load_icon .shadow').clone(true)).remove();
    });

})