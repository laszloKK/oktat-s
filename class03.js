/*
functions
*/
function sum(a, b) {
    return a + b;
};
sum(34, 65);

// console.log(egyebek) => szintén function
/* return: visszatérési érték/eredmény
visszatérési érték mindig van, ha nincs definiálva: undefined
return után function leáll (?)
*/

function isOkay(value) {
    if (value === true) {
        return 'Rendben van.';
    } else {
        return 'Nincs rendben.';
    }
}

//rest (?) paraméterek: (...values) => bárhány paraméter 

function sum(..values) {
    return values;
}
Sum(1, 3, 5, 8)

function sum(..values) {
    let s = 0;

    for (let index = 0, index < values.length; index++) {
        s += values[index]
    }
    return s;
}

//default érték: b=1
function multiply(a, b = 1) {
    return a * b;
}

multiply(2, 3) //2*3 = 6
multiply(8) //8*1 = 8

//paraméterek egymásba ágyazva:
sum(4, 6, sum(4, 9));

//function létrehozása máshogy:
let multiply = (a, b) => {
    return a * b;
}
// '=>' function léátrehozását jelöli, ezt a jelet követi a {function tartalma}

let cc = 23
sum(cc, cc, cc)
// = 69

//alapvető/mindennapi functionok: (stringgel és tömbbel)
'HELLO'.length // 5
'HELLO'.toLowerCase // 'hello' +toUpperCase
'  Hello World     '.trim// 'Hello World'
'ALMA'.localeCompare('KORTE'); // -1 (mert A előrébb van mint K)
'Alma'.localeCompare('Aaaa'); // +1
'Alma'.includes('A'); //true 'Alma'.includes('Alm') also TRUE
'Alma'.endsWith('A');
'ALMA'.indexOf('MA'); //2 => melyik indextől kezdődik
// 'ALMA'.indexOf('MAE') => -1
'ALMA'.replace('AL', 'KAR'); // 'KARMA' 
'ALALMA'.replaceAll('AL', 'KAR');
'ALMA'.substring(1, 3); // 'LM' ?end => subtring végének megadása opcionális, egyébként végigmegy

//tömbökhöz
.string //tömböt csinál szövegből megadott karakter mentén

[10, 21, 43].forEach(a => console.log(a)) // 10, 21, 43
[10, 21, 43].forEach(a => console.log(a < 20)) // true, false, false
[10, 21, 43].forEach(a => console.log(a * a)) //100, 401, ...

[10, 20, 30].push(40, 50) //5......
[10, 20, 30].unshift(2, 5) // elejére teszi
    .concat
    .pop
    .shift
a.reverse()
a.join
a.include
a.som
a.some(a => a > 15) //true or false
a.every(a > a > 15)
a.find(a => a > 15) //megkeresi az ELSŐ olyan elemet, amire igaz
a.findLast(a => a > 15) //hátulról kezdi el keresni
a.findIndex(a => a > 15) //indexét írja ki az elsőnek, amelyikre igaz
a.indexOf(20) //kevésbé okos
a.filter(a => a > 15) //létrehoz egy új tömböt az igaz értékekkel a paraméter alapján
a.map(a => a > 15) //szintén új tömb T/F értékekkel
a.splice(1, 2) //kivág adott indextől elemeket és a helyükre be is fűz(het)
a.splice(2, 3, 3445, 345, 32445) //kivágja a 2. indextől(3. hely!) 3 értékrt és beírja a többit
a.sort() //paramétertől paraméterig sorbarendez (?)
a.sor((a, b) => a - b) //növekvő sor lesz (elvégzi a kivonás műveletet, és attól függően, hogy az érték + vagy - előbbre vagy hátra rakja)
a.sor((a, b) => b - a) //csökkenő sor lesz
a.reduce((sum, number) => sum + number, 0) // ahol 0 => inicial value, vagyis kezdő érték