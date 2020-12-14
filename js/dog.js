let bgs = document.querySelectorAll(".bgbg");
let x = 0;
$(function () {
    $(".dog").on("click", function (e) {
        e.preventDefault();
        $("#friends").css("transform", " translateY(0%)");
    })
})
let timer = setTimeout(bgTime,3000);


function bgTime() {
    if(x>5){
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