$(function(){ 
    $('.burger').click(function(){
        console.log(2);
        $('.nav-sp-bar').slideToggle(700);
        $(this).toggleClass('active');
    })
});
