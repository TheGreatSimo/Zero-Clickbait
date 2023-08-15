console.log("hey from the popup")

document.querySelector("#btnStart").addEventListener('click', () => {
   chrome.runtime.sendMessage({ text : "Start" });
});
    
document.querySelector("#btnStop").addEventListener('click', () => {
   chrome.runtime.sendMessage({ text : "Stop" });
});


chrome.runtime.onMessage.addListener((msg) => {
    document.body.innerHTML += `<div id="mydiv">${msg.text}</div>`;
});
