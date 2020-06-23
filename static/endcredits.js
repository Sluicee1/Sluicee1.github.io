/*
 * jQuery endcredits Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
$(document).ready(function () {

    $('a[name=creditos]').hide();

    function start(e) {
        
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#titles').css({
            'width': maskWidth,
            'height': maskHeight
        });

        $('#titles').fadeIn(1000);
        $('#titles').fadeTo("slow");
        $('#titles').fadeIn();
        $('#credits').css("left", (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + "px");
        $('#credits').css("bottom", "-" + (maskHeight) * 2 + "px");
        $('#credits').show('slow');

        $('#credits').animate({
            bottom: maskHeight + "px"
        }, {
            duration: 20000,
            complete: function () {
                $('#titles').fadeOut();
                $('.window').fadeOut();
                $('#credits').css("bottom", "-" + (maskHeight * 2) + "px");
            },
            step: function (n, t) {
                var pos = $(this).position();
                console.log('X: ' + pos.left.toFixed(2) + ' Y: ' + pos.top.toFixed(2));
            }
        });

    };

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
        $('#titles').hide();
        $('.window').hide();
    });

    // $('#titles').click(function () {
    //     $(this).hide();
    //     $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
    //     $('.window').hide();
    // });



    var vid = document.getElementById("video");
    var vid2 = document.getElementById("video2");
    $("#unmute").click(function() {
        vid.play();
        $("#unmute").hide(100)
    });

    var disp = 0;
    if (disp == 0) {
        $(".content_text").text('YO!')
    }

    $(".next").click(function(event) {
        disp = disp + 1
        $(".next").hide(500);
        if (disp < 8) {
            setTimeout('$(".next").show(500);', 1500)
        }
        if (disp == 0) {
            $(".content_text").text('YO!')
        }
        if (disp == 1) {
            $(".content_text").text('ОСОБЫЙ ДЕНЬ ДЛЯ ОСОБОГО ЧЕЛОВЕКА')
        }
        if (disp == 2) {
            $(".content_text").text('С ПРАЗДНИКОМ ТЕБЯ')
        }
        else if (disp == 3) {
            $(".content_text").text('S DR!')
        }
        else if (disp == 4) {
            $(".content_text").text('СЧАСТЬЯ ЗДОРОВЬЯ')
        }
        else if (disp == 5) {
            $(".content_text").text('ЗДОРОВЬЯ СЧАСТЬЯ')
        }
        else if (disp == 6) {
            $(".content_text").text('СЧАСТЬЯ И ЗДОРОВЬЯ ТЕБЕ')
        }
        else if (disp == 7) {
            $(".content_text").text('НУ И ДЕНЕГ')
        }
        else if (disp == 8) {
            start();
            vid.pause()
            $("#video").hide();
            vid2.play();
            $(".content_text").hide();
            $(".next").hide();
        }
    });

    
});
