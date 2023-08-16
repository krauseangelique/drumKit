console.log("Hello");

// fonction de son
function playSound(event){
    // console.log(event.keyCode);
    // événement sur le clavier https://fr.javascript.info/keyboard-events je veux que ce soit sur Window
    // VARIABLES
    // Créer nos variables propriété de chaque événement du clavier
    //const key = document.querySelector("div[data-key = '65']");
    const key = document.querySelector(`div[data-key='${event.keyCode}']`);
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);

    // console.log(key);
    // console.log(audio);
    // Supprimer une erreur lorsque nous appuyons sur une autre touche que celles reprises dans notre HTML
    // autoriser le son
    if(!audio) return;

    // création d'une variable pour que le cadre soit fancy
    const root = document.querySelector(":root");
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    root.style.setProperty("--color", `rgb(${red}, ${green}, ${blue})`);

    // Ajouter une classe
    key.classList.add("playing");

    // temps d'un son
    console.log(audio.currentTime);
    // avant de jouer le son reset le son donc redémare à 0
    audio.currentTime = 0;
    
    audio.play();
}

// FUNCTION
function removeClass(event){
    // ajout d'une class pour avoir un cadre 
    // créer un toogle sur la touche à encadrer remove et add
    // cibler l'élement de l'événement
    event.target.classList.remove("playing");
    console.log(event.target);
}

// toutes les touches
const keys = document.querySelectorAll(".key");

// ADDEVENTLISTENER
// toutes les touches donc un forEach
keys.forEach((key) => {
    key.addEventListener("transitionend", removeClass);
});


window.addEventListener("keydown", playSound);