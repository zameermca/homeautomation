# Home Automation System

The Home Automation System is a proof of concept application that allows remote control of various devices in a home. It provides an API for clients to interact with a central home automation hub, which controls the devices.

## Functionality

The application provides the following features:

- Retrieving the list of registered devices
- Toggling the status of a specific device
- Undoing the previous action

## Technologies Used

- Typescript
- Node.js
- Express.js

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
git clone https://github.com/zameermca/homeautomation.git


2. Navigate to the project directory:
`cd homeautomation`


3. Install the dependencies:
`npm install`


4. Start the application:
`npm start`


The application will start running on `http://localhost:3000`.

## API Documentation

The application exposes the following APIs:

- **GET /devices**: Retrieve the list of registered devices.
- **POST /devices/:deviceId/toggle**: Toggle the status of a specific device identified by `deviceId`.
- **POST /undo**: Undo the previous action.

Make HTTP requests to the respective endpoints using tools like cURL or Postman to interact with the APIs.

## Example Usage

1. Retrieve the list of devices:
GET http://localhost:3000/devices


2. Toggle the status of a device with `deviceId` 1:
POST http://localhost:3000/devices/1/toggle


3. Undo the previous action:
POST http://localhost:3000/undo


## Assumptions and Notes

- There is no requirement to implement any security mechanism.
- There is no requirement to implement any multi-tenancy.
- Assume this is a single-user system.
- There is no requirement for a database. If you need persistence, do whatever is simplest, for example, in memory or a flat file.
- There is no requirement to implement any UI or Client.
- Simulate the Home Hub turning devices on/off by writing to a log or the console.
- Where there is ambiguity, appropriate assumptions have been made.

