const goFishing = (() =>{
    const title = document.querySelector('.titleScreen');
    const titleScreen = document.createElement('p')
    titleScreen.innerText = 'Stardew Fishing';
    title.appendChild(titleScreen);
})


const fishingSlider = (()=>{
    const net = document.querySelector('#innerRect');
    let pos = .01;
    const animate = setInterval(() =>{
        pos += .01;
        net.setAttribute('style', `transform:translateY(${pos}rem)`)
        if(pos >= 18.5){
            pos = 0;
        }
    }, 10)
    
})

fishingSlider();
goFishing();