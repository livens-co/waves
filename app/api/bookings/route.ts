import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      date,
      phone,
      destination,
      numberOfPeople,
      paid,
      userNotes,
      adminNotes,
      price,
    } = body;

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
        adminNotes,
        price,
      },
    });

    const bookingId = booking.id;

    return NextResponse.json({ bookingId });
  } catch (error) {
    console.log("[BOOKINGS_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    const bookings = await prismadb.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.log("[BOOKINGS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
