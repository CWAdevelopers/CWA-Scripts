var script = document.createElement('script');
var botid = document.currentScript.getAttribute("data-bot-id");
script.src = "https://app.aminos.ai/js/chat_plugin.js";
script.setAttribute('async', '');
script.setAttribute('data-bot-id', botid);
document.head.appendChild(script);