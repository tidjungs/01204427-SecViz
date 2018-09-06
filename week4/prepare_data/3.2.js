const fs = require("fs");
const res = fs
  .readFileSync("./raw_data/web-anon-201704100300.0.txt", "utf-8")
  .split("\n");

const topUsers = [
  "RMUn6owxz3Npjow@ku.ac.th",
  "RMUjtMPNJ6aT3TB@ku.ac.th",
  "RMUpKGYn9d5by4N@ku.ac.th",
  "RMUpKmcaiQtXA57@ku.ac.th",
  "RMUkdLcDsnd6MSH@ku.ac.th",
  "RMUoaSzP7ZJYyJK@ku.ac.th",
  "RMUpKbutiWofd2x@ku.ac.th",
  "RMUnr8aAbM8vujj@ku.ac.th",
  "RMUnqxsXa4zFxGv@ku.ac.th",
  "RMUoaSzN7LdQ68x@ku.ac.th"
];

const data = res
  .filter(line => topUsers.includes(line.split(" ")[4]))
  .map(line => {
    const time = new Date(parseInt(line.split(" ")[0]) / 1000);
    const username = line.split(" ")[4];
    const srcIP = line.split(" ")[10];
    const dstIP = line.split(" ")[11];
    const dstPort = line.split(" ")[14];
    const host = line.split(" ")[16];
    return [time.getSeconds(), username, srcIP, dstIP, host, dstPort];
  });

data.pop();
console.log(JSON.stringify(data));
