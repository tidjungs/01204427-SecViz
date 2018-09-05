const fs = require("fs");
const res = fs
  .readFileSync("./raw_data/web-anon-201704100300.0.txt", "utf-8")
  .split("\n");

const data = res.map(line => {
  const time = line.split(" ")[0];
  const srcIP = line.split(" ")[10];
  const dstIP = line.split(" ")[11];
  const dstPort = line.split(" ")[14];
  const host = line.split(" ")[16];
  return [time, srcIP, dstIP, dstPort, host];
});

console.log(data);
