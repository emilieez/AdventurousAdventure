// ============= SKY SCENE 1 ================

var sky1 = createScene("sky-1", "url('images/sky_1.png')", 2)
var sky1texts = createTextBlock("sky1texts", "bottom-centered", "1.5vw", "news-gothic-std")

var sky1sarah = createSarah("sky1sarah", "url('images/sky_1_sarah.png')")
sky1sarah.style.left = "-800px"

var sky1story = createStory("sky-1-story", SKY_SCENE_1["story"])

var sky1continue = createContinueBtn("sky1continue", "news-gothic-std")
sky1continue.style.zIndex = 1;

sky1texts.appendChild(sky1story);
sky1texts.appendChild(sky1continue)
sky1.appendChild(sky1sarah)
sky1.appendChild(sky1texts)


// ============= SKY SCENE 2 ================
var liftoff = createScene("liftoff", "url('images/liftoff.png')", 2)
var liftoffTexts = createTextBlock("liftoffTexts", "bottom-centered", "1.5vw", "news-gothic-std")

var liftoffSarah = createSarah("liftoffSarah", "url('images/liftoff_sarah.png')")

var liftoffStory = createStory("liftoff-story", LIFTOFF["story"])

var liftoffContinue = createContinueBtn("liftoffContinue", "news-gothic-std")
liftoffContinue.style.zIndex = 1;

liftoffTexts.appendChild(liftoffStory);
liftoffTexts.appendChild(liftoffContinue)
liftoff.appendChild(liftoffSarah)
liftoff.appendChild(liftoffTexts)



// ============= SKY SCENE CAT MOUNTAIN ================
var catMountain = createScene("catMountain", "url('images/cat_mountain.png')", 2)
var catMountainTexts = createTextBlock("catMountainTexts", "bottom-centered", "1.5vw", "news-gothic-std")

var catMountainSarah = createSarah("catMountainSarah", "url('images/cat_mountain_sarah.png')")

var catMountainStory = createStory("catMountain-story", CAT_MOUNTAIN["story"])

var catMountainContinue = createContinueBtn("catMountainContinue", "news-gothic-std")
catMountainContinue.style.zIndex = 1;

catMountainTexts.appendChild(catMountainStory);
catMountainTexts.appendChild(catMountainContinue)
catMountain.appendChild(catMountainSarah)
catMountain.appendChild(catMountainTexts)