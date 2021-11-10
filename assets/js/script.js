//Observando um evento essa função tem 2 parametros 
document.body.addEventListener('keyup', (event)=>{
    //sempre executar a tecla que foi apertada nessa função 
    // console.log(event.code);
    playSound( event.code.toLowerCase() );
});

//evento agora para fazer a composição 

document.querySelector('.compositor button').addEventListener('click', () => {
    //saber o que digitei 
    let song = document.querySelector('#input').value;
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});








function playSound(sound) {
//função para tocar o som precisa idetificar qual o audio 
    let audioElement = document.querySelector(`#j_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    //Verificando se tem audio 

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
   
    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }

}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
           playSound(`key${songItem}`); 
        }, wait);

        wait += 250;
    }
}