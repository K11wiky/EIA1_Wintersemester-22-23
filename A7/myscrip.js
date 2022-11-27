var A7;
(function (A7) {
    const germany = "Deutschland";
    const italy = "Italien";
    const france = "Frankreich";
    const ireland = "Irland";
    // Einwohnerzahl der Ländder 
    const population2022DE = 83803014;
    const population2008DE = 81171214;
    const population2022IT = 60629462;
    const population2008IT = 58835465;
    const population2022FR = 66050242;
    const population2008FR = 62040147;
    const population2022IR = 4940395;
    const population2008IR = 4370509;
    const population2022EU = 447706209;
    // Einwohnerzahl der länder in relation zu EU in % nötig für balken wachstum 
    let EinProzentWer = population2022EU / 100;
    let PopRelDE = (population2022DE / EinProzentWer).toFixed(2);
    let PopRelFR = (population2022FR / EinProzentWer).toFixed(2);
    let popRelIT = (population2022IT / EinProzentWer).toFixed(2);
    let PopRelIR = (population2022IR / EinProzentWer).toFixed(2);
    //Population ( Einwohnerwachsztum in %)
    let PopProzentDE = ((1 - population2008DE / population2022DE) * 100).toFixed(2);
    let PopProzentIT = ((1 - population2008IT / population2022IT) * 100).toFixed(2);
    let PopProzentFR = ((1 - population2008FR / population2022FR) * 100).toFixed(2);
    let PopProzentIR = ((1 - population2008IR / population2022IR) * 100).toFixed(2);
    //Einwohnerwachstum in Zahlen
    let WachtsrumsrateDE = population2022DE - population2008DE;
    let WachstumsrateFR = population2022FR - population2008FR;
    let WachstumsrateIT = population2022IT - population2008IT;
    let WachstumsrateIR = population2022IR - population2008IR;
    let WachstumsrateEU = population2022EU - population2022EU;
    // Function abschnitt
    function content(Countryname, Population, PopRel, PopProzent, Wachstumsrate) {
        document.querySelector('h1').innerHTML = " Einwohnerzahl in " + Countryname;
        document.querySelector('#section_1_h2').innerHTML = Population.toString() + "Mio";
        document.querySelector('#section_1_p').innerHTML = "Gesamtzahl Einwohnerinnern und Einwohner in " + Countryname + " in 2022 ";
        document.querySelector('#section_2_h2').innerHTML = PopRel + " % ";
        document.querySelector('#section_3_h2').innerHTML = PopProzent + " % ";
        document.querySelector('#section_4_h2').innerHTML = Wachstumsrate.toFixed(3) + "Mio";
        document.querySelector('.chart').setAttribute('style', 'height:' + PopRel.toFixed(2) + "+");
    }
    //function consoleoutput (countryname: string, resident: number ){
    //console.log ( " in " + countryname + " beträgt die aktuelle Einwohnerzahl " + resident );
    //consoleoutput(germany,population2008DE);
    //consoleoutput(germany, population2022DE);
    //consoleoutput(italy,population2008IT);
    //consoleoutput(italy,population2022IR);
    //consoleoutput(france,population2008FR);
    //consoleoutput(france,population2022FR)
    //consoleoutput(ireland,population2008IR);
    ///consoleoutput(ireland,population2022IR);
    //};
    // html manupilation der Länder ausgabe und chart
    let DOM;
    (function (DOM) {
        document.querySelector('.germany').addEventListener('click', function () {
            document.querySelector('#titel').innerHTML = "Eiwohnerzahl in Deutschland";
        });
        document.querySelector('.italy').addEventListener('click', function () {
            document.querySelector('#titel').innerHTML = "Eiwohnerzahl in Italien";
        });
        document.querySelector('.france').addEventListener('click', function () {
            document.querySelector('#titel').innerHTML = "Eiwohnerzahl in Frankreich";
        });
        document.querySelector('.ireland').addEventListener('click', function () {
            document.querySelector('#titel').innerHTML = "Eiwohnerzahl in Irland";
        });
    })(DOM || (DOM = {}));
})(A7 || (A7 = {}));
//# sourceMappingURL=myscrip.js.map