(function(){
    "use strict";
    console.log("reading JS");

    const madlibForm = document.querySelector('form');

    madlibForm.addEventListener('submit', function(event){
        event.preventDefault();

        alert("form submitted");
    });

})();