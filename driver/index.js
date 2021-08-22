'use strict';

const events = require('../events');
require('../vendor/index')
events.on('InTransi',Intransit)

function Intransit(payload){

    let order={
        event:'In-transi',
        time:new Date().toISOString(),
        payload
    }
    console.log('Event', order)
    
setTimeout(()=>{
    console.log('Driver: picked up ',payload['orderID']);
   
},1000)


// events.emit('in-transi',payload)

setTimeout(()=>{
    console.log('delivered');
    events.emit('delivered',payload)
},3000)
    
}





