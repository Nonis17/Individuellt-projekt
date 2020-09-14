
/*Deklarerar variabler i JS kopplat till html*/
var pButton = document.querySelector('.button'); 
var buttonBg = document.querySelector('.button-bg');
var xKnapp = document.querySelector('.x-close'); 
var popUpButton = document.querySelector('.popUpButton');
var tack = document.querySelector('.tack'); 
var reply = document.querySelector('.reply');
var skickaknapp = document.querySelector('.knapp');
var textruta = document.querySelector('.bio');
var epostInput = document.querySelector('.email');
var nameInput = document.querySelector('.name');
/*var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;*/



/*JavaScript som får en popup ruta att dyka upp och försvinna när man trycker på prenumereraknappen*/
pButton.addEventListener('click', function() {
    buttonBg.classList.add('bg-active');
});

xKnapp.addEventListener('click', function() {
    buttonBg.classList.remove('bg-active');
});

/*Tack-texten dyker upp när man fyllt i epostadressen i prenumerationen*/
popUpButton.addEventListener('click', function() {
    popUpButton.style.cssText = "background-color: lightgrey;"; 
   tack.classList.add('tack-active'); 
    
    if (nameInput.value.length > 0 && epostInput.value.length > 0) {
        tack.textContent = "Tack!"; 
    }
    
    else{
        tack.style.color = "#9f0000";
        tack.textContent = "Fyll i de tomma fältet"; 
    }
      

});

/*När man trycker på skicka-knappen i kontakt-formuläret får man ett meddelande*/
skickaknapp.addEventListener('click', function() {
    reply.classList.add('reply-active');

    if (textruta.value.length > 0 && epostInput.value.length > 0) {
        reply.style.color = "black";
        reply.textContent = "Tack! Vi svarar så fort vi kan"; 
    }
    else if (textruta.value.length > 0 ) {
        reply.style.color = "#9f0000";
        reply.textContent = "Felaktig e-postadress"; 
    }
    else{
        reply.style.color = "#9f0000";
        reply.textContent = "Fyll i de tomma fältet"; 
    }
});

