import { Device } from "./device";

export class Hub {
  private devices: Map<string, Device>;
  private commandHistory: string[];

  constructor() {
    this.devices = new Map();
    this.commandHistory = [];
  }

  registerDevice(device: Device): void {
    this.devices.set(device.getId(), device);
  }

  executeCommand(command: string): void {
    const device = this.devices.get(command);
    if (device) {
      const prevState = device.getState();
      device.setState(!prevState);
      this.commandHistory.push(command);
      console.log(
        `Device ${device.getName()} turned ${device.getState() ? "on" : "off"}`
      );
    } else {
      console.log(`Device ${command} not found`);
    }
  }

  undoLastCommand(): void {
    const lastCommand = this.commandHistory.pop();
    if (lastCommand) {
      const device = this.devices.get(lastCommand);
      if (device) {
        const prevState = device.getState();
        device.setState(!prevState);
        console.log(
          `Undid last command: Device ${device.getName()} turned ${
            device.getState() ? "on" : "off"
          }`
        );
      } else {
        console.log(`Device ${lastCommand} not found`);
      }
    } else {
      console.log("No command to undo");
    }
  }

  getDevices(): Device[] {
    return Array.from(this.devices.values());
  }
}
