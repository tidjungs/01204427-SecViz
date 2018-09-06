const fs = require("fs");
const res = fs.readFileSync("./3.1.2.txt", "utf-8").split("\n");

const data = [];
let sum = 0;

res.forEach(line => {
  sum += parseInt(line.split(" ")[0]);
});
res.forEach(line => {
  const val = parseInt(line.split(" ")[0]);
  data.push({
    name: line.split(" ")[1] + "\n\n" + ((val / sum) * 100).toFixed(2) + " %",
    value: val
  });
});
console.log(sum);
// console.log(JSON.stringify(data));
