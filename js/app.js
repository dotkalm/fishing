

const goFishing = (() =>{
    const title = document.querySelector('.titleScreen');
    const titleScreen = document.createElement('h1')
    titleScreen.innerText = 'Stardew Fishing';
    title.appendChild(titleScreen);
})


const fishingPole = (()=>{
    let poleY = 0;
    const net = document.querySelector('#innerRect');
    const animate = setInterval(() =>{
        poleY += .01;
        net.setAttribute('style', `transform:translateY(${poleY}rem)`)
        if(poleY >= 18.5){
            poleY = 0;
        }
    }, 10)  
    window.onkeyup = function(e) {
        const key = e.keyCode ? e.keyCode : e.which;
        if (key == 40) {
            poleY += .25;
            console.log('up')
        }else if (key == 38) {
            poleY -= .25;
            console.log('down')
        }
    }
})

const fishOnHook = (() => {
    const fish = document.querySelector('#fish');
    let fishPosition = 17.2
    const animate = setInterval(() => {
        fishPosition -= .01;
        fish.setAttribute('style', `transform:translateY(${fishPosition}rem)`)
        if(fishPosition <= 0){
            fishPosition = 17.2;
        }
    }, 20)
})

fishingPole();
goFishing();
fishOnHook();


