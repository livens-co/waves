import axios from "axios";

interface BookingData {
  destination: string;
  numberOfPeople: number;
  date: Date;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userNotes: string;
}

const createContactMe = async (
  bookingData: BookingData
): Promise<{ bookingId: string }> => {
  try {
    const response = await axios.post("/api/bookings", bookingData);

    if (response.status === 200) {
      return { bookingId: response.data.bookingId };
    }
    return { bookingId: "" };
  } catch (error) {
    console.error("Booking creation failed:", error);
    throw error;
  }
};

export { createContactMe };
