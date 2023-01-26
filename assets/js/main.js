/* 

Frage

Auswahl 2 Radio buttons für Rechenweg
    1. Netto zu Brutto
            id buttonNettoZuBrutto 

    2. Brutto zu Netto

dann 2 Readio buttons für Steuer 
    1. 19%
    2. 17%

dann Input feld für den Wert

dann Button berechnen


dann output Ergebnis in
    Mehrwertsteuerbetrag ... in Euro
    Betrag 
         Bruttobetrag (Endpreis ) ... in Euro
         oder 
         Nettobetrag ... in Euro        // hier kommt ja eigentlich noch die Steuer dazu

*/



//Varibalen

// Input 
let tt2 = document.getElementById("buttonNettoZuBrutto");

let buttonNettoZuBrutto = document.querySelector("#buttonNettoZuBrutto");
console.log(buttonNettoZuBrutto);
console.log(buttonNettoZuBrutto.value);   // geht nicht, zeigt nicht an ob ausgewählt oder nicht :-(
console.log(buttonNettoZuBrutto.checked); // geht    true = ausgewählt 

let buttonBruttoZuNetto = document.querySelector("#buttonBruttoZuNetto");
console.log(buttonBruttoZuNetto);
console.log(buttonBruttoZuNetto.value);
console.log(buttonBruttoZuNetto.checked); // geht    true =

let button19Prozent = document.querySelector("#button19Prozent");
console.log(button19Prozent);
console.log(button19Prozent.value);
console.log(button19Prozent.checked); // geht    true =

let button7Prozent = document.querySelector("#button7Prozent");
console.log(button7Prozent);
console.log(button7Prozent.value);
console.log(button7Prozent.checked); // geht    true =

let inputNumber = document.querySelector("#inputNumber");
console.log(inputNumber);
console.log(inputNumber.value);
console.log(inputNumber.innerHTML);


// Button 
let buttonBerechnen = document.querySelector("#buttonBerechnen");


// Output
let output_Mehrwertsteuerbetrag = document.querySelector("#output_Mehrwertsteuerbetrag");

let output_SteuerName = document.querySelector("#output_SteuerName");

let output_GeldBetrag = document.querySelector("#output_GeldBetrag");


// Event Listeners
buttonBerechnen.addEventListener("click", berechnen);


// Funktion berechnen

function berechnen() {
    console.log(button19Prozent.checked);

    let inputNettoZuBrutto = buttonNettoZuBrutto.checked;
    console.log(inputNettoZuBrutto);

    let inputBruttoZuNetto = buttonBruttoZuNetto.checked;
    console.log(inputBruttoZuNetto);

    let input19Prozent = button19Prozent.checked;
    console.log(input19Prozent);

    let input7Prozent = button7Prozent.checked;
    console.log(input7Prozent);


    let inputNumberWert = Number(inputNumber.value);    // mit Number wird es zu Zahl und blau   // wenn leer, dann 0
    let inputNumberWert2 = parseInt(inputNumber.value); 
                        // mit parseInt wird es zu Zahl und blau   // wenn leer,   
                             //  !!!   dann NaN
    console.log(inputNumberWert);
    console.log(inputNumberWert2);

let 




};

// als Arrow Funktion berechnen
berechnen2 = () => {
    console.log(button19Prozent.value);

};


berechnen();







console.log(0.1 * 80000000);

