'use strict'


const faker=require('faker')
require('dotenv').config();
const io = require("socket.io-client");
const host = "http://localhost:8080/caps";
const capsConnection = io.connect(host);
const port = process.env.PORT || 8080;
const ioS = require("socket.io")(port);

const capsSystem = ioS.of("/caps");

describe('caps and ', () => {
  
  let payload={
    store: process.env.STORE,
    orderID:faker.datatype.uuid() ,
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
}

  it('pick ',()=>{
    expect( capsConnection.emit('pick',payload)).toBeTruthy();
  });

  it('in-transit',()=>{
  expect( capsConnection.emit('in-transit',payload)).toBeTruthy();
});


  it('delivered',()=>{
  expect( capsConnection.emit('delivered',payload)).toBeTruthy();
});


  it('pickup',()=>{
  expect( capsSystem.emit('pickup',payload)).toBeTruthy();
});


  it('deliveredV',()=>{
  expect( capsSystem.emit('deliveredV',payload)).toBeTruthy();
});


});