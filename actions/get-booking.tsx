import { Booking } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/bookings`;

const getBooking = async (id: string): Promise<Booking> => {
const res = await fetch(`${URL}/${id}`);

return res.json();
}

export default getBooking;
