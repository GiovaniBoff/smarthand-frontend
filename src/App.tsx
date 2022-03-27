import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import './App.css';
import WebSocketConnection from './service/webSocketConnection';


function App() {
  const [webSocket, setWebSocket] = useState<Socket>();
  const channel = 'send_message'
  useEffect(() => {
    (async function () {
      try {
        const webSocketConnection = new WebSocketConnection('ws://localhost:4000', '/fingers');
        const ws = await webSocketConnection.getConnection();
        setWebSocket(ws);
      } catch (error) {
        console.log(`Error on socket: ${error}`);
      }
    })();
  }, []);

  const handleClick = () => {
    console.log(webSocket);
    
    if (webSocket) {
      webSocket.emit(channel,'Hello World');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Handpose/> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleClick}>SEND MESSAGE</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
