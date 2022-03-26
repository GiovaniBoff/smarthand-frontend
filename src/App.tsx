import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Handpose } from './handpose';
import WebSocketConnection from './service/webSocketConnection';
import { Socket } from 'socket.io-client';

function App() {
  const [webSocket, setWebSocket] = useState<WebSocket>();
  useEffect(() => {
    (async function () {
      try {
        const webSocketConnection = new WebSocketConnection();
        const ws = await webSocketConnection.connect('');
        setWebSocket(ws);
      } catch (error) {
        console.log(`Error on socket: ${error}`);
      }
    })();
  }, []);

  const handleClick = () => {
    if (webSocket) {
      webSocket.send('Hello World');
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
