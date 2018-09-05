const fs = require("fs");
const res = fs.readFileSync("./3.1.1.txt", "utf-8").split("\n");

String.prototype.insertAt = function(index, string) {
  return this.substr(0, index) + string + this.substr(index);
};

const data = [];
const indexs = [];
res.forEach(line => {
  data.push(line.split(" ")[0]);
  indexs.push(
    line
      .split(" ")[1]
      .replace("./raw_data/web-anon-20170410", "")
      .replace(".0.txt", "")
      .insertAt(2, ":")
  );
});
console.log(data);
console.log(indexs);
