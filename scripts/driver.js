canvas = document.getElementById("canvas")
canvas.appendChild(bedroomMorning)
canvas.appendChild(coffeeScene)
canvas.appendChild(sky1)
canvas.appendChild(forest1)
canvas.appendChild(forest2)

$(document).ready(function () {
    $("#startBtn").click(function () {

        $("#bedroom-morning").fadeIn(1000);

        $("#bedroomMorningSarah_1").css({
            "animation": "resetRotate 1s",
            "animation-delay": "1s"
        });

        setTimeout(function () {
            $("#bedroomMorningSarah_1").css({
                "transform": "rotate(360deg)"
            });
        }, 2000)

        setTimeout(function () {
            $("#bedroomMorningTexts").css("opacity", 1);
            $("#bedroomMorningContinue").fadeIn(6000);
        }, 3500);

        // $("#sky-1").fadeIn(1000);
        // $("#sky1sarah").animate({
        //     left: "0"
        // }, 5000)

        // setTimeout(function () {
        //     $("#sky1texts").css("opacity", 1);
        //     $("#sky1continue").fadeIn(6000);
        // }, 3500);
    });

    $("#bedroomMorningContinue").click(function () {
        $("#coffee-scene").fadeIn(900);
    });

    $("#sky1continue").click(function () {
        $("#forest-1").fadeIn(900);

        setTimeout(function () {
            for (var i = 0; i < 3; i++) {
                $("#forest1sarah-1").animate({ bottom: '+=' + '30px' }, 300);
                $("#forest1sarah-1").animate({ bottom: '-=' + '30px' }, 300);
            }
        }, 1000)

        setTimeout(function () {
            $("#forest1texts").css("opacity", 1);
            $("#forest1continue").fadeIn(6000);
        }, 2100);
    });

    $("#forest1continue").click(function () {
        $("#forest1texts").fadeOut();
        $("#forest1sarah-1").slideUp(1200);
        $("#forest1sarah-2").slideDown(1600);
        $("#forest1sarah-2").css("display: block");
        setTimeout(function () {
            $("#forest-2").fadeIn(1000);
        }, 2000);
    });
});