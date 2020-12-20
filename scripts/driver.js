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
canvas.appendChild(skyCaveWater)
canvas.appendChild(forest1)
canvas.appendChild(forest2)
canvas.appendChild(forest3)
canvas.appendChild(forestBridge)
canvas.appendChild(demonicCircle)


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
            $("#hakuSarah1").animate({
                "bottom": "100px",
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
        $("#haku").fadeOut(1000);

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
        $("#catMountainLandingContinue").fadeOut(900)

        // ============= SKY SCENE CAVE WATER =============
        $("#skyCaveWater").fadeIn(900)
        $("#skyCaveWaterShadow").css({
            "animation": "floating 5s",
            "animation-iteration-count": "infinite"
        })

        setTimeout(function () {
            $("#skyCaveWaterTexts").css("opacity", 1);
            $("#skyCaveWaterOptions").animate({ top: "25%" }, 2000)
        }, 2000);

        var left = 0,
            right = 0,
            up = 0
        $(document).on("keydown", function () {
            switch (window.event.keyCode) {
                case 37:
                    document.getElementById("skyCaveWaterStory").innerHTML = ""
                    $("#skyCaveWaterCrashEffect").hide()
                    $("#skyCaveWaterSarahUp").animate({ opacity: 0, top: "100px" }, 300)
                    $("#skyCaveWaterSarahRight").animate({ opacity: 0, right: "400px" }, 300)
                    $("#skyCaveWaterSarahRightCrash").animate({ opacity: 0 }, 300)
                    $("#skyCaveWaterSarahLeft").animate({
                        opacity: 1, left: '-=' + '200px'
                    }, 500)

                    if (left < 1) { left += 1; } else {
                        showSwimResult("left")
                    }
                    break;
                case 38:
                    document.getElementById("skyCaveWaterStory").innerHTML = ""
                    $("#skyCaveWaterCrashEffect").hide()
                    $("#skyCaveWaterSarahLeft").animate({ opacity: 0, left: "400px" }, 300)
                    $("#skyCaveWaterSarahRight").animate({ opacity: 0, right: "400px" }, 300)
                    $("#skyCaveWaterSarahRightCrash").animate({ opacity: 0 }, 300)
                    $("#skyCaveWaterSarahUp").animate({
                        opacity: 1, top: '-=' + '100px'
                    })
                    if (up < 1) { up += 1; } else {
                        showSwimResult("up")
                    }
                    break;
                case 39:
                    document.getElementById("skyCaveWaterStory").innerHTML = ""
                    $("#skyCaveWaterCrashEffect").hide()
                    $("#skyCaveWaterSarahLeft").animate({ opacity: 0, left: "400px" }, 300)
                    $("#skyCaveWaterSarahUp").animate({ opacity: 0, top: "100px" }, 300)
                    $("#skyCaveWaterSarahRightCrash").animate({ opacity: 0 }, 300)
                    $("#skyCaveWaterSarahRight").animate({
                        opacity: 1, right: '-=' + '200px'
                    })
                    if (right < 1) { right += 1; } else {
                        showSwimResult("right")
                    }
                    break;
            }
        })

        function showSwimResult(direction) {
            switch (direction) {
                case "left":
                    document.getElementById("skyCaveWaterStory").innerHTML = CAVE_WATER["swimLeft-result"]
                    $("#skyCaveWaterSarahLeft").animate({ opacity: 0 }, 300)
                    break;
                case "right":
                    document.getElementById("skyCaveWaterStory").innerHTML = CAVE_WATER["swimRight-result"]
                    $("#skyCaveWaterSarahRight").animate({ opacity: 0 }, 100)
                    $('#skyCaveWaterSarahRightCrash').animate({ opacity: 1, right: 0 }, 100)
                    $("#skyCaveWaterCrashEffect").show()
                    break;
                case "up":
                    document.getElementById("skyCaveWaterStory").innerHTML = CAVE_WATER["swimUp-result"]
                    $("#skyCaveWaterSarahUp").animate({ opacity: 0 }, 1500)
                    $('#skyCaveWaterContinue').fadeIn(3000)
                    break;
            }
        }
    })



    // ============= SKY CAVE SCENE =============
    $('#skyCaveWaterContinue').click(function () {
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
                $("#forest2sarah3").animate({ opacity: 0 }, 800)
                $("#forest2sarah2").animate({ opacity: 0 }, 800)
                $("#forest2sarah1").animate({ opacity: 1 }, 800)
                document.getElementById('forest-2-story').innerHTML = FOREST_2["feather-result"];
                checkAllClicked()
            })
            $("#forest2options-1").click(function () {
                mushroomClicked = true;
                $("#forest2mushroomGlow").animate({ opacity: 1 }, 800)
                $("#forest2sarah2").animate({ opacity: 1 }, 800)
                $("#forest2sarah1").animate({ opacity: 0 }, 800)
                $("#forest2sarah3").animate({ opacity: 0 }, 800)
                document.getElementById('forest-2-story').innerHTML = FOREST_2["mushrooms-result"];
                checkAllClicked()
            })
            $("#forest2options-2").click(function () {
                beetleClicked = true;
                $("#forest2beetleGlow").animate({ opacity: 1 }, 800)
                $("#forest2sarah3").animate({ opacity: 0 }, 800)
                $("#forest2sarah2").animate({ opacity: 0 }, 800)
                $("#forest2sarah1").animate({ opacity: 1 }, 800)
                document.getElementById('forest-2-story').innerHTML = FOREST_2["beetle-result"];
                checkAllClicked()
            })
            $("#forest2options-3").click(function () {
                braClicked = true;
                $("#forest2braGlow").animate({ opacity: 1 }, 800)
                $("#forest2sarah3").animate({ opacity: 1 }, 800)
                $("#forest2sarah1").animate({ opacity: 0 }, 800)
                $("#forest2sarah2").animate({ opacity: 0 }, 800)
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
        $("#forest2sarah3").animate({ opacity: 0 }, 800)
        $("#forest2sarah2").animate({ opacity: 0 }, 800)
        $("#forest2sarah1").animate({ opacity: 0 }, 800)

        setTimeout(function () {
            $("#forest2story3continue").hide();
            document.getElementById('forest-2-story').innerHTML = FOREST_2["story3"];
            $("#forest2sarah4").animate({ opacity: 1 }, 800)
            $("#forest-2-story").fadeIn(2000);
            $("#forest2continue").fadeIn(4000);
        }, 1000)
    })




    // ================================ FOREST 3 ====================================
    $('#forest2continue').click(function () {
        $("#forest-2").fadeOut(1000);
        $("#forest-3").fadeIn(1000);

        setTimeout(function () {
            $("#forest3texts").css("opacity", 1);
            $("#forest3story1continue").fadeIn(6000);
        }, 4000);
    })

    $('#forest3story1continue').click(function () {
        $("#forest3story1continue").hide()

        setTimeout(function () {
            $("#forest-3-story").hide();
            document.getElementById('forest-3-story').innerHTML = FOREST_3["story2"];
            $("#forest-3-story").fadeIn(2000);
            $("#forest3continue").fadeIn(6000);

            $("#forest3rain").animate({ opacity: 1 }, 800)
        }, 1000)

    })



    // ================================ FOREST BRIDGE ====================================
    $("#forest3continue").click(function () {
        $("#forest-3").fadeOut(1000);
        $("#forestBridge").fadeIn(1000);

        setTimeout(function () {
            $("#forestBridgeSarah1").animate({
                opacity: 1, right: 0
            }, 2000)

            $("#forestBridgeTexts").css("opacity", 1);
            $("#forestBridgeStory1continue").fadeIn(5000);
        }, 3000)
    })

    $("#forestBridgeStory1continue").click(function () {
        transitionStory("forestBridgeStory1continue", "forest-bridge-story", FOREST_BRIDGE["story2"], "forestBridgeStory2continue")
        $("#forestBridgeSarah1").animate({ opacity: 0, right: 0 }, 1000)
        setTimeout(function () {
            $("#forestBridgeSarah2").animate({ opacity: 1 }, 1000)
        }, 1000)
    })

    $("#forestBridgeStory2continue").click(function () {
        transitionStory("forestBridgeStory2continue", "forest-bridge-story", FOREST_BRIDGE["story3"], "forestBridgeContinue")
        $("#forestBridgeSarah2").animate({ opacity: 0 }, 1000)
        setTimeout(function () {
            $("#forestBridgeSarah3").animate({ opacity: 1, right: 0 }, 1000)
        }, 1000)
    })



    // ================================ DEMONIC CIRCLE ====================================
    $("#forestBridgeContinue").click(function () {
        $("#forestBridge").fadeOut(1000);
        $("#demonicCircle").fadeIn(1000);

        setTimeout(function () {
            $("#demonicCircleTexts").css("opacity", 1);
            $("#demonicCircleStory1Continue").fadeIn(5000);
        }, 2000)
    })

    $("#demonicCircleStory1Continue").click(function () {
        transitionStory("demonicCircleStory1Continue", "demonic-circle-story", DEMONIC_CIRCLE["story2"], "demonicCircleStory2Continue")
        $("#demonicCircleSarah1").animate({ opacity: 1, right: 0 }, 2000);
    });

    $("#demonicCircleStory2Continue").click(function () {
        transitionStory("demonicCircleStory2Continue", "demonic-circle-story", DEMONIC_CIRCLE["story3"], "demonicCircleStory3Continue")
        $("#demonicCircleGlowing").show();
    });

    $("#demonicCircleStory3Continue").click(function () {
        transitionStory("demonicCircleStory3Continue", "demonic-circle-story", DEMONIC_CIRCLE["story4"], "demonicCircleStory4Continue")
        $("#demonicCircleCat").animate({ opacity: 1 }, 4000)
    });

    $("#demonicCircleStory4Continue").click(function () {
        transitionStory("demonicCircleStory4Continue", "demonic-circle-story", DEMONIC_CIRCLE["story5"], "demonicCircleContinue")
        $("#demonicCircleSarah1").animate({ opacity: 0, bottom: "100px" }, 1000);
        $("#demonicCircleSarah2").animate({ opacity: 1, bottom: 0 }, 1000)
        updown("demonicCircleSarah2")
    });
});