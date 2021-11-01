$(function(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('body'),
        smooth: true,
        repeat: true,
        lerp:.02
    })
})
const wrap=document.getElementById('top_cloud_wrap');
const scene = new Parallax(wrap,{
    scalarX: 10,
	scalarY: 10,
});
for (var i = 0, l = this.layers.length; i < l; i++) {
    var layer = this.layers[i];
    if (this.transform3DSupport) this.accelerate(layer);
}