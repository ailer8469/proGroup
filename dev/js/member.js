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
    // slideshow style interval
    let line= $('.shadow_line');
    let icon= $('.shadow');
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
            $('.main-pos').removeClass('main-pos').addClass('right-pos');
            $('.left-pos').removeClass('left-pos').addClass('main-pos');
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

            $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
            $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
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
    $('.main_slider').hover(
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
    var itemCount = $('.main_slider .member_slider').length;
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
    $('.title_item').click(function() {
        if($(this).attr('class') == 'title_item memactive') {
            return;
        }
        else {
            window.clearInterval(autoSwap);

            $('.title_item').removeClass('memactive');
            $(this).addClass('memactive');
        }
    });
    // 偵測DOM變化
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            /*********************************/
            let curItem= ($('.member_slider.main-pos')).attr('id');
            // change title
            $('.title_item').removeClass('memactive');
            $('.title_item').eq(curItem - 1).addClass('memactive');
            
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

});