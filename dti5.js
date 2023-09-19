let x = 20
let y = x
y = 200
console.log(x);
console.log(y);

let data1 = [10,20,30]
let data2 = data1
data1 = 999
console.log(data1);
console.log(data2);

let info1 = {
    'a' : 111,
    'b' : 222
}
let info2 = info1

info2.a = 999
console.log(info1);
console.log(info2);