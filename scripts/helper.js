function createScene(sceneID, sceneBg, zIndex) {
    var scene = document.createElement("div")
    scene.setAttribute('id', sceneID)
    scene.style.display = "none"
    scene.style.backgroundRepeat = "no-repeat"
    scene.style.backgroundSize = "contain"
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

function createOverlay(sarahID, sarahImg) {
    var sarah = document.createElement("div")
    sarah.setAttribute("id", sarahID)
    sarah.className = "overlay";
    sarah.style.backgroundImage = sarahImg
    sarah.style.backgroundRepeat = "no-repeat"
    sarah.style.backgroundSize = "contain"
    sarah.style.position = "absolute"
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
    continueBtn.className = "btn"
    continueBtn.style.fontFamily = fontFamily
    continueBtn.innerHTML = "&#x02281; Continue"
    continueBtn.style.display = "none"
    continueBtn.style.color = "white"
    continueBtn.style.fontSize = STANDARD_FONT_SIZE
    return continueBtn
}

function createOptions(optionsBlockID, options, fontFamily, fontSize) {
    var optionsDiv = createOptionsBlock(optionsBlockID, fontFamily, fontSize)

    for (var i = 0; i < options.length; i++) {
        option = document.createElement("button")
        optionID = optionsBlockID + "-" + i
        option.setAttribute("id", optionID)
        option.setAttribute("data-toggle", "modal")
        option.setAttribute("data-target", "#optionsModal")
        option.className = "option";
        option.innerHTML = "&#x02281; " + options[i]
        optionsDiv.appendChild(option)
    }
    return optionsDiv
}

function createOptionsBlock(optionsBlockID, fontFamily, fontSize) {
    var optionsDiv = document.createElement("div");
    optionsDiv.className = "text-block";
    optionsDiv.setAttribute('id', optionsBlockID);
    optionsDiv.style.display = "flex";
    optionsDiv.style.flexDirection = "column"
    optionsDiv.style.alignItems = "flex-start"
    optionsDiv.style.fontFamily = fontFamily;
    optionsDiv.style.fontSize = fontSize
    return optionsDiv
}

function createSimpleOption(optionID, optionText) {
    var option = document.createElement("div")
    option.setAttribute("id", optionID)
    option.innerHTML = "&#x02281; " + optionText
    return option
}

function updown(elmnt) {
    for (var i = 0; i < 5; i++) {
        $(`#${elmnt}`).animate({ top: '+=' + '30px' }, 200);
        $(`#${elmnt}`).animate({ top: '-=' + '30px' }, 200);
    }
}

function transitionStory(oldStoryContinueID, storyID, newStoryText, newStoryContinueID) {
    $(`#${oldStoryContinueID}`).hide();
    $(`#${storyID}`).hide();
    document.getElementById(storyID).innerHTML = newStoryText;
    $(`#${storyID}`).fadeIn(3000);
    setTimeout(function () {
        $(`#${newStoryContinueID}`).fadeIn(5000);
    }, 2000)
}