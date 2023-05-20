const http = require("http")
const models = require('./models');
const app = require("./app")

const mongoose = require('mongoose');



const server = http.createServer(app)

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb+srv://Godsheritage:Heritage4lyf@lyriccluster.meefjqj.mongodb.net/test';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;

mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));


const port = 4001


const startServer = () => {
  mongoose.connect(MONGO_URI);
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}... `);
  });
}

startServer()




 