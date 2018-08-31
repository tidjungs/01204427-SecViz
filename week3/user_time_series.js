const fs = require("fs");

const userTime = [];
const userTimeCount = {};
for (i = 1483290000; i < 1483376400; i += 900) {
  userTime.push(i);
  userTimeCount[i] = 0;
}
// console.log(timeCount);

const res = fs
  .readFileSync("./login-20170102-anon.csv.txt", "utf-8")
  .split("\n");

res.forEach(line => {
  if (line) {
    const loginTime = line.split(" ")[1];
    const logoutTime = line.split(" ")[3];
    if (logoutTime !== "-") {
      userTime.forEach(time => {
        if (
          Math.floor(loginTime / 1000) <= time &&
          Math.floor(logoutTime / 1000) >= time
        ) {
          userTimeCount[time]++;
        }
      });
    }
  }
});

console.log(userTimeCount);
