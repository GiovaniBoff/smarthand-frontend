import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import WebSocketConnection from "../../service/webSocketConnection";
type gestureFeedbackBody = {
    status: string,
    message: string,
    isAvailable: boolean
}

const useWebSocket = (poseBackendMapper: {}) => {
    const [webSocket, setWebSocket] = useState<Socket>();
    const canSendRef = useRef<boolean>(true);

    const GESTURE_SIGNAL = 'GESTURE_SIGNAL';
    const listenFeedbackSocketEvent = () => {
        const GESTURE_FEEDBACK = 'GESTURE_FEEDBACK'
        webSocket?.on(GESTURE_FEEDBACK, (body: gestureFeedbackBody) => {
            console.log({body});
            canSendRef.current = body.isAvailable;
        })
    }

    const sendMessage = (msg: keyof {}) => {
        console.log(`Sending message ${msg}`)
        const convertedMessage = poseBackendMapper[msg];
        if (!canSendRef.current || !webSocket || !convertedMessage) {
            console.error("Can't send the gesture to backend");
            return;
        }


        canSendRef.current = false;
        webSocket?.emit(GESTURE_SIGNAL, convertedMessage);

    }

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

    useEffect(() => {
        if (webSocket) {
            listenFeedbackSocketEvent();
        }
    }, [webSocket]);

    return { sendMessage };
}

export default useWebSocket;