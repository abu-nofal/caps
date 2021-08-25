'use strict';

const client = require('socket.io-client');
const host = "http://localhost:8000/caps";
const socket = client.connect(host);


socket.emit('get_all');

socket.on('order', payload=> {
  console.log("i got the order and i will deleverd it : ", payload)
  socket.emit('received', payload)

 

  setTimeout(() => {
    console.log("Driver: picked up ");
    socket.emit("in-transit", payload);
  }, 1500);
  setTimeout(() => {
    console.log("Driver: delivered", payload);
    socket.emit("delivered", payload);
  }, 3000);


})

// socket.on("pickedUp", pickedUp);

//   function pickedUp(payload) {

//   setTimeout(() => {
//     console.log("Driver: picked up ");
//     socket.emit("in-transit", payload);
//   }, 1500);
//   setTimeout(() => {
//     console.log("Driver: delivered", payload["orderID"]);
//     socket.emit("delivered", payload);
//   }, 3000);
// }