function addLog(newLog) {
  if (log === "") {
    log = newLog;
  } else {
    log = log + "\n" + newLog;
  }
}

function printLog() {

  if (!doRunControlTest) {
    activityLog.innerHTML = log;
    activityLog.scrollTop = activityLog.scrollHeight;
  }

  if (doRunControlTest && gamesPlayed >= gamesToPlay) {

    testTimeEnd = new Date().getTime();
    let duration = testTimeEnd - testTimeStart;
    console.log(log);
    console.log("test duration (seconds)= " + duration / 1000);
  }
}

function addDebugLog(newLog) {
  if (log === "") {
    log = newLog;
  } else {
    log = log + "\n" + newLog;
  }

  activityLog.innerHTML = log;
  activityLog.scrollTop = activityLog.scrollHeight;
}
