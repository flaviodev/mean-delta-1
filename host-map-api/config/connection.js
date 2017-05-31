const db = require('./db');
const mongoose = require('mongoose');

function MongoDBConnection() {
    this.connect = connect;

    return this;
}

function connect() {
    console.log('Conectando ao MongoDB');

    mongoose.connect(getUrlConnection(), (err) => {
        if (err) throw err;

        console.log('Conectado ao MongoDB!!!');
    });
}

function getUrlConnection() {
    return 'mongodb://'
        + db.usuario + ':'
        + db.senha
        +'@ds155411.mlab.com:55411/mean-delta-fdsdev';
}

module.exports = MongoDBConnection();