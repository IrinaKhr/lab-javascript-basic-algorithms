// Iteration 1: Names and Input
let hacker1;
hacker1 = "Irina"
console.log("The drivers name is", hacker1);
let hacker2;
hacker2 = "Marcelo";
console.log("The navigator name is", hacker2);

// Iteration 2: Conditionals


const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) { 
    console.log(`The driver has the longest name, it has ${hacker2Length} characters`) 
} else if (hacker1Length < hacker2Length) {
     console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`) 
} else { 
    console.log(`Wow, you both have equally long names, ${hacker2Length} characters!`) 
}

// Iteration 3: Loops
const nameinCapitals = []
for (value of hacker1) {nameinCapitals.push(value)}

console.log (hacker1.toUpperCase().split (``))

const reversedName = []
for (value of hacker2) {reversedName.push (value)}

console.log (reversedName.reverse().join(``))

let namesResult = `What?! You both have the same name?`

const names = [hacker1, hacker2].sort()
const hackerOneIndex = names.indexOf(hacker1)
const hackerTwoIndex = names.indexOf(hacker2)

if (hackerOneIndex > hackerTwoIndex) {namesResult = `The drivers name goes first.`}

else if (hackerOneIndex < hackerTwoIndex){namesResult = `Yo, the navigator goes first definitely.`}

console.log(namesResult)