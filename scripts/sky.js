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


// ============= SKY SCENE 2 ================
var liftoff = createScene("liftoff", "url('images/liftoff.png')", 2)
var liftoffTexts = createTextBlock("liftoffTexts", "bottom-centered", "1.5vw", "news-gothic-std")

var liftoffSarah = createSarah("liftoffSarah", "url('images/liftoff_sarah.png')")

var liftoffStory = document.createElement("p")
liftoffStory.setAttribute("id", "sky-1-story");
liftoffStory.innerHTML = LIFTOFF["story"]
liftoffStory.className = "story w3-animate-opacity"

var liftoffContinue = document.createElement("button")
liftoffContinue.setAttribute("id", "sky1continue")
liftoffContinue.className = "btn option"
liftoffContinue.style.fontFamily = "news-gothic-std"
liftoffContinue.innerHTML = "&#x02281; Continue"
liftoffContinue.style.display = "none"

liftoffTexts.appendChild(liftoffStory);
liftoffTexts.appendChild(liftoffContinue)
liftoff.appendChild(liftoffSarah)
liftoff.appendChild(liftoffTexts)
