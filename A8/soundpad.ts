let pad_1: HTMLAudioElement = new Audio('./assets/DrumPad/A.mp3');
let pad_2: HTMLAudioElement = new Audio('./assets/DrumPad/C.mp3');
let pad_3: HTMLAudioElement = new Audio('./assets/DrumPad/F.mp3');
let pad_4: HTMLAudioElement = new Audio('./assets/DrumPad/G.mp3');
let pad_5: HTMLAudioElement = new Audio('./assets/DrumPad/hihat.mp3');
let pad_6: HTMLAudioElement = new Audio('./assets/DrumPad/kick.mp3');
let pad_7: HTMLAudioElement = new Audio('./assets/DrumPad/laugh-1.mp3');
let pad_8: HTMLAudioElement = new Audio('./assets/DrumPad/laugh-2.mp3');
let pad_9: HTMLAudioElement = new Audio('./assets/DrumPad/snare.mp3');


//Funktionen unten ist alles in einer funktion
//function playSample (sound){
   // sound.play()
//}

//document.querySelector('.pad-1').addEventListener('click', function(){
//playSample(pad_1);
//setInterval(function() {
        //playSample 

 //}, 500);

//})


//document.querySelector('.pad-2').addEventListener('click', function(){
  //  playSample(pad_2)
    
   // })
    
//document.querySelector('.pad-3').addEventListener('click', function(){
//playSample(pad_3)
        
//})

//document.querySelector('.pad-4').addEventListener('click', function(){
//playSample(pad_4)
            
 //})

//document.querySelector('.pad-5').addEventListener('click', function(){
//playSample(pad_5)
                
 //})

//document.querySelector('.pad-6').addEventListener('click', function(){
//playSample(pad_6)
                    
 //})

//document.querySelector('.pad-7').addEventListener('click', function(){
//playSample(pad_7)
                        
 //})

//document.querySelector('.pad-8').addEventListener('click', function(){
//playSample(pad_8)
                            
//})

//document.querySelector('.pad-9').addEventListener('click', function(){
//playSample(pad_9)
                                
//})
// Arrays
    let Sound: string [] = [("./assets/DrumPad/A.mp3"), ("./assets/DrumPad/C.mp3"), ("./assets/DrumPad/F.mp3") , ("./assets/DrumPad/G.mp3"),
     ("./assets/DrumPad/hithat.mp3"), ("./assets/DrumPad/kick.mp3") , ("./assets/DrumPad/laugh-1.mp3") , ("./assets/DrumPad/laugh-2.mp3") ,
     ("./assets/DrumPad/snare.mp3")];

     let beat: string []= [Sound [4], Sound [5], Sound [8]];

     let zaehler: number = 0;
//Funktionen

function playSample(soundQuellle: string): void {
let sound: HTMLAudioElement = new Audio (soundQuellle);
sound.play();
}

function playBeat(): void{
    setInterval(function(): void {
        playSample(beat[zaehler]);
        zaehler ++;
        if (zaehler === 3){
            zaehler = 0;
        }


    }, 500)

}
 



function addClickListenerDrumpad (): void {
    document.querySelector('.pad-1').addEventListener('click', function(){ playSample (Sound [0]); });
    document.querySelector('.pad-2').addEventListener('click', function(){ playSample (Sound [1]); });
    document.querySelector('.pad-3').addEventListener('click', function(){ playSample (Sound [2]); });
    document.querySelector('.pad-4').addEventListener('click', function(){ playSample (Sound [3]); });
    document.querySelector('.pad-5').addEventListener('click', function(){ playSample (Sound [4]); });
    document.querySelector('.pad-6').addEventListener('click', function(){ playSample (Sound [5]); });
    document.querySelector('.pad-7').addEventListener('click', function(){ playSample (Sound [6]); });
    document.querySelector('.pad-8').addEventListener('click', function(){ playSample (Sound [7]); });
    document.querySelector('.pad-9').addEventListener('click', function(){ playSample (Sound [8]); });

}


