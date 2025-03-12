(function(){
    'use strict';
    console.log('reading js');

    
    const title = document.querySelector('#title-screen');
    const startButton = document.querySelector('#start');
    const sidebar = document.querySelector('#sidebar');
    const background = document.querySelector('body');
    const beginRound = document.querySelector('#play-game');
    const beginButton = document.querySelector('#game-starts');

    const icons = document.querySelector('#icons');

    let counter = 0;
    const score = document.querySelector('.score');

    startButton.addEventListener('click', function(){
        title.style.transition = 'opacity 1s';
        title.style.opacity = 0;

        setTimeout(function(){
            title.style.display = 'none';

            rilaSide();

            setTimeout(function(){
                sidebar.style.width = '25vw';
            }, 10)

            beginRound.style.display = 'flex';
           

        }, 1000)
    });


    beginButton.addEventListener('click', function(){
        beginRound.style.display = 'none';
        icons.style.display = 'block';

        const korila = document.querySelector('.korila');
        const strawberry = document.querySelector('.straw');
        const bee = document.querySelector('.bee');
        const chai = document.querySelector('.chai');


        function spawn(){
            setInterval(spawnKorila, 2000);
            setInterval(spawnStrawberry, 1500);
            setInterval(spawnBee, 2500);
            setInterval(spawnChai, 2500);


            // if (counter > 70){
            //     setInterval(spawnKorila, 3000);
            //     setInterval(spawnStrawberry, 2500);
            //     setInterval(spawnBee, 3500);
            //     setInterval(spawnChai, 3500);
            //     console.log('more than 70');
            // }
        }
        spawn();

        function spawnKorila() {
            korila.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            korila.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        }
    
        function spawnStrawberry(){
            strawberry.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            strawberry.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        }
    
        function spawnBee(){
            bee.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            bee.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        }
    
        function spawnChai (){
            chai.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            chai.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        }

        korila.addEventListener('click', function(){
            console.log('korila clicked');
           
            korila.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            korila.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
            counter = counter + 10;
            console.log(counter);
            score.innerHTML = `${counter}`;
        })
    
        strawberry.addEventListener('click', function(){
            console.log('strawberry clicked');
            strawberry.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            strawberry.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
            counter = counter + 15;
            console.log(counter);
            score.innerHTML = `${counter}`;
        })
    
        bee.addEventListener('click', function(){
            console.log('bee clicked');
            bee.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            bee.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
            counter = counter - 15;
            console.log(counter);
            score.innerHTML = `${counter}`;
        })
    
        chai.addEventListener('click', function(){
            console.log('chairoigokuma clicked');
            chai.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            chai.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
            counter = counter + 20;
            console.log(counter);
            score.innerHTML = `${counter}`;
        })

    })


    function rilaSide (){
        sidebar.style.display = 'flex';
        sidebar.style.backgroundColor = '#A88B7E'

        background.style.backgroundImage = 'url(images/rila-bg.jpg)';
    }
    
})();