
/*Deklarerar variabler i JS kopplat till html*/
var pButton = document.querySelector('.button'); 
var buttonBg = document.querySelector('.button-bg');
var xKnapp = document.querySelector('.x-close'); 
var popUpButton = document.querySelector('.popUpButton');
var thankYou = document.querySelector('.thankYou'); 
var reply = document.querySelector('.reply');
var sendButton = document.querySelector('.sendButton');
var textBio = document.querySelector('.bio');
var nameInput = document.querySelector('.name');
var emailContact = document.querySelector('#contactEmail');
var emailPren = document.querySelector('#prenumerationEmail');


/*Funktion: JavaScript som får en popup ruta att dyka upp och försvinna när man trycker på prenumereraknappen*/
pButton.addEventListener('click', function() {
    buttonBg.classList.add('bg-active');
});

xKnapp.addEventListener('click', function() {
    buttonBg.classList.remove('bg-active');
});

/*Funktion: Tack-texten dyker upp när man fyllt i epostadressen i prenumerationen*/
popUpButton.addEventListener('click', function() {
    popUpButton.style.cssText = "background-color: lightgrey;"; 
    thankYou.classList.add('thankYou-active'); 
  
      if (nameInput.value.length > 0 && emailPren.value.length > 0) {
        thankYou.style.color = "black";
        thankYou.textContent = "Tack!"; 
    }
    
    else{
        thankYou.style.color = "#9f0000";
        thankYou.textContent = "Fyll i de tomma fältet"; 
    }
});

/*Funktion: När man trycker på skicka-knappen i kontakt-formuläret får man ett meddelande*/
sendButton.addEventListener('click', function() {
    reply.classList.add('reply-active');

    if (textBio.value.length > 0 && emailContact.value.length > 0 && nameInput.value.length > 0) {
        reply.style.color = "black";
        reply.textContent = "Tack! Vi svarar så fort vi kan"; 
    }
     else{
        reply.style.color = "#9f0000";
        reply.textContent = "Fyll i de tomma fältet"; 
    }
});

