
import Link from 'next/link'
import './style.scss'

const Discover = () => {
  return (
    <div className="discover">
          <div className="container">
            <p>
              Dive into a journey tailored by your aspirations, dreams, and
              senses.
            </p>
            <Link href="/" className="buttonInvert">
              Discover
            </Link>
          </div>
          <div className="container">
            <div className="images">imgs</div>
            <h2>
              Choose <br />
              best for your <br /> <span> vacation</span>
            </h2>
          </div>
        </div>
  )
}

export default Discover