
/* let num = Math.floor(Math.random()*101);
    let numtext;
     */
let Timer;
let clock = new Date().getTime();//当前秒数
let audio = document.querySelector("#music");
let s = 1000;//设定一个时间差
let card = {
    text: "",
    numtext: function () {
        let num = Math.floor(Math.random() * 101);
        if (num < 5) {
            card.text = `匹配程度${num}%,再见吧，这辈子没缘分`
        }
        else if (num <= 25 && num > 5) {
            card.text = `匹配程度${num}%，建议吵一架，看看缘分`
        }
        else if (num <= 50 && num > 25) {
            card.text = `匹配程度${num}%，舔到最后一无所有`
        }
        else if (num <= 75 && num > 50) {
            card.text = `匹配程度${num}%，简直是良缘，赶紧把握`
        }
        else if (num <= 95 && num > 75) {
            card.text = `匹配程度${num}%，天作之合,万里挑一`
        }
        else if (num >= 95) {
            card.text = `匹配程度${num}%，今天必须结婚，我说的!`
        }
    },
    dom: $(".cpdd-item"),
    status: 1,
    start: function () {
        let newClock = new Date().getTime();
        if (card.status > 2 || newClock - clock < 1000) {
            clearTimeout(Timer);
            return;
        }
        clock = new Date().getTime();
        let that = $(this);
        //如果是第一次
        if (card.status == 1) {
            $("#cp").addClass("start").find("#dddd").text("谨慎选择，里面有代刷");
            card.status++;
        }
        else if (card.status == 2) {
            /* let val = Math.floor(Math.random()*persons.length); */

            $("#cp").removeClass("start").find(".cpdd-item").addClass("choice");
            that.addClass("shows");
            $("#cpbtn").addClass("cpbtn-shows");
            $("#dddd").text("您的今日情侣是:");
            Timers = setTimeout(function () {
                that.empty();
                $.getJSON("js/person.json",
                    function (data) {
                        let val = Math.floor(Math.random() * data.length)
                        let r = data[val];
                        let h4 = $("<h4></h4>");
                        h4.text(r.name).css({ "textAlign": "center", "fontSize": "2rem", "paddingTop": "50px"})
                        that.append(h4);
                        card.numtext();
                        Timers = setTimeout(function () {
                            console.log(val);
                            $(".say").css("opacity", "1");
                            if (val <= data.length - 6) {
                                $(".say-item").eq(0).text(`姓名:${r.name}`)
                                $(".say-item").eq(1).text(`预计年龄:${r.age}`)
                                $(".say-item").eq(2).text(`可撩程度:${r.money}`)
                                $(".say-item").eq(3).text(`简介:${r.xg}`)
                                $(".say-item").eq(4).text(card.text);
                            }else{
                                $(".say-item").eq(0).text("圣诞节快乐")
                                $(".say-item").eq(1).text("玩玩手机看看电视")
                                $(".say-item").eq(2).text("习惯了就好")
                                $(".say-item").eq(3).text("反正......")
                                $(".say-item").eq(4).text("你注定孤独一辈子了");
                            }
                        }, 2000)
                    }
                )

            }, 3000)
            card.status++;
        }

    },
    end: function () {
        $(".say").css("opacity", "0");
        $("#dddd").text("哦吼，你反悔了");
        $(".cpdd-item").removeClass("choice");
        $("#cp").removeClass("start").find(".cpdd-item").removeClass("choice");
        $("#cpbtn").removeClass("cpbtn-shows");
        $(".shows").empty().removeClass("shows");
        $(".say").css("opacity", "0")
        card.status = 1;
        clearTimeout(Timers);
    }
}
//开始
$(function () {
    $(".ddd").on("click", function (e) {
        e.preventDefault();
        audio.play();
        $("#cp").css("display", "block");
    });
    $(".cpdd-item").on("click", card.start)
    $("#cp-again").on("click", card.end)
})



/* let persons = ["法医","男爵","入梦","龙猫","七七","大风","咸鱼","铁头","菜菜"
,"滑板仔","23333","钱","无双-青酱","长柳","古青城","无双-奶爹","飞鸿-沉音","无双剑起","花花"
,"注孤身吧","注孤身吧","注孤身吧","注孤身吧","最帅代刷","注孤身吧"]}
let get = true;
$(function(){//点击打开cpdd功能
    $(".ddd").on("click",function(e){
        e.preventDefault();
        $("#cp").css("display","block");
    })
    //点击卡牌
    $(".cpdd-item").on("click",function(){
        let newClock  = new Date().getTime();
        console.log(newClock - clock);
        if(card.status > 2 || newClock - clock < 1000){
            clearTimeout(Timer);
            return;
        }
        clock = new Date().getTime();
        let that = $(this);
        //如果是第一次
        if(card.status == 1){
            $("#cp").addClass("start").find("#dddd").text("谨慎选择，里面有代刷");
            card.status++;
        }

        else if(card.status == 2){
            let val = Math.floor(Math.random()*persons.length);
            $("#cp").removeClass("start").find(".cpdd-item").addClass("choice");
            that.addClass("shows");
            $("#cpbtn").addClass("cpbtn-shows");
            $("#dddd").text("您的今日情侣是:");
           Timers = setTimeout(function(){
                that.empty();
                let h4 = $("<h4></h4>");
                h4.text(persons[val]).css({"textAlign":"center","fontSize":"2rem","paddingTop":"50px"})
                that.append(h4)
                Timers = setTimeout(function(){
                    console.log(says.length)
                    $(".say").css("opacity","1");
                    $(".say-item").each(function(i,a){
                        $(this).text("你好")
                    })
                },2000)
            },3000)
            card.status++;
        }

        $("#cp-again").on("click",function(){
            clearTimeout(Timers);
            $("#dddd").text("哦吼，你反悔了");
            $(".cpdd-item").removeClass("choice");
            $("#cp").removeClass("start").find(".cpdd-item").removeClass("choice");
            $("#cpbtn").removeClass("cpbtn-shows");
            that.empty().removeClass("shows");
            $(".say").css("opacity","0")
            card.status = 1;
        })
    })

}) */


