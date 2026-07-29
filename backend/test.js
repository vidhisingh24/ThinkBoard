import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://vidhiisingh2403_db_user:YOUR_PASSWORD@cluster0.dq3aojp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("✅ Connected successfully");
  await client.close();
} catch (err) {
  console.error(err);
}