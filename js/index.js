let box = $("#box").width();
let colors = ["rgb(0, 104, 104)","black","rgb(235, 6, 6)","rgb(0, 98, 209)","rgb(40, 170, 0)","rgb(255, 136, 0)","rgb(224, 9, 224)"]
let start = ["代刷真的帅","里面的群友说话又好听","群里小哥哥爆照好帅！！！","听说群里有低配版李现","代刷真的真的帅","菜菜子牛逼","七七七七七七七七","法医法医天下第一","只为代刷而来","代刷男神!!!","男爵大哥我来了","我来找CP的","cpdd!!",
"爷青回","awsl","只为代刷而来","快进群集美们，里面全是帅哥","我们要进群","我喜欢滑板仔!","法医我来了","铁头铁头下雨不愁","我要买大风的苹果！","大风的苹果真好吃！","奕剑选我我超甜","天机爸爸我来了","在线等一冰心妹子","在线求cp呜呜呜","代刷永远滴神","小吧主威武","太虚威武"
,"贴吧颜值高的都在群里，是真的","冲鸭"];
let long = start.length;
$(function(){
    starts();
    $(".dm-send").on("click",function(){
    let val = $("#dm-text").val();
    if(val.trim() !== ""){
        dm(val);
        $("#dm-text").val("");
    }
    })
    $("#dm-text").on("keyup",function(e){
        let val = $("#dm-text").val();
        if(e.keyCode == 13 && val.trim() !== ""){
            dm(val);
            $("#dm-text").val("");
        }
    })
})

function starts(){
    let nr = start[Math.floor(Math.random()*long)]
    let time = Math.floor(Math.random()*3000+800);
    let timer = setTimeout(function(){
        dm(nr);
        if(timer){
            clearTimeout(timer);
        }
        starts();
    },time);
}

function dm(val){
    let color = colors[Math.floor(Math.random()*colors.length)];
    let px = Math.floor(Math.random()*400+66)+"px";
    let span = $("<span></span>");
    span.addClass("span")
        .css({
            "color":color,
            "left":"-100px",
            "top":px
         })
        .append(val)
        .appendTo("#box")
        .animate({left:box+500},8000,"linear",function(){
            $(this).remove();
        })
}
