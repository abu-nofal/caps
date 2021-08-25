'use strict';

const client = require('socket.io-client');
const host = "http://localhost:8000/caps";
const socket = client.connect(host);
const faker = require("faker");


setInterval(() => {
 const payload={
   store : process.env.STORE,
    orderID :faker.datatype.uuid(),
    customer : faker.name.findName(),
    address : faker.address.streetAddress()
  }
 
  socket.emit('new_Order', payload);
  socket.emit('pickUp', payload);
  }, 5000);

socket.on('added',payload=>{
  console.log('thank you for adding to queue ', payload.orderID)
}) 
socket.on('deliveredV',delivered)
function delivered(payload){
   
    console.log('thank you for delevering ', payload)
}