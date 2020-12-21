// ============= SKY SCENE 1 ================

var sky1 = createScene("sky-1", "url('images/sky_1.png')", 2)
var sky1texts = createTextBlock("sky1texts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var sky1sarah = createOverlay("sky1sarah", "url('images/sky_1_sarah.png')")
sky1sarah.style.left = "-200px"
sky1sarah.style.opacity = "0"

var sky1story = createStory("sky-1-story", SKY_SCENE_1["story"])

var sky1continue = createContinueBtn("sky1continue", "news-gothic-std")
sky1continue.style.zIndex = 2;

sky1texts.appendChild(sky1story);
sky1texts.appendChild(sky1continue)
sky1.appendChild(sky1sarah)
sky1.appendChild(sky1texts)


// ============= SKY SCENE 2 ================
var liftoff = createScene("liftoff", "url('images/liftoff.png')", 2)
var liftoffTexts = createTextBlock("liftoffTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var liftoffSarah = createOverlay("liftoffSarah", "url('images/liftoff_sarah.png')")
var whatCatMountain = createOverlay("whatCatMountain", "url('images/show.png')")

var liftoffStory = createStory("liftoff-story", LIFTOFF["story"])

var liftoffContinue = createContinueBtn("liftoffContinue", "news-gothic-std")
liftoffContinue.style.zIndex = 2;

liftoffTexts.appendChild(liftoffStory);
liftoffTexts.appendChild(liftoffContinue)
liftoff.appendChild(liftoffSarah)
liftoff.appendChild(whatCatMountain)
liftoff.appendChild(liftoffTexts)



// ============= SKY SCENE CAT MOUNTAIN ================
var catMountain = createScene("catMountain", "url('images/cat_mountain.png')", 2)
var catMountainTexts = createTextBlock("catMountainTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var catMountainSarah = createOverlay("catMountainSarah", "url('images/cat_mountain_sarah.png')")

var catMountainStory = createStory("catMountain-story", CAT_MOUNTAIN["story"])

var catMountainContinue = createContinueBtn("catMountainContinue", "news-gothic-std")
catMountainContinue.style.zIndex = 2;

catMountainTexts.appendChild(catMountainStory);
catMountainTexts.appendChild(catMountainContinue)
catMountain.appendChild(catMountainSarah)
catMountain.appendChild(catMountainTexts)


// ============= SKY SCENE CAT MOUNTAIN LANDING ================
var catMountainLanding = createScene("catMountainLanding", "url('images/cat_mountain_landing.png')", 2)
var catMountainLandingTexts = createTextBlock("catMountainLandingTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var catMountainLandingSarah = createOverlay("catMountainLandingSarah", "url('images/cat_mountain_landing_sarah.png')")
catMountainLandingSarah.style.top = "-1000px";

var catMountainLandingStory = createStory("catMountain-landing-story", CAT_MOUNTAIN_LANDING["story"])

var catMountainLandingContinue = createContinueBtn("catMountainLandingContinue", "news-gothic-std")

catMountainLandingTexts.appendChild(catMountainLandingStory);
catMountainLandingTexts.appendChild(catMountainLandingContinue)
catMountainLanding.appendChild(catMountainLandingSarah)
catMountainLanding.appendChild(catMountainLandingTexts)


// ============= SKY SCENE CAVE WATER  ================
var skyCaveWater = createScene("skyCaveWater", "url('images/water.png')", 2)
var skyCaveWaterTexts = createTextBlock("skyCaveWaterTexts", "bottom-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var skyCaveWaterSarahLeft = createOverlay("skyCaveWaterSarahLeft", "url('images/water_sarah_left.png')")
skyCaveWaterSarahLeft.style.left = "400px";
skyCaveWaterSarahLeft.style.opacity = 0;

var skyCaveWaterSarahRight = createOverlay("skyCaveWaterSarahRight", "url('images/water_sarah_right.png')")
skyCaveWaterSarahRight.style.right = "400px";
skyCaveWaterSarahRight.style.opacity = 0;

var skyCaveWaterSarahRightCrash = createOverlay("skyCaveWaterSarahRightCrash", "url('images/water_sarah_rightcrash.png')")
skyCaveWaterSarahRightCrash.style.opacity = 0;
skyCaveWaterSarahRightCrash.style.right = "100px";

var skyCaveWaterSarahUp = createOverlay("skyCaveWaterSarahUp", "url('images/water_sarah_up.png')")
skyCaveWaterSarahUp.style.top = "100px";
skyCaveWaterSarahUp.style.opacity = 0;

var skyCaveWaterCrashEffect = createOverlay("skyCaveWaterCrashEffect", "url('images/crash.png')")
skyCaveWaterCrashEffect.style.display = "none";

var skyCaveWaterShadow = createOverlay("skyCaveWaterShadow", "url('images/water_shadow.png')")

skyCaveWaterOptions_fontSize = STANDARD_FONT_SIZE.replace('px', '') * 0.85 + "px"
var skyCaveWaterOptions = createOptionsBlock("skyCaveWaterOptions", "news-gothic-std", skyCaveWaterOptions_fontSize)
var skyCaveWaterSwimLeft = createSimpleOption("sky-cave-water-left", CAVE_WATER["swimLeft-option"])
var skyCaveWaterSwimRight = createSimpleOption("sky-cave-water-right", CAVE_WATER["swimRight-option"])
var skyCaveWaterSwimUp = createSimpleOption("sky-cave-water-up", CAVE_WATER["swimUp-option"])
skyCaveWaterOptions.appendChild(skyCaveWaterSwimLeft);
skyCaveWaterOptions.appendChild(skyCaveWaterSwimRight);
skyCaveWaterOptions.appendChild(skyCaveWaterSwimUp);
skyCaveWaterOptions.style.top = "-500px";

var skyCaveWaterStory = createStory("skyCaveWaterStory", CAVE_WATER["story"])
var skyCaveWaterContinue = createContinueBtn("skyCaveWaterContinue", "news-gothic-std")

skyCaveWaterTexts.appendChild(skyCaveWaterStory);
skyCaveWaterTexts.appendChild(skyCaveWaterContinue);
skyCaveWater.appendChild(skyCaveWaterSarahLeft)
skyCaveWater.appendChild(skyCaveWaterSarahRight)
skyCaveWater.appendChild(skyCaveWaterSarahRightCrash)
skyCaveWater.appendChild(skyCaveWaterCrashEffect)
skyCaveWater.appendChild(skyCaveWaterSarahUp)
skyCaveWater.appendChild(skyCaveWaterShadow)
skyCaveWater.appendChild(skyCaveWaterTexts)
skyCaveWater.appendChild(skyCaveWaterOptions)


// ============= SKY SCENE CAVE SURFACE  ================
var skyCaveSurface = createScene("skyCaveSurface", "url('images/cave_surface.png')", 2)
var skyCaveSurfaceTexts = createTextBlock("skyCaveSurfaceTexts", "top-centered", STANDARD_FONT_SIZE, "news-gothic-std")

var skyCaveSurfaceSarahOnCat = createOverlay("skyCaveSurfaceSarahOnCat", "url('images/cave_surface_cat_sarah.png')")
var skyCaveSurfaceCat = createOverlay("skyCaveSurfaceCat", "url('images/cave_surface_cat.png')")
skyCaveSurfaceCat.style.display = "none"
var skyCaveSurfaceSarah = createOverlay("skyCaveSurfaceSarah", "url('images/cave_surface_sarah.png')")
skyCaveSurfaceSarah.style.opacity = 0
skyCaveSurfaceSarah.style.bottom = '100px'

var skyCaveSurfaceDark = createOverlay("skyCaveSurfaceDark", "url('images/cave_surface_dark.png')")
skyCaveSurfaceDark.style.opacity = 0

var skyCaveSurfaceEnd = createOverlay("skyCaveSurfaceEnd", "url('images/cave_surface_end.png')")
skyCaveSurfaceEnd.style.opacity = 0

var skyCaveSurfaceSarah2 = createOverlay("skyCaveSurfaceSarah2", "url('images/cave_surface_sarah-2.png')")
skyCaveSurfaceSarah2.style.top = '100px'
skyCaveSurfaceSarah2.style.opacity = 0

var skyCaveSurfaceStory = createStory("skyCaveSurfaceStory", CAVE_SURFACE["story1"])

var skyCaveSurfaceStory1Continue = createContinueBtn("skyCaveSurfaceStory1Continue", "news-gothic-std")
var skyCaveSurfaceStory2Continue = createContinueBtn("skyCaveSurfaceStory2Continue", "news-gothic-std")
var skyCaveSurfaceContinue = createContinueBtn("skyCaveSurfaceContinue", "news-gothic-std")

skyCaveSurfaceTexts.appendChild(skyCaveSurfaceStory);
skyCaveSurfaceTexts.appendChild(skyCaveSurfaceStory1Continue)
skyCaveSurfaceTexts.appendChild(skyCaveSurfaceStory2Continue)
skyCaveSurfaceTexts.appendChild(skyCaveSurfaceContinue)
skyCaveSurface.appendChild(skyCaveSurfaceSarahOnCat)
skyCaveSurface.appendChild(skyCaveSurfaceCat)
skyCaveSurface.appendChild(skyCaveSurfaceEnd)
skyCaveSurface.appendChild(skyCaveSurfaceDark)
skyCaveSurface.appendChild(skyCaveSurfaceSarah)
skyCaveSurface.appendChild(skyCaveSurfaceSarah2)
skyCaveSurface.appendChild(skyCaveSurfaceTexts)