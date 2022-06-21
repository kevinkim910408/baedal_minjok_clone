import React, { useEffect, useState, useRef } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import './Chat.css'

const Chat = ({socket, username, room}) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const inputRef = useRef();
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
            await socket.emit("chat", messageData)
            setMessageList((list)=>[...list, messageData]);
            inputRef.current.value="";
        }
    }


    useEffect(()=>{
        socket.on("chat", (data)=>{
            setMessageList((list)=>[...list, data]);
        })
    }, [socket]);

    return (
    <div className='chat-window'>
        <div className='chat-header'>
            <p>배민 고객센터</p>
        </div>
        <div className='chat-body'>
            <ScrollToBottom className='message-container'>
            {messageList.map((messageContent, i)=>{
                return (
                    <div 
                        className='message'
                        id={username === messageContent.author ? "other" : "you"}
                        key={i}
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
            </ScrollToBottom>
        </div>
        <div className='chat-footer'>
            <input 
                type="text" 
                placeholder='대화를 입력하세요.'
                onChange={(e)=> setCurrentMessage(e.target.value)}
                onKeyDown={(e)=>{
                    e.key === 'Enter' && sendMessage();
                }}
                ref={inputRef}
            />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
    )
}

export default Chat