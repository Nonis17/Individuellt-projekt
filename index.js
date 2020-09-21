
/*Deklarerar variabler i JS kopplat till html*/
var pButton = document.querySelector('.button'); 
var buttonBg = document.querySelector('.button-bg');
var xButton = document.querySelector('.x-close'); 
var popUpButton = document.querySelector('.popUpButton');
var thankYou = document.querySelector('.thankYou'); 
var reply = document.querySelector('.reply');
var sendButton = document.querySelector('.sendButton');
var textBio = document.querySelector('.bio');
var nameInput = document.querySelector('#prenumerationName');
var emailContact = document.querySelector('#contactEmail');
var emailPren = document.querySelector('#prenumerationEmail');
var inputForm = document.querySelector('.inputForm');

/*Den animerade menyn*/
const hamburger = document.querySelector('.hamburger'); 
const navLinks = document.querySelector('.nav-links'); 
const links = document.querySelectorAll('.nav-links li'); 

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade"); 
    });
})


/*Funktion: JavaScript som får en popup ruta att dyka upp och försvinna*/
pButton.addEventListener('click', function() {
    buttonBg.classList.add('bg-active');
});

xButton.addEventListener('click', function() {
    buttonBg.classList.remove('bg-active');
});

/*Funktion: Tack-texten dyker upp när man fyllt i epostadressen i prenumerationen*/
popUpButton.addEventListener('click', function() {
    popUpButton.style.cssText = "background-color: lightgrey;"; 
    thankYou.classList.add('thankYou-active'); 
  
      if (nameInput.value.length > 1 && emailPren.value.length > 0) {
        thankYou.style.color = "black";
        thankYou.textContent = "Tack!"; 
    }
    else if (nameInput.value.length > 1 && emailPren.value.length < 1) {
        thankYou.style.color = "#9f0000";
        thankYou.textContent = "Fyll i e-postadressen"; 
        nameInput.style.css = "border: 1px solid red;";
    }

    else if (nameInput.value.length < 1 && emailPren.value.length < 1) {
        thankYou.style.color = "#9f0000";
        thankYou.textContent = "Fyll i namn och e-postadress"; 
        nameInput.style.css = "border: 1px solid red;";
    }
  
    else{
        thankYou.style.color = "red";
        thankYou.textContent = "Fyll i namn"; 

    }
});

/*Funktion: När man trycker på skicka-knappen i kontakt-formuläret får man ett meddelande*/
sendButton.addEventListener('click', function() {
    reply.classList.add('reply-active');

    if (textBio.value.length > 0 && emailContact.value.length > 0 && nameInput.value.length > 1) {
        reply.style.color = "black";
        reply.textContent = "Tack! Vi svarar så fort vi kan"; 
    }
     else{
        reply.style.color = "#9f0000";
        reply.textContent = "Fyll i de tomma fältet"; 
    }
});

