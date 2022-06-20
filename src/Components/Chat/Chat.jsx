import React, { useEffect, useState, useRef } from 'react'
import './Chat.css'

const Chat = ({socket, username, room}) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const scrollRef = useRef();
    const sendMessage = async () => {
        if(currentMessage !== ""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            };
            await socket.emit("send_message", messageData)
            setMessageList((list)=>[...list, messageData]);
        }
    }

    const scollToMyRef = () => {
        const scroll =
          scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
        scrollRef.current.scrollTo(0, scroll);
      };

    useEffect(()=>{
        scollToMyRef();
        socket.on("receive_message", (data)=>{
            setMessageList((list)=>[...list, data]);
        })
    }, [socket]);

    return (
    <div className='chat-window'>
        <div className='chat-header'>
            <p>배민 고객센터</p>
        </div>
        <div className='chat-body' ref={scrollRef}>
            {messageList.map((messageContent)=>{
                return (
                    <div 
                        className='message'
                        id={username === messageContent.author ? "other" : "you"}
                        >
                        <div>
                            <div className='message-content'>
                                <p>{messageContent.message}</p>
                            </div>
                            <div className='message-meta'>
                                <p id="time">{messageContent.time}</p>
                                <p id="author">{messageContent.author}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className='chat-footer'>
            <input 
                type="text" 
                placeholder='Hey...'
                onChange={(e)=> setCurrentMessage(e.target.value)}
            />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
    )
}

export default Chat