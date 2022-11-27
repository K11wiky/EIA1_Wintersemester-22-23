namespace A7 {
    const germany= "Deutschland";
    const italy = "Italien";
    const france = "Frankreich";
    const ireland  = "Irland";

// Einwohnerzahl der Ländder 
const population2022DE = 83803014;
const population2008DE = 81171214;
const population2022IT = 60629462; 
const population2008IT = 58835465;
const population2022FR = 66050242;
const population2008FR = 62040147;
const population2022IR =  4940395;
const population2008IR =  4370509;
const population2022EU = 447706209;

// Einwohnerzahl der länder in relation zu EU in % nötig für balken wachstum 
let EinProzentWer = population2022EU/ 100;
let PopRelDE = ( population2022DE/EinProzentWer).toFixed(2);
let PopRelFR = ( population2022FR/ EinProzentWer).toFixed(2);
let popRelIT = ( population2022IT/ EinProzentWer).toFixed(2);
let PopRelIR = ( population2022IR/ EinProzentWer).toFixed(2);

//Population ( Einwohnerwachsztum in %)
let PopProzentDE = ((1-population2008DE/population2022DE)*100).toFixed(2);
let PopProzentIT = ((1-population2008IT/population2022IT)*100).toFixed(2);
let PopProzentFR = ((1-population2008FR/population2022FR)*100).toFixed(2);
let PopProzentIR = ((1-population2008IR/population2022IR)*100).toFixed(2);



//Einwohnerwachstum in Zahlen
let WachtstumsrateDE = (population2022DE - population2008DE).toFixed(3);
let WachstumsrateFR  = (population2022FR - population2008FR).toFixed(3);
let WachstumsrateIT  =(population2022IT - population2008IT).toFixed(3);
let WachstumsrateIR  = (population2022IR - population2008IR).toFixed(3);
let WachstumsrateEU  = population2022EU - population2022EU;

// Einwohner Zahl in %
console.log(" Die Einwohnerzahl in " + germany + " ist in den Letzten 2 Jahren um " + PopProzentDE + " % gestiegen ");
console.log(" Die Einwohnerzahl in " + france  + " ist in den Letzten 2 Jahren um " + PopProzentFR + " % gestiegen ");
console.log(" Die Einwohnerzahl in " + italy   + " ist in den Letzten 2 Jahren um " + PopProzentIT + " % gestiegen ");
console.log(" Die Einwohnerzahl in " + ireland + " ist in den Letzten 2 Jahren um " + PopProzentIR+ " % gestiegen ");

// Relation Gesamt Einwohner in EU %
console.log(" Relativ zur Gesamtzahl der Einnwohner in der EU im Jahr 2022 " + PopRelDE +" % ")
console.log(" Relativ zur Gesamtzahl der Einnwohner in der EU im Jahr 2022 " + PopRelFR +" % ")
console.log(" Relativ zur Gesamtzahl der Einnwohner in der EU im Jahr 2022 " + popRelIT +" % ")
console.log(" Relativ zur Gesamtzahl der Einnwohner in der EU im Jahr 2022 " + PopRelIR +" % ")

//Wachstumsrate in Zahl 
console.log(" Wachstumrate seit 2008: " + WachtstumsrateDE+ " Mio ")
console.log(" Wachstumrate seit 2008: " + WachstumsrateFR + " Mio ")
console.log(" Wachstumrate seit 2008: " + WachstumsrateIT + " Mio ")
console.log(" Wachstumrate seit 2008: " + WachstumsrateIR + " Mio ")




// html manupilation der Länder ausgabe
namespace DOM {




    document.querySelector('.germany').addEventListener('click', function(){
    document.querySelector('#titel').innerHTML="Eiwohnerzahl in Deutschland"
    document.querySelector('.chart').setAttribute("style", "height:" + PopRelDE + "%");


    })



    document.querySelector('.italy').addEventListener('click', function(){
    document.querySelector('#titel').innerHTML="Eiwohnerzahl in Italien"
    document.querySelector('.chart').setAttribute("style", "height:" + popRelIT + "%")
   
    })

    document.querySelector('.france').addEventListener('click', function(){
    document.querySelector('#titel').innerHTML="Eiwohnerzahl in Frankreich"
    document.querySelector('.chart').setAttribute("style", "height:" + PopRelFR + "%");

    })

    document.querySelector('.ireland').addEventListener('click', function(){
    document.querySelector('#titel').innerHTML="Eiwohnerzahl in Irland"
    document.querySelector('.chart').setAttribute("style", "height:" + PopRelIR + "%");


    })



}

}
