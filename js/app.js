// make game object

const gameObject = {
    fishPosition: 290,
    pole: 3,
    up: true,
    
    fishingPole(){
        const net = document.querySelector('#innerRect');
        const animate = setInterval(() =>{
            this.pole += .3;
            net.setAttribute('style', `transform:translateY(${this.pole}px)`)
            if(this.pole >= 336){
                this.pole = 0;
            }
            if (this.pole < 0){
                this.pole = 0
            }
        }, 10)  
        window.onclick = function(e) {
            gameObject.pole -= 10;
            }
        window.onkeyup = function(e) {
            gameObject.pole -= 10;
        }
    },
    fishOnHook(){
        const fish = document.querySelector('#fish');
        const animate = setInterval(() => {
            fish.setAttribute('style', `transform:translateY(${this.fishPosition}px)`)
            if(this.fishPosition === -74 ){
                this.fishPosition +=2
                this.up = false
            }else if(this.fishPosition === 290){
                this.fishPosition -=2
                this.up = true
            }else if(!this.up){
                this.fishPosition +=2
            } else if(this.up){
                this.fishPosition -= 2
            }
        }, 100)
    },
    fishStats(){
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
            range = this.pole - this.fishPosition;
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
                    
                    clearInterval(moveFish);   
                    const clearTitle = setTimeout(() =>{  
                        title.style.visibility = 'visible';
                        container.style.visibility = 'hidden';
                        return
                    },100)
                }
            }
            else if (range < 40 || range > 80){
                r = 100;
                g = 0;
                statBar = 390;
                holdFor3Seconds = 0;
            }
        },40)
    },
    hookedAlert(){
        const title = document.querySelector('.titleScreen');
        const titleScreen = document.createElement('h1')
        titleScreen.innerText = 'Hit!';
        title.appendChild(titleScreen);
        const clearTitle = setTimeout(() =>{
            title.style.visibility = 'hidden';
            titleScreen.innerText = '';
        },500)
    },
    gameInit(){
        this.fishingPole();
        this.hookedAlert();
        this.fishOnHook();
        this.fishStats();
    }
}


gameObject.gameInit();
