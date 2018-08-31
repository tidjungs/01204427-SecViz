const fs = require("fs");

const times = [];
const ipv4 = {};
const ipv6 = {};
const dual = {};
// 1483290000 is Start of Day
// 1483376400 is End of Day
for (i = 1483290000; i <= 1483376400; i += 900) {
  times.push(i);
  ipv4[i] = 0;
  ipv6[i] = 0;
  dual[i] = 0;
}

const res = fs
  .readFileSync("./login-20170102-anon.csv.txt", "utf-8")
  .split("\n");

res.forEach(line => {
  if (line) {
    const v4 = line.split(" ")[5];
    const v6 = line.split(" ")[6];
    const loginTime = Math.floor(line.split(" ")[1] / 1000);
    const nearestTime = calculateNearestTime(loginTime);
    if (v4 !== "-" && v6 != "-") {
      dual[nearestTime]++;
    } else if (v4 !== "-") {
      ipv4[nearestTime]++;
    } else if (v6 !== "-") {
      ipv6[nearestTime]++;
    }
  }
});

function calculateNearestTime(targetTime) {
  let t = 0;
  let min = Math.abs(targetTime - times[0]);
  times.forEach((time, i) => {
    let nm = Math.abs(targetTime - time);
    if (nm < min) {
      min = nm;
      t = i;
    }
  });
  return times[t];
}

const data = [];

let minute = 0;
let hour = 0;
for (t in ipv4) {
  data.push([
    `${hour}:${minute === 0 ? "00" : minute}`,
    ipv4[t],
    ipv6[t],
    dual[t]
  ]);
  minute += 15;
  if (minute == 60) {
    minute = 0;
    hour += 1;
  }
}

console.log(data);
