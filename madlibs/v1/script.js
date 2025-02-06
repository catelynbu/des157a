(function(){
    "use strict";
    console.log("reading JS");

    const madlibForm = document.querySelector('form');
    // const formData = document.querySelector()

    const questionsSection = document.querySelector('#madlibs-questions');
    const outputSection = document.querySelector('#madlibs-output');


    madlibForm.addEventListener('submit', function(event){
        event.preventDefault();

        const place = document.querySelector('#place').value;
        const verb1 = document.querySelector('#verb1').value;
        const verb2 = document.querySelector('#verb2').value;
        const verb3 = document.querySelector('#verb3').value;
        const verb4 = document.querySelector('#verb4').value;
        const number = document.querySelector('#number').value;
        const noise = document.querySelector('#noise').value;
        const color = document.querySelector('#color').value;
        const adjective = document.querySelector('#adjective').value;

        const words = document.querySelectorAll('span');

        if(place == ''){
            alert('fill it out');
        }else{
            questionsSection.style.display = 'none';
            outputSection.style.display = 'block';

            for(let i=0; i<words.length; i++){
                words[i].innerHTML = `${place}`;
            }
            

            // outputSection.innerHTML= `<p>Baking a cake is quite the easy task! First you need to go to the ${place} and ${place} all of your ingredients. ${place} them together, ${place} it into a pan, and ${place} it into the oven! Wait ${place} minutes and your oven will ${place}! Grab your ${place} frosting and get decorating. When you’re done, you’ll have a ${place} sweet treat.</p>`
        }
    });

})();