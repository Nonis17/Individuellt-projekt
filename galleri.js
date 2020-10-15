let animal = [
    {
        name: "Bear",
        tag: "bear",
        description: "Björnar kan klättra i träd, en grizzly björn har lättare för att klättra än t ex en svartbjörn, men de klättrar bara upp i trädet om trädet är tillräckligt tjockt med stora grenar. Annars välter nog trädet :-)",
    
    },
    {
        name: "Squirrel",
        tag: "squirrel",
        description: "Ekorrar är mästare på att klättra, de kan även kasta sig mellan olika träd så de nästan ser ut som att de flyger fram i luften. Små och smidiga varelser!",
      
    },
    {
        name: "Nasua",
        tag: "nasua",
        description: "En näsbjörn som klättrar, de är av samma familj som tvättbjörnar och har samma fantastiska klätterförmåga tack vare sina klor!",
      
    },
    {
        name: "Raccoon",
        tag: "raccoon",
        description: "En förmåga tvättbjörnar är kända för är just klättring. De två bakbenen är längre än frambenen, och de har tassar som har fem tår vardera; tårna på dess främre tassar är väldigt smidiga och kan greppa väldigt små grepp. Tvättbjörnar kan med enkelhet bära sina ungar i munnen medan de klättrar upp i höga träd.",
       
    },
    {
        name: "Elephant",
        tag: "elephant",
        description: "Lite förvånad över elefanten? Jag vill gärna tro att elefanter kan klättra, men de är fint att de iallafall försöker. Man ska alltid försöka.",
      
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
        description: "Koalor har riktigt vassa klor som hugger sig in i stammen på trädet så att de får riktigt bra grepp. På så sätt kan koalor sova uppe i träden och inte falla ned. ",
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

