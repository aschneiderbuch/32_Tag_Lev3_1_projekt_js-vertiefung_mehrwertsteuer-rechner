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
let label_Text7Prozent = document.querySelector("#labelText7Prozent");

// Button 
let button_Berechnen = document.querySelector("#buttonBerechnen");


// Output
let output_Text___NettoBetrag = document.querySelector("#output_Text___NettoBetrag");

let output_Text___BruttoBetrag = document.querySelector("#output_Text___BruttoBetrag");
output_Text___BruttoBetrag.style.display = "none";                           // blendet am Anfang den Text aus

let output_MehrwertsteuerBetrag = document.querySelector("#output_MehrwertsteuerBetrag");
let output_Text___NettoGeldBetrag = document.querySelector("#output_Text___NettoSteuerName");
let output_Text___BruttoSteuerName = document.querySelector("#output_Text___BruttoSteuerName");
output_Text___BruttoSteuerName.style.display = "none";                           // blendet am Anfang den Text aus
let output_GeldBetrag = document.querySelector("#output_GeldBetrag");


// Event Listeners        + function berechnen aufrufen
button_Berechnen.addEventListener("click", berechnen);

radio_BruttoZuNetto.addEventListener("click", textWechsel);
radio_NettoZuBrutto.addEventListener("click", textWechsel);




// Funktion textWechsel
function textWechsel() {
    // if radio 1-NeZuBr dann text über button und input    Netto display block
    // und unten über Endbetrag   Brutto display block
    if (radio_NettoZuBrutto.checked === true) {
        output_Text___BruttoBetrag.style = `display: none; color: green;`;   // none 
        output_Text___NettoBetrag.style = `display: block; color: red;`;     // block
        output_Text___BruttoSteuerName.style = `display: none; color: green;`; // none
        output_Text___NettoGeldBetrag.style = `display: block; color: red;`;  //block

    }
    else if (radio_BruttoZuNetto.checked === true) {
        output_Text___BruttoBetrag.style = `display: block; color: green;`;   // block 
        output_Text___NettoBetrag.style = `display: none; color: red;`;     // none
        output_Text___BruttoSteuerName.style = `display: block; color: green;`; // block
        output_Text___NettoGeldBetrag.style = `display: none; color: red;`;  //none
    }
    else {
        // wenn was passieren sollte falls nichts zutrifft
    }

};




// Funktion berechnen definieren
function berechnen() {



    if (radio_NettoZuBrutto.checked == true && radio_19Prozent.checked == true && parseInt(input_TextfeldNumber.value) >= 0) {
        // Variante Netto zu Brutto mit 19 %
        // Problem input_TextfeldNumber < 1 wird nicht gerechnet sondern gibt im Ergebnis 0 :-(
        ErgebnisSteuer19Pro = (parseInt(input_TextfeldNumber.value)) * (parseInt(label_Text19Prozent.innerHTML) / 100).toFixed(2);;
        ErgebnisBetrag = parseInt(input_TextfeldNumber.value) + parseInt(ErgebnisSteuer19Pro);
        console.log(Number(input_TextfeldNumber.value))
        console.log(ErgebnisBetrag);
        console.log(ErgebnisSteuer19Pro);
    }
    // Variante Netto zu Brutto mit 7 %           7% anstatt lable inputFeld    dann .value anstatt .innerHTML
    else if (radio_NettoZuBrutto.checked == true && radio_7Prozent.checked == true && parseInt(input_TextfeldNumber.value) >= 0) {
        ErgebnisSteuer19Pro = ((parseInt(input_TextfeldNumber.value)) * (parseInt(label_Text7Prozent.value) / 100)).toFixed(2);  // 100   // toFixed(2) = 2 Nachkommastellen, denn bei Input 1 machte er immer 0.7000000000001 Steuer 7% anstatt lable inputFeld    dann .value anstatt .innerHTML
        ErgebnisBetrag = parseInt(input_TextfeldNumber.value) + parseInt(ErgebnisSteuer19Pro);
        console.log(parseInt(label_Text7Prozent.value));
        console.log(Number(input_TextfeldNumber.value))
        console.log(ErgebnisBetrag);
        console.log(ErgebnisSteuer19Pro);
    }
    // Variante Brutto zu Netto mit 19 %    Input_Textfeld.. = 119 %
    else if (radio_BruttoZuNetto.checked == true && radio_19Prozent.checked == true && parseInt(input_TextfeldNumber.value) >= 0) {
        ErgebnisSteuer19Pro = ((parseInt(input_TextfeldNumber.value)/119) * (parseInt(label_Text19Prozent.innerHTML))).toFixed(2);;    // 119 weil der Eingabewert bei Bruto ja 119 % ist, da die MwSt ja schon enthalten ist ;-)
        ErgebnisBetrag = parseInt(input_TextfeldNumber.value) - parseInt(ErgebnisSteuer19Pro);    // - statt + 
        console.log(Number(input_TextfeldNumber.value))
        console.log(ErgebnisBetrag);
        console.log(ErgebnisSteuer19Pro);
    }
    // Variante Brutto zu Netto mit 7 %          7% anstatt lable inputFeld    dann .value anstatt .innerHTML
    else if (radio_BruttoZuNetto.checked == true && radio_7Prozent.checked == true && parseInt(input_TextfeldNumber.value) >= 0) {
        ErgebnisSteuer19Pro = ((parseInt(input_TextfeldNumber.value)/107) * (parseInt(label_Text7Prozent.value))).toFixed(2);    // toFixed(2) = 2 Nachkommastellen, denn bei Input 1 machte er immer 0.7000000000001 Steuer  7% anstatt lable inputFeld    dann .value anstatt .innerHTML
        ErgebnisBetrag = parseInt(input_TextfeldNumber.value) - parseInt(ErgebnisSteuer19Pro);     // - statt + 
        console.log(Number(input_TextfeldNumber.value))
        console.log(ErgebnisBetrag);
        console.log(ErgebnisSteuer19Pro);
    }



    else {
        // wenn was passieren sollte falls nichts zutrifft
    }


    output_GeldBetrag.innerHTML = ErgebnisBetrag;
    output_MehrwertsteuerBetrag.innerHTML = ErgebnisSteuer19Pro;

};


// funktion berechnen verfügbar machen 
berechnen();
