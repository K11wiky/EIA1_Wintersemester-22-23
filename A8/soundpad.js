const Projectname = 'Drum machine';
let pad_1 = new Audio('./assets/DrumPad/A.mp3');
let pad_2 = new Audio('./assets/DrumPad/C.mp3');
let pad_3 = new Audio('./assets/DrumPad/F.mp3');
let pad_4 = new Audio('./assets/DrumPad/G.mp3');
let pad_5 = new Audio('./assets/DrumPad/hihat.mp3');
let pad_6 = new Audio('./assets/DrumPad/kick.mp3');
let pad_7 = new Audio('./assets/DrumPad/laugh-1.mp3');
let pad_8 = new Audio('./assets/DrumPad/laugh-2.mp3');
let pad_9 = new Audio('./assets/DrumPad/snare.mp3');
//Funktionen unten ist alles in einer funktion
function playSample(soundquelle) {
    let sound = new Audio(soundquelle);
}
let beat;
let zaehler = 0;
function playBeat() {
    setInterval(function () {
        playSample(beat[zaehler]);
        zaehler++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}
const sound = [
    {
        key: 'A',
        sounds: './assets/DrumPad/A.mp3'
    },
    {
        key: 'C',
        sounds: './assets/DrumPad/C.mp3'
    },
    {
        key: 'F',
        sounds: './assets/DrumPad/F.mp3'
    },
    {
        key: 'G',
        sounds: './assets/DrumPad/G.mp3'
    },
    {
        key: 'H',
        sounds: './assets/DrumPad/hithat.mp3'
    },
    {
        key: 'K',
        sounds: './assets/DrumPad/kick.mp3'
    },
    {
        key: 'L',
        sounds: './assets/DrumPad/laugh-1.mp3'
    },
    {
        key: 'U',
        sounds: './assets/DrumPad/laugh-2.mp3'
    },
    {
        key: 'S',
        sounds: './assets/DrumPad/snare.mp3'
    },
];
const keys = ['A', 'C', 'G', 'F', 'H', 'K', 'L', 'U', 'S'];
const sounds = ['./assets/DrumPad/A.mp3',
    './assets/DrumPad/C.mp3', './assets/DrumPad/F.mp3', './assets/DrumPad/G.mp3', './assets/DrumPad/hithat.mp3', './assets/DrumPad/kick.mp3',
    './assets/DrumPad.lauthe-1.mp3', './assets/Drumpad/laughe-2.mp3', './assets/DrumPad/snare.mp3'];
//document.addEventListener('keydown', (e) =>{
//const id = e.key.toUpperCase();
//const Audio= document.getElementById('id')
//if(Audio)
//Audio.play();
//})
window.addEventListener('load', addClickListenerDrumPad);
function addClickListenerDrumPad() {
}
//# sourceMappingURL=soundpad.js.map