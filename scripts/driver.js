canvas = document.getElementById("canvas")
canvas.appendChild(bedroomMorning)
canvas.appendChild(coffeeScene)
canvas.appendChild(bedroomMorning2)
canvas.appendChild(bedroomMorning3)
canvas.appendChild(sky1)
canvas.appendChild(forest1)
canvas.appendChild(forest2)

$(document).ready(function () {


    // ============= BEDROOM MORNING ================
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
        setTimeout(function () {
            $("#coffeeTexts").css("opacity", 1);
            $("#coffeeSceneContinue").fadeIn(6000);
        }, 3000);
    });


    // ================= COFFEE ================
    $("#coffeeSceneContinue").click(function () {
        $("#bedroom-morning-2").fadeIn(900);
        $("#bedroomMorningSarah-2").animate({
            right: "0"
        }, 3000)
        $("#bedroom-morning-2-options").animate({
            left: "0"
        }, 7000)

        setTimeout(function () {
            $("#bedroomMorning2Texts").css("opacity", 1);
        }, 5500);
    });


    // ============= BEDROOM MORNING 2 ================
    $("#bedroom-morning-2-options-3-modal-action").click(function () {
        $('#bedroom-morning-2-options-3-modal').modal('hide');
        $("#bedroom-morning-3").fadeIn(900);
        $("#bedroomMorningSarah-3").animate({
            right: "0"
        }, 3000)

        $("#bedroomMorningSarah-3").css({
            "animation": "shake 0.5s",
            "animation-delay": "5s",
            "animation-iteration-count": "infinite"
        })

        setTimeout(function () {
            $("#bedroomMorning3Texts").css("opacity", 1);
        }, 8000);
    });

    // ============= SKY SCENE 1 ================
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