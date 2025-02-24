(function(){
    'use strict'
    console.log('reading js');

    // const polaroid = document.querySelectorAll('.polaroid');
    const black = document.querySelectorAll('.black');
    // const fill = document.querySelector('.fill');

    // const bghide = document.querySelector('#cover');
    // const close = document.querySelector('button');
    // const captions = document.querySelectorAll('section');

    const pic1 = document.querySelector('#polaroid1');
    const pic2 = document.querySelector('#polaroid2');
    const pic3 = document.querySelector('#polaroid3');

    const caption1 = document.querySelector('#caption1');
    const caption2 = document.querySelector('#caption2');
    const caption3 = document.querySelector('#caption3');


    for (let i=0; i<black.length; i++){
        pic1.addEventListener('mouseover', function(event){
        console.log('this is picture 1');
        pic1.className = 'shake';
        black[0].style.opacity = '0';
        caption1.style.opacity = '1';
        });

        pic2.addEventListener('mouseover', function(event){
        console.log('this is picture 2');
        pic2.className = 'shake';
        black[1].style.opacity = '0';
        caption2.style.opacity = '1';
        });

        pic3.addEventListener('mouseover', function(event){
        console.log('this is picture 3');
        pic3.className = 'shake';
        black[2].style.opacity = '0';
        caption3.style.opacity = '1';
        });

        restart.addEventListener('click', function(event){
            event.preventDefault();

            console.log('this should reset all the values!');
            caption1.style.opacity = '0';
            caption2.style.opacity = '0';
            caption3.style.opacity = '0';
            black[i].style.opacity = '1';
        })

        pic1.addEventListener('mouseout', function(event){
            console.log('um the cursor is off HELLOO')
            pic1.className = 'no-shake';
        
         })

    }

   

    
   


    // for (let i=0; i<polaroid.length; i++){
    //     polaroid[i].addEventListener('mouseover', function(event){

    //         if(polaroid[0]){
    //             console.log('test');
    //         }
            

            // console.log('PLEASE WORK')

            //class name might have to change to classlist if we need to keep the polaroid invdividual ids
            // polaroid[i].className = 'shake';
            // black[i].style.opacity = '0';
            // black[i].classList.add('grow');
            // fill[i].classList.add('grow');
            
            // if(polaroid[0].className = 'shake'){
            //     console.log('the first one is shaking');

            //     // bghide.style.opacity = '1';
                
            //     // caption1.style.display = 'flex';

            //     // black[1].classList.remove('grow');
            //     // fill[1].classList.remove('grow');
            //     // black[1].classList.add('shrink');
            //     // fill[1].classList.add('shrink');
            //     // polaroid[1].classList.remove = ('shake');

            //     // black[2].classList.remove('grow');
            //     // fill[2].classList.remove('grow');
            //     // black[2].classList.add('shrink');
            //     // fill[2].classList.add('shrink');


            //     // polaroid[1].style.display = 'none';

            //     // polaroid[0].style.border = 'solid red 3px'
            //     // polaroid[2].style.opacity = '0';

            //     // if(polaroid[2].style.opacity = '0'){
            //     //     console.log('poopoo');
            //     //     polaroid[2].classList.remove('shake');
            //     //}
            // }
            // else if(polaroid[1].className = 'shake'){
            //     console.log('the second one is shaking');
            // }
            // else if(polaroid[2].className = 'shake'){
            //     console.log('the thrid one is shaking');
            // }

    //     })

    //     polaroid[i].addEventListener('mouseout', function(event){
    //         // console.log('um the cursor is off HELLOO')

    //         polaroid[i].className = 'no-shake';

    //     })
    // }


    // close.addEventListener('click', function(event){
    //     event.preventDefault();

    //     console.log('im begging you nicely');

    //     //get rid of the cover, change back the size, get rid of pop-up
    //     // black.style.width = '250px';
    //     // fill.style.width = '250px';
    //     caption1.style.display = 'none';
    //     bghide.style.opacity = '0';

    //     //run defualt function. so you need to make a defualt function lmao

    // })




})();