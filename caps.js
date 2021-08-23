"use strict";

const port = process.env.PORT || 8080; 
const io = require("socket.io")(port);

const capsSystem = io.of("/caps");
require("dotenv").config();

// for home
io.on("connecting", (socket) => {
  console.log("connectied ", socket.id);
});

const faker = require("faker");

class payload {
  constructor() {
    this.store = process.env.STORE;
    this.orderID = faker.datatype.uuid();
    this.customer = faker.name.findName();
    this.address = faker.address.streetAddress();
  }
}

// for caps
capsSystem.on("connection", (socket) => {
  
    console.log("a new one have connectied to caps route", socket.id);

  // pickup 
  socket.on("pick", pickup);
  function pickup(payload) {
    let order = {
      event: "pickup",
      time: new Date(),
      payload,
    };
    console.log("Event", order);
  }
  // in-transit
  socket.on("in-transit", inTransit);
  function inTransit(payload) {
    let order = {
      event: "in-transit",
      time: new Date(),
      payload,
    };
    console.log("Event", order);
  }

  // delivered
  socket.on("delivered", delivered);
  function delivered(payload) {
    let order = {
      event: "delivered",
      time: new Date(),
      payload,
    };
    console.log("Event", order);
  }





  setInterval(() => {
    let newPaload = new payload();
    capsSystem.emit("pickup", newPaload);
    capsSystem.emit("deliveredV", newPaload);
  }, 5000);
});
