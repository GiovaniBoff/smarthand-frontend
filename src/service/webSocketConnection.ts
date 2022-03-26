import { io, Socket } from "socket.io-client";
export default class WebSocketConnection {
  public webSocketInstance: WebSocket | undefined;
  public readonly SERVICE_URL: string = "wss://b75c-2804-0-2460-3000-00-3819.ngrok.io";

  public connect(path: string): Promise<WebSocket> {
    // const socket = io(this.SERVICE_URL, {
    //   path,
    //   extraHeaders: {
    //     "Access-Control-Allow-Origin": "ws://ccf7-2804-0-2460-3000-00-3819.ngrok.io",
    //   },
    // });

    const socket = new WebSocket(this.SERVICE_URL);
    return new Promise((resolve, reject) => {
      socket.onopen = () => {
        resolve(socket);
      };

      socket.onerror = (error) => {
        console.log(error);
        reject(error);
      };
    });
  }
}
