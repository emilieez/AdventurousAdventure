// ============= BEDROOM MORNING ================
var bedroomMorning = createScene("bedroom-morning", "url('images/bedroom_morning.png')", 1)
var bedroomMorningTexts = createTextBlock("bedroomMorningTexts", "bottom-centered", "1.9vw", "news-gothic-std")
var bedroomMorningStory = createStory("bedroom-morning-story", "One beautiful, warm morning, Sarah He wakes up in her cozy home right next to . . .HOWL’S MOVING CASTLE??")
var bedroomMorningContinue = createContinueBtn("bedroomMorningContinue", "news-gothic-std")
bedroomMorningContinue.style.zIndex = 1;

var bedroomMorningSarah1 = createSarah("bedroomMorningSarah_1", "url('images/bedroom_morning_sarah-1.png')")
bedroomMorningSarah1.style.transform = "rotate(300deg)"

bedroomMorningTexts.appendChild(bedroomMorningStory)
bedroomMorningTexts.appendChild(bedroomMorningContinue)
bedroomMorning.appendChild(bedroomMorningTexts)
bedroomMorning.appendChild(bedroomMorningSarah1)



// ============= COFFEE ================
var coffeeScene = createScene("coffee-scene", "url('images/coffee.png')", 1)
var coffeeTexts = createTextBlock("coffeeTexts", "bottom-centered", "1.9vw", "news-gothic-std")
var coffeeStory = createStory("coffee-scene-story", "As with any other beautiful, fine morning such as this, Sarah first goes and grabs her magic bean juice.")
var coffeeSceneContinue = createContinueBtn("coffeeSceneContinue", "news-gothic-std")

coffeeTexts.appendChild(coffeeStory)
coffeeTexts.appendChild(coffeeSceneContinue)
coffeeScene.appendChild(coffeeTexts)



// ============= BEDROOM MORNING 2 ================
var bedroomMorning2 = createScene("bedroom-morning-2", "url('images/bedroom_morning.png')", 1)
var bedroomMorning2Texts = createTextBlock("bedroomMorning2Texts", "bottom-centered", "1.9vw", "news-gothic-std")

var bedroomMorning2Story = createStory("bedroom-morning-2-story", BEDROOM_MORNING_2["story"])
var bedroomMorning2Continue = createContinueBtn("bedroomMorning2Continue", "news-gothic-std")
bedroomMorning2Continue.style.zIndex = 1;

var bedroomMorning2Sarah = createSarah("bedroomMorningSarah-2", "url('images/bedroom_morning_sarah-2.png')")
bedroomMorning2Sarah.style.right = "-1000px"

var bedroomMorning2Options = createOptions(
    "bedroom-morning-2-options",
    [BEDROOM_MORNING_2["option1"], BEDROOM_MORNING_2["option2"], BEDROOM_MORNING_2["option3"], BEDROOM_MORNING_2["option4"]],
    "news-goth-std",
    "1.8vw"
)
bedroomMorning2Options.style.top = "35%"
bedroomMorning2Options.style.left = "-1000px"

for (var i = 0; i <= 2; i++) {
    modalID = "bedroom-morning-2-options-" + i + "-modal"
    createModal(modalID, BEDROOM_MORNING_2["resultFail"], "news-goth-std", "K Cool")
    document.getElementById(modalID + "-action").setAttribute("data-dismiss", "modal")
}
createModal("bedroom-morning-2-options-3-modal", BEDROOM_MORNING_2["resultPass"], "news-goth-std", "Lets YEET")

bedroomMorning2Texts.appendChild(bedroomMorning2Story)
bedroomMorning2Texts.appendChild(bedroomMorning2Continue)
bedroomMorning2.appendChild(bedroomMorning2Sarah)
bedroomMorning2.appendChild(bedroomMorning2Texts)
bedroomMorning2.appendChild(bedroomMorning2Options)



// ============= BEDROOM MORNING 3 ================
var bedroomMorning3 = createScene("bedroom-morning-3", "url('images/bedroom_morning.png')", 1)
var bedroomMorning3Texts = createTextBlock("bedroomMorning3Texts", "bottom-centered", "1.9vw", "news-gothic-std")

var bedroomMorning3Story1 = createStory("bedroom-morning-3-story-1", BEDROOM_MORNING_3["story1"])
var bedroomMorning3Continue1 = createContinueBtn("bedroomMorning2Continue1", "news-gothic-std")
bedroomMorning3Continue1.style.zIndex = 1;

var bedroomMorning3Sarah = createSarah("bedroomMorningSarah-3", "url('images/bedroom_morning_sarah-3.png')")
bedroomMorning3Sarah.style.right = "-1000px"

bedroomMorning3Texts.appendChild(bedroomMorning3Story1)
bedroomMorning3Texts.appendChild(bedroomMorning3Continue1)
bedroomMorning3.appendChild(bedroomMorning3Sarah)
bedroomMorning3.appendChild(bedroomMorning3Texts)

