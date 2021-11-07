$(document).ready(function(){
    

    let modal=$('.cooperate_modal');
    let open_modal=$('.cooperate_item');
    let close_modal =$(".modal_close");
    open_modal.on('click',function(){
        modal.css({
            'display':"flex",
        })
    })
    close_modal.on('click',function(){
        modal.css({
            'display':"none",
        })
    })
    $(window).click(function(event){
        if(event.target.className == 'cooperate_modal'){
            modal.css({
                'display':"none",
            })
        }
    })    
});
const wrap=document.getElementById('top_cloud_wrap');
const scene = new Parallax(wrap,{
    scalarX: 10,
	scalarY: 10,
});
for (var i = 0, l = this.layers.length; i < l; i++) {
    var layer = this.layers[i];
    if (this.transform3DSupport) this.accelerate(layer);
}