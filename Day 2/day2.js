const {readFileSync} = require("fs");

// Part 1
let positionsFile = readFileSync("day2.txt", "utf8").replace(/\r/g, "").split(/[' '\n]/)
let horizantal = 0;
let depth = 0;
console.debug(positionsFile)

let positions = positionsFile.map(i => {
    if(i.length === 1) return Number(i);
    else return i;
})
console.debug(positions)

for(let i = 1; i < positions.length; i+=2) {
    let instruct = i - 1;
    if(positions[instruct] === "forward") horizantal += positions[i];
    else if(positions[instruct] === "down") depth += positions[i];
    else depth -= positions[i];
}
console.log(horizantal * depth)