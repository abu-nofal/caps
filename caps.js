'use strict'
const events=require('./events')
const faker=require('faker')
require('dotenv').config()

require('./vendor/index')
// require('./driver/index')

let payload={
    store: process.env.STORE,
    orderID:faker.datatype.uuid() ,
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
}
// console.log(payload['orderID'])

setTimeout(()=>{
    events.emit('pick',payload)
},5000)
