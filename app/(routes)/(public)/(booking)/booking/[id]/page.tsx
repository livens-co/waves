import getBooking from "@/actions/get-booking";
import "./style.scss";
import Image from "next/image";
import { notFound } from "next/navigation";
import { parseISO } from "date-fns";
import { utcToZonedTime, format as tzFormat } from "date-fns-tz";

interface BookingDetailsPageProps {
  params: {
    id: string;
  };
}

export const revalidate = 3;

const BookingDetailsPage: React.FC<BookingDetailsPageProps> = async ({
  params,
}) => {
  const booking = await getBooking(params.id);

  if (!booking) {
    notFound();
  }

  const isoDate = booking.date;
  const dateObj = parseISO(isoDate);
  const timeZone = "Europe/Berlin";
  const zonedDate = utcToZonedTime(dateObj, timeZone);
  const formattedDate = tzFormat(zonedDate, "cccc, dd.MM.yyyy", { timeZone });

  return (
    <div className="bookingDetailsPage">
      <header>
        <div className="backgroundImage">
          <Image
            src="/assets/homepageHeader.jpeg"
            alt="Waves&more"
            height={400}
            width={1400}
          />
        </div>
        <div className="backgroundOverlay" />
        <div className="bookingDetailsContainer">
          <h1>Booking details</h1>
          <div className="infoContainer">
            <h2>Contact information</h2>
            <p>
              {booking.firstName} {booking.lastName}
            </p>
            <p>{booking.phone}</p>
            <p>{booking.email}</p>
          </div>
          <div className="infoContainer">
            <h2>Trip details</h2>
            <p>
              <span>Destination: </span>
              {booking.destination}
            </p>
            <p>
              <span>Date: </span>
              {formattedDate}
            </p>
            <p>
              <span>Group size: </span>
              {booking.numberOfPeople}
            </p>
          </div>
          <div className="infoContainer">
            <h2>Notes</h2>
            <p>{booking.userNotes}</p>
          </div>
        </div>
        <div className="bookingHeaderText">
          <p>
            Prepare for the <span>adventure</span> of a <span>lifetime.</span>
          </p>
        </div>
      </header>
    </div>
  );
};

export default BookingDetailsPage;
