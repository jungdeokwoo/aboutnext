import { MongoClient, ServerApiVersion } from "mongodb";

declare global {
  var _mongo: Promise<MongoClient>;
}

const url = process.env.DB_URL;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let connectDB: Promise<MongoClient>;

if (url) {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
      global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
  } else {
    connectDB = new MongoClient(url, options).connect();
  }
}
export { connectDB };
