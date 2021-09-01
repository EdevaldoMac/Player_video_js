// Criando a variável
var meuVideo = document.getElementById("playerPersonalizado");

// Tamanhos do video
var changeSize = (w, h) => {
    var vid = document.getElementById("playerPersonalizado");
    vid.width = w;
    vid.height = h;
}

// Função Play pause
var play_pause = () => {
    var vid = document.getElementById("playerPersonalizado");
    var but = document.getElementById("play_pause");
    if (vid.paused) {
        vid.play();
        but.innerHTML = "PAUSE";
    } else {
        vid.pause();
        but.innerHTML = "PLAY";
    }
}

// Função tela cheia
function telaCheia() {
    meuVideo.requestFullscreen();
}

// Função aumentar volume
function aumentarVolume() {
    meuVideo.volume += 0.1;
}

// Função diminuir volume
function diminuirVolume() {
    meuVideo.volume -= 0.1;
}

// Função mudo
var vidmute = () => {
    var vid = document.getElementById("playerPersonalizado");
    var mutebtn = document.getElementById("vidmute")
	if(vid.muted){
		vid.muted = false;
		mutebtn.innerHTML = "MUDO";
	} else {
		vid.muted = true;
		mutebtn.innerHTML = "ATIVAR SOM";
	}
}
