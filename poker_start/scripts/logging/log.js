function addLog(newLog) {
  if (log === "") {
    log = newLog;
  } else {
    log = log + "\n" + newLog;
  }
}

function decodeHtmlEntities(text) {
  const el = document.createElement("div");
  el.innerHTML = text;
  return el.textContent;
}

function writeActivityLog() {
  if (!activityLog) {
    return;
  }
  activityLog.value = decodeHtmlEntities(log);
  activityLog.scrollTop = activityLog.scrollHeight;
}

function printLog() {
  if (!doRunControlTest) {
    writeActivityLog();
  }
}

function addDebugLog(newLog) {
  if (log === "") {
    log = newLog;
  } else {
    log = log + "\n" + newLog;
  }

  writeActivityLog();
}

