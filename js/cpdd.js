let card = {
    status:1
};
let Timer;
let clock = new Date().getTime();//当前秒数
let s = 1000;//设定一个时间差
let persons = ["法医","男爵","入梦","龙猫","七七","大风","咸鱼","铁头","菜菜","滑板仔","网易是狗","钱","无双-青酱","长柳","古青城","无双-奶爹","无双剑起","花花","注孤身吧","注孤身吧","注孤身吧","注孤身吧","最帅代刷","注孤身吧"]
let get = true;
$(function(){
    $(".ddd").on("click",function(e){
        e.preventDefault();
        $("#cp").css("display","block");
    })
    $(".cpdd-item").on("click",function(){
        let newClock  = new Date().getTime();
        console.log(newClock - clock);
        if(card.status > 2 || newClock - clock < 1000){
            clearTimeout(Timer);
            return;
        }
        clock = new Date().getTime();
        let that = $(this);
        if(card.status == 1){
            $("#cp").addClass("start").find("#dddd").text("谨慎选择，里面有代刷");
            card.status++;
        }
        else if(card.status == 2){
            let val = Math.floor(Math.random()*persons.length);
            $("#cp").removeClass("start").find(".cpdd-item").addClass("choice");
            that.addClass("shows");
            $("#cpbtn").addClass("cpbtn-shows");
            $("#dddd").text("答应我，香的臭的都要吃下去");
           Timers = setTimeout(function(){
                that.empty();
                let h4 = $("<h4></h4>");
                h4.text(persons[val]).css({"textAlign":"center","fontSize":"2rem","paddingTop":"50px"})
                that.append(h4)
            },3000)
            card.status++;
        }
        $("#cp-again").on("click",function(){
            $("#dddd").text("哦吼，你反悔了");
            $(".cpdd-item").removeClass("choice");
            $("#cp").removeClass("start").find(".cpdd-item").removeClass("choice");
            $("#cpbtn").removeClass("cpbtn-shows");
            that.empty().removeClass("shows");
            card.status = 1;
        })
    })
   
})


