$(function(){

    var $menu_btn = $(".area_1 > .wrap > button");
    var $menu = $("#menu");
    var $menu_li = $("#menu > ul > li");
    var $close_btn = $("#menu > button");
    var $area_2 = $(".area_2 > wrap");
    var $back_2 = $("#back_2");
    var $more_btn = $(".area_2 > button");
    var $years = $(".year");
    var $date = $(".date");
    var $mark = $("#mark");
    var $flower_mark = $("#flower_mark");
    var $circle = $(".circle");
    var $area_4 = $(".area_4");
    var $saying = $("#contents_3 > p");
    var $current = $(".area_4 > .wrap > img");
    var $past_box = $("#past_box");
    var $area_5 = $(".area_5");
    var $num_5 = $(".number");
    var $img_5 = $("#box_5 > img");
    var $answer_li = $("#answer > ul > li");
    var $answer_btn = $("#answer > button");
    var $proper = $("#proper");
    var $wrong = $("#wrong");
    var $ans_close = $(".ans_close");
    var $blind = $(".blind");
    var $moon = $("#moon");
    var $tree = $("#tree");
    var $star = $(".star");
    var say_0 = new Array();
    var say_1 = new Array();
    var say_2 = new Array();
    var say_3 = new Array();
    var more_count = 0;
    var more_flag = 0;
    var person_flag = 0;
    var ans_num = 0;
    var num, num2, num3;
    var typingIdx = 0;
    var text_len = new Array();
    var i = 0;
    var j = 0;

    $menu_btn.on("click",function(){
        $menu.animate({"right":"0"});
    });
    $close_btn.on("click",function(){
        $menu.animate({"right":"-260px"});
    });
    $menu_li.on("click",function(){
        if($(this).children("ul").is(".active_m")){
            $(this).children("ul").removeClass("active_m").slideUp();
        }
        else{
            $(".active_m").removeClass("active_m").slideUp();
            $(this).children("ul").addClass("active_m").slideDown();
        }

    })
    var yearTop = new Array();
    var circleTop = new Array();
    var areaOffset = new Array();

    $(window).on("scroll",function(){
        var scrollTop = $(window).scrollTop();

        if(more_flag == 0){

            if(scrollTop > areaOffset[3] -300){
                if(!(person_flag)){
                    person_flag = 1;
                    var texts = [
                        $saying.eq(0).text(),
                        $saying.eq(1).text(),
                        $saying.eq(2).text(),
                        $saying.eq(3).text()
                    ];

                    $saying.empty();

                    for (var i = 0; i < texts.length; i++)
                        texts[i] = texts[i].split("");

                    // console.log(texts);

                    var lines = 0;
                    var chars = 0;

                    var timerId = window.setInterval(function () {
                        $saying.eq(lines).append(texts[lines][chars]);
                        chars++;
                        if (chars >= texts[lines].length) {
                            chars = 0;
                            lines++;
                        }
                        if (lines >= texts.length) window.clearInterval(timerId);
                    }, 100);
                }

            }

            if( scrollTop > areaOffset[4] - 300){
                $past_box.animate({"opacity":"1"},600);
                $current.animate({"opacity":"0"},600);
            }
            if(scrollTop > areaOffset[5] - 300){
                animation_5(0);
                animation_5(1);
                animation_5(2);
                animation_5(3);
                animation_5(4);
                animation_5(5);
            }

            var topArea7 = areaOffset[7] - 500;
            if (scrollTop > topArea7){
                $blind.eq(0).animate({top:"100%"},800,"linear");
                $blind.eq(1).delay(800).animate({top:"100%"},800,"linear");
                $blind.eq(2).delay(1600).animate({top:"100%"},800,"linear");
                $blind.eq(3).delay(2400).animate({top:"100%"},800,"linear");
                $blind.eq(4).delay(3200).animate({top:"100%"},800,"linear");
                $blind.eq(5).delay(4000).animate({top:"100%"},800,"linear");
                $blind.eq(6).delay(4800).animate({top:"100%"},800,"linear");
                $blind.eq(7).delay(5600).animate({top:"100%"},800,"linear");
                $blind.eq(8).delay(6400).animate({top:"100%"},800,"linear");
                $blind.eq(9).delay(7200).animate({top:"100%"},800,"linear");

                $moon.animate({"opacity":"1"},function(){
                    $tree.animate({"opacity":"1"},1000);
                });
            }
        } // more_flag == 0
        else{
            var k = 0;
            for(k = 0; k < 9; k++){
                if(!(scrollTop > yearTop[k] - 300)){
                    --k;
                    break;
                }
            }
            if(k != 7){
                $mark.stop().animate({"top":circleTop[k] - 130});
                if(k == 0) $date.eq(0).animate({"opacity":"1"});
                else if(k == 3) $date.eq(1).animate({"opacity":"1"});
                else if(k == 6) $date.eq(2).animate({"opacity":"1"});
            }
            else{
                $date.eq(3).animate({"opacity":"1"});
                $mark.stop().animate({"top":circleTop[k] - 130},function(){
                    $(this).animate({opacity:"0"});
                    $flower_mark.animate({opacity:"1"});
                });
            }
        }
    });

    $answer_li.on("click",function(){
        $answer_li.children("img:first-child").css("animation-iteration-count","0");
        $(".active_6").removeClass("active_6");
        $(this).children().eq(1).addClass("active_6");
        ans_num = parseInt($(this).attr("data-index"));
    });

    $answer_btn.on("click",function(){
        if(ans_num == 1){
            $proper.css("display","block").animate({"opacity":"1"});
        }
        else{
            $wrong.css("display","block").animate({"opacity":"1"});
        }
    });

    $ans_close.on("click",function(){
        $(this).parent().animate({"opacity":"0"}).css("display","none");

    });

    function animation_5(num){
        $num_5.eq(num).css({"transform":"rotate(360deg)", "transition-delay":num + "s"});
        $img_5.eq(num).delay(num*1000).animate({"opacity":"1"});
    }

    // setInterval(function(){
    //     $star.animate({"box-shadow":"none"},function(){
    //         $(this).animate({"box-shadow":""});
    //     });
    // },1000);

    $more_btn.on("click",function(){
        more_flag = 1;
        more_count++;
        if(parseInt($back_2.css("height")) + 950 < 3505){
            $back_2.css("height",parseInt($back_2.css("height")) + 950);
        }
        if(more_count == 3){ $more_btn.children().text("닫기"); }
        if(more_count == 4){
            $more_btn.children().text("더보기");
            $back_2.removeAttr("style");
            more_count = 0;
            $("body").animate({scrollTop : 0}, 400,function(){
                more_flag = 0;
            });
            $flower_mark.removeAttr("style");
            $mark.removeAttr("style");
        }
    });




/*
    say_0 = $saying.eq(0).text();
    say_1 = $saying.eq(1).text();
    say_2 = $saying.eq(2).text();
    say_3 = $saying.eq(3).text();
    text_len[0] = say_0.length;
    text_len[1] = text_len[0] + say_1.length;
    text_len[2] = text_len[1] + say_2.length;
    text_len[3] = text_len[2] + say_3.length;
    say_0 = $saying.eq(0).text() + $saying.eq(1).text() + $saying.eq(2).text() + $saying.eq(3).text();
    $saying.empty();
    say_0 = say_0.split("");

    var timer = setInterval(typing,100);
    function typing(){
        if(typingIdx < text_len[0]){
            $saying.eq(0).append(say_0[typingIdx]);
            typingIdx++;
            console.log(typingIdx);
        }
        else if(typingIdx < text_len[1]){
            $saying.eq(1).append(say_0[typingIdx]);
            typingIdx++;
            console.log(typingIdx);
        }
        else if(typingIdx < text_len[2]){
            $saying.eq(2).append(say_0[typingIdx]);
            typingIdx++;
        }
        else if(typingIdx < text_len[3]){
            $saying.eq(3).append(say_0[typingIdx]);
            typingIdx++;
        }
        else{
            clearInterval(timer);
        }
    }
    // console.log(text_len[0]);
    // console.log(text_len[1]);
    // console.log(text_len[2]);
    // console.log(text_len[3]);
    */

    // $("#cover > button").on("click",function(){
    //     $("#cover").css("display","none");
    //     $("#main").css("display","block");
    //     for(var i = 0; i < 8; i++){
    //         yearTop[i] = $years.eq(i).offset().top;
    //         circleTop[i] = $circle.eq(i).offset().top;
    //         console.log("yearTop[" + i + "] = " + yearTop[i] + ", circleTop[i] = " + circleTop[i] );
    //     }
    //     for(var m = 0; m < 7; m++){
    //         areaOffset[m+1] = $(".area").eq(m).offset().top;
    //         console.log("areaOffset[" + m + "] = " + areaOffset[m]);
    //     }
    // });


    var slideCount = 0;
    //cover
    var slideTimer = window.setInterval(sliding,400);
    function sliding(){
        slideCount++;
        console.log("slideCount = " + slideCount);
        if(!(slideCount%10)){
            $("#tens > ul").stop().animate({top:-192 * (slideCount/10) + "px"});
            clearInterval(slideTimer);
            slideTimer = window.setInterval(sliding,600 - 15*Math.abs(25-slideCount));
        }
        if(slideCount == 35){
            clearInterval(slideTimer);
            $("#tens > ul").delay(400).animate({"opacity":"0"},10);
            $("#cover > img").delay(400).animate({opacity:"1"});
            $("#phr").delay(400).animate({"opacity":"1"},function(){
                $("#cover").delay(2000).animate({"opacity":"0"},10,function(){
                    $(this).css("display","none");
                })
                $("#main").delay(2000).animate({"opacity":"1"},10,function(){
                    $(this).css("display","block");
                    for(var i = 0; i < 8; i++){
                        yearTop[i] = $years.eq(i).offset().top;
                        circleTop[i] = $circle.eq(i).offset().top;
                        console.log("yearTop[" + i + "] = " + yearTop[i] + ", circleTop[i] = " + circleTop[i] );
                    }
                    for(var m = 0; m < 7; m++){
                        areaOffset[m+1] = $(".area").eq(m).offset().top;
                        console.log("areaOffset[" + m + "] = " + areaOffset[m]);
                    }
                });
            });
        }
        $("#units").children("ul").animate({top:"-192px"},350,function(){
            $(this).removeAttr("style").children("li:first-child").appendTo("#units > ul");
        });


    }
});
