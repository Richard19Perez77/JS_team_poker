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
