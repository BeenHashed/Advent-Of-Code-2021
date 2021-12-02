const {readFileSync} = require("fs");

// Part 1
let counter = 0;
let lines = readFileSync("day1.txt", "utf-8").split("\n").map(i => Number(i));
for(let i = 1; i < lines.length; i++) {
    let previous = lines[i - 1];
    let current = lines[i];
    if(current > previous) counter++;
}
console.log(counter)


// Part 2
counter = 0;
let previous = 0;
let newLines = readFileSync("day1.txt", "utf-8").split("\n").map(i => Number(i));
for(let i = 1; i < newLines.length; i++) {
    let sum = newLines[i] + newLines[i + 1] + newLines[i + 2];
    if(sum > previous) counter++
    previous = sum;
}
console.log(counter)