(function(){
    "use strict";
    console.log("reading JS");

    const madlibForm = document.querySelector('form');

    const questionsSection = document.querySelector('#madlibs-questions');
    const outputSection = document.querySelector('#madlibs-output');
    const formData = document.querySelectorAll('input[type=text]');
    const errorBox = document.querySelector('#message');

    

    madlibForm.addEventListener('submit', function(event){
        event.preventDefault();
        processFormData(formData);
    });


    function processFormData(formData){
        const inputs = [];
        const emptyfields = [];
        let counter = 0;

        for (const eachInputs of formData){
            if(eachInputs.value){
                inputs.push(eachInputs.value);
                eachInputs.value = '';
            }else{
                emptyfields.push(counter);
            }
            counter++;
        }

        if(emptyfields.length > 0){
            showErrors(formData, emptyfields);
        }else{
            makeMadlibs(inputs);
        }
    }

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `Please fill out this field: <span>${errorId}</span>`;

        errorBox.style.display='block';
        errorBox.innerHTML = errorText;
        errorBox.style.backgroundColor = '#FFFBFB'


        document.querySelector(`#${errorId}`).focus();
    }

    function makeMadlibs(inputs){
        questionsSection.style.display = 'none';
        outputSection.style.display = 'block';
        const here = document.querySelector('#puthere');

        inputs[2] = inputs[2].charAt(0).toUpperCase() + inputs[2].slice(1)

        const myText = `<p>Baking a cake is quite the easy task! First you need to go to the <span>${inputs[0]}</span> and <span>${inputs[1]}</span> all of your ingredients. <span>${inputs[2]}</span> them together, <span>${inputs[3]}</span> it into a pan, and <span>${inputs[4]}</span> it into the oven! Wait <span>${inputs[5]}</span> minutes and your oven will <span>${inputs[6]}</span>! Grab your <span>${inputs[7]}</span> frosting and get decorating. When you’re done, you’ll have a <span>${inputs[8]}</span> sweet treat.</p>`;

        here.innerHTML =  myText;
    }

    outputSection.addEventListener('click', function(event){
        event.preventDefault();
        questionsSection.style.display = 'block';
        outputSection.style.display = 'none';
        errorBox.style.display = 'none'

        for(const eachField of formData){
            eachField.value = '';
        }

    });

    
})();