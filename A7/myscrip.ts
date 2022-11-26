namespace A7 {
    const germany: string = "Deutschland";
    const italy : string= "Italien";
    const france : string= "Frankreich";
    const ireland : string = "Irland";
// Einwohnerzahl der Ländder 
const population2022DE : number = 83803014;
const population2020DE :number  = 83651225;
const population2008DE : number = 81171214;
const population2022IT : number = 60629462; 
const popultaion2020IT : number = 60505719;
const population2008IT : number = 58835465;
const population2022FR : number = 66050242;
const population2020FR : number = 65202014;
const population2008FR : number = 62040147;
const population2022IR: number  =  4940395;
const population2020IR : number =  4887990;
const population2008IR : number =  4370509;
let EinwohnerEU: number= 447.7;

//Prozentberechung 
let EinProzentWer = EinwohnerEU/ 100;

let prozentDE = ((1-population2020DE/population2022DE)*100).toFixed(2);
let ProzentIT = ((1-population2008IT/population2022IT)*100).toFixed(2);
let prozentFR = ((1-population2008FR/population2022FR)*100).toFixed(2);
let prozentIR = ((1-population2008IR/population2022IR)*100).toFixed(2);

let DerelativezuEU = ( population2022DE/EinProzentWer).toFixed(2)
let FRrelativzuEU  = ( population2022FR/ EinProzentWer).toFixed(2)
let ITrelativezuEU = ( population2022IT/ EinProzentWer).toFixed(2)
let IRrelativezuEU = ( population2022IR/ EinProzentWer).toFixed(2)


//console.log("in "+ germany+ "beträgt die aktuelle Einwohnerzahl " + population2022DE);

//console.log("in "+ germany+ "beträgt die aktuelle Einwohnerzahl  " + population2008DE);

// Wachstumsrate DE zwischen 2008 uns 2022 in %
console.log(" Die Einwohnerzahl in " + germany + "ist in den Letzten 2 Jahren um " + prozentDE + " % gestiegen  ");

console.log(" Relative zur Gesamtzahl der Eiwohner in der EU im Jahr 20022 : " + DerelativezuEU+ " % ");

//console.log("in "+ italy + "beträgt die aktuelle Einwohnerzahl " + population2022IT);

//console.log("in "+ italy + "beträgt die aktuelle Einwohnerzahl " + population2008IT);

console.log(" Relative zur Gesamtzahl der Eiwohner in der EU im Jahr 20022 :" + ITrelativezuEU+ " % ");

// Wachstumsrate IT zwischen 2008 und 2022 in % 
console.log(" Die Einwohnerzahl in " + italy + " ist in den Letzten 2 Jahren um " + ProzentIT + " % gestiegen ");

//console.log("in "+ france+ "beträgt die aktuelle Einwohnerzahl " + population2022FR);

//console.log("in "+ france+ "beträgt die aktuelle Einwohnerzahl" + population2008FR);

console.log(" Relative zur Gesamtzahl der Eiwohner in der EU im Jahr 20022 : " + FRrelativzuEU+ " % ");

//Wachstumsrate FR zwischen 2008 und 2022 in %

console.log(" Die Einwohnerzahl in " + france + " ist in den Letzten 2 Jahren um " + prozentFR + " % gestiegen ");

//console.log("in "+ ireland + "beträgt die aktuelle Einwohnerzahl" + population2022IR);

//console.log("in "+ ireland + "beträgt die aktuelle Einwohnerzahl" + population2008IR);

console.log(" Relative zur Gesamtzahl der Eiwohner in der EU im Jahr 20022 : " + IRrelativezuEU +" % ");

// Wachstumsrate IR zwischen 2008 und 2022 in %

console.log(" Die Einwohnerzahl in " + ireland + " ist in den Letzten 2 Jahren um " + prozentIR + " % gestiegen ");


// Function abschnitt

function consoleoutput(countryname: string, resident: number ){
    console.log( " in " + countryname + " beträgt die aktuelle Einwohnerzahl " + resident );


};

consoleoutput(germany,population2008DE);
consoleoutput(germany, population2022DE);
consoleoutput(italy,population2008IT);
consoleoutput(italy,population2022IR);
consoleoutput(france,population2008FR);
consoleoutput(france,population2022FR)
consoleoutput(ireland,population2008IR);
consoleoutput(ireland,population2022IR)



// html manupilation der Länder ausgabe und chart
namespace DOM {

document.querySelector('.germany').addEventListener('click', function(){
    document.querySelector('#titel').innerHTML="Eiwohnerzahl in Deutschland";
    document.querySelector('.chartWrapper').setAttribute( 'style', DerelativezuEU)
   
})
    


document.querySelector('.italy').addEventListener('click', function(){
    document.querySelector('#titel').innerHTML="Eiwohnerzahl in Italien"
})

document.querySelector('.france').addEventListener('click', function(){
    document.querySelector('#titel').innerHTML="Eiwohnerzahl in Frankreich"
})

document.querySelector('.ireland').addEventListener('click', function(){
    document.querySelector('#titel').innerHTML="Eiwohnerzahl in Irland"
})

}

}
