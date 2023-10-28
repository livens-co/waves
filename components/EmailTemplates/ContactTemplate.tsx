import * as React from "react";

interface ContactTemplateProps {
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

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
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
        Thank you for considering us for your booking. Your request has been
        received, and we are excited to assist you further. Our team will reach
        out to you shortly for additional details.
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
        We appreciate your interest in our services, and we look forward to the
        opportunity to serve you. If you have any questions or require immediate
        assistance, please feel free to contact us.
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
