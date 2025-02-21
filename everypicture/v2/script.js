(function(){
    'use strict'
    console.log('reading js');

    const pic1 = document.querySelector('#polaroid1');
    const pic2 = document.querySelector('#polaroid2');
    const pic3 = document.querySelector('#polaroid3')

    const black = document.querySelector('.black')
    const fill = document.querySelector('.fill');

    let counter = 0;

    pic1.addEventListener('mouseover', function(event){
        event.preventDefault();
        // pic1.style.border= '3px solid red';
        black.style.opacity = '0';
        black.style.width = '350px';
        fill.style.width = '350px';

        counter = 1;
        console.log(counter);
    })

    pic1.addEventListener('mouseout', function(event){
        event.preventDefault();
        // black.style.animationPlayState = 'paused';
    })

    if(counter = 1){
        pic1.style.border= '3px solid red';
    }

    console.log(`${counter}`)
})();