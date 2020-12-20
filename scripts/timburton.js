// ============= FOREST SCENE 1 ================
var forest1 = createScene("forest-1", "url('images/forest_1.jpg')", 3)
var forest1texts = createTextBlock("forest1texts", "bottom-centered", STANDARD_FONT_SIZE, "NorthwoodHigh")

var forest1sarah_1 = createSarah("forest1sarah-1", "url('images/forest_1_sarah-1.png')")
var forest1sarah_2 = createSarah("forest1sarah-2", "url('images/forest_1_sarah-2.png')")
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
var forest2 = createScene("forest-2", "url('images/forest_2.jpg')", 4)

var forest2texts = createTextBlock("forest2texts", "bottom-centered", STANDARD_FONT_SIZE, "NorthwoodHigh")

var forest2story = createStory("forest-2-story", FOREST_2["story"])

forest2texts.appendChild(forest2story)
forest2.appendChild(forest2texts)