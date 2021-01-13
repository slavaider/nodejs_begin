const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} - ${Date(Date.now())}`);
    }
}

const logger = new Logger();

logger.on('message', (message) => {
    console.log(message)
})

logger.log('Hi!')
