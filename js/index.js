
const message = "Hello JS!";
alert(message);

// Отримати дані від користувача
const userName = prompt('Enter your name');
alert('Hello ' + userName);

const userAge = parseFloat(prompt('Enter your age'));
alert('Your age is ' + userAge);

const nextAge = add(userAge, 1); // userAge + 1;
alert('Next year you will be ' + nextAge);

if (userAge >= 18) { // > < >= <= === !== && ||
    alert('You are adult!');
} else {
    alert('You are underaged!');
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// const add = (a, b) => a + b;
