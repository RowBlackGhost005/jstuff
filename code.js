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

const mainButton = document.getElementById('mainButton') 
 
mainButton.addEventListener('click', e => { 

    const audioController = document.getElementById('audioController')
    audioController.volume = 0.05
    audioController.play()

    mainButton.hidden = true
    document.getElementById('buttonHolder').hidden = true

    setTimeout(() => { revealElements() }, 2600);
    
})