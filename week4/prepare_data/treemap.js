const fs = require("fs");
const res = fs.readFileSync("./users", "utf-8").split("\n");

const data = res.map(r => ({
  name: r.split(" ")[1],
  value: parseInt(r.split(" ")[0])
}));

console.log(JSON.stringify(data));
