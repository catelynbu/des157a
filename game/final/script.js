(function(){
    'use strict';
    console.log('reading js');

    
    const title = document.querySelector('#title-screen');
    const startButton = document.querySelector('#start');
    const sidebar = document.querySelector('#sidebar');
    const background = document.querySelector('body');

    startButton.addEventListener('click', function(){
        title.style.transition = 'opacity 1s';
        title.style.opacity = 0;

        setTimeout(function(){
            title.style.display = 'none';

            rilaSide();

            setTimeout(function(){
                sidebar.style.width = '25vw';
            }, 10)

            

        }, 1000)
    });



    function rilaSide (){
        sidebar.style.display = 'flex';
        sidebar.style.backgroundColor = '#A88B7E'

        background.style.backgroundImage = 'url(images/rila-bg.jpg)';
    }
    
})();