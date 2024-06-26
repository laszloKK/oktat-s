//1
let a = 2;
let b = 3;
let c = a + b;
console.log(c);

//2
let d = 4;
let e = 6;
e = d;
d = 6;
console.log(d, e);

//3
const f = [1, 2, 3, 4];
f[0] = 4;
f[1] = 3;
f[2] = 2;
f[3] = 1;
console.log(f);

//4

//5

//6
const g = [5, 6, 7, 8, 9];
let h = 4;
h = g[4];
console.log(h);

//7

//8
const array9 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
array9[1[1]] = 10;
console.log(array9[1]);

//10
const num = [2, 3, 5, 7, 8];
let sum = num[0] + num[1] + num[2] + num[3] + num[4];
console.log(sum)

//11
let i = 4;
let j = 5;
let k = 6;
const array3 = [];
array3.push(i);
array3.push(j);
array3.push(k);
console.log(array3)

//12
const address = {
    pcode: 4024,
    city: "Debrecen",
    street: "Akármi",
    number: 42
}
console.log(address);

//13
let a = 5;
let b = 7;
let circumference = 2 * a + 2 * b;
let area = a * b;
console.log(circumference);
console.log(area);

//14
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