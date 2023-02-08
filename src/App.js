import './App.css';
import React from 'react';
import { useState, useEffect, useRef} from 'react';

function App() {

    const roomName = 'helloRoom';
    const hostname = window.location.hostname;
    const port = '8080';
    const [chatSocket, setChatSocket] = useState(new WebSocket('ws://'+hostname+':'+ port+'/ws/'+roomName+'/'));
  
    const [messages, setMessages] = useState([]);
    const inputValue = useRef(null);

    useEffect(() => {

      chatSocket.addEventListener('error', (error) => {
        console.log('websocket error: ', error);
      });

      //  onmessage is a property of the WebSocket object in JavaScript that you can use to specify a callback function that should be executed whenever a message is received over the WebSocket connection.
      chatSocket.onmessage = (event) => {
          const receivedData = JSON.parse(event.data);
          console.log(receivedData.message);
          setMessages(messages => [...messages, receivedData.message]);

      };

      chatSocket.onopen = (event) => {
        console.log("WebSocket connection established");
      };

      return () => {
        if(chatSocket.readyState === 1){
          chatSocket.close();
        }
      };

    }, [chatSocket]);

    const clickSendToSocket = () => {
      if(chatSocket != null){
        chatSocket.send(JSON.stringify({
          'message': inputValue.current
        }));
      }
      else{
        console.log("chatsocket not ready!")
      }
    }

    const enterSendToSocket = () => {
        chatSocket.send(JSON.stringify({
          'message': inputValue.current
        }))
    }
  
    const Chat = (props) => {

      return (
        <div className='chatroom-container'>
          <div className='chatroom-display'>
            {messages}
          </div >
          <div className='chatroom-field'>
            <input
                type="text"
                autoFocus
                className='chatroom-field-input'
                onChange = {(event) => {inputValue.current = event.target.value}}
                onKeyDown={(event) => {
                  if(event.key === "Enter"){
                    enterSendToSocket();
                  }}}
              />
            <button type="submit" onClick={clickSendToSocket} >Submit</button>
          </div>
        </div>
      )
    }


  return (
    <div style={{width: '100%', height: '400px'}}>
      <Chat/>
    </div>
  );
}


export default App;
