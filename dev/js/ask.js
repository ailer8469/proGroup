let card = document.getElementById("open_animate");
let animation;
let animationCompleted = true;
animation = lottie.loadAnimation({
    container: card,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets3.lottiefiles.com/packages/lf20_fpv1mcf5.json"
});
//open ask modal
let modal=document.querySelector('.postcard_wrap');
let close_modal =document.querySelector("#ask_close");
let open_modal=document.querySelector('.nav_ask');
let postcard=document.querySelector('.postcard');

open_modal.addEventListener("click", () => {
    card.style.display = "flex";
    modal.style.display = "flex"; 
    if(animationCompleted = true){
        animation.playSegments([0,100], true); 
    }else{
        animation.stop(); 
    }
    animation.addEventListener("complete", () => {
        let tl = new TimelineMax();
            tl.fromTo(postcard,1, {
                display:'none',
                scale:0.75,
            },{
                display:'flex',
            }).to(card,1,{
                display:'none',
            },'-=10').to(postcard,2, {
                scale:1,
            }).fromTo(['.card_text','.close'],2,{
                y:'30',
                opacity:0,
            },{
                y:'0',
                opacity:1,
                ease:'back',
            });
        // postcard.style.display = "flex";
        // card.style.display = "none";
        animationCompleted = false;
    });
});
close_modal.addEventListener("click", () => {
    modal.style.display = "none";
    postcard.style.display = "none";
    card.style.display = "none";
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
        $("input[name='select']").val( $(this).text() );
    });

    //check
    $('#ask_submit').click(function(e){
        e.preventDefault();
        index = $("input[name='mail']").val().indexOf ('@', 0);
        if ($("input[name='realname']").val() == "") {
            $('.warning.name_check').show();
            return (false);
        }else if ($("input[name='mail']").val().length==0 ||index==-1||index==0||index==$("input[name='mail']").val().length-1) {
            $('.warning.name_check').hide();
            $('.warning.mail_check').show();
            return (false);
        }else if ( $("input[name='select']").val() == "請選擇咨詢類別") {
            $('.warning.select_check').show();
            $('.warning.mail_check').hide();
            return (false);
        }else if ($("#consult_text").val() == "") {
            $('.warning.talk_check').show();
            $('.warning.select_check').hide();
            return (false);
        }else{
            console.log('發送成功');
            $('.postcard_wrap').hide();
        }
        
    })
    
});