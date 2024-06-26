import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";
import axios from "axios";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const booking = await prismadb.booking.update({
      where: {
        id: session?.metadata?.bookingId,
      },
      data: {
        paid: true,
      },
    });

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/send`, {
        email: booking.email,
        firstName: booking.firstName,
        lastName: booking.lastName,
        phone: booking.phone,
        destination: booking.destination,
        date: booking.date,
        numberOfPeople: booking.numberOfPeople,
        userNotes: booking.userNotes,
        bookingId: booking.id,
        emailType: "stripe",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      return new NextResponse("Email sending failed", { status: 500 });
    }

    return new NextResponse("Email sent successfully", { status: 200 });
  }

  if (event.type === "checkout.session.async_payment_failed") {
    const booking = await prismadb.booking.delete({
      where: {
        id: session?.metadata?.bookingId,
      },
    });
    return new NextResponse("Booking canceled due to payment failure", {
      status: 200,
    });
  }
}
