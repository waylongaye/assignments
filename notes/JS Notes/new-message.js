function newMessage(){
    // create new div
    var newMessage = document.createElement("div");
    // give it classes
    newMessage.classList = "message right";
    // give it text
    newMessage.textContent = document.getElementById("messageInput").value
    // append it to DOM (div.messages)
    document.getElementsByClassName("messages")[0].insertBefore(newMessage)
}