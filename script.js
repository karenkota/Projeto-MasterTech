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
    if(musica.currentTime < 4){
        return;
    }
    else if(musica.currentTime < 9){
        letra.innerHTML = "Blackbird singing in the dead of night";
    }
    else if(musica.currentTime < 13){
        letra.innerHTML = "Take these broken wings and learn to fly";
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
