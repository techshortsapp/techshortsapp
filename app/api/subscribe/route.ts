import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// Global MongoDB client cache for hot reloads (for dev environments)
let cachedClient: MongoClient | null = null;

const uri = process.env.MONGODB_URI!;
const options = {};

async function getClient() {
  if (!cachedClient) {
    const client = new MongoClient(uri, options);
    await client.connect();
    cachedClient = client;
  }
  return cachedClient;
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const client = await getClient();
    const db = client.db("techshorts");
    const collection = db.collection("subscribers");

    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Already subscribed." }, { status: 200 });
    }

    await collection.insertOne({ email, subscribedAt: new Date() });

    return NextResponse.json({ message: "Subscription successful." }, { status: 200 });
  } catch (err: any) {
    console.error("❌ Subscription error:", err.message || err);
    return NextResponse.json({ error: "Server error. Try again later." }, { status: 500 });
  }
}
