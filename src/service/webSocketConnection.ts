
import { resolve } from "path";
import { io, Manager, Socket } from "socket.io-client";


export default class WebSocketConnection {
  private manager: Manager;
  private fingerSocket?: Socket;
  private path: string;
  private urlService: string;
  private socket!: Socket;
  constructor(urlService: string, path: string) {
    this.manager = new Manager(urlService, {
      autoConnect: true
    });
    // this.socket = io(`${urlService}/${path}`)

    this.path = path;
    this.urlService = urlService;
  }

  public getConnection(): Promise<Socket> {
    return new Promise((resolve, reject) => {
      try {
        this.socket = this.manager.socket(this.path)
        this.socket.on('connect', () => {
          // console.log(this.socket)
          // this.socket.emit(sendMessage, '=====> conectou o socket nessa imundicia de aplicacao dos infernos eu odeio programacao')
          resolve(this.socket);
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  // public getSocket(): Socket {
  //   return this.fingerSocket;
  // }

  public sendMessage(): void {
  }
}
