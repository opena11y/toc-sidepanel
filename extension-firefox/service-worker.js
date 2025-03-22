/* service-worker.js */

const debug = true;

debug && console.log(`[chrome ]: ${typeof chrome}`);
debug && console.log(`[chrome ][    sidePanel]: ${typeof chrome} ${ chrome ? typeof chrome.sidePanel : ''}`);
debug && console.log(`[opr    ]: ${typeof opr}`);
debug && console.log(`[browser]: ${typeof browser}`);

// Toggle sidebar from toolbar icon for Chrome
if (typeof chrome  === 'object' && chrome.sidePanel) {
  debug && console.log(`[Added Chrome sidePanel]`);
  chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  });
}

// Toggle sidebar from toolbar icon for Firefox
if (typeof browser === 'object' && browser.action) {
  debug && console.log(`[Added Browser Action]`);
  browser.action.onClicked.addListener(function () {
    browser.sidebarAction.toggle();
  });
}

// NOTE: Opera does not seem to support opening and
// closing the sidebar using a toolbar icon
