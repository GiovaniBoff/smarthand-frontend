import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import './App.css';
import { Handpose } from './handpose';
import WebSocketConnection from './service/webSocketConnection';


function App() {
  // const [webSocket, setWebSocket] = useState<Socket>();
  // const event = 'send_message'
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const webSocketConnection = new WebSocketConnection('ws://localhost:4000', '/fingers');
  //       const ws = await webSocketConnection.getConnection();
  //       setWebSocket(ws);
  //     } catch (error) {
  //       console.log(`Error on socket: ${error}`);
  //     }
  //   })();
  // }, []);

  // const handleClick = () => {
  //   if (webSocket) {
  //     webSocket.emit(event,'Hello World');
  //   }
  // }
  return (
    <div className="App">
      <header className="App-header">
        <Handpose/>
      </header>
    </div>
  );
}

export default App;
