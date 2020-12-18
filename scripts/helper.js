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
    sarah.style.backgroundSize = "contain"
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
    continueBtn.className = "btn"
    continueBtn.style.fontFamily = fontFamily
    continueBtn.innerHTML = "&#x02281; Continue"
    continueBtn.style.display = "none"
    continueBtn.style.color = "white"
    continueBtn.style.fontSize = "2vw"
    return continueBtn
}

function createOptions(optionsBlockID, options, fontFamily, fontSize) {
    var optionsDiv = document.createElement("div");
    optionsDiv.className = "text-block";
    optionsDiv.setAttribute('id', optionsBlockID);
    optionsDiv.style.display = "flex";
    optionsDiv.style.flexDirection = "column"
    optionsDiv.style.alignItems = "flex-start"
    optionsDiv.style.fontFamily = fontFamily;
    optionsDiv.style.fontSize = fontSize

    for (var i = 0; i < options.length; i++) {
        option = document.createElement("button")
        optionID = optionsBlockID + "-" + i
        option.setAttribute("id", optionID)
        option.setAttribute("data-toggle", "modal")
        option.setAttribute("data-target", "#" + optionID + "-modal")
        option.className = "option";
        option.innerHTML = "&#x02281; " + options[i]
        optionsDiv.appendChild(option)
    }
    return optionsDiv
}

function createModal(modalID, body, fontFamily, footerButtonText) {
    var modal = document.createElement("div")
    modal.className = "modal fade"
    modal.setAttribute("id", modalID)

    var modalDialog = document.createElement("div")
    modalDialog.className = "modal-dialog modal-lg"
    modalDialog.style.top = "30%"

    var modalContent = document.createElement("div")
    modalContent.className = "modal-content"

    var modalBody = document.createElement("div")
    modalBody.className = "modal-body"
    modalBody.setAttribute("id", modalID + "-result")
    modalBody.innerHTML = body
    modalBody.style.color = "#ffffff"
    modalBody.style.backgroundColor = "rgba(0,0,0,0.8)"
    modalBody.style.fontFamily = fontFamily
    modalBody.style.fontSize = "1.7vw"
    modalBody.style.padding = "20px"

    var modalBodyCenter = document.createElement("center")
    modalBodyCenter.appendChild(modalBody)

    var modalFooter = document.createElement("div")
    modalFooter.className = "modal-footer"

    var footerButton = document.createElement("button")
    footerButton.className = "btn btn-dark"
    footerButton.setAttribute("id", modalID + "-action")
    footerButton.innerHTML = footerButtonText
    footerButton.style.fontFamily = fontFamily;
    footerButton.style.fontSize = "2vw"
    modalFooter.appendChild(footerButton)

    modalContent.appendChild(modalBodyCenter)
    modalContent.appendChild(modalFooter)
    modalDialog.appendChild(modalContent)
    modal.appendChild(modalDialog)
    document.body.appendChild(modal)
}