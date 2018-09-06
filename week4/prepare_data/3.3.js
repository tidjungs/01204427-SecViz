const fs = require("fs");
const res = fs.readFileSync("./3.3.txt", "utf-8").split("\n");

const data = res.filter(line => line.split(" ")[1] !== "-").map(line => {
  return {
    name: line.split(" ")[1],
    value: line.split(" ")[0]
  };
});
data.pop();
console.log(JSON.stringify(data));
