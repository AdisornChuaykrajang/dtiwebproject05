let x = 10
const y = 20

let data1 =[10,20,30,10,40]
let data2 =['hi','hey','hoo']

console.log(x);
x = 100
console.log(x);
console.log(y);

console.log(data1[2]);
console.log(data2[1]);
data2[1] = 'Hello'
console.log(data2[1]);
console.log(data2);
data2.push('wow')
console.log(data2);
data2.pop()
data2.pop()
console.log(data2);

let data3 = [10,20,'AAA',50.55]
console.log(`Data 3 มีทั้งหมด ${data3.length}`);
console.log(data3[2]);