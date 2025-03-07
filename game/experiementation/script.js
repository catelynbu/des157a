(function(){
    'use strict';
    console.log('reading js');

    const myDiv = document.querySelector('div');
    const addimg = '<img src="images/korilakkuma.png" class="position" alt="Korilakkuma."></img>';
    const button = document.querySelector('button');
    const images = document.querySelectorAll('img');
    const korila = document.querySelector('.position');


    const randomX = (Math.floor(Math.random()*(500-0)+1));
    const randomY = (Math.floor(Math.random()*(500-0)+1));

    // myDiv.innerHTML = '<img src="images/korilakkuma.png" alt="Korilakkuma.">';
    

    button.addEventListener('click', function(){
        korila.style.left = `${(Math.floor(Math.random()*(500-0)+1))}px`;
        korila.style.bottom = `${(Math.floor(Math.random()*(500-0)+1))}px`;
        // myDiv.innerHTML += addimg;
        
        console.log(randomX);
        
    })

    // button.addEventListener('click' , random);

    // function random(event){
    //     myDiv.innerHTML += rila;

    //     for (let i = 0; i < images.length; i++) {
            

    //         images[i].style.left = `${randomX}`;
    //         images[i].style.bottom = `${randomY}`;
            
    //       }
    // }
    
})();