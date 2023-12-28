$('.btn_img ul li').eq(0).addClass("on")
$('.btn_list ul li').eq(0).addClass("on")


$('.btn_list ul li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.btn_list ul li').removeClass("on").eq(i).addClass("on");
    
    $('.btn_img ul li').removeClass("on").eq(i).addClass("on");

})