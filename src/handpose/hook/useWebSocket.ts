import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import WebSocketConnection from "../../service/webSocketConnection";
type gestureFeedbackBody = {
  status: string;
  message: string;
  isAvailable: boolean;
};

const useWebSocket = (poseBackendMapper: {}) => {
  const webSocketRef = useRef<Socket>();
  const canSendRef = useRef<boolean>(true);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const GESTURE_SIGNAL = "GESTURE_SIGNAL";
  const listenFeedbackSocketEvent = (ws: Socket) => {
    const GESTURE_FEEDBACK = "GESTURE_FEEDBACK";
    ws.on(GESTURE_FEEDBACK, (body: gestureFeedbackBody) => {
      console.log({ body });
      canSendRef.current = body.isAvailable;
    });
  };

  const sendMessage = (msg: keyof {}) => {
    console.log(`Sending message ${msg}`);
    const convertedMessage = poseBackendMapper[msg];
    if (!validateSendPose(convertedMessage)) {
      return;
    }

    canSendRef.current = false;
    webSocketRef.current!.emit(GESTURE_SIGNAL, convertedMessage);
  };

  const validateSendPose = (convertedMessage: string): boolean => {
    const errorCollector = new Set<string>();
    if (!canSendRef.current) {
      errorCollector.add("Application is not ready to send");
    }

    if (!convertedMessage) {
      errorCollector.add("Pose could not be converted to a known one");
    }

    if(!webSocketRef.current){
      errorCollector.add("Websocket object is not instanced");
    }

    if (webSocketRef.current && !webSocketRef.current.connected) {
      errorCollector.add("Websocket is not connected");
    }

    if (errorCollector.size > 0) {
      let errorMessageAccumulator = "";
      errorCollector.forEach((errorMessage) => {
        if (errorMessageAccumulator.length > 1) {
          errorMessageAccumulator += `, ${errorMessage}`;
        } else {
          errorMessageAccumulator += errorMessage;
        }
      });

      console.info(`Couldn't send pose due: ${errorMessageAccumulator}`);
      return false;
    }

    return true;
  };

  useEffect(() => {
    // ( async function () {
    try {
      // const webSocketConnection = new WebSocketConnection(
      //   "ws://localhost:4000",
      //   "/fingers"
      // );
      const ws = io("ws://localhost:4000/fingers");
      webSocketRef.current = ws;
      console.log(`Socket connected, ${ws.active}`);
      setIsConnected(ws.active)
      listenFeedbackSocketEvent(ws);

      ws.on("error", (error) => {
        console.log(`Error on socket: ${error}`);
      });

      ws.on('disconnect', () => {
          setIsConnected(false);
          canSendRef.current = true;
      })
      
    } catch (error) {
      console.log(`Error on socket: ${error}`);
    }
    // })();

    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.disconnect();
      }
    };
  }, []);

  return { sendMessage, isConnected };
};

export default useWebSocket;
