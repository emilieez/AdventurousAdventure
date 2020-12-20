canvas = document.getElementById("canvas")
canvas.appendChild(bedroomMorning)
canvas.appendChild(coffeeScene)
canvas.appendChild(bedroomMorning2)
canvas.appendChild(bedroomMorning3)
canvas.appendChild(outsideScene)
canvas.appendChild(alleyScene)
canvas.appendChild(alleyCloseup)
canvas.appendChild(alleyScene2)
canvas.appendChild(haku)
canvas.appendChild(sky1)
canvas.appendChild(liftoff)
canvas.appendChild(catMountain)
canvas.appendChild(catMountainLanding)
canvas.appendChild(forest1)
canvas.appendChild(forest2)


$(".scene").css({ width: GLOBAL_WIDTH + 'px' })
$(".scene").css({ height: GLOBAL_HEIGHT + 'px' })

$("#canvas").css({ width: GLOBAL_WIDTH + 'px' })
$("#canvas").css({ height: GLOBAL_HEIGHT + 'px' })

$(".overlay").css({ width: GLOBAL_WIDTH + 'px' })
$(".overlay").css({ height: GLOBAL_HEIGHT + 'px' })

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
            $("#whatCastle").animate({
                "transform": "scale(1.5)",
                "opacity": "1"
            }, 800)
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

                setTimeout(function () {
                    $("#bedroomMorning3Texts").css("opacity", 1);
                    $("#bedroomMorning3Story1continue").fadeIn(6000);
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

    $("#bedroomMorning3Story1continue").click(function () {
        $("#bedroom-morning-3-story-1").fadeOut(1000);

        setTimeout(function () {
            $("#bedroomMorning3Story1continue").hide();
            document.getElementById('bedroom-morning-3-story-1').innerHTML = BEDROOM_MORNING_3["story2"];
            $("#bedroom-morning-3-story-1").fadeIn(2000);
            $("#bedroomMorning3Continue").fadeIn(6000);

            $("#bedroomMorningSarah-3").css({
                "animation": "shake 0.5s",
                "animation-iteration-count": "infinite"
            })
        }, 1000)
    })



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
                }, 2000);
            })
        })

        setTimeout(function () {
            $("#outsideSceneTexts").css("opacity", 1);
        }, 5000);
    });




    // =============================== ALLEY CLOSE UP =================================
    $("#alleySceneContinue").click(function () {
        $("#alley-scene").fadeOut(1000);
        $("#alleyCloseup").fadeIn(1000);
        $("#alleySceneCat").animate({
            opacity: 1
        }, 3000);

        setTimeout(function () {
            $("#alleyCloseupTexts").css("opacity", 1);
            $("#alleyCloseupStory1continue").fadeIn(3000);
        }, 2000);
    })

    $("#alleyCloseupStory1continue").click(function () {
        $("#alleyCloseupStory").fadeOut(1000);

        setTimeout(function () {
            $("#alleyCloseupStory1continue").hide();
            document.getElementById('alleyCloseupStory').innerHTML = ALLEY_CLOSEUP["story2"];
            $("#alleyCloseupStory").fadeIn(2000);
            $("#alleySceneCatDark").css({
                "animation": "glitching 1s",
                "animation-delay": "0.5s",
                "animation-iteration-count": "infinite"
            });
            $("#alleyCloseupStory2continue").fadeIn(6000);
        }, 1000)
    })

    $("#alleyCloseupStory2continue").click(function () {
        $("#alleyCloseupStory").fadeOut(1000);
        $("#alleySceneCatDark").css({
            "animation": "none",
            "display": "none"
        });

        setTimeout(function () {
            $("#alleyCloseupStory2continue").hide();
            document.getElementById('alleyCloseupStory').innerHTML = ALLEY_CLOSEUP["story3"];
            $("#alleyCloseupStory").fadeIn(2000);
            $("#alleyCloseupContinue").fadeIn(6000);
        }, 1000)
    })




    // =============================== ALLEY SCENE 2 =================================
    $("#alleyCloseupContinue").click(function () {
        $("#alleyCloseup").fadeOut(1000)
        $("#alley-scene-2").fadeIn(900)
        $("#alleyScene2Sarah").css({
            "animation": "breathing 2s",
            "animation-delay": "1s",
            "animation-iteration-count": "infinite"
        });

        setTimeout(function () {
            $("#alleyScene2Texts").css("opacity", 1);
            $("#alleyScene2Continue").fadeIn(6000);
        }, 3000);
    });



    // =============================== HAKU SCENE =================================
    $("#alleyScene2Continue").click(function () {
        $("#haku").fadeIn(1000);
        $("#hakuSarah1").animate({
            right: "0",
            opacity: 1
        }, 2000)

        setTimeout(function () {
            $("#hakuTexts").css("opacity", 1);
            $("#hakuStorycontinue").fadeIn(5000);
        }, 2500);
    })

    $("#hakuStorycontinue").click(function () {
        $("#hakuStory").fadeOut(1000);

        setTimeout(function () {
            $("#hakuStorycontinue").hide();
            document.getElementById('hakuStory').innerHTML = HAKU_SCENE["story2"];
            $("#hakuStory").fadeIn(2000);
            $("#hakuSarah2").animate({
                "right": "100px",
                "opacity": 0
            }, 1000);
            $("#hakuSarah2").animate({
                "bottom": "0px",
                "opacity": 1
            }, 2500);
            $("#hakuContinue").fadeIn(5000);
        }, 1000)
    })

    $("#hakuContinue").click(function () {
        $("#hakuStory").fadeOut(1000);

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
        $("#whatCatMountain").css({
            "animation": "blink 3s",
            "animation-delay": "3s",
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



    // ============= SKY SCENE CAT MOUNTAIN LANDING =============
    $("#catMountainContinue").click(function () {
        $("#catMountain").fadeOut(1000);
        $("#catMountainLanding").fadeIn(1000)

        setTimeout(function () {
            $("#catMountainLandingSarah").animate({
                "top": "0px"
            }, 3000);
        }, 2000)

        setTimeout(function () {
            $("#catMountainLandingTexts").css("opacity", 1);
            $("#catMountainLandingContinue").fadeIn(6000);
        }, 2000);
    });



    // ============= SKY SCENE CAT MOUNTAIN LANDING =============
    $("#catMountainLandingContinue").click(function () {
        $("#forest-1").fadeIn(900);
        setTimeout(function () {
            $("#forest1texts").css("opacity", 1);
            $("#forest1story1continue").fadeIn(6000);
        }, 3000);
    })


    // ========================= FOREST SCENE 1 =============================
    $("#forest1story1continue").click(function () {
        $("#forest-1-story").fadeOut(1000);

        setTimeout(function () {
            $("#forest1story1continue").hide();
            document.getElementById('forest-1-story').innerHTML = FOREST_1["story2"];
            $('#forest1sarah-1').animate({
                opacity: 1,
                top: 0
            }, 1000)

            setTimeout(function () {
                updown("forest1sarah-1")
            }, 1000)

            $("#forest-1-story").fadeIn(2000);
            $("#forest1story2continue").fadeIn(6000);
        }, 1000)
    })


    $("#forest1story2continue").click(function () {
        $("#forest-1-story").fadeOut(1000);

        setTimeout(function () {
            $("#forest1story2continue").hide();
            document.getElementById('forest-1-story').innerHTML = FOREST_1["story3"];

            $("#forest1sarah-1").animate({
                "top": "-50px", "opacity": "0"
            }, 500)

            setTimeout(function () {
                $("#forest1sarah-2").css({
                    "display": "block",
                    "opacity": "0",
                    "bottom": "50px"
                })
                $("#forest1sarah-2").animate({
                    "bottom": "0px", "opacity": "1"
                }, 1000)
            }, 1000)

            $("#forest-1-story").fadeIn(2000);
            $("#forest1continue").fadeIn(6000);
        }, 1000)
    })


    // ============= FOREST SCENE 1 TRANSITION =============================
    $("#forest1continue").click(function () {
        $("#forest-1").fadeOut(1000);


        // ============= FOREST SCENE 2 =============================
        $("#forest-2").fadeIn(1000);

        $('#forest2sarah1').animate({
            "opacity": 1,
            "top": "0px"
        }, 2000)

        setTimeout(function () {
            $("#forest2texts").css("opacity", 1);
            $('#forest2story1continue').fadeIn(6000)
        }, 2000);
    });


    // ============= FOREST SCENE 2 =============================
    $('#forest2story1continue').click(function () {
        $("#forest-2-story").fadeOut(1000);

        setTimeout(function () {
            $("#forest2story1continue").hide();
            document.getElementById('forest-2-story').innerHTML = FOREST_2["story2"];
            $("#forest-2-story").fadeIn(2000);

            setTimeout(function () {
                $("#forest2options").animate({
                    top: 0,
                    opacity: 1
                })
            }, 2000)

            var beetleClicked, braClicked, featherClicked, mushroomClicked = false;
            for (var i = 0; i < 4; i++) {
                document.getElementById("forest2options-" + i).removeAttribute("data-toggle")
                document.getElementById("forest2options-" + i).removeAttribute("data-target")
            }

            $("#forest2options-0").click(function () {
                featherClicked = true;
                $("#forest2featherGlow").animate({ opacity: 1 }, 800)
                document.getElementById('forest-2-story').innerHTML = FOREST_2["feather-result"];
                checkAllClicked()
            })
            $("#forest2options-1").click(function () {
                mushroomClicked = true;
                $("#forest2mushroomGlow").animate({ opacity: 1 }, 800)
                document.getElementById('forest-2-story').innerHTML = FOREST_2["mushrooms-result"];
                checkAllClicked()
            })
            $("#forest2options-2").click(function () {
                beetleClicked = true;
                $("#forest2beetleGlow").animate({ opacity: 1 }, 800)
                document.getElementById('forest-2-story').innerHTML = FOREST_2["beetle-result"];
                checkAllClicked()
            })
            $("#forest2options-3").click(function () {
                braClicked = true;
                $("#forest2braGlow").animate({ opacity: 1 }, 800)
                document.getElementById('forest-2-story').innerHTML = FOREST_2["nani-result"];
                checkAllClicked()
            })

            function checkAllClicked() {
                if (beetleClicked && braClicked && featherClicked && mushroomClicked) {
                    $("#forest2story3continue").fadeIn(4000);
                }
            }
        }, 1000)
    })

    $("#forest2story3continue").click(function () {
        $("#forest-2-story").fadeOut(1000);
        setTimeout(function () {
            $("#forest2story3continue").hide();
            document.getElementById('forest-2-story').innerHTML = FOREST_2["story3"];
            $("#forest-2-story").fadeIn(2000);
            $("#forest2continue").fadeIn(4000);
        }, 1000)
    })
});