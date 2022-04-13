import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import './App.css';
import { Handpose } from './handpose';
import WebSocketConnection from './service/webSocketConnection';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Handpose/>
      </header>
    </div>
  );
}

export default App;
