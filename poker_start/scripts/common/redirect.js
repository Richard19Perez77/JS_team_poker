/*
 * Picks desktop vs mobile HTML before the game scripts load.
 *
 * Loaded first from index.html and mobileindex.html.
 *
 * Layout is chosen in this order:
 *   1. ?layout=mobile or ?layout=desktop on the URL (for testing)
 *   2. That same choice saved in sessionStorage for this tab
 *   3. The browser user agent (phones / iPads -> mobile)
 *
 * Then it sends you to the matching page if you are on the other one.
 * location.replace is used so Back does not bounce between the two files.
 */
(function () {
    // Test override: index.html?layout=mobile  or  mobileindex.html?layout=desktop
    var params = new URLSearchParams(window.location.search);
    var override = params.get("layout");
    if (override === "mobile" || override === "desktop") {
        try {
            sessionStorage.setItem("layoutOverride", override);
        } catch (e) {
            // Private mode or blocked storage; ignore and use the URL for this load only.
        }
    }

    var layout = override;
    if (!layout) {
        try {
            layout = sessionStorage.getItem("layoutOverride");
        } catch (e) {
        }
    }

    // No override: guess from the user agent string.
    if (!layout) {
        var ua = navigator.userAgent || "";
        // "Mobi" covers most phones. "Android" also matches many tablets.
        // iPadOS 13+ reports as Macintosh, so also treat Mac + multi-touch as mobile.
        var mobile = /Mobi|Android|iPhone|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)
            || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
        layout = mobile ? "mobile" : "desktop";
    }

    // Current file name, e.g. "index.html". A folder URL has an empty name.
    var file = window.location.pathname.split("/").pop();
    if (!file) {
        file = "index.html";
    }

    var want = layout === "mobile" ? "mobileindex.html" : "index.html";
    if (file !== want) {
        // Keep ?layout=... (and any other query) on the redirected URL.
        window.location.replace(want + window.location.search);
    }
})();
