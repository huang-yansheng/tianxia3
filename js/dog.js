let bgs = document.querySelectorAll(".bgbg");
let x = 0;
$(function () {
    $(".dog").on("click", function (e) {
        audio.play();
        e.preventDefault();
        $("#friends").css("transform", " translateY(0%)");
    })
    //滚轮事件
    $("#friends").on("mousewheel DOMMouseScroll",function(e){
        if(e.originalEvent.wheelDelta < 0){
            $("#friends").css("transform", " translateY(100%)")
        }
    })
})
let timer = setTimeout(bgTime,3000);


function bgTime() {
    if(x>bgs.length-1){
        x=0;
    }
    for (let i = 0; i < bgs.length; i++) {
        bgs[i].classList.remove("sss");
    }
    bgs[x].classList.add("sss");
    x++;
    clearTimeout(timer);
    timer = setTimeout(bgTime,3000);
}

