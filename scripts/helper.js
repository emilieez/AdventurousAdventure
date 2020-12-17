sceneBG = document.getElementById("bg");
sceneOverlay = document.getElementById("overlay")

function transitionScene(newBgImage, oldChild, newChild) {
    console.log("clicked")
    sceneOverlay.style.zIndex = "1"
    sceneOverlay.className = "w3-animate-opacity"
    sceneOverlay.style.opacity = "1"

    setTimeout(function () {
        sceneBG.style.backgroundImage = newBgImage
        sceneBG.replaceChild(newChild, oldChild)
        sceneOverlay.style.zIndex = "-1"
        sceneOverlay.style.opacity = "0"
    }, 2000)
}