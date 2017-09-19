//Opdracht 2 & 3 & 4 & 5
console.log('%c Opdracht 2, 3, 4 & 5 ', 'background: #222; color: #bada55');

//numbers
for(var i = 0; i < 7; i++) {
    window["Var " + i] = i;
    console.log(window["Var " + i]);
}
//strings
for(var i = 7; i < 14; i++) {
    window["Var " + i] = i + "2";
    console.log(window["Var " + i]);
}
//booleans
for(var i = 14; i < 20; i++) {
    var random_boolean = Math.random() >= 0.5;
    window["Var " + i] = random_boolean;
    console.log(window["Var " + i]);
}

//Strings toewijzen
for(var i = 7; i < 14; i++) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    window["Var " + i] = getRandomInt(0, 10000) + "1";
    console.log(window["Var " + i]);
}
//Ultra Booleans erin doen
for(var i = 14; i < 20; i++) {
    var random_boolean = Math.random() >= 0.5;
    window["Var " + i] = random_boolean;
    console.log(window["Var " + i]);
}

//Random getalletjes erin stoppen
for(var i = 0; i < 7; i++) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    window["Var " + i] = getRandomInt(0, 10000);
    console.log(window["Var " + i]);
}

for(var i = 0; i < 20; i++) {
    console.log("Soort variabele voor " + window["Var " + i] + ": " + typeof(window["Var " + i]))
}

//Variabelen bijelkaar optellen.
var total = 0;
for(var i = 0; i < 20; i++) {
    if(typeof(window["Var " + i]) == "boolean") {
        if(window["Var " + i]) {
            total++;
        }
    }
    if(typeof(window["Var " + i]) == "number") {
        total += window["Var " + i];
    }
    if(typeof(window["Var " + i]) == "string") {
        total += parseInt(window["Var " + i]);
    }
}
console.log("Totaal: " + total);

//Opdracht 8
console.log('%c Opdracht 8 ', 'background: #222; color: #bada55');

for(var i = 0; i < 20; i++) {
    console.log("Typeof " + window["variable" + i] + ": " + typeof(window["variable" + i]))
}

//Opdracht 9
console.log('%c Opdracht 9 ', 'background: #222; color: #bada55');

function addUp(num1, num2){
  return num1 + num2;
}

console.log("Het antwoord is: " + addUp(5,10))


//Opdracht 10
console.log('%c Opdracht 10 ', 'background: #222; color: #bada55');

var mark = function(){
  console.log("Ik wil kaas");
}

mark();

function justin(){
  console.log("Ik wil treinen");
}

justin();

//Opdracht 11
console.log('%c Opdracht 11 ', 'background: #222; color: #bada55');

var kutjes = function(kaas,worst){return kaas+" "+worst;};
var hoeren = kutjes("Justin", "Rico");
console.log(hoeren);

//Opdracht 12
console.log('%c 12 ', 'background: #222; color: #bada55');

(function(){
    console.log("Ik ben een IIFE function");
})();

//Opdracht 13
console.log('%c Opdracht 13 ', 'background: #222; color: #bada55');

function divideClosure() {
    var getalletje1 = 12;
    var getalletje2 = 2;
    return getalletje1 / getalletje2;
}

console.log(divideClosure());

//Opdracht 14
console.log('%c Opdracht 14 ', 'background: #222; color: #bada55');

var singer = "Nicki Minaj";
function showSinger(){
  console.log(singer);
  singer = "Katy Perry"
  var singer = "Jan Smit";
}
showSinger();

//Opdracht 15 & 16
console.log('%c Opdracht 15 & 16 ', 'background: #222; color: #bada55');


var llnStam = [];
var bools = [];
var mensenDieIkAardigVindt = [];

llnStam.push(22951);
llnStam.push(22207);

bools.push(true);
bools.push(true);

mensenDieIkAardigVindt.push("Mark - 22951");
mensenDieIkAardigVindt.push("Justin - 22207");

console.log("Aardige mensen array:")
for (var i = 0; i < mensenDieIkAardigVindt.length; i++) {
  console.log(mensenDieIkAardigVindt[i]);
}

console.log("Stamnummers array:")
for (var i = 0; i < llnStam.length; i++) {
  console.log(llnStam[i]);
}

console.log("Bool array");
for (var i = 0; i < bools.length; i++) {
  console.log(bools[i]);
}

//Opdracht 17 & 18 & 19
console.log('%c Opdracht 17, 18 & 19 ', 'background: #222; color: #bada55');

console.log("Ziektes:")
var ziektes = ["Tetanus", "Hiv", "Aids", "Kanker", "Koorts", "Buikgriep", "Javascript", "Ebola"];
ziektes.splice(0,1, "Polio");
ziektes.splice(2,1, "Mazelen");
console.log(ziektes);

ziektes.pop();
console.log(ziektes);
ziektes.push("Java");

//Opdracht 20
console.log('%c Opdracht 20 ', 'background: #222; color: #bada55');

var naam = ["Mark","Justin","Rico","Dani"];
naam.sort();
console.log(naam);



//Opdracht 21 + 22
console.log('%c Opdracht 21 & 22 ', 'background: #222; color: #bada55');

var Getal = [1,5,3,2,6,9,8,2,0,8];
Getal.sort();
console.log(Getal);
var Getal2 = Getal.slice(0, [3]);
console.log(Getal2);

//Opdracht 23
console.log('%c Opdracht 23 ', 'background: #222; color: #bada55');

var beginGetal = 2010;
var eindGetal = 2019;
var getallen = [];
while(beginGetal < eindGetal +1){
    getallen.push(beginGetal++);
}
console.log(getallen);

//Opdracht 24 - Eventlisteners
console.log('%c Opdracht 24 ', 'background: #222; color: #bada55');
console.log('%c Zie de pagina! ', 'background: #222; color: #bada55');

document.getElementById("naam").addEventListener("click", function(){
    alert("Gemaakt door Rico Schwab");
});

var muisBlokje = document.getElementById("mouseHere");

muisBlokje.addEventListener("mouseover", function(){
    muisBlokje.innerHTML = "Je hebt je muis nu hier! <br><small style='font-size: .5em;'>Dit is gedaan met een Eventlistener MouseOver</small>";
    muisBlokje.style.backgroundColor = "red";
    muisBlokje.style.fontWeight = "700";
});

muisBlokje.addEventListener("mouseout", function(){
    muisBlokje.innerHTML = "Je hebt je muis nu niet meer hier!";
    muisBlokje.style.backgroundColor = "green";
    muisBlokje.style.fontWeight = "400";


});

//Opdracht 25

var phone = [];
var car = [];
var notebook = [];
var justin = [];
var table = [];
var television = [];
var earbuds = [];
var watch =[];
var tablet = [];
var song = [];

phone.type = "iPhone 6s Plus";
phone.age = "2 weeks";
car.type = "Peugot 207";
notebook.type = "MacBook Pro 15 inch late 2015";
justin.type = "Justin van der Kruit V2.1";
justin.coolness = "Ultrakoel";
table.type = "IKEA MALM table";
television.type = "Sony Bravia";
earbuds.type = "AirPods";
earbuds.connectivity = "Bluetooth, Apple W1";
watch.type = "Apple Watch Series 2 Alluminium light";
tablet.type = "iPad 5th generation 2017";
song.name = "The Weeknd - The Birds pt. 2";

//Opdracht 26

function fuckThis(firstname, lastname){
    return firstname + " " + lastname;
}

console.log(fuckThis("Jan", "Smit"));


//Opdracht 27 & 28
console.log('%c Opdracht 27 & 28 ', 'background: #222; color: #bada55');
var student = [];
student.name = "Danique";
function showName(){
    return student.name;
}

console.log(showName());