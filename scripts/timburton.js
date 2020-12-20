// ============= FOREST SCENE 1 ================
var forest1 = createScene("forest-1", "url('images/forest_1.jpg')", 3)
var forest1texts = createTextBlock("forest1texts", "bottom-centered", STANDARD_FONT_SIZE, "NorthwoodHigh")

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
var forest2 = createScene("forest-2", "url('images/forest_2.jpg')", 4)

var forest2texts = createTextBlock("forest2texts", "bottom-centered", STANDARD_FONT_SIZE, "NorthwoodHigh")
var forest2story1 = createStory("forest-2-story", FOREST_2["story1"])
var forest2story1continue = createContinueBtn("forest2story1continue", "NorthwoodHigh")
var forest2story2continue = createContinueBtn("forest2story2continue", "NorthwoodHigh")
var forest2Continue = createContinueBtn("forest1story2continue", "NorthwoodHigh")

var forest2sarah1 = createOverlay("forest2sarah1", "url('images/forest_2_sarah-1.png')")
forest2sarah1.style.opacity = 0
forest2sarah1.style.top = "100px"

var forest2sarah2 = createOverlay("forest2sarah1", "url('images/forest_2_sarah-2.png')")
forest2sarah2.style.opacity = 0

var forest2sarah3 = createOverlay("forest2sarah1", "url('images/forest_2_sarah-3.png')")
forest2sarah3.style.opacity = 0

var forest2sarah4 = createOverlay("forest2sarah1", "url('images/forest_2_sarah-4.png')")
forest2sarah4.style.opacity = 0

var forest2beetleGlow = createOverlay("forest2beetleGlow", "url('images/forest_2_beetle_glow.png')")
forest2beetleGlow.style.opacity = 0

var forest2braGlow = createOverlay("forest2braGlow", "url('images/forest_2_bra_glow.png')")
forest2braGlow.style.opacity = 0

var forest2featherGlow = createOverlay("forest2featherGlow", "url('images/forest_2_feather_glow.png')")
forest2featherGlow.style.opacity = 0

var forest2mushroomGlow = createOverlay("forest2mushroomGlow", "url('images/forest_2_mushroom_glow.png')")
forest2mushroomGlow.style.opacity = 0

forest2texts.appendChild(forest2story1)
forest2texts.appendChild(forest2story1continue)
forest2texts.appendChild(forest2story2continue)
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