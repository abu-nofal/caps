'use strict';

require('../driver/index')
const events = require('../events');

events.on('pickup',pickedUp)
events.on('delivered',delivered)
function pickedUp(payload){
    let order={
        event:'pickup',
        time:new Date(),
        payload
    }
    console.log('Event', order)
    
    events.emit('InTransi',payload)
}


function delivered(payload){
    let order={
        event:'delivered',
        time:new Date(),
        payload
    }
    console.log('Event', order)
console.log('thank you')
}