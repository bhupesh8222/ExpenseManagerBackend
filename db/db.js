const mongoose = require('mongoose');
// const process = require('process')
require('dotenv').config();

const DBConnection = process.env.DATABASE_URL;
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(DBConnection, {
            dbName: 'expense',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error', error);
    }
}

module.exports = { db }