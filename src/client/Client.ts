import { EventEmitter } from "events";

export class Client extends EventEmitter {
  private id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  public connect(): void {
    console.log(`Client ${this.id} connected...`);
    // Connection logic here
  }
}
