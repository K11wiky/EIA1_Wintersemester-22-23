const germany = "Deutschland";
const italy = "Italien";
const france = "Frankreich";
const spain = "Spanien";
const population2022DE = 83803014;
const population2020DE = 83651225;
const population2022IT = 60629462;
const popultaion2020IT = 60505719;
const population2022FR = 66050242;
const population2020FR = 65202014;
const population2022SP = 46467847;
const population2020SP = 46745832;

let prozentDE = (1-population2020DE/population2022DE)*100;
let ProzentIT = (1-popultaion2020IT/population2022IT)*100;
let prozentFR = (1-population2020FR/population2022FR)*100;
let prozentSP = (1-population2020SP/population2022SP)*100;

console.log("in "+ germany+ "beträgt die aktuelle Einwohnerzahl" + population2022DE);

console.log("in "+ germany+ "beträgt die aktuelle Einwohnerzahl" + population2020DE);

console.log("Die Einwohnerzahl in" + germany + "ist in den Letzten 2 Jahren um" + prozentDE + "% gestiegen");

console.log("in "+ italy + "beträgt die aktuelle Einwohnerzahl" + population2022IT);

console.log("in "+ italy + "beträgt die aktuelle Einwohnerzahl" + popultaion2020IT);

console.log("Die Einwohnerzahl in" + italy + "ist in den Letzten 2 Jahren um" + ProzentIT + "% gestiegen");

console.log("in "+ france+ "beträgt die aktuelle Einwohnerzahl" + population2022FR);

console.log("in "+ france+ "beträgt die aktuelle Einwohnerzahl" + population2020FR);

console.log("Die Einwohnerzahl in" + france + "ist in den Letzten 2 Jahren um" + prozentFR + "% gestiegen");

console.log("in "+ spain+ "beträgt die aktuelle Einwohnerzahl" + population2022SP);

console.log("in "+ spain+ "beträgt die aktuelle Einwohnerzahl" + population2020SP);

console.log("Die Einwohnerzahl in" + spain+ "ist in den Letzten 2 Jahren um" + prozentSP + "% gestiegen");

