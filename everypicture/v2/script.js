(function(){
    'use strict'
    console.log('reading js');

    const pic1 = document.querySelector('#polaroid1');
    const pic2 = document.querySelector('.polaroid2');
    const pic3 = document.querySelector('.polaroid3');


    const noblack = document.querySelector('.no-black');
    const black = document.querySelector('.black');

    const fill = document.querySelector('.fill');

    const bghide = document.querySelector('#cover');

    //youre gonna have to make this a class and loop it somehow..
    const close = document.querySelector('button');
    const restart = document.querySelector('#restart');



    pic1.addEventListener('mouseover', function(event){
        event.preventDefault();

        pic1.style.border= '3px solid red';

        pic1.className = 'shake';
        black.style.opacity = '0';
        black.style.width = '350px';
        fill.style.width = '350px';


        //if the black polaroid is gone then cover the bg and bring up pop-up
        // do we need the if statement?
        if( black.style.opacity = '0'){
            console.log('i think we are onto something');
            bghide.style.opacity = '1';
    
            //eventually the polaroid should stop shaking

            const caption1 = document.querySelector('#caption1');

            caption1.style.display = 'flex';


        }

    })

    pic1.addEventListener('mouseout', function(event){
        event.preventDefault();

        pic1.style.border= '3px solid blue';

        pic1.className = 'no-shake';
        
    })


    close.addEventListener('click', function(event){
        event.preventDefault();

        console.log('im begging you nicely');

        //get rid of the cover, change back the size, get rid of pop-up
        black.style.width = '250px';
        fill.style.width = '250px';
        caption1.style.display = 'none';
        bghide.style.opacity = '0';

    })
    
    restart.addEventListener('click', function(event){
        event.preventDefault();

        console.log('this should reset all the values! please..');

        black.style.width = '250px';
        fill.style.width = '250px';
        caption1.style.display = 'none';
        bghide.style.opacity = '0';
        black.style.opacity = '1';

    })




})();