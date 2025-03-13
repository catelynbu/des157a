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

    const seeResults = document.querySelector('#see-results');
    const resultsButton = document.querySelector('#see-results');


    const icons = document.querySelector('#icons');
    const icons2 = document.querySelector('#icons2');
    const korila = document.querySelector('.korila');
    const strawberry = document.querySelector('.straw');
    const bee = document.querySelectorAll('.bee');
    const chai = document.querySelectorAll('.chai');
    const rila = document.querySelector('.rila');
    const orange = document.querySelector('.orange');

    const collectSound = new Audio('audio/collectsound.mp3')


    const timer = document.querySelectorAll('.timer');
    let countdownInterval;
    let time = 10;

     // Start the first round timer
     function startTimer() {
        time = 30;  // Reset time
        countdownInterval = setInterval(function() {
            time--;
            updateTimerDisplay(time);

            if (time === 0) {
                clearInterval(countdownInterval);
                console.log("Round 1 Time's up!");
                icons.style.display = 'none';
                icons2.style.display = 'none';
                
                
            }
        }, 1000);
    }

    // Update the timer display
    function updateTimerDisplay(time) {
        for(let i=0; i<timer.length; i++){
             timer[i].innerHTML = time < 10 ? `0:0${time}` : `0:${time}`;
        }
       
    }

    let counter1 = 0;
    let counter2 = 0;
    const score = document.querySelector('.score');
    const score2 = document.querySelector('.score2');

    startButton.addEventListener('click', function(){
        const bgmusic = new Audio('audio/bgmusic.mp3');
        bgmusic.play();
        title.style.transition = 'opacity 1s';
        title.style.opacity = 0;

        setTimeout(function(){
            title.style.display = 'none';

            rilaSide();

            setTimeout(function(){
                rilaSidebar.style.width = '25vw';
            }, 10)

            beginRound.style.display = 'flex';

            startFirstRound();
           

        }, 1000)
    });


    function startFirstRound(){
        beginButton.addEventListener('click', function(){
            beginRound.style.display = 'none';
            icons.style.display = 'block';

            
            setInterval(spawnRila, 2000);
            setInterval(spawnOrange, 1500);
            setInterval(spawnBee, 2500);
            setInterval(spawnChai, 2500);

            startTimer();
            

            //change this value to howver long the timer is
            setTimeout (function(){
                nextRound.style.display = 'flex';
            }, 30000)

           
            
            for (let i=0; i<bee.length; i++){
                bee[i].addEventListener('click', function(){
                    console.log('bee clicked');
                    bee[i].style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                    bee[i].style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            
                    counter1 = counter1 - 15;
                    console.log(counter1);
                    score.innerHTML = `${counter1}`;

                    
                })
            }
            
        
            for (let i=0; i<chai.length; i++){
                chai[i].addEventListener('click', function(){
                    console.log('chairoigokuma clicked');
                    chai[i].style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                    chai[i].style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            
                    counter1 = counter1 + 20;
                    console.log(counter1);
                    score.innerHTML = `${counter1}`;

                    collectSound.play();
                })
            }
    
            rila.addEventListener('click', function(){
                console.log('rila clicked');
                
                rila.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                rila.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        
                counter1 = counter1 + 10;
                console.log(counter1);
                score.innerHTML = `${counter1}`;

                collectSound.play();
            })
        
            orange.addEventListener('click', function(){
                console.log('orange clicked');
                orange.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                orange.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        
                counter1 = counter1 + 15;
                console.log(counter1);
                score.innerHTML = `${counter1}`;

                collectSound.play();
            })
           
        })
    }

    nextButton.addEventListener('click', function(){
        setTimeout(function(){
            korilaSide();

            setTimeout(function(){
                korilaSidebar.style.width = '25vw';
                background.style.backgroundImage = 'url(images/korila-bg.jpg)';
                nextRound.style.display = 'none';
                // beginRound.style.display = 'flex';
                
            }, 350)

        }, 1000)

        setTimeout(function(){
            icons2.style.display = 'block';
            setInterval(spawnKorila, 2000);
            setInterval(spawnStrawberry, 1500);
            setInterval(spawnBee, 2500);
            setInterval(spawnChai, 2500);

            clearInterval(countdownInterval);  // Clear previous timer interval
            startTimer();

            for (let i=0; i<bee.length; i++){
                bee[i].addEventListener('click', function(){
                    console.log('bee clicked');
                    bee[i].style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                    bee[i].style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            
                    counter2 = counter2 - 15;
                    console.log(counter2);
                    score2.innerHTML = `${counter2}`;

                    
                })
            }
            
        
            for (let i=0; i<chai.length; i++){
                chai[i].addEventListener('click', function(){
                    console.log('chairoigokuma clicked');
                    chai[i].style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                    chai[i].style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            
                    counter2 = counter2 + 20;
                    console.log(counter2);
                    score2.innerHTML = `${counter2}`;

                    collectSound.play();
                })
            }

           

            korila.addEventListener('click', function(){
                console.log('korila clicked');
               
                korila.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                korila.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        
                counter2 = counter2 + 10;
                console.log(counter2);
                score2.innerHTML = `${counter2}`;

                collectSound.play();
            })
        
            strawberry.addEventListener('click', function(){
                console.log('strawberry clicked');
                strawberry.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
                strawberry.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        
                counter2 = counter2 + 15;
                console.log(counter2);
                score2.innerHTML = `${counter2}`;

                collectSound.play();
            })

        }, 2000)

         //change this value to howver long the timer is
         setTimeout (function(){
            seeResults.style.display = 'flex';
            icons2.style.display ='none';
        }, 30000)

    })


    resultsButton.addEventListener('click', function(){
        document.querySelector('#playmat').style.display = 'none';
        korilaSidebar.style.display = 'none';
        

        document.querySelector('#ending').style.display = 'flex';
        document.querySelector('#rilaScore').innerHTML = counter1;
        document.querySelector('#korilaScore').innerHTML = counter2;

        if(counter1 < counter2){
            console.log('korilakkuma wins')
            document.querySelector('#winner').innerHTML = 'Korilakkuma'
            document.querySelector('#winnerScore').innerHTML = `Korilakkuma won with ${counter2} points!`
            document.querySelector('#results').style.flexDirection = 'column-reverse';
        }
        else{
            console.log('rillakkuma wins')
            background.style.backgroundImage = 'url(images/rila-bg.jpg)';
            document.querySelector('#winnerScore').innerHTML = `Rilakkuma won with ${counter1} points!`
            
        }
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
        for (let i=0; i<bee.length; i++){
            bee[i].style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            bee[i].style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        }
        
    }

    function spawnChai (){
        for (let i=0; i<chai.length; i++){
            chai[i].style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
            chai[i].style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
        }
        
    }

    // function spawnsClick(){
    //     korila.addEventListener('click', function(){
    //         console.log('korila clicked');
           
    //         korila.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    //         korila.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
    //         counter1 = counter1 + 10;
    //         console.log(counter1);
    //         score.innerHTML = `${counter1}`;
    //     })
    
    //     strawberry.addEventListener('click', function(){
    //         console.log('strawberry clicked');
    //         strawberry.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    //         strawberry.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
    //         counter1 = counter1 + 15;
    //         console.log(counter1);
    //         score.innerHTML = `${counter1}`;
    //     })
    
    //     bee.addEventListener('click', function(){
    //         console.log('bee clicked');
    //         bee.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    //         bee.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
    //         counter1 = counter1 - 15;
    //         console.log(counter1);
    //         score.innerHTML = `${counter1}`;
    //     })
    
    //     chai.addEventListener('click', function(){
    //         console.log('chairoigokuma clicked');
    //         chai.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    //         chai.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
    //         counter1 = counter1 + 20;
    //         console.log(counter1);
    //         score.innerHTML = `${counter1}`;
    //     })

    //     rila.addEventListener('click', function(){
    //         console.log('rila clicked');
           
    //         rila.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    //         rila.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
    //         counter1 = counter1 + 10;
    //         console.log(counter1);
    //         score.innerHTML = `${counter1}`;
    //     })
    
    //     orange.addEventListener('click', function(){
    //         console.log('orange clicked');
    //         orange.style.left = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    //         orange.style.bottom = `${(Math.floor(Math.random()*(610-0)+1))}px`;
    
    //         counter1 = counter1 + 15;
    //         console.log(counter1);
    //         score.innerHTML = `${counter1}`;
    //     })
    // }

})();