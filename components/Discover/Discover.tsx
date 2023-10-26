
import Link from 'next/link'
import './style.scss'
import Image from 'next/image'

const Discover = () => {
  return (
    <div className="discover">
          <div className="container">
            <p>
              Dive into a journey tailored by your aspirations, dreams, and
              senses.
            </p>
            <Link href="/tours" className="buttonInvert">
              Discover
            </Link>
          </div>
          <div className="imageContainer">
            <div className="images">
              <Image src='/assets/3img.png' alt='Discover' height={400} width={400}/>
            </div>
            <h2>
              Choose <br />
              best for your <br /> <span> vacation</span>
            </h2>
          </div>
        </div>
  )
}

export default Discover