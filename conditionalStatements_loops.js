// Exercise 1: Temperature check using if-else

let temperature = 20; // initial random temperature

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Exercise 1: Temperature check using switch

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility Check using if-else

let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Exercise 2: Divisibility Check using switch

switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
// 1. Numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Even numbers between 1 and 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Sum of all numbers from 1 to 100

let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
console.log("Sum of numbers from 1 to 100:", totalSum);

// 4. Each element of the array
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 5. Largest number in the array
const moreNumbers = [3, 7, 2, 5, 10, 6];
let largestNumber = moreNumbers[0];

for (let i = 1; i < moreNumbers.length; i++) {
    if (moreNumbers[i] > largestNumber) {
        largestNumber = moreNumbers[i];
    }
}
console.log("Largest number:", largestNumber);

// Exercise 4: While loops
// 1. Numbers from 1 to 10

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Print all even numbers between 1 and 20
i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// 3. Calculate the sum of all numbers from 1 to 100
totalSum = 0;
i = 1;
while (i <= 100) {
    totalSum += i;
    i++;
}
console.log("Sum of numbers from 1 to 100:", totalSum);

// 4. Print all multiples of 5 less than 50
i = 1;
while (i < 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

// Exercise 5: Do While loops
// 1. Print numbers from 1 to 10
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2. Sum of all numbers from 1 to 100
totalSum = 0;
i = 1;
do {
    totalSum += i;
    i++;
} while (i <= 100);
console.log("Sum of numbers from 1 to 100:", totalSum);

// 3. Prompting the user to enter a number greater than 10
let userInput;
do {
    userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);
console.log("Valid number entered:", userInput);

// 4. Simple guessing game
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = prompt("Guess a number between 1 and 10:");
} while (guess != correctNumber);
console.log("Correct! The number was:", correctNumber);
