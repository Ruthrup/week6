let cities = ["Kigali", "Huye", "Musanze", "Rubavu", "Muhanga"];

cities.push("Rwamagana");
cities.shift();

console.log(cities);
console.log(cities.length);


let numbers = [3, 8, 12, 5, 20, 7];

let overSix = numbers.filter(n => n > 6);
let doubled = numbers.map(n => n * 2);
let total = numbers.reduce((sum, n) => sum + n, 0);
let largest = Math.max(...numbers);

console.log(overSix);
console.log(doubled);
console.log(total);
console.log(largest);


let book = {
    title: "Learning JavaScript",
    author: "John",
    year: 2024,
    genres: ["Education", "Technology"],

    summary() {
        return `${this.title} by ${this.author}`;
    }
};

book.rating = 5;
book.year = 2025;

console.log(book.summary());

for (let [key, value] of Object.entries(book)) {
    console.log(key, value);
}


let products = [
    { name: "Shoes", price: 15000, stock: 10 },
    { name: "Shirt", price: 8000, stock: 20 },
    { name: "Sports Shoes", price: 25000, stock: 5 },
    { name: "Sandals", price: 12000, stock: 15 }
];

let cheapShoes = products.filter(
    p => p.name.toLowerCase().includes("shoe") && p.price < 20000
);

let highestStock = products.reduce(
    (max, p) => p.stock > max.stock ? p : max
);

let averagePrice = products.reduce(
    (sum, p) => sum + p.price, 0
) / products.length;

console.log(cheapShoes);
console.log(highestStock);
console.log(averagePrice);

const users = [
    { name: "Aline", age: 24 },
    { name: "Eric", age: 17 }
];

const adults = users.filter(u => u.age >= 18);

const names = users.map(u => u.name);

const sorted = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
);

console.log(adults);
console.log(names);
console.log(sorted[0].name);
