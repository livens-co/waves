import { format, parseISO } from "date-fns";
import { utcToZonedTime, format as tzFormat } from "date-fns-tz";

import prismadb from "@/lib/prismadb";
import { BookingColumn } from "./components/columns";
import { BookingClient } from "./components/client";

const BookingsPage = async () => {
  const bookings = await prismadb.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const timeZone = "Europe/Berlin";

  const formattedBookings: BookingColumn[] = bookings.map((item) => {
    const dateObj = parseISO(item.date);
    const zonedDate = utcToZonedTime(dateObj, timeZone);
    const formattedDate = tzFormat(zonedDate, "cccc, dd.MM.yyyy", { timeZone });

    return {
      id: item.id,
      email: item.email,
      firstName: item.firstName,
      lastName: item.lastName,
      date: formattedDate,
      destination: item.destination,
      size: item.numberOfPeople,
      paid: item.paid ? "Yes" : "No",
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    };
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BookingClient data={formattedBookings} />
      </div>
    </div>
  );
};

export default BookingsPage;
