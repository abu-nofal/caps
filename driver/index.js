"use strict";

const io = require("socket.io-client");
const host = "http://localhost:8080/caps";
const capsConnection = io.connect(host);

capsConnection.on("pickup", pickedUp);

function pickedUp(payload) {

  setTimeout(() => {
      
    console.log("Driver: picked up ");
    capsConnection.emit("pick", payload);
    capsConnection.emit("in-transit", payload);
  }, 1500);
  setTimeout(() => {
    console.log("Driver: delivered", payload["orderID"]);
    capsConnection.emit("delivered", payload);
  }, 3000);
}
