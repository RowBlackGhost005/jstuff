const playArea = document.getElementById('playArea')
playArea.addEventListener('onload', setupPlay())

attemptsToSayNo = 0

function setupPlay() {
    buttonNo = document.getElementById('btnNo')
    buttonYes = document.getElementById('btnYes')

    buttonNo.addEventListener('mouseover', e => { 
        randomMovement()
    })

    buttonNo.addEventListener('mouseout' , e => {
    })

    buttonYes.addEventListener('click', e => {
        alert("Yay!")
        window.open("https://www.youtube.com/watch?v=izGwDsrQ1eQ")
        document.location.href = 'valentine/valentine-yes.html'

    })

    buttonNo.addEventListener('click', e => {
        alert("Ay :c")
        window.open("https://www.youtube.com/watch?v=7mAapk9yHqI")

    })

    buttonNo.style.top = (((playArea.clientHeight / 2) + 35) - 250)  + 'px'
    buttonNo.style.left = (((playArea.clientWidth / 2) + 75) + 150)  + 'px'

    
    buttonYes.style.top = (((playArea.clientHeight / 2) + 35) - 250)  + 'px'
    buttonYes.style.left = (((playArea.clientWidth / 2) - 75) - 150)  + 'px'

}

function randomMovement() {
    buttonNo = document.getElementById('btnNo')
    newXPosition = (Math.random() * playArea.clientWidth) - 150
    newYPosition = (Math.random() * playArea.clientHeight) - 75

    if (newXPosition < 150){
        newXPosition = 150
    }

    if(newXPosition > (playArea.clientWidth - 150)){
        newXPositon = playArea.clientWidth - 150
    }

    if(newYPosition < 75){
        newYPosition = 75
    }

    if(newXPosition > (playArea.clientHeight - 75)){
        newXPositon = playArea.clientHeight - 75
    }
    buttonNo.style.top = newYPosition + 'px'
    buttonNo.style.left = newXPosition + 'px'

    attemptsToSayNo += 1

    if(attemptsToSayNo == 5){
        beg(1)
    }

    if(attemptsToSayNo == 10){
        beg(2)
    }

    if(attemptsToSayNo == 15){
        beg(3)
    }
}

function beg(begWeight){
    banner = document.getElementById('bannerArea')

    if(begWeight == 1){
        var text = document.createElement('p')
        text.innerHTML = 'Porfavor'
        banner.appendChild(text)
    }

    if(begWeight == 2){
        var img = document.createElement('img')
        img.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTl1d3d0dHFvMGI5aDE4NmZzbHo0d2VybGpxeGhmcG1pdWZtbWh3ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KkklFx4wVfw5Ey9FTe/giphy.gif'
        img.style.height = '8rem'
        img.style.width = '8rem'
        banner.appendChild(img)
    }

    if(begWeight == 3){
        alert("Andale :c")
    }

}

