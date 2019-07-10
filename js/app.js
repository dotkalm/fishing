const lake = {
    lakeRipple(){
        const container = document.querySelector('.container')
        container.style.display ='none';
        const lakeFront = document.querySelector('.container')
        const gameBoard = document.querySelector('.gameBoard')
        gameBoard.style.display ='block'
        // gameBoard.setAttribute('style', "height: 1000px")
        // gameBoard.setAttribute('style', "background-color: blue")
        gameBoard.appendChild(lakeFront)
        // gameBoard.setAttribute('style', '')
        // lakefront.style.bodyBackground = 'img/fishinghole.svg';
        const lakeSurface = document.querySelector('svg');
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const clippingPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const verticalLines = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
        ellipse.setAttribute('fill','none')
        ellipse.setAttribute('cx','49.333')
        ellipse.setAttribute('cy','70')
        ellipse.setAttribute('rx','43.333')
        ellipse.setAttribute('ry','18')
        lakeSurface.setAttribute('width', '90%')
        lakeSurface.setAttribute('height', '20%')
        lakeSurface.setAttribute('style', `transform:translateY(-32rem)`)
        line.setAttribute('id', 'horizontal')
        line.setAttribute('stroke','#0000FF')
        line.setAttribute('fill','none')
        line.setAttribute('stroke-width','.16rem')
        verticalLines.setAttribute('id', 'vertical');
        verticalLines.setAttribute('stroke','#0000FF')
        verticalLines.setAttribute('stroke-width','.12rem')
        verticalLines.setAttribute('fill','none')
        clippingPath.setAttribute('id','white');
        clippingPath.setAttribute('stroke','none');
        clippingPath.setAttribute('fill', 'url(#SVGID_1_)')
        clippingPath.setAttribute('d','M0,0v100h100V0H0z M49.5,84.5c-23.334,0-42.25-6.548-42.25-14.625S26.166,55.25,49.5,55.25 s42.25,6.548,42.25,14.625S72.834,84.5,49.5,84.5z');
        verticalLines.setAttribute('d', 'M-3.138,3.003c0,8.333-12.019,8.333-12.019,16.665 c0,8.331,12.019,8.331,12.019,16.661c0,8.333-12.019,8.333-12.019,16.667S-3.138,61.33-3.138,69.663 c0,8.335-12.019,8.335-12.019,16.67s12.019,8.335,12.019,16.67h-6.922c0-8.335-12.019-8.335-12.019-16.67s12.019-8.335,12.019-16.67 c0-8.333-12.019-8.333-12.019-16.667s12.019-8.334,12.019-16.667c0-8.33-12.019-8.33-12.019-16.661 c0-8.332,12.019-8.332,12.019-16.665h-6.921c0,8.333-12.019,8.333-12.019,16.665c0,8.331,12.019,8.331,12.019,16.661 c0,8.333-12.019,8.333-12.019,16.667s12.019,8.334,12.019,16.667c0,8.335-12.019,8.335-12.019,16.67s12.019,8.335,12.019,16.67 H3.785c0-8.335-12.019-8.335-12.019-16.67s12.019-8.335,12.019-16.67c0-8.333-12.019-8.333-12.019-16.667S3.785,44.662,3.785,36.329 c0-8.33-12.019-8.33-12.019-16.661c0-8.332,12.019-8.332,12.019-16.665h6.921c0,8.333-12.019,8.333-12.019,16.665 c0,8.331,12.019,8.331,12.019,16.661c0,8.333-12.019,8.333-12.019,16.667s12.019,8.334,12.019,16.667 c0,8.335-12.019,8.335-12.019,16.67s12.019,8.335,12.019,16.67h6.921c0-8.335-12.02-8.335-12.02-16.67s12.02-8.335,12.02-16.67 c0-8.333-12.02-8.333-12.02-16.667s12.02-8.334,12.02-16.667c0-8.33-12.02-8.33-12.02-16.661c0-8.332,12.02-8.332,12.02-16.665 h6.922c0,8.333-12.02,8.333-12.02,16.665c0,8.331,12.02,8.331,12.02,16.661c0,8.333-12.02,8.333-12.02,16.667 s12.02,8.334,12.02,16.667c0,8.335-12.02,8.335-12.02,16.67s12.02,8.335,12.02,16.67h6.922c0-8.335-12.02-8.335-12.02-16.67 s12.02-8.335,12.02-16.67c0-8.333-12.02-8.333-12.02-16.667s12.02-8.334,12.02-16.667c0-8.33-12.02-8.33-12.02-16.661 c0-8.332,12.02-8.332,12.02-16.665h6.921c0,8.333-12.019,8.333-12.019,16.665c0,8.331,12.019,8.331,12.019,16.661 c0,8.333-12.019,8.333-12.019,16.667s12.019,8.334,12.019,16.667c0,8.335-12.019,8.335-12.019,16.67s12.019,8.335,12.019,16.67 h6.921c0-8.335-12.019-8.335-12.019-16.67s12.019-8.335,12.019-16.67c0-8.333-12.019-8.333-12.019-16.667 s12.019-8.334,12.019-16.667c0-8.33-12.019-8.33-12.019-16.661c0-8.332,12.019-8.332,12.019-16.665h6.922 c0,8.333-12.019,8.333-12.019,16.665c0,8.331,12.019,8.331,12.019,16.661c0,8.333-12.019,8.333-12.019,16.667 s12.019,8.334,12.019,16.667c0,8.335-12.019,8.335-12.019,16.67s12.019,8.335,12.019,16.67h6.923c0-8.335-12.02-8.335-12.02-16.67 s12.02-8.335,12.02-16.67c0-8.333-12.02-8.333-12.02-16.667s12.02-8.334,12.02-16.667c0-8.33-12.02-8.33-12.02-16.661 c0-8.332,12.02-8.332,12.02-16.665h6.919c0,8.333-12.019,8.333-12.019,16.665c0,8.331,12.019,8.331,12.019,16.661 c0,8.333-12.019,8.333-12.019,16.667s12.019,8.334,12.019,16.667c0,8.335-12.019,8.335-12.019,16.67s12.019,8.335,12.019,16.67 h6.923c0-8.335-12.019-8.335-12.019-16.67s12.019-8.335,12.019-16.67c0-8.333-12.019-8.333-12.019-16.667 s12.019-8.334,12.019-16.667c0-8.33-12.019-8.33-12.019-16.661c0-8.332,12.019-8.332,12.019-16.665h6.922 c0,8.333-12.02,8.333-12.02,16.665c0,8.331,12.02,8.331,12.02,16.661c0,8.333-12.02,8.333-12.02,16.667s12.02,8.334,12.02,16.667 c0,8.335-12.02,8.335-12.02,16.67s12.02,8.335,12.02,16.67h6.922c0-8.335-12.019-8.335-12.019-16.67s12.019-8.335,12.019-16.67 c0-8.333-12.019-8.333-12.019-16.667s12.019-8.334,12.019-16.667c0-8.33-12.019-8.33-12.019-16.661 c0-8.332,12.019-8.332,12.019-16.665h6.921c0,8.333-12.02,8.333-12.02,16.665c0,8.331,12.02,8.331,12.02,16.661 c0,8.333-12.02,8.333-12.02,16.667s12.02,8.334,12.02,16.667c0,8.335-12.02,8.335-12.02,16.67s12.02,8.335,12.02,16.67h6.923 c0-8.335-12.02-8.335-12.02-16.67s12.02-8.335,12.02-16.67c0-8.333-12.02-8.333-12.02-16.667s12.02-8.334,12.02-16.667 c0-8.33-12.02-8.33-12.02-16.661c0-8.332,12.02-8.332,12.02-16.665h6.921c0,8.333-12.019,8.333-12.019,16.665 c0,8.331,12.019,8.331,12.019,16.661c0,8.333-12.019,8.333-12.019,16.667s12.019,8.334,12.019,16.667 c0,8.335-12.019,8.335-12.019,16.67s12.019,8.335,12.019,16.67h6.923c0-8.335-12.02-8.335-12.02-16.67s12.02-8.335,12.02-16.67 c0-8.333-12.02-8.333-12.02-16.667s12.02-8.334,12.02-16.667c0-8.33-12.02-8.33-12.02-16.661c0-8.332,12.02-8.332,12.02-16.665h6.92 c0,8.333-12.019,8.333-12.019,16.665c0,8.331,12.019,8.331,12.019,16.661c0,8.333-12.019,8.333-12.019,16.667 s12.019,8.334,12.019,16.667c0,8.335-12.019,8.335-12.019,16.67s12.019,8.335,12.019,16.67h6.923c0-8.335-12.019-8.335-12.019-16.67 s12.019-8.335,12.019-16.67c0-8.333-12.019-8.333-12.019-16.667s12.019-8.334,12.019-16.667c0-8.33-12.019-8.33-12.019-16.661 c0-8.332,12.019-8.332,12.019-16.665')
        line.setAttribute('d','M-1,0.25c8.613,0,8.613,8,17.225,8 c8.61,0,8.61-8,17.221-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8v3.226 c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8 c-8.612,0-8.612-8-17.225-8v3.225c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8 s8.614,8,17.229,8s8.615-8,17.229-8v3.227c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8 c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8v3.226c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8 c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8v3.226c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8 s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8v3.226c8.613,0,8.613,8,17.225,8 c8.61,0,8.61-8,17.221-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8v3.227 c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8 c-8.612,0-8.612-8-17.225-8v3.226c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8 s8.614,8,17.229,8s8.615-8,17.229-8v3.226c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8 c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8v3.225c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8 c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8v3.227c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8 s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8v3.225c8.613,0,8.613,8,17.225,8 c8.61,0,8.61-8,17.221-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8v3.227 c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8 c-8.612,0-8.612-8-17.225-8v3.226c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8 s8.614,8,17.229,8s8.615-8,17.229-8v3.226c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8 c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8l0,3.226c8.612,0,8.612,8,17.225,8c8.61,0,8.61-8,17.221-8 c8.614,0,8.614,8,17.227,8s8.613-8,17.227-8c8.615,0,8.615,8,17.23,8s8.615-8,17.229-8v3.227c-8.614,0-8.614,8-17.229,8 s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8l0,3.226 c8.612,0,8.612,8,17.225,8c8.61,0,8.61-8,17.22-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8 v3.227c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8 c-8.612,0-8.612-8-17.225-8v3.225c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8 s8.614,8,17.229,8s8.615-8,17.229-8v3.227c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8 c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8v3.226c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8 c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8v3.226c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8 s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8l0,3.226c8.612,0,8.612,8,17.225,8 c8.61,0,8.61-8,17.221-8c8.614,0,8.614,8,17.227,8s8.613-8,17.227-8c8.615,0,8.615,8,17.23,8s8.615-8,17.229-8v3.227 c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8 c-8.612,0-8.612-8-17.225-8l0,3.226c8.612,0,8.612,8,17.225,8c8.61,0,8.61-8,17.221-8c8.614,0,8.614,8,17.227,8s8.613-8,17.227-8 c8.615,0,8.615,8,17.23,8c8.614,0,8.614-8,17.229-8l-0.001,3.227c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8s-8.614,8-17.228,8 s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8v3.225c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8 c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8v3.226c-8.614,0-8.614,8-17.229,8s-8.615-8-17.229-8 s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8l103.359,3.228c-8.614,0-8.614,8-17.229,8 s-8.615-8-17.229-8s-8.614,8-17.228,8s-8.613-8-17.227-8c-8.61,0-8.61,8-17.221,8c-8.612,0-8.612-8-17.225-8v3.225 c8.613,0,8.613,8,17.225,8c8.61,0,8.61-8,17.221-8c8.613,0,8.613,8,17.227,8s8.613-8,17.228-8s8.614,8,17.229,8s8.615-8,17.229-8')
        
        lakeSurface.appendChild(verticalLines)
        lakeSurface.appendChild(line)
        // lakeSurface.appendChild(clippingPath)
        lakeSurface.appendChild(ellipse)
        
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



