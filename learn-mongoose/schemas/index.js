const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect('mongodb://donghwipark:1Ehdgnl!1@localhost:27017/admin', {
            dbName: 'nodejs',
        }, (error) => {
            if (error) {
                console.log('MongoDB error', error);
            } else {
                console.log('Successfully linked to MongoDB');
            }
        });
        connect();
        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection Error', error)
        });
        mongoose.connection.on('disconnected', () => {
            console.error('Connection cut off, retrying connection');
            connect();
        });
        require('./user');
        require('./comment');
    }
}