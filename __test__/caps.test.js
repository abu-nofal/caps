'use strict'
require('../caps')
require('../driver/index')
require('../vendor/index')
const event=require('../events')
const faker=require('faker')
require('dotenv').config();



describe('caps ', () => {
  let consoleSpy;
  let payload={
    store: process.env.STORE,
    orderID:faker.datatype.uuid() ,
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
}

  beforeEach(() => {
     consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });


  test('test pick  ',  async() => {
     event.emit('pick', payload);
    
     await expect(consoleSpy).toHaveBeenCalled();
  });

  test('test In-transi  ',async() => {
    event.emit('InTransi', payload);

    await expect(consoleSpy).toHaveBeenCalled();
  });

  test('test delivered  ',async () => {
    event.emit('delivered', payload);
    
    await  expect(consoleSpy).toHaveBeenCalled();
  });
});