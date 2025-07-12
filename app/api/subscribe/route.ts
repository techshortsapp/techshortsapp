import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("techshorts");
    const collection = db.collection("subscribers");

    // Check if already subscribed
    const existing = await collection.findOne({ email: email.toLowerCase() });

    if (existing) {
      return NextResponse.json({ message: "You're already subscribed." }, { status: 200 });
    }

    // Save email with timestamp
    await collection.insertOne({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
    });

    return NextResponse.json({ message: "Subscribed successfully!" }, { status: 201 });
  } catch (error) {
    console.error("[Subscribe Error]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
