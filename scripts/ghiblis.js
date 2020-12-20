// ============= BEDROOM MORNING ================
var bedroomMorning = createScene("bedroom-morning", "url('images/bedroom_morning.png')", 1)
var bedroomMorningTexts = createTextBlock("bedroomMorningTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")
var bedroomMorningStory = createStory("bedroom-morning-story", "One beautiful, warm morning, Sarah He wakes up in her cozy home right next to . . .HOWL’S MOVING CASTLE??")
var bedroomMorningContinue = createContinueBtn("bedroomMorningContinue", "news-gothic-std")
bedroomMorningContinue.style.zIndex = 1;

var bedroomMorningSarah1 = createOverlay("bedroomMorningSarah_1", "url('images/bedroom_morning_sarah-1.png')")
bedroomMorningSarah1.style.transform = "rotate(300deg)"


var whatCastle = createOverlay("whatCastle", "url('images/boom.png')")
whatCastle.style.opacity = "0"

bedroomMorningTexts.appendChild(bedroomMorningStory)
bedroomMorningTexts.appendChild(bedroomMorningContinue)
bedroomMorning.appendChild(bedroomMorningTexts)
bedroomMorning.appendChild(bedroomMorningSarah1)
bedroomMorning.appendChild(whatCastle)



// ============= COFFEE ================
var coffeeScene = createScene("coffee-scene", "url('images/coffee.png')", 1)
var coffeeTexts = createTextBlock("coffeeTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")
var coffeeStory = createStory("coffee-scene-story", "As with any other beautiful, fine morning such as this, Sarah first goes and grabs her magic bean juice.")
var coffeeSceneContinue = createContinueBtn("coffeeSceneContinue", "news-gothic-std")

coffeeTexts.appendChild(coffeeStory)
coffeeTexts.appendChild(coffeeSceneContinue)
coffeeScene.appendChild(coffeeTexts)



// ============= BEDROOM MORNING 2 ================
var bedroomMorning2 = createScene("bedroom-morning-2", "url('images/bedroom_morning.png')", 1)
var bedroomMorning2Texts = createTextBlock("bedroomMorning2Texts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var bedroomMorning2Story = createStory("bedroom-morning-2-story", BEDROOM_MORNING_2["story"])
var bedroomMorning2Continue = createContinueBtn("bedroomMorning2Continue", "news-gothic-std")
bedroomMorning2Continue.style.zIndex = 1;

var bedroomMorning2Sarah = createOverlay("bedroomMorningSarah-2", "url('images/bedroom_morning_sarah-2.png')")
bedroomMorning2Sarah.style.right = "-300px"
bedroomMorning2Sarah.style.opacity = 0

var bedroomMorning2Options = createOptions(
    "bedroom-morning-2-options",
    [BEDROOM_MORNING_2["option1"], BEDROOM_MORNING_2["option2"], BEDROOM_MORNING_2["option3"], BEDROOM_MORNING_2["option4"]],
    "news-goth-std",
    STANDARD_FONT_SIZE
)
bedroomMorning2Options.style.top = "25%"
bedroomMorning2Options.style.left = "-50px"
bedroomMorning2Options.style.opacity = "0"

document.getElementById("optionsModal-body").innerHTML = BEDROOM_MORNING_2["resultFail"]
document.getElementById("optionsModal-body").style.fontFamily = "news-goth-std"
document.getElementById("optionsModal-button").setAttribute("data-dismiss", "modal")
document.getElementById("optionsModal-button").innerHTML = "K Cool"
document.getElementById("optionsModal-button").style.fontFamily = "news-goth-std"

bedroomMorning2Texts.appendChild(bedroomMorning2Story)
bedroomMorning2Texts.appendChild(bedroomMorning2Continue)
bedroomMorning2.appendChild(bedroomMorning2Sarah)
bedroomMorning2.appendChild(bedroomMorning2Texts)
bedroomMorning2.appendChild(bedroomMorning2Options)



// ============= BEDROOM MORNING 3 ================
var bedroomMorning3 = createScene("bedroom-morning-3", "url('images/bedroom_morning.png')", 1)
var bedroomMorning3Texts = createTextBlock("bedroomMorning3Texts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var bedroomMorning3Story1 = createStory("bedroom-morning-3-story-1", BEDROOM_MORNING_3["story1"])

var bedroomMorning3Story1continue = createContinueBtn("bedroomMorning3Story1continue", "news-gothic-std")
var bedroomMorning3Continue = createContinueBtn("bedroomMorning3Continue", "news-gothic-std")
bedroomMorning3Continue.style.zIndex = 1;

var bedroomMorning3Sarah = createOverlay("bedroomMorningSarah-3", "url('images/bedroom_morning_sarah-3.png')")
bedroomMorning3Sarah.style.right = "-3000px"
bedroomMorning3Sarah.style.opacity = 0

bedroomMorning3Texts.appendChild(bedroomMorning3Story1)
bedroomMorning3Texts.appendChild(bedroomMorning3Story1continue)
bedroomMorning3Texts.appendChild(bedroomMorning3Continue)
bedroomMorning3.appendChild(bedroomMorning3Sarah)
bedroomMorning3.appendChild(bedroomMorning3Texts)



// ============= OUTSIDE SCENE ================
var outsideScene = createScene("outside-scene", "url('images/outside.png')", 1)
var outsideSceneTexts = createTextBlock("outsideSceneTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var outsideSceneStory = createStory("outside-scene-story", OUTSIDE_SCENE["story"])
var outsideSceneOptions = createOptions(
    "outside-scene-options",
    [OUTSIDE_SCENE["option1"], OUTSIDE_SCENE["option2"], OUTSIDE_SCENE["option3"], OUTSIDE_SCENE["option4"]],
    "news-goth-std",
    STANDARD_FONT_SIZE
)
outsideSceneOptions.style.top = "-100px"
outsideSceneOptions.style.opacity = 0

var outsideHowlSarah = createOverlay("outsideHowlSarah", "url('images/outside_howl_sarah.png')")
outsideHowlSarah.style.bottom = "-100px";
outsideHowlSarah.style.display = "none";
outsideHowlSarah.style.opacity = 0;

var outsideNofaceSarah = createOverlay("outsideNofaceSarah", "url('images/outside_noface_sarah.png')")
outsideNofaceSarah.style.bottom = "-100px";
outsideNofaceSarah.style.display = "none";
outsideNofaceSarah.style.opacity = 0;

var outsideCatbusSarah = createOverlay("outsideCatbusSarah", "url('images/outside_catbus_sarah.png')")
outsideCatbusSarah.style.bottom = "-100px";
outsideCatbusSarah.style.display = "none";
outsideCatbusSarah.style.opacity = 0;

outsideSceneTexts.appendChild(outsideSceneStory)
outsideScene.appendChild(outsideSceneTexts)
outsideScene.appendChild(outsideSceneOptions)
outsideScene.appendChild(outsideHowlSarah)
outsideScene.appendChild(outsideNofaceSarah)
outsideScene.appendChild(outsideCatbusSarah)



// ========================  ALLEY =================================
var alleyScene = createScene("alley-scene", "url('images/alley.png')", 1)
var alleySceneTexts = createTextBlock("alleySceneTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")
var alleySceneStory = createStory("alley-scene-story", ALLEY_SCENE["story"])

var alleySceneContinue = createContinueBtn("alleySceneContinue", "news-gothic-std")
alleySceneContinue.style.zIndex = 1;

var alleySceneSarah = createOverlay("alleySceneSarah", "url('images/alley_sarah.png')")
alleySceneSarah.style.right = "-100px"
alleySceneSarah.style.opacity = 0

alleySceneTexts.appendChild(alleySceneStory)
alleySceneTexts.appendChild(alleySceneContinue)
alleyScene.appendChild(alleySceneSarah)
alleyScene.appendChild(alleySceneTexts)



//  ========================  ALLEY CKOSE UP =================================
var alleyCloseup = createScene("alleyCloseup", "url('images/alley_closeup.png')", 1)
var alleyCloseupTexts = createTextBlock("alleyCloseupTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var alleyCloseupStory1 = createStory("alleyCloseupStory", ALLEY_CLOSEUP["story1"])
var alleySceneCat = createOverlay("alleySceneCat", "url('images/totoro_light.png')")
alleySceneCat.style.opacity = 0

var alleySceneCatDark = createOverlay("alleySceneCatDark", "url('images/totoro_dark.png')")
alleySceneCatDark.style.opacity = 0

var alleyCloseupStory1continue = createContinueBtn("alleyCloseupStory1continue", "news-gothic-std")
var alleyCloseupStory2continue = createContinueBtn("alleyCloseupStory2continue", "news-gothic-std")
var alleyCloseupContinue = createContinueBtn("alleyCloseupContinue", "news-gothic-std")

alleyCloseupTexts.appendChild(alleyCloseupStory1)
alleyCloseupTexts.appendChild(alleyCloseupStory1continue)
alleyCloseupTexts.appendChild(alleyCloseupStory2continue)
alleyCloseupTexts.appendChild(alleyCloseupContinue)
alleyCloseup.appendChild(alleySceneCat)
alleyCloseup.appendChild(alleySceneCatDark)
alleyCloseup.appendChild(alleyCloseupTexts)