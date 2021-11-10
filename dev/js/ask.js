let card = document.getElementById("open_animate");
let animation;
let animationCompleted = true;
animation = lottie.loadAnimation({
    container: card,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_ckm9hwyr.json'
});
animation.addEventListener("DOMLoaded", () => {
    console.log("animation loaded!");
});
//open ask modal
let modal=document.querySelector('.postcard_wrap');
let close_modal =document.querySelector(".close");
let open_modal=document.querySelector('.nav_ask');
open_modal.addEventListener("click", () => {
    card.style.display = "flex";
    if(animationCompleted = true){
        animation.playSegments([0,120], true); 
    }else{
        animation.stop(); 
    }
    animation.addEventListener("complete", () => {
        card.style.display = "none";
        modal.style.display = "flex"; 
        animationCompleted = false;
    });
});
close_modal.addEventListener("click", (e) => {
    modal.style.display = "none";
});




$(function(){
    // select bar
    $('.select').on('click','.placeholder',function(){
        var parent = $(this).closest('.select');
        if ( ! parent.hasClass('is-open')){
            parent.addClass('is-open');
            $('.select.is-open').not(parent).removeClass('is-open');
        }else{
            parent.removeClass('is-open');
        }
        }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
    });
});