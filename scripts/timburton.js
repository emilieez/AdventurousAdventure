FOREST_FONT_SIZE = STANDARD_FONT_SIZE.replace('px', '') * 1.3 + "px"

// ============= FOREST SCENE 1 ================
var forest1 = createScene("forest-1", "url('images/forest_1.jpg')", 3)
var forest1texts = createTextBlock("forest1texts", "bottom-centered", FOREST_FONT_SIZE, "NorthwoodHigh")

var forest1sarah_1 = createOverlay("forest1sarah-1", "url('images/forest_1_sarah-1.png')")
forest1sarah_1.style.opacity = "0"
forest1sarah_1.style.bottom = "50px"

var forest1sarah_2 = createOverlay("forest1sarah-2", "url('images/forest_1_sarah-2.png')")
forest1sarah_2.style.display = "none"

var forest1story = createStory("forest-1-story", FOREST_1["story1"])
var forest1story1continue = createContinueBtn("forest1story1continue", "NorthwoodHigh")
var forest1story2continue = createContinueBtn("forest1story2continue", "NorthwoodHigh")
var forest1story3continue = createContinueBtn("forest1story3continue", "NorthwoodHigh")

var forest1continue = createContinueBtn("forest1continue", "NorthwoodHigh")

forest1texts.appendChild(forest1story)
forest1texts.appendChild(forest1continue)
forest1texts.appendChild(forest1story1continue)
forest1texts.appendChild(forest1story2continue)
forest1texts.appendChild(forest1story3continue)
forest1.appendChild(forest1sarah_1)
forest1.appendChild(forest1sarah_2)
forest1.appendChild(forest1texts)


// ============= FOREST SCENE 2 ================
var forest2 = createScene("forest-2", "url('images/forest_2.png')", 3)

var forest2texts = createTextBlock("forest2texts", "bottom-centered", FOREST_FONT_SIZE, "NorthwoodHigh")
var forest2story1 = createStory("forest-2-story", FOREST_2["story1"])
var forest2story1continue = createContinueBtn("forest2story1continue", "NorthwoodHigh")
var forest2story2continue = createContinueBtn("forest2story2continue", "NorthwoodHigh")
var forest2story3Continue = createContinueBtn("forest2story3continue", "NorthwoodHigh")
var forest2Continue = createContinueBtn("forest2continue", "NorthwoodHigh")

var forest2sarah1 = createOverlay("forest2sarah1", "url('images/forest_2_sarah-1.png')")
forest2sarah1.style.opacity = 0
forest2sarah1.style.top = "100px"

var forest2sarah2 = createOverlay("forest2sarah2", "url('images/forest_2_sarah-2.png')")
forest2sarah2.style.opacity = 0

var forest2sarah3 = createOverlay("forest2sarah3", "url('images/forest_2_sarah-3.png')")
forest2sarah3.style.opacity = 0

var forest2sarah4 = createOverlay("forest2sarah4", "url('images/forest_2_sarah-4.png')")
forest2sarah4.style.opacity = 0

var forest2beetleGlow = createOverlay("forest2beetleGlow", "url('images/forest_2_beetle_glow.png')")
forest2beetleGlow.style.opacity = 0

var forest2braGlow = createOverlay("forest2braGlow", "url('images/forest_2_bra_glow.png')")
forest2braGlow.style.opacity = 0

var forest2featherGlow = createOverlay("forest2featherGlow", "url('images/forest_2_feather_glow.png')")
forest2featherGlow.style.opacity = 0

var forest2mushroomGlow = createOverlay("forest2mushroomGlow", "url('images/forest_2_mushroom_glow.png')")
forest2mushroomGlow.style.opacity = 0

forest2options = createOptions("forest2options", [
    FOREST_2["feather"], FOREST_2["mushrooms"], FOREST_2["beetle"], FOREST_2["nani"]
], "NorthwoodHigh", FOREST_FONT_SIZE)
forest2options.style.top = "-100px"
forest2options.style.opacity = 0
forest2options.style.animation = "none"

forest2texts.appendChild(forest2story1)
forest2texts.appendChild(forest2story1continue)
forest2texts.appendChild(forest2story2continue)
forest2texts.appendChild(forest2story3Continue)
forest2texts.appendChild(forest2Continue)
forest2.appendChild(forest2sarah1)
forest2.appendChild(forest2sarah2)
forest2.appendChild(forest2sarah3)
forest2.appendChild(forest2sarah4)
forest2.appendChild(forest2beetleGlow)
forest2.appendChild(forest2braGlow)
forest2.appendChild(forest2featherGlow)
forest2.appendChild(forest2mushroomGlow)
forest2.appendChild(forest2texts)
forest2.appendChild(forest2options)



// ============= FOREST RAIN SCENE ================
var forest3 = createScene("forest-3", "url('images/forest_3.png')", 3)
var forest3texts = createTextBlock("forest3texts", "bottom-centered", FOREST_FONT_SIZE, "NorthwoodHigh")

var forest3story = createStory("forest-3-story", FOREST_3["story1"])
var forest3story1continue = createContinueBtn("forest3story1continue", "NorthwoodHigh")

var forest3rain = createOverlay("forest3rain", "url('images/forest_3_rain.png')")
forest3rain.style.opacity = 0;

var forest3continue = createContinueBtn("forest3continue", "NorthwoodHigh")

forest3texts.appendChild(forest3story)
forest3texts.appendChild(forest3continue)
forest3texts.appendChild(forest3story1continue)
forest3.appendChild(forest3rain)
forest3.appendChild(forest3texts)



// ============= FOREST BRIDGE SCENE ================
var forestBridge = createScene("forestBridge", "url('images/bridge.png')", 3)
var forestBridgeTexts = createTextBlock("forestBridgeTexts", "bottom-centered", FOREST_FONT_SIZE, "NorthwoodHigh")

var forestBridgeStory = createStory("forest-bridge-story", FOREST_BRIDGE["story1"])
var forestBridgeStory1continue = createContinueBtn("forestBridgeStory1continue", "NorthwoodHigh")
var forestBridgeStory2continue = createContinueBtn("forestBridgeStory2continue", "NorthwoodHigh")
var forestBridgeContinue = createContinueBtn("forestBridgeContinue", "NorthwoodHigh")


var forestBridgeSarah1 = createOverlay("forestBridgeSarah1", "url('images/bridge_sarah-1.png')")
forestBridgeSarah1.style.opacity = 0;
forestBridgeSarah1.style.right = '50px';

var forestBridgeSarah2 = createOverlay("forestBridgeSarah2", "url('images/bridge_sarah-2.png')")
forestBridgeSarah2.style.opacity = 0;

var forestBridgeSarah3 = createOverlay("forestBridgeSarah3", "url('images/bridge_sarah-3.png')")
forestBridgeSarah3.style.opacity = 0;
forestBridgeSarah3.style.right = '50px';

forestBridgeTexts.appendChild(forestBridgeStory)
forestBridgeTexts.appendChild(forestBridgeStory1continue)
forestBridgeTexts.appendChild(forestBridgeStory2continue)
forestBridgeTexts.appendChild(forestBridgeContinue)
forestBridge.appendChild(forestBridgeSarah1)
forestBridge.appendChild(forestBridgeSarah2)
forestBridge.appendChild(forestBridgeSarah3)
forestBridge.appendChild(forestBridgeTexts)



// ============= DEMONIC CIRCLE SCENE ================
var demonicCircle = createScene("demonicCircle", "url('images/demonic_circle.png')", 3)
var demonicCircleTexts = createTextBlock("demonicCircleTexts", "bottom-centered", FOREST_FONT_SIZE, "NorthwoodHigh")

var demonicCircleStory = createStory("demonic-circle-story", DEMONIC_CIRCLE["story1"])
var demonicCircleStory1Continue = createContinueBtn("demonicCircleStory1Continue", "NorthwoodHigh")
var demonicCircleStory2Continue = createContinueBtn("demonicCircleStory2Continue", "NorthwoodHigh")
var demonicCircleStory3Continue = createContinueBtn("demonicCircleStory3Continue", "NorthwoodHigh")
var demonicCircleStory4Continue = createContinueBtn("demonicCircleStory4Continue", "NorthwoodHigh")
var demonicCircleContinue = createContinueBtn("demonicCircleContinue", "NorthwoodHigh")

var demonicCircleGlowing = createOverlay("demonicCircleGlowing", "url('images/demonic_circle_glowing.png')")
demonicCircleGlowing.style.display = "none";
demonicCircleGlowing.style.animation = "glowing 2s";
demonicCircleGlowing.style.animationIterationCount = "infinite";

var demonicCircleCat = createOverlay("demonicCircleCat", "url('images/demonic_circle_cat.png')")
demonicCircleCat.style.opacity = 0;

var demonicCircleSarah1 = createOverlay("demonicCircleSarah1", "url('images/demonic_circle_sarah-1.png')")
demonicCircleSarah1.style.opacity = 0;
demonicCircleSarah1.style.right = '100px';

var demonicCircleSarah2 = createOverlay("demonicCircleSarah2", "url('images/demonic_circle_sarah-2.png')")
demonicCircleSarah2.style.opacity = 0;
demonicCircleSarah2.style.bottom = '100px';

demonicCircleTexts.appendChild(demonicCircleStory)
demonicCircleTexts.appendChild(demonicCircleStory1Continue)
demonicCircleTexts.appendChild(demonicCircleStory2Continue)
demonicCircleTexts.appendChild(demonicCircleStory3Continue)
demonicCircleTexts.appendChild(demonicCircleStory4Continue)
demonicCircleTexts.appendChild(demonicCircleContinue)
demonicCircle.appendChild(demonicCircleGlowing)
demonicCircle.appendChild(demonicCircleCat)
demonicCircle.appendChild(demonicCircleSarah1)
demonicCircle.appendChild(demonicCircleSarah2)
demonicCircle.appendChild(demonicCircleTexts)



//  ========================  BEDROOM NIGHT  =================================
var bedroomNight = createScene("bedroomNight", "url('images/bedroom_night.png')", 1)
var bedroomNightTexts = createTextBlock("bedroomNightTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var bedroomNightStory = createStory("bedroomNightStory", BEDROOM_NIGHT["story1"])

var bedroomNightSarah1 = createOverlay("bedroomNightSarah1", "url('images/bedroom_night_sarah-1.png')")
bedroomNightSarah1.style.opacity = 0

var bedroomNightSarah2 = createOverlay("bedroomNightSarah2", "url('images/bedroom_night_sarah-2.png')")
bedroomNightSarah2.style.bottom = "50px"
bedroomNightSarah2.style.opacity = 0

var bedroomNightCat1 = createOverlay("bedroomNightCat1", "url('images/bedroom_night_cat-1.png')")
bedroomNightCat1.style.opacity = 0
bedroomNightCat1.style.bottom = 0

var bedroomNightCat = createOverlay("bedroomNightCat", "url('images/bedroom_night_cat.png')")
bedroomNightCat.style.opacity = 0

var bedroomNightCatDark = createOverlay("bedroomNightCatDark", "url('images/dark_cat_ending.png')")
bedroomNightCatDark.style.opacity = 0

var bedroomNightStory1Continue = createContinueBtn("bedroomNightStory1Continue", "news-gothic-std")
var bedroomNightStory2Continue = createContinueBtn("bedroomNightStory2Continue", "news-gothic-std")
var bedroomNightStory3Continue = createContinueBtn("bedroomNightStory3Continue", "news-gothic-std")
var bedroomNightContinue = createContinueBtn("bedroomNightContinue", "news-gothic-std")

var endingTexts = createTextBlock("endingTexts", "top-left", FOREST_FONT_SIZE.replace('px', '') * 1.3 + "px", "NorthwoodHigh")
endingTexts.style.display = "none"
endingTexts.style.backgroundColor = "rgba(0,0,0,0)"
endingTexts.style.color = "red"
var endingStory = createStory("endingStory", BEDROOM_NIGHT["ending"])
endingTexts.appendChild(endingStory)

bedroomNightTexts.appendChild(bedroomNightStory)
bedroomNightTexts.appendChild(bedroomNightStory1Continue)
bedroomNightTexts.appendChild(bedroomNightStory2Continue)
bedroomNightTexts.appendChild(bedroomNightStory3Continue)
bedroomNightTexts.appendChild(bedroomNightContinue)
bedroomNight.appendChild(bedroomNightSarah1)
bedroomNight.appendChild(bedroomNightCat1)
bedroomNight.appendChild(bedroomNightSarah2)
bedroomNight.appendChild(bedroomNightCat)
bedroomNight.appendChild(bedroomNightCatDark)
bedroomNight.appendChild(bedroomNightTexts)
bedroomNight.appendChild(endingTexts)