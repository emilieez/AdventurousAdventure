// ============= FOREST SCENE 1 ================
var forest1 = createScene("forest-1", "url('images/forest_1.jpg')", 3)
var forest1texts = createTextBlock("forest1texts", "bottom-centered", "1.1vw", "NorthwoodHigh")

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