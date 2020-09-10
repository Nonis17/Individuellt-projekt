/*JavaScript som får en popup ruta att dyka upp och försvinna*/

var pButton = document.querySelector('.button'); 
var buttonBg = document.querySelector('.button-bg');
var xKnapp = document.querySelector('.x-close'); 
var popUpButton = document.querySelector('.popUpButton');
var tack = document.querySelector('.tack'); 
var reply = document.querySelector('.reply');
var skickaknapp = document.querySelector('.knapp');
var textruta = document.querySelector('.bio');

pButton.addEventListener('click', function() {
    buttonBg.classList.add('bg-active');
});

xKnapp.addEventListener('click', function() {
    buttonBg.classList.remove('bg-active');
});

popUpButton.addEventListener('click', function() {
    popUpButton.style.cssText = "background-color: lightgrey;"; 

    tack.classList.add('tack-active');
});

/*När man trycker på skicka-knappen får man ett meddelande*/
skickaknapp.addEventListener('click', function() {
    reply.classList.add('reply-active');

    if (textruta.value.length > 0) {
        reply.style.color = "black";
        reply.textContent = "Tack! Jag svarar så fort jag kan"; 
    }
    else {
        reply.style.color = "#9f0000";
        reply.textContent = "Fyll i de tomma fältet"; 
    }
});