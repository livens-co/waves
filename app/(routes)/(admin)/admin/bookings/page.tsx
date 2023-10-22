import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { BookingColumn } from "./components/columns";
import { BookingClient } from "./components/client";



const BookingsPage = async () => {
  const bookings = await prismadb.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBookings: BookingColumn[] = bookings.map((item) => ({
    id: item.id,
    email: item.email,
    firstName: item.firstName,
    lastName: item.lastName,
    date: format(item.date, "ccc, dd.MM.yyyy."),
    destination: item.destination,
    size: item.numberOfPeople,
    paid: item.paid,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BookingClient data={formattedBookings} />
      </div>
    </div>
  );
};

export default BookingsPage;
