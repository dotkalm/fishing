const lake = {
    lakeRipple(){
        const topSvg = document.querySelector('svg');
        topSvg.style.display = 'inline';
        const container = document.querySelector('.container')
        container.style.display ='none';
        const lakeFront = document.querySelector('.container')
        const gameBoard = document.querySelector('.gameBoard')
        gameBoard.style.display ='block'
        //<object data="img/waves.svg" type="image/svg+xml"
        //id="alphasvg" width="100%" height="400%"></object>
        const wavesNodeList = document.querySelector('#rippleWaves')
        // wavesNodeList.setAttribute('style', 'transform: rotateX(-44deg) rotate3d(0, -48, 31, 180deg)')
        // const svgDoc = wavesNodeList.contentDocument;
        // const test = svgDoc.querySelector('.one')
        // wavesNodeList.addEventListener('load', ()=> {
        //     const nodes = wavesNodeList.contentDocument
        //     console.log(nodes)
        // })
        // console.log(wavesNodeList.data)
        
    },
    moveWaves(){
        

        // wavesNodeList.forEach((item, index)=>{
        //     if (index % 2 === 0){
        //         wavesNodeList[index].setAttribute('style','transform:translatex(5rem)')
        //     } else {
        //         wavesNodeList[index].setAttribute('style','transform:translatex(-5rem)')
        //     }
        // });
    }
    
}
const gameObject = {
    fishPosition: 290,
    pole: 3,
    up: true,
    hide: false,
    gameOver: false,
    
    fishingPole(){
        const net = document.querySelector('#innerRect');
        const animate = setInterval(() =>{
            this.pole += .4;
            net.setAttribute('style', `transform:translateY(${this.pole}px)`)
            if(this.pole >= 336){
                this.pole -= 1;
            } else if (this.pole < 0){
                this.pole = 0
            } else if (this.gameOver){
                clearInterval(animate);
            }
        }, 10)  
        window.onclick = function(e) {
            gameObject.pole -= 13;
            }
        window.onkeyup = function(e) {
            gameObject.pole -= 13;
        }
    },
    fishOnHook(){
        const fish = document.querySelector('#fish');
        const animate = setInterval(() => {
            fish.setAttribute('style', `transform:translateY(${this.fishPosition}px)`)
            if(this.fishPosition === -74 && !this.gameOver){
                this.fishPosition +=2
                this.up = false
            }else if(this.fishPosition === 290 && !this.gameOver){
                this.fishPosition -=2
                this.up = true
            }else if(!this.up && !this.gameOver){
                this.fishPosition +=2
            } else if(this.up && !this.gameOver){
                this.fishPosition -= 2
            } else if (this.gameOver){
                clearInterval(animate);
                return
            }
        }, 75)
    },
    fishStats(){
        let r = 100;
        let g = 0;
        let statBar = 390;
        let range = 0
        let holdFor3Seconds = 0
        const fishStats = document.querySelector('.fishStatsBox');
        const element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const statsBox = document.querySelectorAll('svg');
        element.setAttribute('fill', '#ffffff')
        element.setAttribute('width', '100px')
        element.setAttribute('height', `200px`)
        statsBox[1].setAttribute('width', '100%')
        
        fishStats.appendChild(statsBox[1]);
        statsBox[1].appendChild(element);
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
                    this.gameOver = true;
                    clearInterval(moveFish);  
                    title.style.visibility = 'visible'; 
                    const clearTitle = setTimeout(() =>{  
                        titleScreen.style.display='none';
                        container.style.display = 'none';
                        this.hide = !this.hide
                        lake.lakeRipple();
                    },1000)
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
        const topSvg = document.querySelector('svg');
        topSvg.style.display = 'none';
        this.fishingPole();
        this.hookedAlert();
        this.fishOnHook();
        this.fishStats();
        const fish = document.querySelector('#fish')
        const lake = document.querySelector('.lake')
        const rect = document.querySelector('.rect')
        // const lakeFront = document.querySelector('.lakeFront')
        const innerRect = document.querySelector('#innerRect')
        const fishIcon = document.createElement('img')
        fishIcon.setAttribute('src', 'img/fish-solid.svg')
        innerRect.setAttribute('style', 'opactiy: 1')
        rect.setAttribute('style', 'background-color: whitesmoke')
        // lakeFrontstyle.display = 'none'
        fish.appendChild(fishIcon);
    },
    hideContainer(){
        
        const contain = document.querySelector('.container')
        if (this.hide){
            this.hide = !this.hide
            contain.style.display = 'none';
        } else {
            this.hide = !this.hide
            contain.style.display = 'block';
        }
        
    }
}

gameObject.gameInit();


//transform: rotateX(-44deg) rotate3d(0, -48, 31, 180deg)
//for svg waves
