$(function(){
    // LocomotiveScroll
    let scrollContainer = document.querySelector("[data-scroll-container]");
    var scroll;
    scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        getSpeed: true,
        getDirection: true,
        offset:["15%",0]
    })
    imagesLoaded(scrollContainer, { background: true }, function () {
        scroll.update();
    });
})    