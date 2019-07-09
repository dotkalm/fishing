let fishPosition = 290

const fishingPole = (()=>{
    let poleY = -1;
    const net = document.querySelector('#innerRect');
    const animate = setInterval(() =>{
        poleY += .2;
        net.setAttribute('style', `transform:translateY(${poleY}px)`)
        if(poleY >= 336){
            poleY = 0;
        }
    }, 10)  

    window.onkeyup = function(e) {
        const key = e.keyCode ? e.keyCode : e.which;
        if (key == 40) {
            poleY += 5;
        }else if (key == 38) {
            poleY -= 5;
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
{/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100px" height="2500px" viewBox="0 0 100 2500">
<rect fill="#ffffff" width="100" height="2000"/>
</svg> */}
const fishStats = (() => {
    const fishStats = document.querySelector('.fishStatsBox');
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const statsBox = document.querySelector('svg');
    element.setAttribute('fill', '#ffffff')
    element.setAttribute('width', '100px')
    element.setAttribute('height', `200px`)
    statsBox.setAttribute('width', '100%')
    fishStats.appendChild(statsBox);
    statsBox.appendChild(element);
    const moveFish = setInterval(() => {
        element.setAttribute('height', `${fishPosition}px`)
    }, 30)
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
fishStats();

