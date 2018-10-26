let musica = new Audio("https://ia802705.us.archive.org/8/items/111Blackbird/1-11%20Blackbird.mp3");
const botaoPlay = document.querySelector("button.control");
const letra = document.querySelector(".musica");
const body = document.querySelector("body");

let nEstrelas = 0;

const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

botaoPlay.onclick = () => {
    if(musica.paused){
        musica.play();
    }
    else{
        musica.pause();
    }
}

setInterval(()=>{
    console.log(musica.currentTime);
    if(musica.currentTime < 4){
        return;
    }
    else if(musica.currentTime < 28){
        letra.innerHTML = "<p> Blackbird singing in the dead of night</p> <p>Take these broken wings and learn to fly </p> <p> All your life... </p> <p> You were only waiting for this moment to arise </p>";
    }
    else if(musica.currentTime < 47){
        letra.innerHTML = "<p> Blackbird singing in the dead of night </p> <p> Take these sunken eyes and learn to see </p> <p> All your life... </p> <p>You were only waiting for this moment to be free </p>";
    }
    else if(musica.currentTime < 106){
        letra.innerHTML = "<p> Blackbird fly, blackbird fly </p> <p> Into the light of the dark black night </p>"
    } 
    else{
        letra.innerHTML = "<p> Blackbird singing in the dead of night </p> <p> Take these broken wings and learn to fly </p> <p> All your life... </p> <p>You were only waiting for this moment to be arise... </p>";
    }
}, 200)

setInterval(() => {
    let estrela = document.createElement("img");
    if(nEstrelas % 2){
        estrela.src = "Imagens/star1.png";
    }
    else{
        estrela.src = "Imagens/star2.png";
    }
    estrela.style.top = `${aleatorio(0, innerHeight)}px`;
    estrela.style.left = `${aleatorio(0, innerWidth)}px`;
    estrela.style.opacity = `0.5`;
    estrela.classList.add("estrela");
    body.appendChild(estrela);

    setTimeout(() => {
        body.removeChild(estrela);
    }, 700);

}, 500)
