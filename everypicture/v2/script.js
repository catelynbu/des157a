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

        pic2.addEventListener('mouseout', function(event){
            console.log('um the cursor is off HELLOO')
            pic2.className = 'no-shake';
        
         })

        pic3.addEventListener('mouseout', function(event){
            console.log('um the cursor is off HELLOO')
            pic3.className = 'no-shake';
        
         })

    }

})();