'use strict';


const io =require('socket.io-client')
const host ='http://localhost:8080/caps'
const capsConnection= io.connect(host)


capsConnection.on('deliveredV',delivered)
function delivered(payload){
   
    console.log('thank you for delevering ', payload.orderID)
}