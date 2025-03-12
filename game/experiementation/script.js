(function(){
    'use strict';
    console.log('reading js');

    const myDiv = document.querySelector('div');
    const addimg = '<img src="images/korilakkuma.png" class="position" alt="Korilakkuma."></img>';
    const button = document.querySelector('button');
    const images = document.querySelector('img');
    const korila = document.querySelector('.position');


    const randomX = (Math.floor(Math.random()*(630-0)+1));
    const randomY = (Math.floor(Math.random()*(630-0)+1));

    let counter = 0;

    // myDiv.innerHTML = '<img src="images/korilakkuma.png" alt="Korilakkuma.">';
    

    button.addEventListener('click', function(){
        korila.style.left = `${(Math.floor(Math.random()*(630-0)+1))}px`;
        korila.style.bottom = `${(Math.floor(Math.random()*(630-0)+1))}px`;
        myDiv.innerHTML += addimg;
        
        // console.log(randomX);
        
    })

    function spawnImg() {
        korila.style.left = `${(Math.floor(Math.random()*(630-0)+1))}px`;
        korila.style.bottom = `${(Math.floor(Math.random()*(630-0)+1))}px`;
        // myDiv.innerHTML += addimg;
      
    }
      
    setInterval(spawnImg, 2000);

    images.addEventListener('click', function(){
        console.log('clicked');
        // images.style.display ='none';
        korila.style.left = `${(Math.floor(Math.random()*(630-0)+1))}px`;
        korila.style.bottom = `${(Math.floor(Math.random()*(630-0)+1))}px`;

        counter = counter + 15;
        console.log(counter);
    })

    // button.addEventListener('click', function(){
    //     korila.style.left = `${randomX}px`;
    //     korila.style.bottom = `${randomY}px`;
    //     // myDiv.innerHTML += addimg;
        
    //     console.log(randomX);
        
    // })

    // button.addEventListener('click' , random);

    // function random(event){
    //     myDiv.innerHTML += rila;

    //     for (let i = 0; i < images.length; i++) {
            

    //         images[i].style.left = `${randomX}`;
    //         images[i].style.bottom = `${randomY}`;
            
    //       }
    // }


    const timer = document.querySelector('.timer');

    let time = 60;
    const countdownTimer = setInterval(function() {
        console.log(time);
        time--;

        timer.innerHTML = '0:' + time;

        if (time < 10){
            timer.innerHTML = '0:0' + time;
        }

        if (time === 0) {
            clearInterval(countdownTimer);
            console.log("Time's up!");
        }
    }, 1000);
    
})();