$(function(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('body'),
        smooth: true,
        repeat: true,
        lerp:.02
    })
    var $scene = $('.top_cloud_wrap').parallax({
		scalarX: 100,
		scalarY: 100,
	});
})
