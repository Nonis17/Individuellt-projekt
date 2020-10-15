
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

/* ----- kod till prenumerationsrutans formulärsvalidering ------ */

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
};

/* ----- Funktion: validering i prenumerations pop upen ----- */

popUpButton.addEventListener('click', function prenButton() {
thankYou.classList.add('thankYou-active');
  
//Om man fyllt i namn och epost korrekt:
      if (nameInput.value.length > 1 && emailPren.validity.valid) {
      document.querySelector(".thankYou").classList.remove("invalidMessage");
      document.getElementById("prenumerationEmail").classList.remove("invalidForm");
      document.getElementById("prenumerationName").classList.remove("invalidForm");  
      thankYou.style.color = "black";
      thankYou.textContent = "Tackar!";            
    }

//Om namnet stämmer men eposten inte är korrekt: 
    if (nameInput.value.length > 1 && emailPren.value.length < 1) {
       document.getElementById("prenumerationName").classList.remove("invalidForm"); 
        showError();    
    }

//Om man lämnar namn- och epostfältet tomt: 
    else if (nameInput.value.length < 1 && emailPren.value.length < 1) {
      document.querySelector(".thankYou").classList.add("invalidMessage");
      document.getElementById("prenumerationEmail").classList.add("invalidForm");
      document.getElementById("prenumerationName").classList.add("invalidForm");    
      thankYou.textContent = "Fyll i namn och e-postadress"; 
      return;
    }
 
//Om man inte skriver ett tillräckligt långt namn: 
    else if (nameInput.value.length < 2) {
      document.querySelector(".thankYou").classList.add("invalidMessage");
      document.getElementById("prenumerationName").classList.add("invalidForm"); 
      document.getElementById("prenumerationEmail").classList.remove("invalidForm"); 
      thankYou.textContent = "Fyll i namn";  
      return;
    }
});


/* ----- När man trycker på skicka knappen i kontakt-formuläret ----- */

sendButton.addEventListener('click', function(event) {
    reply.classList.add('reply-active');

//Om man lämnar namn- och epostfältet tomt: 
if (contactName.value.length < 1 && emailContact.value.length < 1) {
  document.querySelector(".reply").classList.add("invalidMessage");
  document.getElementById("contactEmail").classList.add("invalidForm");
  document.getElementById("name").classList.add("invalidForm");    
 reply.textContent = "Fyll i namn och e-postadress"; 
  return;
}

//Om epostadressen inte är giltig, visa felmeddelande:
    if(!emailContact.validity.valid) {
      showErrorEmail();
      event.preventDefault();
      return;
}

//Om man fyllt i namn, korrekt epostadress och text i textrutan: 
    if (textBio.value.length > 0 && emailContact.validity.valid && contactName.value.length > 0) {
      event.preventDefault();  
      document.getElementById("contactEmail").classList.remove("invalidForm");
      reply.style.color = "black";
        reply.textContent = "Tack! Vi svarar så fort vi kan"; 
    }

     else{
      document.querySelector(".reply").classList.add("invalidMessage");
      document.getElementById("contactEmail").classList.remove("invalidForm");
        reply.textContent = "Fyll i de tomma fältet"; 
    }
});

//Funktion för kontaktformuläret som validerar e-mailen: 
function showErrorEmail() {

    //Om epostadressfältet är tomt:
  if(emailContact.validity.valueMissing) {
    document.getElementById("name").classList.remove("invalidForm"); 
    document.querySelector(".reply").classList.add("invalidMessage");
    document.getElementById("contactEmail").classList.add("invalidForm"); 
    reply.textContent = 'Du behöver skriva in en e-postadress!';
    
  //Ogiltig epostadress:
  } else if(emailContact.validity.typeMismatch) {
    document.getElementById("name").classList.remove("invalidForm"); 
    document.querySelector(".reply").classList.add("invalidMessage");
    document.getElementById("contactEmail").classList.add("invalidForm"); 
    reply.textContent = 'Ogiltig e-postadress!';
  } 
}

