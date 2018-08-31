const fs = require("fs");

const times = [];
const loginCount = {};
const logoutCount = {};
// 1483290000 is Start of Day
// 1483376400 is End of Day
for (i = 1483290000; i <= 1483376400; i += 900) {
  times.push(i);
  loginCount[i] = 0;
  logoutCount[i] = 0;
}

const res = fs
  .readFileSync("./login-20170102-anon.csv.txt", "utf-8")
  .split("\n");

res.forEach(line => {
  if (line) {
    const action = line.split(" ")[8];
    if (action == "login-page") {
      const loginTime = Math.floor(line.split(" ")[1] / 1000);
      const nearestTime = calculateNearestTime(loginTime);
      loginCount[nearestTime]++;
    } else {
      const loginTime = Math.floor(line.split(" ")[1] / 1000);
      const nearestTime = calculateNearestTime(loginTime);
      loginCount[nearestTime]++;
      const logoutTime = Math.floor(line.split(" ")[1] / 1000);
      const nearestTime2 = calculateNearestTime(logoutTime);
      logoutCount[nearestTime2]++;
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

// console.log(loginCount);
// console.log(logoutCount);

const data = [];

let minute = 0;
let hour = 0;
for (t in loginCount) {
  data.push([
    `${hour}:${minute === 0 ? "00" : minute}`,
    loginCount[t],
    logoutCount[t]
  ]);
  minute += 15;
  if (minute == 60) {
    minute = 0;
    hour += 1;
  }
}

console.log(data);
