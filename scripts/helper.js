function createScene(sceneID, sceneBg, zIndex) {
    var scene = document.createElement("div")
    scene.setAttribute('id', sceneID)
    scene.style.display = "none"
    scene.style.backgroundImage = sceneBg
    scene.style.zIndex = zIndex;
    scene.className = "scene"
    return scene
}

function createTextBlock(textblockID, position, fontSize, fontFamily) {
    var textBlock = document.createElement("div")
    textBlock.setAttribute('id', textblockID)
    textBlock.className = "text-block " + position
    textBlock.style.fontSize = fontSize;
    textBlock.style.fontFamily = fontFamily
    textBlock.style.opacity = "0";
    textBlock.style.flexDirection = "column"
    textBlock.style.alignItems = "center"
    return textBlock
}

function createSarah(sarahID, sarahImg) {
    var sarah = document.createElement("div")
    sarah.setAttribute("id", sarahID)
    sarah.style.backgroundImage = sarahImg
    sarah.style.backgroundRepeat = "no-repeat"
    sarah.style.width = "inherit"
    sarah.style.position = "relative"
    return sarah
}

function createStory(storyID, storyText) {
    var story = document.createElement("p")
    story.setAttribute("id", storyID);
    story.innerHTML = storyText
    story.className = "story w3-animate-opacity"
    return story
}

function createContinueBtn(continueID, fontFamily) {
    var continueBtn = document.createElement("button")
    continueBtn.setAttribute("id", continueID)
    continueBtn.className = "btn option"
    continueBtn.style.fontFamily = fontFamily
    continueBtn.innerHTML = "&#x02281; Continue"
    continueBtn.style.display = "none"
    return continueBtn
}