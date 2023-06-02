import express from "express";
import { Device } from "./device";
import { Hub } from "./hub";
import { DeviceController } from "./deviceController";
import { HubService } from "./hubService";

const app = express();
const hub = new Hub();

// Register devices
const device1 = new Device("1", "Living Room Light");
const device2 = new Device("2", "Garage Door");
const device3 = new Device("3", "Dishwasher");
hub.registerDevice(device1);
hub.registerDevice(device2);
hub.registerDevice(device3);

// Create instances of controller and service
const deviceController = new DeviceController(hub);
const hubService = new HubService(hub);

// Middleware to parse JSON body
app.use(express.json());

// API routes
app.get("/devices", deviceController.getDevices.bind(deviceController));
app.post(
  "/devices/:deviceId/toggle",
  deviceController.toggleDevice.bind(deviceController)
);
app.post("/undo", hubService.undoLastCommand.bind(hubService));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
