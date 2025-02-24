(function(){
    'use strict'
    console.log('reading js');

    const polaroid = document.querySelectorAll('.polaroid');
    const black = document.querySelectorAll('.black');
    const fill = document.querySelectorAll('.fill');

    const bghide = document.querySelector('#cover');
    const close = document.querySelector('button');
    const caption1 = document.querySelector('#caption1');




    for (let i=0; i<polaroid.length; i++){
        polaroid[i].addEventListener('mouseover', function(event){
            // console.log('PLEASE WORK')

            //class name might have to change to classlist if we need to keep the polaroid invdividual ids
            polaroid[i].className = 'shake';
            black[i].style.opacity = '0';
            black[i].classList.add('grow');
            fill[i].classList.add('grow');
            
            if(polaroid[0].className = 'shake'){
                console.log('heya')

                bghide.style.opacity = '1';
                
                caption1.style.display = 'flex';

                black[1].classList.remove('grow');
                fill[1].classList.remove('grow');
                black[1].classList.add('shrink');
                fill[1].classList.add('shrink');
                polaroid[1].classList.remove = ('shake');

                black[2].classList.remove('grow');
                fill[2].classList.remove('grow');
                black[2].classList.add('shrink');
                fill[2].classList.add('shrink');


                // polaroid[1].style.display = 'none';

                // polaroid[0].style.border = 'solid red 3px'
                // polaroid[2].style.opacity = '0';

                // if(polaroid[2].style.opacity = '0'){
                //     console.log('poopoo');
                //     polaroid[2].classList.remove('shake');
                //}
            }

        })

        polaroid[i].addEventListener('mouseout', function(event){
            console.log('um the cursor is off HELLOO')

            polaroid[i].className = 'no-shake';

        })
    }


    close.addEventListener('click', function(event){
        event.preventDefault();

        console.log('im begging you nicely');

        //get rid of the cover, change back the size, get rid of pop-up
        // black.style.width = '250px';
        // fill.style.width = '250px';
        caption1.style.display = 'none';
        bghide.style.opacity = '0';

        //run defualt function. so you need to make a defualt function lmao

    })




})();