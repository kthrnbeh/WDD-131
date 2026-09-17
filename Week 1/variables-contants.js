const PI =3.14;
let radius = 3;
let area = PI * radius * radius;
console.log (area);

radius = 20;
area = PI * radius * radius;
console.log (area);

//type cohersion
const one = 1;
const two = '2';
let result = one *  two;
console.log(result);
result = one + Number(two);
console.log(result);