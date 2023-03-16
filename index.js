import express from "express";
import { MongoClient } from "mongodb";
import cors from 'cors'

const PORT = 3232;

// const URL = "mongodb://127.0.0.1";
const URL = "mongodb+srv://mobdata:mobdata123@cluster0.mxmqnga.mongodb.net";
const client = new MongoClient(URL);
client.connect();

const app = express();

app.use(cors())

app.get("/", function (request, response) {
  response.send("Hello");
});

app.post("/mobData", express.json() ,async function (request, response) {
  const data = request.body
  const mobData = await client.db('React_tiny').collection('React_tiny_data').insertMany(data)
  response.send(mobData);
});

app.get("/data",async function (request, response) {
  const data =await client.db("React_tiny").collection("React_tiny_data").find({}).toArray();

  response.send(data)
});

app.listen(PORT, () => console.log(`Server started in PORT ${PORT}`));
