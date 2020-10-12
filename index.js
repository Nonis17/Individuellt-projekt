
/*Deklarerar variabler i JS kopplat till html/css*/
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

/*kod till formulärsvalideringen*/
const email = document.getElementById('prenumerationEmail');

//Funktion för validering av prenumerationsemail
email.addEventListener('input', function (event) {  
   if (!email.validity.valid) {
    showError();
    event.preventDefault();
  } 
  else if(email.validity.valid){
    thankYou.classList.remove('thankYou-active');
    document.getElementById("prenumerationEmail").classList.remove("invalidForm");
  }
});


function showError() {
  if(email.validity.valueMissing) {
    document.querySelector(".thankYou").classList.add("invalidMessage");
    document.getElementById("prenumerationEmail").classList.add("invalidForm");
    thankYou.textContent = 'Du behöver skriva en e-postadress! :)';
 
  } else if(email.validity.typeMismatch) {
    document.querySelector(".thankYou").classList.add("invalidMessage");
    document.getElementById("prenumerationEmail").classList.add("invalidForm");
    thankYou.textContent = 'Ogiltig e-postadress';
  } 
 
}

/*Funktion: validering i prenumerations pop upen*/
popUpButton.addEventListener('click', function prenButton() {
thankYou.classList.add('thankYou-active');
  
      if (nameInput.value.length > 1 && emailPren.validity.valid) {
      document.querySelector(".thankYou").classList.remove("invalidMessage");
      document.getElementById("prenumerationEmail").classList.remove("invalidForm");
      document.getElementById("prenumerationName").classList.remove("invalidForm");  
      thankYou.textContent = "Tackar!"; 
             
    }
    if (nameInput.value.length > 1 && emailPren.value.length < 1) {
       document.getElementById("prenumerationName").classList.remove("invalidForm"); 
        showError();    
    }

 //If email and name is left blank, this error message pops up
    else if (nameInput.value.length < 1 && emailPren.value.length < 1) {
      document.querySelector(".thankYou").classList.add("invalidMessage");
      document.getElementById("prenumerationEmail").classList.add("invalidForm");
      document.getElementById("prenumerationName").classList.add("invalidForm");    
      thankYou.textContent = "Fyll i namn och e-postadress"; 
    }
 
    //If the name is invalid, this error message pops up
    else if (nameInput.value.length < 2) {
      document.querySelector(".thankYou").classList.add("invalidMessage");
      document.getElementById("prenumerationName").classList.add("invalidForm"); 
      document.getElementById("prenumerationEmail").classList.remove("invalidForm"); 
      thankYou.textContent = "Fyll i namn";  
    }
});


/* När man trycker på skicka-knappen i kontakt-formuläret */
sendButton.addEventListener('click', function(event) {
    reply.classList.add('reply-active');

    if(!emailContact.validity.valid) {
      showErrorEmail();
      event.preventDefault();
      return;
    }

    if (textBio.value.length > 0 && emailContact.validity.valid && contactName.value.length > 1) {
        reply.style.color = "black";
        reply.textContent = "Tack! Vi svarar så fort vi kan"; 
    }
     else{
        reply.style.color = "#9f0000";
        reply.textContent = "Fyll i de tomma fältet"; 
    }
});

//Funktion för kontaktformuläret som validerar e-mailen: 
function showErrorEmail() {
  if(emailContact.validity.valueMissing) {
   
    // If the field is empty display the following error message.
    document.querySelector(".reply").classList.add("invalidMessage");
    document.getElementById("contactEmail").classList.add("invalidForm"); 
    reply.textContent = 'Du behöver skriva in en e-postadress!';
    
  
  } else if(emailContact.validity.typeMismatch) {
    document.querySelector(".reply").classList.add("invalidMessage");
    document.getElementById("contactEmail").classList.add("invalidForm"); 
    // If the field doesn't contain an email address display the following error message.
    reply.textContent = 'Ogiltig e-postadress!';
  } 
}


//Klättergalleriet test ! 

let btns = document.querySelectorAll('.pictures');

for (i of btns) {
  i.addEventListener('click', function() {
    console.log(this);
  });
}