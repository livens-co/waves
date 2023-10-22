import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse("Booking ID is required", { status: 400 });
    }

    const booking = await prismadb.booking.findUnique({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.log("[BOOKING_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
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
      price
    } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

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

    const booking = await prismadb.booking.updateMany({
      where: {
        id: params.id,
      },
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
        price
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.log("[BOOKING_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.id) {
      return new NextResponse("Booking ID is required", { status: 400 });
    }

    const booking = await prismadb.booking.deleteMany({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.log("[BOOKING_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
