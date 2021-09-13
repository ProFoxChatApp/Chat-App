import React, { useState } from 'react'
import Chat from './Chat'
import users from './demo-users'

function ChatList() {
    
    const [selectedUser, setSelectedUser] = useState()

    return (
        <div className="chatList">
            {
                users.map(user => {
                    console.log(user);
                    return (
                        <Chat user={user}  setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
                    )
                })
            }
        </div>
    )
}

export default ChatList
