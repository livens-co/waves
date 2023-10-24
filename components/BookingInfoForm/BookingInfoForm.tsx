"use client";

import { useGlobalContext } from "@/app/context/store";
import { useEffect } from "react";

interface BookingInfoFormProps {
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingInfoForm: React.FC<BookingInfoFormProps> = ({setValid}) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    userNotes,
    setUserNotes,
    destination
  } = useGlobalContext();

  useEffect(() => {
    const isValid = Object.keys(firstName).length > 0 &&
    Object.keys(lastName).length > 0 &&
    Object.keys(email).length > 0 &&
    Object.keys(phone).length > 0 &&
    Object.keys(destination).length > 0;
    setValid(isValid);
  }, [firstName, lastName, email, phone, setValid, destination]);

  return (
    <form>
      <div className="row">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="row">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="row">
        {" "}
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="row">
        {" "}
        <textarea
          name=""
          rows={3}
          placeholder="Notes"
          value={userNotes}
          onChange={(e) => setUserNotes(e.target.value)}
        />
      </div>
    </form>
  );
};

export default BookingInfoForm;
