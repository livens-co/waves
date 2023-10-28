import { ConfirmationTemplate } from "@/components/EmailTemplates/ConfirmationTemplate";
import { ContactTemplate } from "@/components/EmailTemplates/ContactTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { parseISO } from "date-fns";
import { utcToZonedTime, format as tzFormat } from "date-fns-tz";

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

    

   // Specify the time zone
   const timeZone = "Europe/Berlin";

   // Parse the date string into a Date object using parseISO
   const dateObj = parseISO(date);

   // Convert to the desired time zone
   const zonedDate = utcToZonedTime(dateObj, timeZone);

   // Format the date as needed
   const formattedDate = tzFormat(zonedDate, "cccc, dd.MM.yyyy", { timeZone });


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
    return "Booking Request";
  } else if (emailType === "stripe") {
    return "Booking Confirmation";
  }
  throw new Error("Invalid emailType");
}
