function injectTheScript() {
    chrome.tabs.executeScript(null, { file: "content.js" });

}


document.getElementById('Removead').addEventListener('click', injectTheScript);

