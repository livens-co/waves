import Image from "next/image";
import Link from "next/link";

import "../style.scss";

const SoltaSojourn = () => {
  return (
    <div className="seafarisPage">
      <header>
        <div className="logo">
          <Image
            src="/assets/logo.webp"
            alt="Waves & more"
            width={200}
            height={200}
          />
        </div>
        <h1>Šolta Sojourn</h1>

        <div className="backgroundImage">
          <Image
            src="/assets/3-islands.webp"
            width={1400}
            height={650}
            alt="3 Islands"
          />
          <div className="imageOverlay" />
        </div>
      </header>
      <div className="quote">
        <h1>
          One Day, Three Islands,
          <br /> <span>Endless</span> Adventure
        </h1>
        <Link href="/booking">Book now</Link>
      </div>
      <div className="tripImages">
        <div className="tripImage">
          <Image
            src="https://media-private.canva.com/MADatyWyzUo/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231013T182829Z&X-Amz-Expires=87232&X-Amz-Signature=ca7d01dcc68d5a922b17926950414671776240ae6902de5be22c4114d07c8996&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2014%20Oct%202023%2018%3A42%3A21%20GMT"
            width={400}
            height={400}
            alt="Hvar"
          />
          <div className="imageOverlay" />
          <h1>Hvar</h1>
        </div>
        <div className="tripImage">
          <Image
            src="https://media-private.canva.com/MADAXQFaFLc/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231014T134652Z&X-Amz-Expires=19958&X-Amz-Signature=159ae1e36cff7c4009c9068e6165fc7543f08ef0363439565eaab8b3b5baa424&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2014%20Oct%202023%2019%3A19%3A30%20GMT"
            width={400}
            height={400}
            alt="Brač"
          />
          <div className="imageOverlay" />
          <h1>Brač</h1>
        </div>
        <div className="tripImage">
          <Image
            src="https://media-private.canva.com/J_iA0/MAEJGyJ_iA0/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231015%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231015T011027Z&X-Amz-Expires=89140&X-Amz-Signature=31c4cc52992862cf06b9a82f88157f33cc74ccd2aee8fbc89d32ee67b9fb3bc9&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2016%20Oct%202023%2001%3A56%3A07%20GMT"
            width={400}
            height={400}
            alt="Vis"
          />
          <div className="imageOverlay" />
          <h1>Vis</h1>
        </div>
      </div>
      <div className="tripDescription">
        <div className="tripContainer">
          <div className="text">
            <h1>
              Šolta&apos;s <br />
              Olive Embrace
            </h1>
            <p>
              Set foot on Šolta, an island celebrating the timeless dance
              between nature and culture. The journey begins at Maslenica, where
              olive groves stretch as far as the eye can see. This verdant
              expanse is not just a sight to behold but a proud testament to
              Šolta&apos;s rich agricultural heritage. Each olive tree, with its
              gnarled branches and silver-green leaves, narrates tales of
              generations dedicated to nurturing the land and reaping its
              bounties.
            </p>
          </div>
          <div className="imagesR">
            <div className="image1">
              <Image
                src="https://media-private.canva.com/K9Y_k/MAEC98K9Y_k/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231019T173808Z&X-Amz-Expires=21679&X-Amz-Signature=c8630a231d60bfdeb446e56377dde832f5d4a87abea34ccca5ba0ccbd2606823&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Oct%202023%2023%3A39%3A27%20GMT"
                fill
                alt=""
              />
            </div>
            <div className="image2">
              <Image
                src="https://media-private.canva.com/MABnC1Jmgzg/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231019T065128Z&X-Amz-Expires=61282&X-Amz-Signature=fcc349bde4d9a5e17163724de4207a1d4e0b3f55d49e2a0f2b2ee65c7c8ddb26&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Oct%202023%2023%3A52%3A50%20GMT"
                fill
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="tripContainer">
          <div className="imagesL">
            <div className="image1">
              <Image
                src="https://media-private.canva.com/K9Y_k/MAEC98K9Y_k/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231019T173808Z&X-Amz-Expires=21679&X-Amz-Signature=c8630a231d60bfdeb446e56377dde832f5d4a87abea34ccca5ba0ccbd2606823&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Oct%202023%2023%3A39%3A27%20GMT"
                fill
                alt=""
              />
            </div>
            <div className="image2">
              <Image
                src="https://media-private.canva.com/MABnC1Jmgzg/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231019T065128Z&X-Amz-Expires=61282&X-Amz-Signature=fcc349bde4d9a5e17163724de4207a1d4e0b3f55d49e2a0f2b2ee65c7c8ddb26&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Oct%202023%2023%3A52%3A50%20GMT"
                fill
                alt=""
              />
            </div>
          </div>
          <div className="text">
            <h1>
              Villages and <br />
              Vestiges of Time
            </h1>
            <p>
              From the olive heartland, the vacation takes you to the
              picturesque village of Stomorska. Time seems to slow here as you
              wander through narrow lanes, past stone houses and friendly locals
              who wear their island pride on their sleeves. But Šolta&apos;s
              tales aren&apos;t limited to its living populace. The ancient
              ruins of Nečijam whisper stories of civilisations long gone, each
              brick and relic echoing a past rich in history and intrigue.
            </p>
          </div>
        </div>
        <div className="tripContainer">
          <div className="text">
            <h1>Bays of Serenity</h1>
            <p>
              As the journey winds down, the allure of the sea beckons once
              more. The aptly named Lonely Paradise stands true to its moniker,
              offering solace to souls seeking quiet beach moments. The gentle
              lapping of waves and the distant call of seabirds form the perfect
              backdrop for introspection. And as a fitting finale, the serene
              bay of Šešula extends an invitation. With its turquoise waters and
              tranquil ambience, it&apos;s a haven where one can truly relax,
              reflect, and revel in the untouched beauty of Šolta.
            </p>
          </div>
          <div className="imagesR">
            <div className="image1">
              <Image
                src="https://media-private.canva.com/K9Y_k/MAEC98K9Y_k/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231019T173808Z&X-Amz-Expires=21679&X-Amz-Signature=c8630a231d60bfdeb446e56377dde832f5d4a87abea34ccca5ba0ccbd2606823&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Oct%202023%2023%3A39%3A27%20GMT"
                fill
                alt=""
              />
            </div>
            <div className="image2">
              <Image
                src="https://media-private.canva.com/MABnC1Jmgzg/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20231019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231019T065128Z&X-Amz-Expires=61282&X-Amz-Signature=fcc349bde4d9a5e17163724de4207a1d4e0b3f55d49e2a0f2b2ee65c7c8ddb26&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Oct%202023%2023%3A52%3A50%20GMT"
                fill
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tripItinerary">
        <h1>Seafari outline</h1>
        <div className="grid">
          <div className="gridItem">
            <span>10:00</span>
            <p>Departure, Split</p>
          </div>

          <div className="gridItem">
            <span>11:30</span>
            <p>Visiting island & town Vis</p>
          </div>

          <div className="gridItem">
            <span>13:30</span>
            <p>Swimming & snorkeling at Pakleni islands</p>
          </div>

          <div className="gridItem">
            <span>15:00</span>
            <p>Visiting island & town Hvar</p>
          </div>

          <div className="gridItem">
            <span>17:00</span>
            <p>Brač swimming in a bay Maslinovica</p>
          </div>

          <div className="gridItem">
            <span>18:30</span>
            <p>Return to Split</p>
          </div>
          <div className="line" />
        </div>
      </div>
      <div className="cta">Grab friends and set sail</div>
      <div className="moreTrips">
        <h2>Simmilar experiences</h2>
        <div className="carousell">trips</div>
        <Link href="/">Explore more</Link>
      </div>
    </div>
  );
};

export default SoltaSojourn;
