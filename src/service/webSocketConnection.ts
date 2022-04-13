
import { Manager, Socket } from "socket.io-client";


export default class WebSocketConnection {
  private manager: Manager;
  private path: string;
  private urlService?: string;
  private socket!: Socket;
  constructor(urlService: string, path: string) {
    this.manager = new Manager(urlService, {
      autoConnect: true
    });
    this.path = path;
    this.urlService = urlService;
  }

  public getConnection(): Promise<Socket> {
    return new Promise((resolve, reject) => {
      try {
        this.socket = this.manager.socket(this.path)
        this.socket.on('connect', () => {
          resolve(this.socket);
        })
      } catch (error) {
        reject(error)
      }
    })
  }
  public sendMessage(): void {
  }
}
