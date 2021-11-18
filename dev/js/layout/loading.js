$(function(){
    $('body').waitForImages({
        finished: function() {
            $('#loadpage').addClass('loading-done');
            setTimeout(function(){
                $('#loadpage').slideToggle(500);
            }, 1500);
            $('.section').css('display', 'flex');
        },
        each: function(loaded, count, success) {
            var pNum = parseInt((loaded / count) * 100);
            $('#loadpage').find('#progress').text(pNum+'%');
        },
        waitForAll: true
    });
});
