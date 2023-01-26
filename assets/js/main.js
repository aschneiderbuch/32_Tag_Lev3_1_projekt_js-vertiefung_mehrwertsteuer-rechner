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
let radio_NettoZuBrutto = document.querySelector("#buttonNettoZuBrutto");  // true oder false = blau      holen mit  .checked 
console.log(radio_NettoZuBrutto.checked);
console.log("Radio NetZuBru mit .checked geholt: " + radio_NettoZuBrutto.checked + " = blau = Zahl");
let radio_BruttoZuNetto = document.querySelector("#buttonBruttoZuNetto");
let radio_19Prozent = document.querySelector("#button19Prozent");
let radio_7Prozent = document.querySelector("#button7Prozent");

let input_TextfeldNumber = document.querySelector("#inputTextfeldNumber");
console.log(inputTextfeldNumber.value);                                     // 22    holen mit .value      
console.log(parseInt(inputTextfeldNumber.value));                           // 22 = blau = Zahl  
// wird erst in der Funktion angezeigt, 
// weil zuerst der Butten ausgelöst werden muss

let label_Text19Prozent = document.querySelector("#labelText19Prozent");     // inhalt 19 % = weiß    holen  mit .innerHTML 
console.log(label_Text19Prozent.innerHTML);
console.log(parseInt(label_Text19Prozent.innerText));                        // praseInt     19 = blau     ohne % :-(

// Button 
let button_Berechnen = document.querySelector("#buttonBerechnen");


// Output
let output_Text___NettoBetrag = document.querySelector("#output_Text___NettoBetrag");

let output_Text___BruttoBetrag = document.querySelector("#output_Text___BruttoBetrag");
output_Text___BruttoBetrag.style.display = "none";                           // blendet am Anfang den Text aus

let output_Mehrwertsteuerbetrag = document.querySelector("#output_Mehrwertsteuerbetrag");
let output_Text___NettoGeldBetrag = document.querySelector("#output_Text___NettoGeldBetrag");
let output_Text___BruttoSteuerName = document.querySelector("#output_Text___BruttoSteuerName");
output_Text___BruttoSteuerName.style.display = "none";                           // blendet am Anfang den Text aus


// Event Listeners
button_Berechnen.addEventListener("click", berechnen);


// Funktion berechnen

function berechnen() {

    console.log(input_TextfeldNumber.value);


};



berechnen();
