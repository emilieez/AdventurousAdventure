// ============= SKY SCENE 1 ================

var sky1 = document.createElement("div")
sky1.setAttribute('id', "sky-1")
sky1.style.display = "none"
sky1.style.backgroundImage = "url('images/sky_1.png')"
sky1.style.zIndex = 1;
sky1.className = "scene"

var sky1texts = document.createElement("div")
sky1texts.setAttribute('id', 'sky1texts')
sky1texts.className = "text-block bottom-centered"
sky1texts.style.fontSize = "1.5vw";
sky1texts.style.fontFamily = "news-gothic-std"
sky1texts.style.opacity = "0";
sky1texts.style.flexDirection = "column"
sky1texts.style.alignItems = "center"

var sky1sarah = document.createElement("div")
sky1sarah.setAttribute("id", 'sky1sarah')
sky1sarah.style.backgroundImage = "url('images/sky_1_sarah.png')"
sky1sarah.style.width = "100%"
sky1sarah.style.position = "relative"
sky1sarah.style.left = "-800px"

var sky1story = document.createElement("p")
sky1story.setAttribute("id", "sky-1-story");
sky1story.innerHTML = "Sarah walks around and continues to look for her cat. She decides to search on another island."
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
var forest1 = document.createElement("div")
forest1.setAttribute('id', "forest-1")
forest1.style.display = "none"
forest1.style.backgroundImage = "url('images/forest_1.jpg')"
forest1.style.zIndex = 2;
forest1.className = "scene"

var forest1texts = document.createElement("div")
forest1texts.className = "text-block bottom-centered"
forest1texts.style.fontSize = "1.9vw";
forest1texts.style.fontFamily = "NorthwoodHigh"

var forest1story = document.createElement("p")
forest1story.setAttribute("id", "forest-1-story");
forest1story.innerHTML = "The boat takes Sarah to a dark forest"
forest1story.className = "story"

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
forest1.appendChild(forest1texts)


// ============= FOREST SCENE 2 ================
var forest2 = document.createElement("div")
forest2.setAttribute('id', "forest-2")
forest2.style.display = "none"
forest2.style.backgroundImage = "url('images/forest_2.jpg')"
forest2.style.zIndex = 3;
forest2.className = "scene"

var forest2texts = document.createElement("div")
forest2texts.className = "text-block bottom-centered"
forest2texts.style.fontSize = "1.9vw";
forest2texts.style.fontFamily = "NorthwoodHigh"

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