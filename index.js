
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
var contactName = document.querySelector('#name');


/*Funktion: JavaScript som får en popup ruta att dyka upp och försvinna*/
pButton.addEventListener('click', function() {
    buttonBg.classList.add('bg-active');
});

xButton.addEventListener('click', function() {
    buttonBg.classList.remove('bg-active');
});

/*Här försöker jag göra ny kod till formulärsvalideringen*/


const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('prenumerationEmail');
const emailError = document.querySelector('#prenumerationEmail + span.thankYou');

email.addEventListener('input', function (event) {  
  // Each time the user types something, we check if the
  // form fields are valid.
  nameInput.style.borderColor = "white";
        emailPren.style.borderColor = "white";

  if (email.validity.valid) {
    
    /*thankYou.classList.add('thankYou-active'); 
    thankYou.style.color = "black";
    thankYou.textContent = "Tack!";*/
    emailPren.style.borderColor = "white";
    prenButton();
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.

  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailPren.style.borderColor = "red";
    thankYou.style.color = "red";
    thankYou.textContent = 'Du behöver skriva en e-postadress!';
    nameInput.style.borderColor = "white";
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    thankYou.textContent = 'Det måste vara en e-postadress';
  } 

  // Set the styling appropriately
 thankYou.className = '.thankYou-active';
}



/*Funktion: Tack-texten dyker upp när man fyllt i epostadressen i prenumerationen*/
popUpButton.addEventListener('click', function prenButton() {
    thankYou.classList.add('thankYou-active');
  
      if (nameInput.value.length > 1 && emailPren.value.length > 0) {
        thankYou.style.color = "black";
        thankYou.textContent = "Tack!"; 
        nameInput.style.borderColor = "white";
        emailPren.style.borderColor = "white";
        
    }
    if (nameInput.value.length > 1 && emailPren.value.length < 1) {
        thankYou.style.color = "red";
        thankYou.textContent = "Fyll i e-postadressen"; 
        emailPren.style.borderColor = "red";
        nameInput.style.borderColor = "white";
        showError();
        
    }

    else if (nameInput.value.length < 1 && emailPren.value.length < 1) {
        thankYou.style.color = "red";
        thankYou.textContent = "Fyll i namn och e-postadress"; 
        nameInput.style.borderColor = "red";
        emailPren.style.borderColor = "red";
    }

    else if (nameInput.value.length < 2) {
        thankYou.style.color = "red";
        thankYou.textContent = "Fyll i namn"; 
        nameInput.style.borderColor = "red";
    
    }
  
});

/*Funktion: När man trycker på skicka-knappen i kontakt-formuläret får man ett meddelande*/
sendButton.addEventListener('click', function() {
    reply.classList.add('reply-active');

    if (textBio.value.length > 0 && emailContact.value.length > 0 && contactName.value.length > 1) {
        reply.style.color = "black";
        reply.textContent = "Tack! Vi svarar så fort vi kan"; 
    }
     else{
      
        reply.style.color = "#9f0000";
        reply.textContent = "Fyll i de tomma fältet"; 
    }
});

