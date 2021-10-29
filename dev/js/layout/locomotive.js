$(function(){
    // LocomotiveScroll
    let scrollContainer = document.querySelector("[data-scroll-container]");
    var scroll;
    scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        lerp:.04
    })
    imagesLoaded(scrollContainer, { background: true }, function () {
        scroll.update();
    });
})    