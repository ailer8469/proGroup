$(function(){ 
    $('.burger').click(function(){
        $('.nav-sp-bar').slideToggle(700);
        $(this).toggleClass('active');
    })
});
