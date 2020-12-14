$(function(){
    $(".nav a").on("mouseover",function(e){
        e.preventDefault();
        let id = $(this).attr("id");
        $(`[data-id=${id}]`).addClass("show");
    }).on("mouseout",function(e){
        let id = $(this).attr("id");
        $(`[data-id=${id}]`).removeClass("show");
    })
    close();
    //右侧nav彩蛋事件
    $("#cd").on("mouseenter",function(){
        $(".nav-main").addClass("show");
    })
    $(".nav-main").on("mouseleave",function(){
        $(".nav-main").removeClass("show");
    })
    //彩蛋滑动事件
    let height = $(".nav-item").height();
    let qqheight = $(".nav-qq").offset().top;
    $(".nav-item").on("mouseover",function(){
        let y = $(this).index()*height;
        $(".nav-qq").css("transform",`translateY(${y}px)`)
    })
})





function close(){
    $(".close").on("click",function(){
        $(this).parent().remove();
    })
}
    