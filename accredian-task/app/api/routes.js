import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Yahan tum logic likh sakte ho data database (Firebase/MongoDB) mein save karne ka
    console.log("New Lead Received:", data);

    return NextResponse.json({ message: "Success! We will contact you soon." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error processing request" }, { status: 500 });
  }
}