'use strict'
const events=require('./events')
const faker=require('faker')
require('dotenv').config()

require('./vendor/index')
// require('./driver/index')


// console.log(payload['orderID'])

class payload{
    constructor(){
        this.store= process.env.STORE;
        this.orderID=faker.datatype.uuid() ;
        this.customer= faker.name.findName();
        this.address= faker.address.streetAddress()
    }
}
setInterval(()=>{
    let newPaload=new payload
    events.emit('pickup',newPaload)
},5000)

// if we want one time we can use setTimeOut 

