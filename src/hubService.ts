import { Hub } from "./hub";

export class HubService {
  private hub: Hub;

  constructor(hub: Hub) {
    this.hub = hub;
  }

  undoLastCommand(): void {
    this.hub.undoLastCommand();
  }
}
