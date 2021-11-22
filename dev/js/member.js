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
    //swap images function
    function swap(action) {
        var direction = action;
        //moving carousel backwards
        if(direction == 'counter-clockwise') {
            var leftitem = $('.left-pos').attr('id') - 1;
            if(leftitem == 0) {
            leftitem = itemCount;
            }
            $('.right-pos').removeClass('right-pos').addClass('back-pos');
            $('.main-pos').removeClass('main-pos').addClass('right-pos');
            $('.left-pos').removeClass('left-pos').addClass('main-pos');
            $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
            
            startItem--;
            if(startItem < 1) {
                startItem = itemCount;
            }
        }
        // moving carousel forward
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
    var autoSwap = setInterval( swap,4800);
    // pause slideshow and reinstantiate on mouseout
    $('.main_slider').hover(
    function () {
        clearInterval(autoSwap);
    }, 
    function () {
        autoSwap = setInterval(swap,4800);
    });
    var items = [];
    var startItem =1;
    var position = 0;
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
    $('li').click(function() {
        if($(this).attr('class') == 'member_slider left-pos') {
        swap('counter-clockwise'); 
        }
        else {
        swap('clockwise'); 
        }
    });
    // change title
    let current_item= $('li.member_slider.main-pos').index();
    console.log(current_item);
});