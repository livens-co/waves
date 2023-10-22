import getBooking from '@/actions/get-booking'
import './style.scss'

interface BookingDetailsPageProps {
  params: {
    id: string
  }
}

const BookingDetailsPage: React.FC<BookingDetailsPageProps> = async({params}) => {
  const booking = await getBooking(params.id)

  if (!booking) {
    return null;
  }


  return (
    <div>
      <h1>{booking?.destination}</h1>
    </div>
  )
}

export default BookingDetailsPage