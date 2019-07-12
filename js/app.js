const element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
element.setAttribute('fill', '#ffffff');
element.setAttribute('width', '100px');
element.setAttribute('height', `200px`);

const lake = {
    fishInLake: false,
    goFishing(){
            gameObject.gameOver=false
                    
        if (!this.fishInLake){
            document.querySelector('.wavesClass').addEventListener('click', e =>{ 
                if (e.target.id === 'fishInWater'){
                    gameObject.gameInit();
                }
            })
        }
    },
    moveWaves(){
        const waves = document.querySelectorAll('.lakeWaves');
            waves.forEach((item, index)=>{
                if (index % 2 === 0){
                    waves[index].setAttribute('id','even')
                } else {
                    waves[index].setAttribute('id','odd')
                }
            });
    
        
    },
    fishSwimming(){
        const waves = document.querySelector('svg');
        const fishy = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        fishy.setAttribute('id','fishInWater')
        fishy.setAttribute('fill','#ff4f7d');
        fishy.setAttribute('d','M183.438,126.222c-6.108,0-11.441,3.718-14.41,6.899l-5.928-4.483c-0.823-0.624-2.053,0.041-1.843,0.995 l1.642,7.451l-1.642,7.451c-0.211,0.955,1.019,1.618,1.842,0.995l5.929-4.484c2.968,3.181,8.302,6.898,14.41,6.898 c9.33,0,16.896-8.688,16.896-10.861S192.768,126.222,183.438,126.222z M189.373,138.712c-0.899,0-1.629-0.729-1.629-1.629 c0-0.9,0.729-1.629,1.629-1.629c0.9,0,1.629,0.729,1.629,1.629C191.001,137.983,190.272,138.712,189.373,138.712z')
        waves.insertBefore(fishy, waves.children[18])
        this.fishInLake = !this.fishInLake
    },
    lakeRipple(){
        gameObject.playAudio(gameObject.sounds.throw)
        const wavesClass = document.querySelector('.wavesClass');
        wavesClass.style.display = 'flex';
        wavesClass.setAttribute('style','transform: translateY(-29rem);')
        const topSvg = document.querySelector('svg');
        topSvg.style.display = 'inline';
        const container = document.querySelector('.container')
        container.style.display ='none';
        const lakeFront = document.querySelector('.container')
        const gameBoard = document.querySelector('.gameBoard')
        gameBoard.style.display ='inline'
        this.moveWaves();
        this.goFishing();
        if(!this.fishInLake){
            this.fishSwimming();
        };
        gameObject.r = 100;
        gameObject.g = 0;
        gameObject.statBar = 380;
        gameObject.seconds = 0;
        gameObject.range = 0;
        gameObject.fishPosition = 290;
        gameObject.pole = 3;
    },
    
    
}
const gameObject = {
    r: 100,
    g: 0,
    statBar: 380,
    range: 0,
    seconds: 0,
    fishPosition: 290,
    pole: 3,
    up: true,
    gameOver: false,
    fishExist: false,
    statBarExists: false,
    range: 0,
    sounds: {
        reel: 'reel.mp3',
        splash: 'splash.mp3',
        throw: 'throw.mp3',
    },
    playAudio(sound){
        const context = new AudioContext();        
        let reelBigFish;
        window.fetch(sound)
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
          .then(audioBuffer => {
            reelBigFish = audioBuffer;
          });
          window.onkeyup = () => {
            play(reelBigFish);
            gameObject.pole -= 13;
        }
          window.onclick = () => {
            play(reelBigFish);
            gameObject.pole -= 13;
          }
      
          function play(audioBuffer) {
          const source = context.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(context.destination);
          source.start();
        }
  
  
      },
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
    gameOverSwitch(msg){
        this.playAudio(this.sounds.splash);
        const title = document.querySelector('.titleScreen');
        const titleScreen = document.createElement('h3')
        titleScreen.innerText = msg;
        title.appendChild(titleScreen);
        const container = document.querySelector('.gameBoard');
        this.gameOver = true;
        
        title.style.visibility = 'visible'; 
        const clearTitle = setTimeout(() =>{  
            titleScreen.style.display='none';
            container.style.display = 'none';
            lake.lakeRipple();
        },1000)

    },
    fishStatbar(){
        
        const fishStats = document.querySelector('.fishStatsBox');
        const statsBox = document.querySelectorAll('svg');
        statsBox[1].setAttribute('width', '100%')
        fishStats.appendChild(statsBox[1]);
        if (!gameObject.statBarExists){
            statsBox[1].appendChild(element);
            gameObject.statBarExists = true;
        }
        const moveFish = setInterval(() => {
            element.setAttribute('height', `${this.statBar}px`)
            fishStats.setAttribute('style', `background-color: rgb(${this.r},${this.g},0)`);
            this.range = this.pole - this.fishPosition;
            if (this.range >= 46 && this.range <= 72){
                this.r -= 1;
                this.g += 1;
                this.statBar -= 2.5;  
                this.seconds += .2;
                if (this.statBar<=0){
                    this.gameOverSwitch('Nice Catch!')  
                    clearInterval(moveFish)
                }
            }
            else if (this.range < 40 || this.range > 80 ){
                if (this.seconds > 0 && this.statBar < 390){
                    this.r += 1;
                    this.g -= 1
                    this.statBar += 2
                } else if (this.seconds > 2 && this.statBar >= 389){
                    this.gameOverSwitch('big1 got away!')
                    clearInterval(moveFish)
                }
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
        },1000)
    },
    gameInit(){
        const container = document.querySelector('.container')
        container.style.display = 'block';
        const topSvg = document.querySelector('svg');
        topSvg.style.display = 'none';
        const fish = document.querySelector('#fish')
        const rect = document.querySelector('.rect')
        const innerRect = document.querySelector('#innerRect')
        const fishIcon = document.createElement('img')
        fishIcon.setAttribute('src', 'img/fish-solid.svg')
        innerRect.setAttribute('style', 'opactiy: 1')
        rect.setAttribute('style', 'background-color: whitesmoke')
        this.fishingPole();
        this.fishOnHook();
        this.fishStatbar();
        this.playAudio(this.sounds.reel)
        if (!this.fishExist){
            fish.appendChild(fishIcon);
            this.fishExist = !this.fishExist
        }
            
    },
 
}
lake.lakeRipple();



