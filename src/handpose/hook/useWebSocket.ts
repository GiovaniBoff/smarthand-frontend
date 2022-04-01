import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import WebSocketConnection from "../../service/webSocketConnection";

const useWebSocket = () => {
    const [webSocket, setWebSocket] = useState<Socket>();
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

    return webSocket;
}

export default useWebSocket;