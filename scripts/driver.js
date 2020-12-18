canvas = document.getElementById("canvas")
canvas.appendChild(bedroomMorning)
canvas.appendChild(coffeeScene)
canvas.appendChild(bedroomMorning2)
canvas.appendChild(bedroomMorning3)
canvas.appendChild(outsideScene)
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



    // ====================== COFFEE ================
    $("#coffeeSceneContinue").click(function () {
        $("#bedroom-morning-2").fadeIn(900);

        $("#bedroom-morning-2-options-3").click(function () {
            document.getElementById("optionsModal-button").innerHTML = BEDROOM_MORNING_2["resultPass-button"]
            document.getElementById("optionsModal-body").innerHTML = BEDROOM_MORNING_2["resultPass"]
            $("#optionsModal").modal("show")

            // ============= BEDROOM MORNING 2 ================
            $("#optionsModal-button").click(function () {
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
                    $("#bedroomMorning3Continue").fadeIn(6000);
                }, 4000);
            });

        });

        $("#bedroomMorningSarah-2").animate({
            right: "0"
        }, 3000)

        setTimeout(function () {
            $("#bedroomMorning2Texts").css("opacity", 1);
            $("#bedroom-morning-2-options").animate({
                left: "0"
            }, 3000)
        }, 3000);
    });



    // ========================================= OUTSIDE =============================================
    $("#bedroomMorning3Continue").click(function () {
        $("#outside-scene").fadeIn(900);
        $("#bedroomMorningSarah-3").css({
            "animation": "none"
        })

        setTimeout(function () {
            $("#outside-scene-options").animate({
                top: "0"
            }, 5000)
        }, 2000);

        $("#outside-scene-options-0").click(function () {
            document.getElementById("optionsModal-body").innerHTML = OUTSIDE_SCENE["option1-result"]
            document.getElementById("optionsModal-button").innerHTML = "K Cool"

            $("#outsideHowlSarah").css("display", "block")
            $("#outsideHowlSarah").animate({
                bottom: "0"
            }, 500);

            $("#optionsModal-button").click(function () {
                $('#optionsModal').modal('hide');
                $("#outsideHowlSarah").animate({
                    bottom: "-1000px"
                }, 1000);
                setTimeout(function () {
                    $("#outsideHowlSarah").css("display", "none")
                }, 1000)
            })
        })

        $("#outside-scene-options-1").click(function () {
            document.getElementById("optionsModal-body").innerHTML = OUTSIDE_SCENE["option2-result"]
            document.getElementById("optionsModal-button").innerHTML = "K Cool"

            $("#outsideCatbusSarah").css("display", "block")
            $("#outsideCatbusSarah").animate({
                bottom: "0"
            }, 500);

            $("#optionsModal-button").click(function () {
                $('#optionsModal').modal('hide');
                $("#outsideCatbusSarah").animate({
                    bottom: "-1000px"
                }, 1000);
                setTimeout(function () {
                    $("#outsideCatbusSarah").css("display", "none")
                }, 1000)
            })
        })

        $("#outside-scene-options-2").click(function () {
            document.getElementById("optionsModal-body").innerHTML = OUTSIDE_SCENE["option3-result"]
            document.getElementById("optionsModal-button").innerHTML = "K Cool"

            $("#outsideNofaceSarah").css("display", "block")
            $("#outsideNofaceSarah").animate({
                bottom: "0"
            }, 500);

            $("#optionsModal-button").click(function () {
                $('#optionsModal').modal('hide');
                $("#outsideNofaceSarah").animate({
                    bottom: "-1000px"
                }, 1000);
                setTimeout(function () {
                    $("#outsideNofaceSarah").css("display", "none")
                }, 1000)
            })
        })

        $("#outside-scene-options-3").click(function () {
            document.getElementById("optionsModal-body").innerHTML = OUTSIDE_SCENE["option4-result"]
            document.getElementById("optionsModal-button").innerHTML = "Lets YEET"

            $("#optionsModal-button").click(function () {
                $('#optionsModal').modal('hide');
            })
        })

        setTimeout(function () {
            $("#outsideSceneTexts").css("opacity", 1);
        }, 5000);
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