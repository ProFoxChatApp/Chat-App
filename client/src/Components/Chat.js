import React,{useState} from 'react'

function Chat({
    user,
    setSelectedUser,
    selectedUser
}) {
 
    const handleClick = () => {
        setSelectedUser(user)
    }

    return (
        <div className={selectedUser == user ? 'active' : 'name'} onClick={handleClick}>
            <img src={user.pfp} alt="" className="pfp" />
            {user.name}
        </div>
    )
}

export default Chat
