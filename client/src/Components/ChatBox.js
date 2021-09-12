import React from 'react'

function ChatBox() {
    return (
        <div className="chatBox">
            <div className="chatArea">

            </div>
            <div className="msgArea">
                <input type="text" placeholder="Message Someone" className="textBox"/>
                <button className="sendBtn">Send</button>
            </div>
        </div>
    )
}

export default ChatBox
