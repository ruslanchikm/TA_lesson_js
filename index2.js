
// punctul 1-2
{
var numarDeStudenti = "numarul de studenti";
const NUMELE_PROFESORULUI = "numele profesorului";
let AdresaElectronicaAProfesorului = "emailul profesorului";
}

// punctul 3
{
let nume = "Matran";
let prenume = "Ruslan";
let varsta = 44;
let mesaj = `salut, sunt ${nume} ${prenume} și am ${varsta} ani.`;

console.log(mesaj);
}

// punct 4
{
let numar1 = 144;
let numar2 = 133;
let numar3 = 122;
let numarString1 = numar1.toString();
let numarString2 = numar2 + "";
let numarString3 = String(numar3);
let booleanValue1 = numar1 !== 0;
let booleanValue2 = numar1 === 0;
let booleanValue3 = Boolean(numar3);



console.log(typeof numarString1, typeof numarString2, typeof numarString3, booleanValue1, booleanValue2, booleanValue3);
}

// punctul 5-6
{
    var string1 = "44";
    var string2 = "14.4";
    var stringNumber1 = parseInt(string1);
    var stringNumber2= parseFloat(string2)
    var text1 = "adevarul";
    var booleanValue1 = Boolean(text1)


    console.log(stringNumber1, stringNumber2, booleanValue1 );

}

// punctul 7
{
   var valoarea1 = false;
   var valoarea2 = 0;
   var valoarea3 = "";
   var valoarea4 = null;
   var valoarea5 = undefined;
   var valoarea6 = NaN;

   if(!valoarea1) {
    console.log("valoarea1 este falsa.");
   } else {
    console.log("valoarea1 nu este falsa")
   }
   
   if(valoarea2 || valoarea3) {
    console.log("valoarea2 sau valoarea3 este falsa.");
   } else {
    console.log("valoarea1 si valoarea2 sunt false");
   }
   
   if(valoarea5 && valoarea4) {
    console.log("valoarea3 si valoarea4 sunt adevarate");
   }  else {
    console.log("una din valoarea5 sau valoarea4 este falsa")
   }
   
}



