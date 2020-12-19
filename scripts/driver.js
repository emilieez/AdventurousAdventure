canvas = document.getElementById("canvas")
canvas.appendChild(bedroomMorning)
canvas.appendChild(coffeeScene)
canvas.appendChild(bedroomMorning2)
canvas.appendChild(bedroomMorning3)
canvas.appendChild(outsideScene)
canvas.appendChild(alleyScene)
canvas.appendChild(sky1)
canvas.appendChild(liftoff)
canvas.appendChild(catMountain)
canvas.appendChild(forest1)
canvas.appendChild(forest2)

$(document).ready(function () {


    // ============= BEDROOM MORNING ================
    $("#startBtn").click(function () {
        $("#startBtn").hide();

        $("#bedroom-morning").fadeIn(1000);

        $("#bedroomMorningSarah_1").css({
            "animation": "resetRotate 1s",
            "animation-delay": "1s"
        });

        setTimeout(function () {
            $("#bedroomMorningSarah_1").css({
                "transform": "rotate(360deg)"
            });
        }, 1900)

        setTimeout(function () {
            $("#bedroomMorningTexts").css("opacity", 1);
            $("#bedroomMorningContinue").fadeIn(3000);
        }, 3500);
    });

    $("#bedroomMorningContinue").click(function () {
        $("#bedroom-morning").fadeOut(1000);
        $("#coffee-scene").fadeIn(900);
        setTimeout(function () {
            $("#coffeeTexts").css("opacity", 1);
            $("#coffeeSceneContinue").fadeIn(6000);
        }, 3000);
    });



    // ====================== COFFEE ================
    $("#coffeeSceneContinue").click(function () {
        $("#coffee-scene").fadeOut(1000)
        $("#bedroom-morning-2").fadeIn(900);

        $("#bedroom-morning-2-options-3").click(function () {
            document.getElementById("modal-cancel-button").style.display = "block"
            document.getElementById("modal-cancel-button").style.fontFamily = "news-gothic-std"
            document.getElementById("modal-cancel-button").innerHTML = "fu i want clothes"
            document.getElementById("optionsModal-button").innerHTML = BEDROOM_MORNING_2["resultPass-button"]
            document.getElementById("optionsModal-body").innerHTML = BEDROOM_MORNING_2["resultPass"]
            $("#optionsModal").modal("show")

            // ============= BEDROOM MORNING 2 ================
            $("#optionsModal-button").click(function () {
                $('#bedroom-morning-2-options-3-modal').modal('hide');
                $("#bedroom-morning-2").fadeOut(1000)
                document.getElementById("modal-cancel-button").style.display = "none"
                $("#bedroom-morning").hide();


                // ============= BEDROOM MORNING 3 ================
                $("#bedroom-morning-3").fadeIn(900);
                $("#bedroomMorningSarah-3").animate({
                    right: "0",
                    opacity: "1"
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
            right: "0",
            opacity: 1
        }, 1500)

        setTimeout(function () {
            $("#bedroomMorning2Texts").css("opacity", 1);
            $("#bedroom-morning-2-options").animate({
                left: "0", opacity: 1
            }, 2000)
        }, 3000);
    });



    // ========================================= OUTSIDE =============================================
    $("#bedroomMorning3Continue").click(function () {
        $("#bedroom-morning-3").fadeOut(1000)
        $("#outside-scene").fadeIn(900);
        $("#bedroomMorningSarah-3").css({
            "animation": "none"
        })

        setTimeout(function () {
            $("#outside-scene-options").animate({
                top: "0", opacity: 1
            }, 2000)
        }, 3000);

        $("#outside-scene-options-0").click(function () {
            document.getElementById("optionsModal-body").innerHTML = OUTSIDE_SCENE["option1-result"]
            document.getElementById("optionsModal-button").innerHTML = "K Cool"

            $("#outsideHowlSarah").css("display", "block")
            $("#outsideHowlSarah").animate({
                bottom: "0", opacity: 1
            }, 500);

            $("#optionsModal-button").click(function () {
                $('#optionsModal').modal('hide');
                $("#outsideHowlSarah").animate({
                    bottom: "-100px", opacity: "0"
                }, 500);
                setTimeout(function () {
                    $("#outsideHowlSarah").css("display", "none")
                }, 500)
            })
        })

        $("#outside-scene-options-1").click(function () {
            document.getElementById("optionsModal-body").innerHTML = OUTSIDE_SCENE["option2-result"]
            document.getElementById("optionsModal-button").innerHTML = "K Cool"

            $("#outsideCatbusSarah").css("display", "block")
            $("#outsideCatbusSarah").animate({
                bottom: "0", opacity: 1
            }, 500);

            $("#optionsModal-button").click(function () {
                $('#optionsModal').modal('hide');
                $("#outsideCatbusSarah").animate({
                    bottom: "-100px",
                    opacity: 0
                }, 500);
                setTimeout(function () {
                    $("#outsideCatbusSarah").css("display", "none")
                }, 500)
            })
        })

        $("#outside-scene-options-2").click(function () {
            document.getElementById("optionsModal-body").innerHTML = OUTSIDE_SCENE["option3-result"]
            document.getElementById("optionsModal-button").innerHTML = "K Cool"

            $("#outsideNofaceSarah").css("display", "block")
            $("#outsideNofaceSarah").animate({
                bottom: "0", opacity: 1
            }, 500);

            $("#optionsModal-button").click(function () {
                $('#optionsModal').modal('hide');
                $("#outsideNofaceSarah").animate({
                    bottom: "-100px", opacity: 0
                }, 500);
                setTimeout(function () {
                    $("#outsideNofaceSarah").css("display", "none")
                }, 500)
            })
        })

        $("#outside-scene-options-3").click(function () {
            document.getElementById("modal-cancel-button").style.display = "block"
            document.getElementById("modal-cancel-button").style.fontFamily = "news-gothic-std"
            document.getElementById("modal-cancel-button").innerHTML = "i don wanna"
            document.getElementById("optionsModal-body").innerHTML = OUTSIDE_SCENE["option4-result"]
            document.getElementById("optionsModal-button").innerHTML = "Lets YEET"

            $("#optionsModal-button").click(function () {
                $("#bedroom-morning-3").hide()

                $('#optionsModal').modal('hide');
                document.getElementById("modal-cancel-button").style.display = "none"
                $("#outside-scene").hide();

                // =============================== ALLEY =================================
                $("#alley-scene").fadeIn(900)
                $("#alleySceneSarah").animate({
                    right: "0px", opacity: 1
                }, 500);

                setTimeout(function () {
                    $("#alleySceneTexts").css("opacity", 1);
                    $("#alleySceneContinue").fadeIn(3000);
                }, 1000);
            })
        })

        setTimeout(function () {
            $("#outsideSceneTexts").css("opacity", 1);
        }, 5000);
    });

    $("#alleySceneContinue").click(function () {
        $("#alley-scene").fadeOut(1000);
        $("#sky-1").fadeIn(1000);
        $("#sky1sarah").animate({
            left: "0",
            opacity: 1
        }, 2000)

        setTimeout(function () {
            $("#sky1texts").css("opacity", 1);
            $("#sky1continue").fadeIn(6000);
        }, 3500);
    })


    // ============= SKY SCENE 1 ================
    $("#sky1continue").click(function () {
        $("#sky-1").fadeOut(1000)
        $("#liftoff").fadeIn(900)
        $("#liftoffSarah").css({
            "animation": "swinging 4s",
            "animation-delay": "1s",
            "animation-iteration-count": "infinite"
        });

        setTimeout(function () {
            $("#liftoffTexts").css("opacity", 1);
            $("#liftoffContinue").fadeIn(6000);
        }, 3000);
    });



    // ============= SKY SCENE CAT MOUNTAIN ================
    $("#liftoffContinue").click(function () {
        $("#liftoff").fadeOut(1000)
        $("#catMountain").fadeIn(900)
        $("#catMountainSarah").css({
            "animation": "swinging 4s",
            "animation-delay": "1s",
            "animation-iteration-count": "infinite"
        });

        setTimeout(function () {
            $("#catMountainTexts").css("opacity", 1);
            $("#catMountainContinue").fadeIn(6000);
        }, 3000);
    });

    $("#catMountainContinue").click(function () {
        $("#catMountain").fadeOut(1000);
        $("#forest-1").fadeIn(900);

        setTimeout(function () {
            updown("forest1sarah-1")
        }, 1000)

        setTimeout(function () {
            $("#forest1texts").css("opacity", 1);
            $("#forest1continue").fadeIn(6000);
        }, 2100);
    });





    // ============= FOREST SCENE 1 =============================
    $("#forest1continue").click(function () {
        $("#forest1texts").fadeOut();

        $("#forest1sarah-1").animate({
            "top": "-50px", "opacity": "0"
        }, 500)
        setTimeout(function () {
            $("#forest1sarah-1").css({ "display": "none" });

            setTimeout(function () {
                $("#forest1sarah-2").css({
                    "display": "block",
                    "opacity": "0",
                    "bottom": "50px"
                })
                $("#forest1sarah-2").animate({
                    "bottom": "0px", "opacity": "1"
                }, 500)
            }, 100)

            setTimeout(function () {
                $("#forest-1").fadeOut(1000);

                // ============= FOREST SCENE 2 =============================
                $("#forest-2").fadeIn(1000);


            }, 1500);

        }, 500)
    });



});