const chatmini = document.getElementById("chat-mini")
const icoClose = document.querySelector(".icon-close")
const chat = document.getElementById("Chat")
const chatText = document.getElementById('chat-input')
chatmini.addEventListener("click", function() {
    chat.classList.remove("active")
})
icoClose.addEventListener("click", function() {
    chat.classList.add('active')
})

chatText.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        let text = this.value.trim()
        if (chatText.value != 0) {
            let div = document.createElement("div");
            div.className = "message support"
            let ptext = document.createElement('p')
            ptext.innerText = text;
            let now = new Date();
            let ptime = document.createElement('p')
            ptime.className = 'times'
            ptime.innerText = now.getHours() + ":" + now.getMinutes()
            div.appendChild(ptext)
            div.appendChild(ptime)
            document.querySelector('main').appendChild(div)
            chatText.value = ''
            div.scrollIntoView()
        }
    }
})