// ============= SKY SCENE 1 ================

var sky1 = document.createElement("div")
sky1.setAttribute('id', "sky-1")

var sky1texts = document.createElement("div")
sky1texts.className = "text-block bottom-centered"
sky1texts.style.fontSize = "1.5vw";
sky1texts.style.fontFamily = "news-gothic-std"
sky1texts.style.display = "flex";
sky1texts.style.flexDirection = "column"
sky1texts.style.alignItems = "center"

var sky1story = document.createElement("p")
sky1story.setAttribute("id", "sky-1-story");
sky1story.innerHTML = "Sarah walks around and continues to look for her cat. She decides to search on another island."
sky1story.className = "story"

var sky1continue = document.createElement("button")
sky1continue.setAttribute("id", "sky1continue")
sky1continue.className = "btn option"
sky1continue.style.fontFamily = "news-gothic-std"
sky1continue.innerHTML = "&#x02281; Continue"
sky1continue.style.display = "none"
sky1continue.style.width = "100px"

sky1texts.appendChild(sky1story);
sky1texts.appendChild(sky1continue)
sky1.appendChild(sky1texts)


// ============= FOREST SCENE 1 ================
var forest1 = document.createElement("div")
forest1.setAttribute('id', "forest-1")

var forest1texts = document.createElement("div")
forest1texts.className = "text-block bottom-centered"
forest1texts.style.fontSize = "1.6vw";
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
forest1continue.style.width = "100px"

var centerForestTexts = document.createElement("center")
centerForestTexts.appendChild(forest1story);
centerForestTexts.appendChild(forest1continue);

forest1texts.appendChild(centerForestTexts)
forest1.appendChild(forest1texts)
