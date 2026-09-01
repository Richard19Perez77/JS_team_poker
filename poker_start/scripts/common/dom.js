// Small DOM helpers that replace the jQuery / jQuery UI usage in this game.

const animatingElements = new WeakSet();

function byId(id) {
    return document.getElementById(id);
}

function isElementHidden(el) {
    if (!el) {
        return true;
    }
    if (el.classList.contains("is-hidden") || el.hidden) {
        return true;
    }
    const style = window.getComputedStyle(el);
    return style.display === "none" || style.visibility === "hidden";
}

function isElementVisible(el) {
    return !isElementHidden(el);
}

function isElementAnimating(el) {
    return Boolean(el) && (animatingElements.has(el) || el.getAnimations().length > 0);
}

function stopElementAnimations(el) {
    if (!el) {
        return;
    }
    el.getAnimations().forEach(function (animation) {
        animation.cancel();
    });
    animatingElements.delete(el);
}

function runAnimation(el, keyframes, duration, onDone) {
    stopElementAnimations(el);

    const animation = el.animate(keyframes, {
        duration: duration,
        easing: "ease"
    });
    animatingElements.add(el);

    let completed = false;
    function finish() {
        if (completed) {
            return;
        }
        completed = true;
        animatingElements.delete(el);
        animation.cancel();
        if (onDone) {
            onDone();
        }
    }

    animation.finished.then(finish).catch(finish);
    window.setTimeout(finish, duration + 50);
}

function slideToggle(el, duration, callback) {
    if (!el) {
        return;
    }
    if (isElementHidden(el)) {
        slideDown(el, duration, callback);
    } else {
        slideUp(el, duration, callback);
    }
}

function slideUp(el, duration, callback) {
    const startHeight = el.getBoundingClientRect().height;
    el.style.overflow = "hidden";
    runAnimation(el, [
        { height: startHeight + "px", opacity: 1 },
        { height: "0px", opacity: 0 }
    ], duration, function () {
        el.classList.add("is-hidden");
        el.style.height = "";
        el.style.opacity = "";
        el.style.overflow = "";
        if (callback) {
            callback();
        }
    });
}

function slideDown(el, duration, callback) {
    el.style.height = "0px";
    el.style.opacity = "0";
    el.style.overflow = "hidden";
    el.classList.remove("is-hidden");
    el.hidden = false;
    const endHeight = el.scrollHeight;
    runAnimation(el, [
        { height: "0px", opacity: 0 },
        { height: endHeight + "px", opacity: 1 }
    ], duration, function () {
        el.style.height = "";
        el.style.opacity = "";
        el.style.overflow = "";
        if (callback) {
            callback();
        }
    });
}

function fadeIn(el, duration, callback) {
    if (!el) {
        return;
    }
    el.classList.remove("is-hidden");
    el.hidden = false;
    if (window.getComputedStyle(el).display === "none") {
        el.style.display = "block";
    }
    runAnimation(el, [
        { opacity: 0 },
        { opacity: 1 }
    ], duration, callback);
}

function fadeOut(el, duration, callback) {
    if (!el) {
        return;
    }
    runAnimation(el, [
        { opacity: 1 },
        { opacity: 0 }
    ], duration, function () {
        el.classList.add("is-hidden");
        if (callback) {
            callback();
        }
    });
}

function getElementOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

function makeDraggable(el) {
    if (!el) {
        return;
    }

    let dragging = false;
    let startX = 0;
    let startY = 0;
    let origLeft = 0;
    let origTop = 0;

    el.addEventListener("pointerdown", function (e) {
        if (e.pointerType === "mouse" && e.button !== 0) {
            return;
        }
        dragging = true;
        el.setPointerCapture(e.pointerId);
        const rect = el.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        origLeft = rect.left + window.scrollX;
        origTop = rect.top + window.scrollY;
        el.style.position = "absolute";
        el.style.right = "auto";
        el.style.margin = "0";
        el.style.left = origLeft + "px";
        el.style.top = origTop + "px";
    });

    el.addEventListener("pointermove", function (e) {
        if (!dragging) {
            return;
        }
        el.style.left = (origLeft + e.clientX - startX) + "px";
        el.style.top = (origTop + e.clientY - startY) + "px";
    });

    function endDrag() {
        dragging = false;
    }

    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
}

function setupIndexedButtons(ids, handler) {
    ids.forEach(function (id, index) {
        const button = byId(id);
        if (button) {
            button.addEventListener("click", function () {
                handler(index);
            });
        }
    });
}
