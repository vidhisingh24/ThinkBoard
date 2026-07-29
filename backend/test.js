import { MongoClient } from "mongodb";


const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("✅ Connected successfully");
  await client.close();
} catch (err) {
  console.error(err);
}