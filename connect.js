const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'school';
const client = new MongoClient(url);

async function dbconnect() {
    try {
        let result = await client.connect();
        const db = result.db(database);  // Declared db using const
        return db.collection('student');
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbconnect;