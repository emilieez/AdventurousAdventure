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

var bedroomMorning2Story = createStory("bedroom-morning-2-story", "Energized by the bean, she contemplates her outfit of the day. What should she wear today?")
var bedroomMorning2Continue = createContinueBtn("bedroomMorning2Continue", "news-gothic-std")
bedroomMorning2Continue.style.zIndex = 1;

var bedroomMorning2Sarah = createSarah("bedroomMorningSarah-2", "url('images/bedroom_morning_sarah-2.png')")
bedroomMorning2Sarah.style.right = "-1000px"

bedroomMorning2Texts.appendChild(bedroomMorning2Story)
bedroomMorning2Texts.appendChild(bedroomMorning2Continue)
bedroomMorning2.appendChild(bedroomMorning2Sarah)
bedroomMorning2.appendChild(bedroomMorning2Texts)



// ============= SKY SCENE 1 ================

var sky1 = createScene("sky-1", "url('images/sky_1.png')", 2)
var sky1texts = createTextBlock("sky1texts", "bottom-centered", "1.5vw", "news-gothic-std")

var sky1sarah = createSarah("sky1sarah", "url('images/sky_1_sarah.png')")
sky1sarah.style.left = "-800px"

var sky1story = document.createElement("p")
sky1story.setAttribute("id", "sky-1-story");
sky1story.innerHTML = "Still on the mission to find her cat, Sarah searches one island and finds nothing. She decides to explore the islands in hopes of finding her cat."
sky1story.className = "story w3-animate-opacity"

var sky1continue = document.createElement("button")
sky1continue.setAttribute("id", "sky1continue")
sky1continue.className = "btn option"
sky1continue.style.fontFamily = "news-gothic-std"
sky1continue.innerHTML = "&#x02281; Continue"
sky1continue.style.display = "none"

sky1texts.appendChild(sky1story);
sky1texts.appendChild(sky1continue)
sky1.appendChild(sky1sarah)
sky1.appendChild(sky1texts)


// ============= FOREST SCENE 1 ================
var forest1 = createScene("forest-1", "url('images/forest_1.jpg')", 3)
var forest1texts = createTextBlock("forest1texts", "bottom-centered", "1.9vw", "NorthwoodHigh")

var forest1sarah_1 = document.createElement("div")
forest1sarah_1.setAttribute("id", 'forest1sarah-1')
forest1sarah_1.style.backgroundImage = "url('images/forest_1_sarah-1.png')"
forest1sarah_1.style.width = "100%"
forest1sarah_1.style.position = "relative"
forest1sarah_1.style.bottom = "150px"

var forest1sarah_2 = document.createElement("div")
forest1sarah_2.setAttribute("id", 'forest1sarah-2')
forest1sarah_2.style.backgroundImage = "url('images/forest_1_sarah-2.png')"
forest1sarah_2.style.width = "100%"
forest1sarah_2.style.position = "relative"
forest1sarah_2.style.bottom = "200px"
forest1sarah_2.style.display = "none"

var forest1story = document.createElement("p")
forest1story.setAttribute("id", "forest-1-story");
forest1story.innerHTML = "The boat takes Sarah to a dark forest"
forest1story.className = "story w3-animate-opacity"

var forest1continue = document.createElement("button")
forest1continue.setAttribute("id", "forest1continue")
forest1continue.className = "btn option"
forest1continue.style.fontFamily = "NorthwoodHigh"
forest1continue.innerHTML = "&#x02281; Continue"
forest1continue.style.display = "none"

var centerForest1Texts = document.createElement("center")
centerForest1Texts.appendChild(forest1story);
centerForest1Texts.appendChild(forest1continue);

forest1texts.appendChild(centerForest1Texts)
forest1.appendChild(forest1sarah_1)
forest1.appendChild(forest1sarah_2)
forest1.appendChild(forest1texts)


// ============= FOREST SCENE 2 ================
var forest2 = createScene("forest-2", "url('images/forest_2.jpg')", 4)

var forest2texts = createTextBlock("forest2text", "bottom-centered", "1.0vw", "NorthwoodHigh")

var forest2story = document.createElement("p")
forest2story.setAttribute("id", "forest-2-story");
forest2story.innerHTML = "The boat takes Sarah to a dark forest"
forest2story.className = "story"
forest2story.style.marginBottom = "15px"

var forest2mushrooms = document.createElement("button")
forest2mushrooms.setAttribute("id", "forest2mushrooms")
forest2mushrooms.className = "btn option"
forest2mushrooms.style.fontFamily = "NorthwoodHigh"
forest2mushrooms.innerHTML = "&#x02281; Inspect Mushrooms"
forest2mushrooms.style.display = "none"
forest2mushrooms.style.padding = "0px"
forest2mushrooms.style.margin = "0px"

var forest2tree = document.createElement("button")
forest2tree.setAttribute("id", "forest2tree")
forest2tree.className = "btn option"
forest2tree.style.fontFamily = "NorthwoodHigh"
forest2tree.innerHTML = "&#x02281; Inspect Tree"
forest2tree.style.display = "none"
forest2tree.style.margin = "0px"
forest2tree.style.padding = "0px"

var centerForest2Texts = document.createElement("center")
centerForest2Texts.appendChild(forest2story);
centerForest2Texts.appendChild(forest2mushrooms);
centerForest2Texts.appendChild(forest2tree);

forest2texts.appendChild(centerForest2Texts)
forest2.appendChild(forest2texts)