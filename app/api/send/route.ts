import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const data = await resend.emails.send({
      from: "noreply@livens.co",
      to: params.email,
      subject: "Test Confirmation email",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
