import { ConfirmationTemplate } from "@/components/EmailTemplates/ConfirmationTemplate";
import { ContactTemplate } from "@/components/EmailTemplates/ContactTemplate";
import { format, parseISO } from "date-fns";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      destination,
      date,
      numberOfPeople,
      userNotes,
      emailType,
      bookingId,
    } = await req.json();

    // const formattedDate = new Date(date).toLocaleDateString("en-DE", {
    //   weekday: "short",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // });

    // Parse the date string into a Date object using parseISO
    const parsedDate = parseISO(date);

    // Format the date as needed
    const formattedDate = format(parsedDate, "ccc, dd.MM.yyyy.");

    let reactElement;

    if (emailType === "contact") {
      reactElement = ContactTemplate({
        firstName,
        lastName,
        email,
        phone,
        destination,
        date: formattedDate,
        
        numberOfPeople,
        userNotes,
        bookingId,
      }) as React.ReactElement;
    } else if (emailType === "stripe") {
      reactElement = ConfirmationTemplate({
        firstName,
        lastName,
        email,
        phone,
        destination,
        date: formattedDate,
      
        numberOfPeople,
        userNotes,
        bookingId,
      }) as React.ReactElement;
    } else {
      throw new Error("Invalid emailType");
    }

    const data = await resend.emails.send({
      from: "Waves&more <noreply@waves-more.com>",
      to: [email],
      subject: getEmailSubject(emailType),
      react: reactElement,
    });

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.log("Email sending failed:", error);
    return NextResponse.json({ error: "Email sending failed" });
  }
}

function getEmailSubject(emailType: string): string {
  if (emailType === "contact") {
    return "Contact Confirmation Email";
  } else if (emailType === "stripe") {
    return "Payment Confirmation Email";
  }
  throw new Error("Invalid emailType");
}
