for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}

let i = 0;
while (i < 5) {
    console.log("While loop iteration: " + i);
    i++;
}

let j = 0;
do {
    console.log("Do...while loop iteration: " + j);
    j++;
} while (j < 5);

const person = { name: "John", age: 30, city: "Lagos" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log("For...of loop value: " + number);
}
