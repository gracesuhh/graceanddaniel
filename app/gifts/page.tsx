import Navigation from '../components/Navigation'
import Image from 'next/image'
import './gifts.css'

export default function GiftsPage() {
  return (
    <>
      <Navigation />
      <main className="gifts-page">
        <div className="container">
          <section className="section">
            <h1 className="page-title">Gifts</h1>
            
            <div className="gifts-content">
              <div className="gifts-text-wrapper">
                <p className="gifts-intro">
                  Your presence is truly the best gift we could ask for. We are so grateful for your 
                  love and support and truly feel we already have everything we need. As such, we will 
                  not be having a traditional registry.
                </p>
                <p className="gifts-message">
                  If you feel inclined, a contribution toward our future together would mean so much to us. 
                  Most importantly, we are simply excited to celebrate this special day with you.
                </p>
                
                <div className="payment-info">
                  <h3>Venmo or Zelle</h3>
                  <p className="payment-details">Grace Suh</p>
                  <p className="payment-details">714-335-3622</p>
                </div>
              </div>

              <div className="gifts-images">
                <div className="gift-image-wrapper">
                  <Image
                    src="/photos/gifts.jpg"
                    alt="Gifts"
                    width={400}
                    height={500}
                    className="gift-image"
                  />
                </div>
                <div className="gift-image-wrapper">
                  <Image
                    src="/photos/gifts2.jpg"
                    alt="Gifts"
                    width={400}
                    height={500}
                    className="gift-image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

