import * as React from "react";


interface ConfirmationTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  date: string;
  numberOfPeople: number;
  userNotes: string;
  bookingId: string;
}

export const ConfirmationTemplate: React.FC<
  Readonly<ConfirmationTemplateProps>
> = ({
  firstName,
  lastName,
  email,
  phone,
  destination,
  date,
  numberOfPeople,
  userNotes,
  bookingId,
}) => (
  <div
    style={{
      width: "100%",
      padding: "2rem",
    }}
  >
    {/* <img
      src="https://waves-more.com/_next/image?url=%2Fassets%2Flogo.webp&w=640&q=75"
      alt="Waves&more"
      style={{ height: "3rem", marginBottom: "2rem" }}
    /> */}
    <div>
      <p style={{ marginBottom: "1rem" }}>Dear {firstName},</p>
      <p style={{ marginBottom: "1rem" }}>
        We are delighted to confirm your booking with us. A deposit has been
        charged to your card. Furthermore, our staff will be in touch with you
        for further details.
      </p>

      <p style={{ marginBottom: "1rem" }}>
        You can review your booking details anytime by clicking on the following{" "}
        <a
          href={`https://waves-more.com/booking/${bookingId}`}
          style={{ textDecoration: "underline" }}
        >
          link
        </a>
        .{" "}
      </p>
      <p style={{ marginBottom: "1rem" }}>
        Thank you for choosing us, and we look forward to providing you with a
        memorable experience. If you have any questions or need further
        assistance, please don&apos;t hesitate to contact us.
      </p>
      <p style={{ marginBottom: "2rem" }}>
        Warm regards, <br />
        Waves & More Team
      </p>
      <p style={{ marginBottom: "1rem" }}>
        <h2 style={{ marginBottom: "0.5rem", color: "#b2d6e3" }}>
          Booking information:
        </h2>
        <ul style={{ marginBottom: "1rem" }}>
          <li>
            <span>Name: </span>
            {firstName} {lastName}
          </li>
          <li>
            <span>Email: </span>
            {email}
          </li>
          <li>
            <span>Phone: </span>
            {phone}
          </li>
          <li>
            <span>Tour: </span>
            {destination}
          </li>
          <li>
            <span>Date: </span>
            {date}
          </li>
          <li>
            <span>Number of people: </span>
            {numberOfPeople}
          </li>
          <li>
            <span>Special Requests: </span>
            {userNotes}
          </li>
        </ul>
        <p>
          <span>Booking ID: </span> {bookingId}
        </p>
      </p>
    </div>
  </div>
);
