console.log("congrats");

function funcA() {
    console.log("A...");
}

function funcB() {
    console.log(x);
    console.log(y);

}
function funcC() {
    return "Hi..."
}

function funcD(x, y) {
    return x + y
}

console.log(funcC());
let wow = funcD(100, 200)

function funcE(a, b , c = 100) {
    console.log(a + b + c);
}

function funcF(x="Hi", y=100, z="Wow wow wow") {
    return x + y + z
}

funcE(10, 20)
funcE(10, 20, 30)
console.log(funcF());
console.log(funcF("Hello"));

console.log(10 + "10");
console.log(10 + 10);
let info1 = 100
let info2 = 200

console.log(info1 + " + " + info2 + " = " + (info1+info2));
console.log(`${info1} + ${info2} = ${info1+info2}`);


console.log(10 > 200 ? 'Hi....' : 'Hey....');
let x = 'Bangna'    
let y = 'Bangpoo'
let z = x > y ? 'Wow....' : 'Woo...'
console.log(Z);
console.log(X>Y);
console.log(X==Y);
console.log(X<Y);