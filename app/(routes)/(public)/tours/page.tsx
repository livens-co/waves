import './style.scss'

import data from '../../../../data/data.js'
import Link from 'next/link'

const ToursPage = () => {
  return (
    <div className='toursPage'>
      {data.tours.map(tour=>(
        <Link href={`/tours/${tour.href}`} key={tour.href}>{tour.name}</Link>
      ))}
    </div>
  )
}

export default ToursPage