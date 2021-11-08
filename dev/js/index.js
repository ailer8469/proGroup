$(document).ready(function(){
    //open copy phone
    $('#link_phone').on('click',function(){
        $('.poptext').fadeToggle(600)
    });
    //copy phone number
    $('#popnumber').click(function(){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#copyPhone').text()).select();
        document.execCommand("copy");
        $temp.remove();

        let modal = document.getElementById("alert_modal");
        let span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
            }
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            }
        }
        window.ontouchend = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });

    //open cooperate modal
    let modal=$('.cooperate_modal');
    let open_modal=$('.cooperate_item');
    let close_modal =$(".modal_close");
    open_modal.on('click',function(){
        modal.css({
            'display':"flex",
        })
    });
    close_modal.on('click',function(){
        modal.css({
            'display':"none",
        })
    });
    $(window).click(function(event){
        if(event.target.className == 'cooperate_modal'){
            modal.css({
                'display':"none",
            })
        }
    });  
    //hover animation
    $('.map_box.ask').hover(function(){
        $('.pig_map_off').hide();
        $('.pig_map_on').show();
    },function(){
        $('.pig_map_off').show();
        $('.pig_map_on').hide();
    })
});
//cloud parallax
const wrap=document.getElementById('top_cloud_wrap');
const scene = new Parallax(wrap,{
    scalarX: 10,
	scalarY: 10,
});
for (var i = 0, l = this.layers.length; i < l; i++) {
    var layer = this.layers[i];
    if (this.transform3DSupport) this.accelerate(layer);
}