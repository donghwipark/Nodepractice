const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('event one');
});
myEvent.on('event2', () => {
    console.log('event two');
});
myEvent.on('event2', () => {
    console.log('event two added');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', () => {
    console.log('add event three');
});
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
    console.log('event four');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('event five');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');
myEvent.removeListener('event2', () => {
    console.log('event 2 deleted');
});
console.log(myEvent.listenerCount('event2'))