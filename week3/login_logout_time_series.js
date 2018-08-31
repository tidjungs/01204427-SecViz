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
    if (action == "login-page" || action == "RE-LOGIN") {
      const loginTime = Math.floor(line.split(" ")[1] / 1000);
      const nearestTime = calculateNearestTime(loginTime);
      loginCount[nearestTime]++;
    } else if (action == "logout-page") {
      const logoutTime = Math.floor(line.split(" ")[1] / 1000);
      const nearestTime = calculateNearestTime(logoutTime);
      logoutCount[nearestTime]++;
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

console.log(loginCount);
console.log(logoutCount);
