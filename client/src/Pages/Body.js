import React from 'react'
import ChatBox from '../Components/ChatBox'
import ChatList from '../Components/ChatList'
import './Body.css'


function Body() {
    return (
        <div className="body">
            <ChatList/>
            <ChatBox/>
        </div>
    )
}

export default Body
