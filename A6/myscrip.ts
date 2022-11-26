const germany = "Deutschland";
const italy = "Italien";
const france = "Frankreich";
const ireland = "Irland";
const population2022DE = 83803014;
const population2020DE = 83651225;
const population2008DE = 81171214;
const population2022IT = 60629462; 
const popultaion2020IT = 60505719;
const population2008IT = 58835465;
const population2022FR = 66050242;
const population2020FR = 65202014;
const population2008FR = 62040147;
const population2022IR =  4940395;
const population2020IR =  4887990;
const population2008IR =    4370509;


let prozentDE = ((1-population2020DE/population2022DE)*100).toFixed(2);
let ProzentIT = ((1-popultaion2020IT/population2022IT)*100).toFixed(2);
let prozentFR = ((1-population2020FR/population2022FR)*100).toFixed(2);
let prozentIR = ((1-population2020IR/population2022IR)*100).toFixed(2);


console.log("in "+ germany+ "beträgt die aktuelle Einwohnerzahl " + population2022DE);

console.log("in "+ germany+ "beträgt die aktuelle Einwohnerzahl  " + population2020DE);

console.log("Die Einwohnerzahl in" + germany + "ist in den Letzten 2 Jahren um " + prozentDE + "% gestiegen");

console.log("in "+ italy + "beträgt die aktuelle Einwohnerzahl " + population2022IT);

console.log("in "+ italy + "beträgt die aktuelle Einwohnerzahl " + popultaion2020IT);

console.log("Die Einwohnerzahl in" + italy + "ist in den Letzten 2 Jahren um " + ProzentIT + "% gestiegen");

console.log("in "+ france+ "beträgt die aktuelle Einwohnerzahl " + population2022FR);

console.log("in "+ france+ "beträgt die aktuelle Einwohnerzahl" + population2020FR);

console.log("Die Einwohnerzahl in" + france + "ist in den Letzten 2 Jahren um" + prozentFR + "% gestiegen");

console.log("in "+ ireland + "beträgt die aktuelle Einwohnerzahl" + population2022IR);

console.log("in "+ ireland + "beträgt die aktuelle Einwohnerzahl" + population2020IR);

console.log("Die Einwohnerzahl in" + ireland + "ist in den Letzten 2 Jahren um" + prozentIR + "% gestiegen");