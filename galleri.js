let animal = [
    {
        name: "Bear",
        tag: "bear",
        description: "Björnar kan klättra i träd, en grizzly björn har lättare för att klättra än t ex en svartbjörn, men de klättrar bara upp i trädet om trädet är tillräckligt tjockt med stora grenar.",
    
    },
    {
        name: "Squirrel",
        tag: "squirrel",
        description: "Ekorrar är mästare på att klättra, de kan även kasta sig mellan olika träd så de nästan ser ut som att de flyger fram i lfuten.",
      
    },
    {
        name: "Nasua",
        tag: "nasua",
        description: "En näsbjörn som klättrar, de är av samma familj som tvättbjörnar och har samma fantastiska klätterförmåga tack vare sina klor!",
      
    },
    {
        name: "Raccoon",
        tag: "raccoon",
        description: "En förmåga tvättbjörnar är kända för är just klättring. Tvättbörjarnas fysik hjälper dem: De två bakbenen är längre än frambenen, och de har tassar som har 5 tår vardera; tårna på dess främre tassar är väldigt smidiga och kan greppa små avsatser eller sprickor i väggen. Tvättbjörnar kan bära sina ungar i munnen medan de klättrar upp höga träd.",
       
    },
    {
        name: "Elephant",
        tag: "elephant",
        description: "Jag vill gärna tro att elefanter kan klättra, men de är fint att de iallafall försöker. Man ska alltid försöka.",
      
    },
    {
        name: "Goats",
        tag: "goat",
        description: "Getter är också skickliga klättrare, tro de eller ej.",
    
    },
    {
        name: "Lemur",
        tag: "lemur",
        description: "Dessa primater vistas huvudsakligen i träd och är väldigt smidiga och kvicka när de klättrar!",
      
    },
    {
        name: "Koala",
        tag: "koala", 
        description: "Koalor har riktigt vassa klor som hugger sig in i stammen på trädet så att de får riktigt bra grepp och inte faller ned.",
    }
];

//När man trycker på djurbilderna dyker de upp en liten text om dem.
let gridPictures = document.querySelector('.gridPictures');

for(let i = 0; i < animal.length; i++){

  //Kommer åt alla divar som bilderna är i:
  var animalButton = gridPictures.children[i];

  //När vi klickar på bilderna ska beskrivningen dyka upp under bilden:
  animalButton.addEventListener('click', function() {
  
    var animalText = gridPictures.children[i].children[1];
    animalText.textContent = animal[i].description
   

 });

};

