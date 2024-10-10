//1 - Írj kód részletet, amelyben összehasonlítasz 2 számot! Ha megegyeznek, akkor azt iratod ki, hogy "Megegyeznek", egyébként "Nem egyeznek meg"!

if (numA === numB) {
    console.log('Megegyeznek.')
} else {
    console.log('Nem egyeznek meg.')
};

//2 - Írj kód részletet, amelyben kiíratod a 100-nál kisebb 5-tel osztható pozitív számokat!

for (let number = 0; number < 101; number += 5) {
    console.log(number)
};

for (let number = 0; number < 101; number++) {
    if (number % 5 != 0) {
        continue;
    }
    console.log(number);
}

//3 - Írj kód részletet, amelyben kiíratod a 100-nál kisebb pozitív számok összegét!
let number = 0;
let sum = 0;
for (number; number < 101; number++) {
    sum += number;
};
console.log(sum);

//4 - Írj kód részletet, amelyben kiíratod az első 10 pozitív szám négyzetét!
let number = 0;
for (number; number < 11; number++) {
    squ = number;
    squ *= number;
};
console.log(squ);

//5 - Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiíratod a legnagyobb számot közülük!
let array01 = [23, 63, 50, 1, 17];
let arraymax = array01[0];
for (let index = 1; index < array01.length; index++) {
    if (arraymax < array01[index]) {
        arraymax = array01[index];
    }
};
console.log(arraymax);

//6 - Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiíratod, hogy hányszor szerepelt a 4-es a tömbben!
let array02 = [3, 4, 4, 8, 21];
let howMany4 = 0;
for (let index = 0; index < array02.length; index++) {
    if (array02[index] === 4) {
        howMany4++;
    }
};
console.log(howMany4);

//7 - Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd az összes elemére kiíratod, hogy osztható 2-vel, 3-mal és 5-tel!
let array03 = [4, 9, 10, 15, 18];
for (let index = 0; index < array03.length; index++) {
    if (array03[index] % 2 === 0) {
        console.log('A ' + array03[index] + ' osztható kettővel.');
    } else if (array03[index] % 3 === 0) {
        console.log('A ' + array03[index] + ' osztható hárommal.');
    } else if (array03[index] % 5 === 0) {
        console.log('A ' + array03[index] + ' osztható öttel.');
    };
};

let array03 = [4, 9, 10, 15, 18];
for (let index = 0; index < array03.length; index++) {
    if (array03[index] % 2 === 0) {
        console.log('A ' + array03[index] + ' osztható kettővel.');
    };
    if (array03[index] % 3 === 0) {
        console.log('A ' + array03[index] + ' osztható hárommal.');
    };
    if (array03[index] % 5 === 0) {
        console.log('A ' + array03[index] + ' osztható öttel.');
    };
};

//8 - Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd visszafelé kiíratod az elemeit!
let array04 = [1, 2, 3, 4, 5];
for (let index = array04.length; index >= 0; index--) {
    console.log(array04[index]);
};

//9 - Írj kód részletet, amelyben létrehozol egy akárhány elemű akármilyen tömböt! Ha páros számú elem található benne, akkor előre felé írasd ki az elemeket, egyébként visszafelé!
let array05 = [1, 2];
if (array05.lenght % 2 === 0) {
    for (let index = 0; index < array05.lenght; index++) {
        console.log(array05[index]);
    }
} else {
    for (let index = array05.lenght; index >= 0; index--) {
        console.log(array05[index])
    }
};

//10 - Írj kód részletet, amelyben kiíratod a 100-nál kisebb Fibonacci számokat!


//11 - Írj kód részletet, amelyben kiíratod egy 10 elemű tömb minden második elemét!
let array06 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
for (let index = 1; index < array06.lenght; index += 2) {
    console.log(array06[index]);
};


//12 - Írj kód részletet, amelyben létrehozol 2 darab 5 elemű szám tömböt, majd létrehozol egy üres tömböt! Az üres tömbbe a másik 2 tömb azonos indexű elemeit add össze!
let arrayA = [1, 2, 3, 4, 5];
let arrayB = [3, 4, 5, 6, 7];
for (let index = 0; index < arrayA.length; index++) {
    let sum = arrayA[index] + arrayB[index];
    console.log(sum);
};

//13 - Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, amelynek minden eleme egy 3 elemű szám tömb! Írasd ki az összes elemét!
let array3 = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
for (let i1 = 0, i1 < array3.length, i1++) {
    for (let i2 = 0, i2 < array3[i1].length, i2++) {
        console.log(array3[i1][i2]);
    };
};

//14 - Írj kód részletet, amelyben létrehozol egy üres tömböt! Ebbe addig teszel boolean értékeket, ameddig 10 elem lesz a tömbben!
let empty = [];
while (empty.length < 10) {
    empty.push(true);
};
console.log(empty);
