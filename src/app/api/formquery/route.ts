import { NextResponse } from "next/server";
import client from "@/utils/mongoquery";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const db = client.db("daedstudios");
    const formData = await db.collection("form").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, data: formData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
