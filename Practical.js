let x = 1;

function a() {
    let x = 2;
    return x;
}

function b() {
    return x;
}

console.log(a(), b(), x);


function createBankAccount(initial) {
    let money = initial;

    return {
        deposit(amount) {
            money += amount;
            return money;
        },

        withdraw(amount) {
            if (amount > money) {
                return "Insufficient funds";
            }
            money -= amount;
            return money;
        },

        balance() {
            return money;
        }
    };
}

const account = createBankAccount(10000);

console.log(account.deposit(5000));
console.log(account.withdraw(2000));
console.log(account.balance());


function applyDiscount(prices, rule) {
    return prices.map(rule);
}

const prices = [20000, 60000, 80000];

const tenPercentOff = price => price * 0.9;

const fiveThousandOff = price =>
    price > 50000 ? price - 5000 : price;

console.log(applyDiscount(prices, tenPercentOff));
console.log(applyDiscount(prices, fiveThousandOff));


function add(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

function square(number) {
    return number * number;
}

function add(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

function square(number) {
    return number * number;
}

console.log(add(5, 3));
console.log(isEven(8));
console.log(square(4));


function makeGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const hello = makeGreeting("Muraho");

setTimeout(() => console.log(hello("Aline")), 1000);
