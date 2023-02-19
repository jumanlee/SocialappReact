import './App.css';
import React from 'react';
import { useState, useEffect, useRef} from 'react';
import Navbar from "./Navbar"
import Chat from "./Chat"
import {Route, Routes} from 'react-router-dom'

    
function App() {

  return (
    <>
     <Navbar />
     <div>
      <Routes>
        <Route path="/" element={<div>Page not found liao</div>} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
     </div>
    </>
  
  )
}

export default App;

// function App() {

    
//     const [messages, setMessages] = useState([]);
//     const inputValue = useRef(null);
//     const chatSocket = useRef(null);

// //using to useEffect. The order of the useEffect is important. 
//     useEffect(() => {

//       const roomName = 'helloRoom';
//       const hostname = window.location.hostname;
//       const port = '8080';

//       chatSocket.current = new WebSocket('ws://'+hostname+':'+ port+'/ws/'+roomName+'/');

//       console.log(chatSocket.current);

//       chatSocket.current.onopen = (event) => {
//         console.log("WebSocket connection established");
//       };

//       //to ensure the correct instance is called in the clean up
//       const chatSocketCurrent = chatSocket.current;

//       return () => {
//         console.log('clean up called');
//         chatSocketCurrent.close();
//       };

//     }, []);

//     //this useEffect is for when chatSocket is successfully connected. It tracks chatSocket.current as dependency.
//     useEffect(() => {
//       if(chatSocket.current != null){ 

//         //add event listener to listen for error
//         chatSocket.current.addEventListener('error', (error) => {
//           console.log('websocket error: ', error);
//         });

//         // onmessage is a property of the WebSocket object in JavaScript that you can use to specify a callback function that should be executed whenever a message is received over the WebSocket connection.
//         chatSocket.current.onmessage = (event) => {
//             const receivedData = JSON.parse(event.data);
//             console.log(receivedData.message);
//             setMessages(messages => [...messages, receivedData.message]);
//         };
//       }

//     }, []);

//     const clickSendToSocket = () => {
//       if(chatSocket.current != null){
//         chatSocket.current.send(JSON.stringify({
//           'message': inputValue.current
//         }));
//       }
//       else{
//         console.log("chatsocket not ready!")
//       }
//     }

//     const enterSendToSocket = () => {
//         chatSocket.current.send(JSON.stringify({
//           'message': inputValue.current
//         }))
//     }
  
//     const Chat = (props) => {

//       return (
//         <div className='chatroom-container'>
//           <div className='chatroom-display'>
//             {props.messages.map(
//               (string, index) => (
//                 <div key={index}>{string}</div>
//               ))}
//           </div >
//           <div className='chatroom-field'>
//             <input
//                 type="text"
//                 autoFocus
//                 className='chatroom-field-input'
//                 onChange = {(event) => {inputValue.current = event.target.value}}
//                 onKeyDown={(event) => {
//                   if(event.key === "Enter"){
//                     enterSendToSocket();
//                   }}}
//               />
//             <button type="submit" onClick={clickSendToSocket} >Submit</button>
//           </div>
//         </div>
//       )
//     }


//   return (
//     <div style={{width: '100%', height: '400px', marginTop: '5%'}}>
//       <Navbar/>
//       <Chat messages={messages}/>
//     </div>
//   );
// }


// export default App;
