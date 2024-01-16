hideElements()

function hideElements(){
    const gifDiv = document.getElementById('toothlessDancing')
    
    for (const child of gifDiv.children) {
        child.hidden = true
      }
}

function revealElements(){
    const gifDiv = document.getElementById('toothlessDancing')
    
    for (const child of gifDiv.children) {
        child.hidden = false
      }
}

function returnMainState(){
    document.getElementById('buttonHolder').hidden = false
    mainButton.hidden = false
    hideElements()

}

const mainButton = document.getElementById('mainButton') 
 
mainButton.addEventListener('click', e => { 

    const audioController = document.getElementById('audioController')
    audioController.volume = 0.05
    audioController.play()

    mainButton.hidden = true
    document.getElementById('buttonHolder').hidden = true

    setTimeout(() => { revealElements() }, 2600);
    
})

document.getElementById("audioController").addEventListener("ended", returnMainState, false);

