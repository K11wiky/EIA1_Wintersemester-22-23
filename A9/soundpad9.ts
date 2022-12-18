namespace DrumMachine9 {
	let Sound: string[] = [
		"./assets/DrumPad/hihat.mp3",
		"./assets/DrumPad/kick.mp3",
		"./assets/DrumPad/snare.mp3",
		"./assets/DrumPad/A.mp3",
		"./assets/DrumPad/C.mp3",
		"./assets/DrumPad/F.mp3",
		"./assets/DrumPad/G.mp3",
		"./assets/DrumPad/laugh-1.mp3",
		"./assets/DrumPad/laugh-2.mp3",
	];

	let beat: string[] = [Sound[4], Sound[5], Sound[8]];

	let zähler: number = 0;

	//Funktionen

	window.addEventListener("load", addClickListenerDrumpad);

	function playSample(soundQuellle: string) {
		let sound: HTMLAudioElement = new Audio(soundQuellle);
		sound.play();
	}
//-- play and stop buttom

let play =document.querySelector('#play')
let stop =document.querySelector('#stop')

document.querySelector('#play').addEventListener('click', function(){
	play.classList.add('hidden');
	stop.classList.add('hidden')
	setInterval(()=>{
		playSample(beat[zähler]);
		if (zähler===2){
			zähler=0
		}else{zähler++}
	}, 500)

})

document.querySelector('#stop').addEventListener('click', function() {
	stop.classList.add('hidden');
	play.classList.add('hidden');
	clearInterval
})

///-- Generator for mikro--

document.querySelector('#mix').addEventListener('click', function(){
	beat 
	while(Sound[4].length < 3){ // i need help, i think i understood this but not completely ಥ_ಥ
		var r =Math.floor(Math.random() * 10);
		beat.push(Sound[r])
	}
})

	// ---- Funktion mit Zaeler und if Condition ---

	 
	function addClickListenerDrumpad() {
		document.querySelector(".pad-1").addEventListener("click", function () {
			playSample(Sound[0]);
		});
		document.querySelector(".pad-2").addEventListener("click", function () {
			playSample(Sound[1]);
		});
		document.querySelector(".pad-3").addEventListener("click", function () {
			playSample(Sound[2]);
		});
		document.querySelector(".pad-4").addEventListener("click", function () {
			playSample(Sound[3]);
		});
		document.querySelector(".pad-5").addEventListener("click", function () {
			playSample(Sound[4]);
		});
		document.querySelector(".pad-6").addEventListener("click", function () {
			playSample(Sound[5]);
		});
		document.querySelector(".pad-7").addEventListener("click", function () {
			playSample(Sound[6]);
		});
		document.querySelector(".pad-8").addEventListener("click", function () {
			playSample(Sound[7]);
		});
		document.querySelector(".pad-9").addEventListener("click", function () {
			playSample(Sound[8]);
		});
		
	}
}
