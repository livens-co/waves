import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  const {
    numberOfPeople, 
    destination,
    date,
    firstName,
    lastName,
    email,
    phone,
    userNotes,
    paid,
  } = await req.json();

  if (!firstName) {
    return new NextResponse("First name is required", { status: 400 });
  }

  if (!lastName) {
    return new NextResponse("Last name is required", { status: 400 });
  }

  if (!email) {
    return new NextResponse("Email is required", { status: 400 });
  }

  if (!date) {
    return new NextResponse("Date is required", { status: 400 });
  }

  if (!phone) {
    return new NextResponse("Phone is required", { status: 400 });
  }

  if (!destination) {
    return new NextResponse("Destination is required", { status: 400 });
  }

  if (!numberOfPeople) {
    return new NextResponse("Number of people is required", { status: 400 });
  }

  const booking = await prismadb.booking.create({
    data: {
      firstName,
      lastName,
      email,
      date,
      phone,
      destination, 
      numberOfPeople,
      paid,
      userNotes,
    },
  });

  const bookingId = booking.id;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: process.env.STRIPE_PRODUCT_PRICE_ID,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/canceled`,
    metadata: {
      bookingId,
    },
  });

  return NextResponse.json(
    { url: session.url },
    {
      headers: corsHeaders,
    }
  );
}
