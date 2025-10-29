//Even Numbers Filter

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

//Positive Numbers Only

const nums = [-3, 5, -7, 8, 0, 12, -1, 0];

const positiveNumbers = nums.filter(num => num < 0);
console.log(positiveNumbers);

//Short Names Filter
const names = ["Rafi", "Anika", "Tom", "Rahim", "Li"];

const shortNames = names.filter(name => name.length < 4)
console.log(shortNames);

//Filter by Starting Letter
const fruits = ["apple", "banana", "cherry", "avocado", "mango"];
const startingLetter = fruits.filter(fruit => fruit.startsWith("a"))
console.log(startingLetter);

//Filter Adults (Age ≥ 18)

const people = [
    { name: "Riya", age: 17 },
    { name: "Sakib", age: 20 },
    { name: "Tania", age: 15 },
    { name: "Rafi", age: 22 }
];

const adultPeople = people.filter(singlePeople => singlePeople.age >= 18)
console.log(adultPeople);

//Filter Completed Tasks

const tasks = [
    { title: "Learn JS", completed: true },
    { title: "Watch TV", completed: false },
    { title: "Do Homework", completed: true }
];

const completedTask = tasks.filter(task => task.completed === true);
console.log(completedTask);

//Filter Long Words
const words = ["sun", "elephant", "moon", "butterfly", "sky"];
const longWords = words.filter(word => word.length > 4)
console.log(longWords);

//Remove Falsy Values
const mixed = [0, "hello", false, 42, "", null, "world"];
const origin = mixed.filter(mix => Boolean(mix))
console.log(origin);

//Filter by Nested Property

const users = [
    { name: "Asha", address: { city: "Dhaka" } },
    { name: "Mina", address: { city: "Chittagong" } },
    { name: "Rafi", address: { city: "Dhaka" } }
];

const dhakaUser = users.filter(user => user.address.city === "Dhaka")
console.log(dhakaUser);

//Filter Based on Multiple Conditions
const products = [
    { name: "Laptop", price: 80000, inStock: true },
    { name: "Phone", price: 20000, inStock: false },
    { name: "Tablet", price: 30000, inStock: true }
];

const stockProducts = products.filter(product => product.price > 25000 && product.inStock === true)
console.log(stockProducts);