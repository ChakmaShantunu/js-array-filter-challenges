//Even Numbers Filter

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

//Positive Numbers Only

const nums = [-3, 5, -7, 8, 0, 12, -1, 0];

const positiveNumbers = nums.filter(num => num < 0);
console.log(positiveNumbers);