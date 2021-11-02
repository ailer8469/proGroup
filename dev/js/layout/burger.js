$(function(){ 
    $('.burger').click(function(){
        $('.nav-sp-bar').slideToggle(700).css({
            'position': 'fixed',
    }) 
    $('body').toggleClass('active');
})
});
