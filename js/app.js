let fishPosition = 290
let pole = -1
let up = true

const fishingPole = (()=>{
    const net = document.querySelector('#innerRect');
    const animate = setInterval(() =>{
        pole += .2;
        net.setAttribute('style', `transform:translateY(${pole}px)`)
        if(pole >= 336){
            pole = 0;
        }
    }, 50)  

    window.onkeyup = function(e) {
        const key = e.keyCode ? e.keyCode : e.which;
        if (key == 40) {
            pole += 5;
        }else if (key == 38) {
            pole -= 5;
        }
    }
})

const fishOnHook = (() => {
    const fish = document.querySelector('#fish');
    const animate = setInterval(() => {
        console.log(fishPosition)
        fish.setAttribute('style', `transform:translateY(${fishPosition}px)`)
        if(fishPosition === -80 ){
            console.log("im at the top")
            fishPosition +=2
            up = false
        }else if(fishPosition === 290){
            fishPosition -=2
            up = true
        
        }else if(!up){
            fishPosition +=2
        } else if(up){
            fishPosition -= 2
        }
    }, 100)
})
// rgb(100,0,0) - dark red
const fishStats = (() => {
    let r = 100;
    let g = 0;
    let statBar = 390;
    let range = 0
    let holdFor3Seconds = 0
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
        element.setAttribute('height', `${statBar}px`)
        fishStats.setAttribute('style', `background-color: rgb(${r},${g},0)`);
        range = pole - fishPosition;
        if (range >= 46 && range <= 72){
            r -= 1;
            g += 1;
            statBar -= 2.5;  
            holdFor3Seconds += 60;
            if (statBar<=0){
                const title = document.querySelector('.titleScreen');
                const titleScreen = document.createElement('h2')
                titleScreen.innerText = 'Nice Catch!';
                title.appendChild(titleScreen);
                const container = document.querySelector('.gameBoard');
                title.style.visibility = 'visible';
                clearInterval(moveFish);   
                const clearTitle = setTimeout(() =>{
                    
                    container.style.visibility = 'hidden';
                    return
                },800)
            }
        }
        else if (range < 40 || range > 80){
            r = 100;
            g = 0;
            statBar = 390;
            holdFor3Seconds = 0;
        }
    },80)
    
})
const hookedAlert = (() =>{
    const title = document.querySelector('.titleScreen');
    const titleScreen = document.createElement('h1')
    titleScreen.innerText = 'Hit!';
    title.appendChild(titleScreen);
    const clearTitle = setTimeout(() =>{
        title.style.visibility = 'hidden';
        titleScreen.innerText = '';
    },500)
})

fishingPole();
hookedAlert();
fishOnHook();
fishStats();

