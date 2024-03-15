const event = require('events');
const myevent = new event();

myevent.on('newEvent',() => {
    console.log('hello');
});

myevent.emit('newEvent');