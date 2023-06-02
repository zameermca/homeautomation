import { Request, Response } from "express";
import { Hub } from "./hub";

export class DeviceController {
  private hub: Hub;

  constructor(hub: Hub) {
    this.hub = hub;
  }

  getDevices(req: Request, res: Response): void {
    const devices = this.hub.getDevices();
    res.json(devices);
  }

  toggleDevice(req: Request, res: Response): void {
    const deviceId = req.params.deviceId;
    this.hub.executeCommand(deviceId);
    const device = this.hub
      .getDevices()
      .find(device => device.getId() === deviceId);
    if (device) {
      res.json(device.toJSON());
    } else {
      res.status(404).json({ error: "Device not found" });
    }
  }
}
