//1 Írj kód részletet, amelyben létrehozol 2 szám változót, majd ezek összegét letárolod egy új változóban!
let a = 2;
let b = 3;
let c = a + b;
console.log(c);

//2  Írj kód részletet, amelyben létrehozol 2 akármilyen változót, majd azok értékeit megcseréled!
let d = 4;
let e = 6;
e = d;
d = 6;
console.log(d, e);

//3  Írj kód részletet, amelyben létrehozol egy 4 elemű számokat növekvő sorrendben tartalmazó tömböt! Cseréld meg az elemeit úgy, hogy azok csökkenő sorrendben legyenek!
const f = [1, 2, 3, 4];
f[0] = 4;
f[1] = 3;
f[2] = 2;
f[3] = 1;
console.log(f);

//4  Írj kód részletet, amelyben létrehozol egy objektumot! Add ehhez az objektumhoz az elso és a masodik nevű kulcsot, amiknek az értéke egy-egy szám!
let obj = ();
obj.elso = 1;
obj.masodik = 2;
console.log(obj)

//5  Írj kód részletet, amelyben az előző feladatban lérehozott objektumban található értékeket megcsereléd!

//6  Írj kód részletet, amelyben létrehozol egy 5 elemű tömböt! Hozz létre egy változót, aminek az értéke kisebb, mint 5! Helyezd az újonnan létrehozott változóba a tömb azon indexű elemét, amennyi a változó értéke!
const g = [5, 6, 7, 8, 9];
let h = 4;
h = g[4];
console.log(h);

//7  Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, aminek az elemei objektumok!

//8  Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, amelynek az elemei 3 elemű szám tömbök! A 2. tömb 2. elmenének értékét változtasd 10-re!
const array9 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
array9[1][1] = 10;
console.log(array9[1]);

//9  Írj kód részletet, amelyben létrehozol egy szám változót, majd egy újabb változóban letárolod, hogy a szám osztható-e 2-vel és 5-tel!

//10  Írj kód részletet, amelyben létrehozol egy 5 számot tartalmazó tömböt, majd egy új változóban letárolod ezek összegét!
const num = [2, 3, 5, 7, 8];
let sum = num[0] + num[1] + num[2] + num[3] + num[4];
console.log(sum)

//11  Írj kód részletet, amelyben létrehozol 3 akármilyen változót, majd ezek értékét egy object típusú változóba lemented! Ezután írasd ki az objektum összes attribútumát!
let i = 4;
let j = 5;
let k = 6;
const array3 = [];
array3.push(i);
array3.push(j);
array3.push(k);
console.log(array3)

//12  Írj kód részletet, amelyben létrehozol egy lakcím adatait tároló objektumot (irányítószám, település, utca, házszám)! Írasd ki a lakcímet!
const address = {
    pcode: 4024,
    city: "Debrecen",
    street: "Akármi",
    number: 42
}
console.log(address);

//13  Írj kód részletet, amelyben létrehozol a és b nevű változókat, amelyek egy téglalap oldalainak hosszát tárolják! Számold ki a téglalap kerületét és területét!
let a = 5;
let b = 7;
let circumference = 2 * a + 2 * b;
let area = a * b;
console.log(circumference);
console.log(area);

//14  Írj kód részletet, amelyben létrehozol 2 azonos hosszúságú szám tömböt! Hozz létre egy új tömböt, amelyben a két tömb azonos indexű elemeinek összegét tárolod!
const less = [1, 2, 3, 4, 5];
const more = [9, 8, 7, 6, 5];
const sumsum = [
    less[0] + more[0],
    less[1] + more[1],
    less[2] + more[2],
    less[3] + more[3],
    less[4] + more[4],
];
console.log(sumsum);