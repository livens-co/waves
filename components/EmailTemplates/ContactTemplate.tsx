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
  <div>
    <h1>Welcome, {firstName}!</h1>
    <ul>
      <li>
        {firstName} {lastName}
      </li>
      <li>{email}</li>
      <li>{phone}</li>
      <li>{destination}</li>
      <li>{date}</li>
      <li>{numberOfPeople}</li>
      <li>{userNotes}</li>
      <li>{bookingId}</li>
    </ul>
    <p>
      You can see your booking details on{" "}
      <a href={`https://waves-more.com/booking/${bookingId}`}>this link</a>.
    </p>
  </div>
);
