let fishPosition = 290

const fishingPole = (()=>{
    let poleY = 0;
    const net = document.querySelector('#innerRect');
    const animate = setInterval(() =>{
        poleY += .1;
        net.setAttribute('style', `transform:translateY(${poleY}px)`)
        if(poleY >= 336){
            poleY = 0;
        }
    }, 5)  
    window.onkeyup = function(e) {
        const key = e.keyCode ? e.keyCode : e.which;
        if (key == 40) {
            poleY += 5;
            console.log('up')
        }else if (key == 38) {
            poleY -= 5;
            console.log('down')
        }
    }
})

const fishOnHook = (() => {
    const fish = document.querySelector('#fish');
    const animate = setInterval(() => {
        fishPosition -= .1;
        fish.setAttribute('style', `transform:translateY(${fishPosition}px)`)
        if(fishPosition <= -65){
            fishPosition = 290;
        }
    }, 10)
})
const hookedAlert = (() =>{
    const title = document.querySelector('.titleScreen');
    const titleScreen = document.createElement('h1')
    titleScreen.innerText = 'Hooked!';
    title.appendChild(titleScreen);
    const clearTitle = setTimeout(() =>{
        title.style.visibility = 'hidden';
    },500)
})

fishingPole();
hookedAlert();
fishOnHook();


