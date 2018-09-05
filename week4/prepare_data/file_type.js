const fs = require("fs");
const egressLines = fs.readFileSync("./egress.txt", "utf-8").split("\n");
const ingressLines = fs.readFileSync("./ingress.txt", "utf-8").split("\n");

const getTypeCount = lines => {
  const data = lines.filter(line => line !== "-").map(line => {
    return line
      .replace(/\?.*/, "")
      .split(".")
      .pop()
      .split("&")[0]
      .split("%")[0];
  });

  const dict = {};

  data.forEach(d => {
    if (d.indexOf("/") !== -1) {
      dict["unknown"] = "unknown" in dict ? dict["unknown"] + 1 : 1;
    } else {
      d = d.toLowerCase();
      dict[d] = d in dict ? dict[d] + 1 : 1;
    }
  });

  const items = Object.keys(dict).map(key => {
    return [key, dict[key]];
  });

  items.sort((first, second) => second[1] - first[1]);
  return items.slice(0, 10);
};

console.log(getTypeCount(egressLines));
console.log(getTypeCount(ingressLines));
