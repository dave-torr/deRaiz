const {MongoClient} = require('mongodb');
import nextConnect from 'next-connect';

const client = new MongoClient(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('DRaiz');
  return next();
}

const databaseMiddleware = nextConnect();

databaseMiddleware.use(database);

export default databaseMiddleware;