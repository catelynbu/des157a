(function(){
    'use strict';
    console.log('reading js');

    
    const title = document.querySelector('#title-screen');
    const startButton = document.querySelector('#start');
    const rilaSidebar = document.querySelector('#rila-sidebar');
    const korilaSidebar = document.querySelector('#korila-sidebar')
    const background = document.querySelector('body');
    const beginRound = document.querySelector('#play-game');
    const beginButton = document.querySelector('#game-starts');
    const nextRound = document.querySelector('#next-game');
    const nextButton = document.querySelector('#next-player');


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
                rilaSidebar.style.width = '25vw';
            }, 10)

            beginRound.style.display = 'flex';

            startGame();
           

        }, 1000)
    });

    function startGame(){
        beginButton.addEventListener('click', function(){
            beginRound.style.display = 'none';
            icons.style.display = 'block';
    
            const korila = document.querySelector('.korila');
            const strawberry = document.querySelector('.straw');
            const bee = document.querySelector('.bee');
            const chai = document.querySelector('.chai');
            const rila = document.querySelector('.rila');
            const orange = document.querySelector('.orange');
    
    
            function spawn(){
                setInterval(spawnKorila, 2000);
                setInterval(spawnStrawberry, 1500);
                setInterval(spawnBee, 2500);
                setInterval(spawnChai, 2500);
                setInterval(spawnRila, 2000);
                setInterval(spawnOrange, 1500);
                
    
    
                // if (counter > 70){
                //     setInterval(spawnKorila, 3000);
                //     setInterval(spawnStrawberry, 2500);
                //     setInterval(spawnBee, 3500);
                //     setInterval(spawnChai, 3500);
                //     console.log('more than 70');
                // }
            }
            spawn();
    
            function spawnRila() {
                rila.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                rila.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            }
        
            function spawnOrange(){
                orange.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                orange.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            }
    
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
    
            rila.addEventListener('click', function(){
                console.log('rila clicked');
               
                rila.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                rila.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        
                counter = counter + 10;
                console.log(counter);
                score.innerHTML = `${counter}`;
            })
        
            orange.addEventListener('click', function(){
                console.log('orange clicked');
                orange.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                orange.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        
                counter = counter + 15;
                console.log(counter);
                score.innerHTML = `${counter}`;
            })
    
    
            const timer = document.querySelector('.timer');
    
            let time = 30;
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
    
                    icons.style.display = 'none';
                    
                    nextRound.style.display = 'flex';
                }
            }, 1000);
    
        })
    
        
    }

    nextButton.addEventListener('click', function(){
        setTimeout(function(){
            korilaSide();

            setTimeout(function(){
                korilaSidebar.style.width = '25vw';
                background.style.backgroundImage = 'url(images/korila-bg.jpg)';
                nextRound.style.display = 'none';
                beginRound.style.display = 'flex';

                startGame();
            }, 350)

        

        }, 1000)


    })
    


    function rilaSide (){
        rilaSidebar.style.display = 'flex';
        rilaSidebar.style.backgroundColor = '#A88B7E'

        background.style.backgroundImage = 'url(images/rila-bg.jpg)';
    }

    function korilaSide(){

        rilaSidebar.style.width = '0vw';

        setTimeout(function(){
            rilaSidebar.style.display = 'none';
            document.querySelector('main').style.flexDirection = 'row-reverse';
            korilaSidebar.style.display = 'flex';
            korilaSidebar.style.backgroundColor = '#C39A9A'
        }, 300)
    }
    
})();