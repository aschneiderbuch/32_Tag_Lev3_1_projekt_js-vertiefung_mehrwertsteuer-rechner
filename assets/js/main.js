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
console.log(buttonNettoZuBrutto.value);

let buttonBruttoZuNetto = document.querySelector("#buttonBruttoZuNetto");
console.log(buttonBruttoZuNetto);
console.log(buttonBruttoZuNetto.value);

let button19Prozent = document.querySelector("#button19Prozent");
console.log(button19Prozent);
console.log(button19Prozent.value);

let button7Prozent = document.querySelector("#button7Prozent");
console.log(button7Prozent);
console.log(button7Prozent.value);

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










console.log(0.1*80000000);

