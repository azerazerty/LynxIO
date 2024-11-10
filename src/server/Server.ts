import { EventEmitter } from "events";
import { SomeSharedType } from "../types/common";

export class Server extends EventEmitter {
  private clients: Map<string, SomeSharedType>;

  constructor() {
    super();
    this.clients = new Map();
  }

  public start(): void {
    console.log("Server started...");
    // Initialization logic here
  }

  public addClient(id: string, clientData: SomeSharedType): void {
    this.clients.set(id, clientData);
  }
}
