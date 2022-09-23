import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "post") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://fatma://omabdo2020@cluster0.cn8op7e.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "meetup inserted" });
  }
}
export default handler;
